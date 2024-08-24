package today.wtfood.server.dto.filter;

import java.lang.annotation.*;

/**
 * 필터링에 사용되는 필드임을 나타내는 어노테이션
 *
 * @implNote 어노테이션 확인은 {@link Filter#toSpecification} 에서 처리합니다.
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(FilterFieldContainer.class)
public @interface FilterField {

    /**
     * 필터 대상 이름 (기본값: 필드 이름)
     *
     * @return 필터 대상 이름
     */
    String value() default "";

    /**
     * 필터 타입
     *
     * @return 필터 타입
     */
    FilterType type() default FilterType.EQUALS;

}
