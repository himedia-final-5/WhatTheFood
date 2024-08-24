package today.wtfood.server.dto.filter;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.experimental.Delegate;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.jpa.domain.Specification;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

@Log4j2
public class Filter<T> implements Specification<T> {

    /**
     * 클래스에 선언된 필드에 대한 필터를 {@link Specification} 객체로 변환
     * <p>
     * 클래스에 선언된 필드 중 {@link FilterField} 어노테이션이 있는 필드를 찾아서 필터로 사용합니다.
     * {@link FilterField} 어노테이션을 여러개 지정한 경우 OR 조건으로 처리합니다.
     * 각 필드를 순회하며 필터를 생성하고, 생성된 필터를 AND 조건으로 연결하여 반환합니다.
     * 필드의 값이 null 이거나 빈 문자열인 경우 필터에 추가하지 않습니다.
     *
     * @implNote {@link Delegate} 어노테이션을 사용하여 {@link Specification} 인터페이스를 구현합니다.
     * @see FilterField
     */
    @Delegate
    public Specification<T> toSpecification() {
        log.warn("Converting to Specification");
        return (root, query, cb) -> {
            // 필터를 담을 리스트
            List<Predicate> predicates = new ArrayList<>();

            log.warn("Root: {}, Query: {}, CriteriaBuilder: {}", root, query, cb);

            // FilterField 어노테이션이 있는 필드를 찾아서 필터에 추가
            for (Field field : this.getClass().getDeclaredFields()) {
                FilterField[] annotations = field.getAnnotationsByType(FilterField.class);
                log.warn("Field: {}, Annotations: {}", field.getName(), annotations);

                // 하나의 필드에 여러 개의 FilterField 어노테이션이 있는 경우 OR 조건으로 처리
                List<Predicate> orPredicates = new ArrayList<>();
                for (FilterField annotation : annotations) {

                    // 필드 값이 null 이거나 빈 문자열인 경우 필터에 추가하지 않음
                    Object value = getFieldValue(field);
                    if (value == null || value instanceof String && ((String) value).isEmpty()) {
                        continue;
                    }

                    // 어노테이션과 필드 정보를 이용해 Predicate 생성
                    String name = getColumnName(annotation, field);
                    Predicate predicate = buildPredicate(root, cb, name, value, annotation.type());
                    log.warn("Predicate: {}", predicate);

                    // 생성된 Predicate 목록을 OR 조건으로 추가
                    orPredicates.add(predicate);
                }

                // OR Predicate 값이 존재하는 경우 AND 조건으로 추가
                if (!orPredicates.isEmpty()) {
                    predicates.add(cb.or(orPredicates.toArray(new Predicate[0])));
                    log.warn("OR Predicates: {}", orPredicates);
                }
            }

            // 생성된 Predicate 목록을 AND 조건으로 반환
            log.warn("Predicates: {}", predicates);
            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

    /**
     * 어노테이션과 필드 정보를 이용해 Predicate 생성
     *
     * @param root  Root 객체
     * @param cb    CriteriaBuilder 객체
     * @param name  필터 대상 이름
     * @param value 필터 조건 값
     * @param type  필터 타입
     * @return 생성된 Predicate 객체
     */
    private Predicate buildPredicate(
            Root<T> root,
            CriteriaBuilder cb,

            String name,
            Object value,
            FilterType type
    ) {
        return switch (type) {
            case EQUALS -> cb.equal(root.get(name), value);
            case LIKE -> cb.like(root.get(name), "%" + value + "%");
            // TODO: 나머지 필터 타입 구현
            default -> throw new IllegalArgumentException("아직 구현되지 않은 필터 타입입니다.");
        };
    }

    private Object getFieldValue(Field field) {
        try {
            boolean accessible = field.canAccess(this);
            field.setAccessible(true);
            Object value = field.get(this);
            field.setAccessible(accessible);

            return value;
        } catch (IllegalAccessException e) {
            return null;
        }
    }

    private String getColumnName(FilterField annotation, Field field) {
        return annotation.value().isEmpty() ? field.getName() : annotation.value();
    }

}
