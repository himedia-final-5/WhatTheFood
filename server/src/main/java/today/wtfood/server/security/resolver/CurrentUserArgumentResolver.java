package today.wtfood.server.security.resolver;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.MethodParameter;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import today.wtfood.server.dto.member.IMember;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.MemberService;

@Component
@RequiredArgsConstructor
public class CurrentUserArgumentResolver implements HandlerMethodArgumentResolver {

    private static final Logger log = LoggerFactory.getLogger(CurrentUserArgumentResolver.class);
    private final MemberService memberService;

    @Override
    public boolean supportsParameter(@NonNull MethodParameter parameter) {
        Class<?> parameterType = parameter.getParameterType();

        return parameter.getParameterAnnotation(CurrentUser.class) != null && (
                IMember.class.isAssignableFrom(parameterType) // IMember 인터페이스를 구현한 클래스
                || parameterType.equals(Member.class) // Member (entity)
                || parameterType.equals(String.class) // String (username)
                || parameterType.equals(Long.class) || parameterType.equals(long.class) // Long (userid)
        );
    }

    @Override
    public Object resolveArgument(
            @NonNull MethodParameter parameter,
            ModelAndViewContainer mavContainer,
            @NonNull NativeWebRequest webRequest,
            WebDataBinderFactory binderFactory
    ) {
        // 현재 사용자 정보를 가져옵니다.
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        // 사용자 정보가 없거나 String 타입(AnonymousUser)일 경우 null 을 반환합니다.
        if (principal == null || principal instanceof String) {
            return null;
        }

        // 사용자 정보를 파라미터 타입에 맞게 반환합니다.
        IMember userDetails = (IMember) principal;
        Class<?> parameterType = parameter.getParameterType();
        if (parameterType.equals(String.class)) {
            return userDetails.getUsername();
        }
        if (parameterType.equals(Long.class) || parameterType.equals(long.class)) {
            return userDetails.getId();
        }

        return memberService.getMemberByUsername(userDetails.getUsername(), parameterType);
    }
}