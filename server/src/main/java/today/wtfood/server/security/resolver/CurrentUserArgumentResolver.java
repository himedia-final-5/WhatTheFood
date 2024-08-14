package today.wtfood.server.security.resolver;

import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import today.wtfood.server.dto.member.IMember;
import today.wtfood.server.entity.Member;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.MemberService;

@Component
@RequiredArgsConstructor
public class CurrentUserArgumentResolver implements HandlerMethodArgumentResolver {

    private final MemberService memberService;

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        Class<?> parameterType = parameter.getParameterType();

        return parameter.getParameterAnnotation(CurrentUser.class) != null && (
                IMember.class.isAssignableFrom(parameterType) // IMember 인터페이스를 구현한 클래스
                || parameterType.equals(String.class) // String (username)
                || parameterType.equals(Long.class) || parameterType.equals(long.class) // Long (id)
        );
    }

    @Override
    public Object resolveArgument(
            @NonNull MethodParameter parameter,
            ModelAndViewContainer mavContainer,
            @NonNull NativeWebRequest webRequest,
            WebDataBinderFactory binderFactory
    ) {
        Class<?> parameterType = parameter.getParameterType();
        Member userDetails = (Member) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (parameterType.equals(Member.class)) {
            return userDetails;
        }
        if (parameterType.equals(String.class)) {
            return userDetails.getUsername();
        }
        if (parameterType.equals(Long.class) || parameterType.equals(long.class)) {
            return userDetails.getId();
        }

        return memberService.getMemberByUsername(userDetails.getUsername(), parameterType);
    }
}