package today.wtfood.server.dto;

/**
 * 주어진 엔티티에 DTO 정보를 적용하는 인터페이스
 *
 * @param <E> DTO 정보가 적용될 엔티티 타입
 */
public interface EntityDto<E> {

    /**
     * DTO 정보를 엔티티에 적용
     *
     * @param entity 대상 엔티티
     * @return DTO 정보가 적용된 엔티티
     */
    E apply(E entity);

}
