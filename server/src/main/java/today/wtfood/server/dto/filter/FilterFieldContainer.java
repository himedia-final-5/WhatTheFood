package today.wtfood.server.dto.filter;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * {@link FilterField} 어노테이션을 그룹화 하는 컨테이너 어노테이션
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface FilterFieldContainer {

    /**
     * {@link FilterField} 어노테이션 배열
     *
     * @return {@link FilterField} 어노테이션 배열
     */
    FilterField[] value();

}
