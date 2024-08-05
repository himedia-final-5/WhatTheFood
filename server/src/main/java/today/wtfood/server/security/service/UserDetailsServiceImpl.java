package today.wtfood.server.security.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import today.wtfood.server.entity.Member;
import today.wtfood.server.repository.MemberRepository;

/**
 * 사용자 이름을 받아 데이터베이스에서 사용자 정보를 조회하고, UserDetails 객체로 반환하는 클래스
 * 스프링 시큐리티를 통해 자동으로 호출되고, 반환 값이 Principal 객체로 사용된다
 */
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final MemberRepository memberRepository;

    /**
     * 사용자 이름을 받아 데이터베이스에서 사용자 정보를 조회하고, UserDetails 객체로 반환
     *
     * @param username 사용자 이름
     * @return UserDetails 객체 {@link Member}
     * @throws UsernameNotFoundException 사용자 이름이 존재하지 않을 때 발생
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return memberRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username + " - User Not found"));
    }

}
