package today.wtfood.server.security.annotation;

import today.wtfood.server.dto.member.IMember;
import today.wtfood.server.entity.Member;

import java.lang.annotation.*;

/**
 * 현재 인증된 사용자 정보를 파라미터로 주입받는 어노테이션
 * <ul
 * <li>{@link String} 파라미터에 사용하면 사용자의 아이디({@code username})를 주입받습니다.</li>
 * <li>{@link Long} 파라미터에 사용하면 사용자의 아이디({@code userid})를 주입받습니다.</li>
 * <li>{@link Member} 파라미터에 사용하면 사용자 엔티티 객체를 주입받습니다.</li>
 * <li>{@link IMember} 파라미터에 사용하면 해당하는 클래스 객체를 주입받습니다.</li>
 * </ul>
 *
 * @see today.wtfood.server.security.resolver.CurrentUserArgumentResolver
 */
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface CurrentUser {
}