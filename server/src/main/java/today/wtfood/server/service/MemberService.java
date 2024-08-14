package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.member.MemberCreateRequest;
import today.wtfood.server.dto.member.MemberUpdateRequest;
import today.wtfood.server.entity.Member;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.ConflictException;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * 회원가입 처리
     *
     * @param requestData 회원가입 요청 정보
     * @return 생성된 회원의 ID
     */
    @Transactional(rollbackFor = Exception.class)
    public long createMember(MemberCreateRequest requestData) {
        return memberRepository.save(requestData.toEntity(passwordEncoder.encode(requestData.password()))).getId();
    }

    /**
     * 회원 목록 조회
     */
    public <T> Page<T> getMembers(Pageable pageable, Class<T> projectionType) {
        return memberRepository.findAllBy(pageable, projectionType);
    }

    /**
     * 회원 조회
     *
     * @param id 조회할 회원의 ID
     * @return 조회된 회원 정보
     * @throws NotFoundException 회원이 존재하지 않을 때 발생
     */
    public <T> T getMemberById(long id, Class<T> projectionType) {
        return memberRepository.findGenericById(id, projectionType)
                .orElseThrow(() -> new NotFoundException("회원 정보를 찾을 수 없습니다"));
    }

    /**
     * 회원 조회
     *
     * @param username 조회할 회원의 username
     * @return 조회된 회원 정보
     * @throws NotFoundException 회원이 존재하지 않을 때 발생
     */
    public <T> T getMemberByUsername(String username, Class<T> projectionType) {
        return memberRepository.findByUsername(username, projectionType)
                .orElseThrow(() -> new NotFoundException("회원 정보를 찾을 수 없습니다"));
    }

    /**
     * 유저네임 유효성 및 중복 검증
     *
     * @param username 검증할 유저네임
     * @throws BadRequestException 유저네임 형식이 올바르지 않은 경우 발생
     * @throws ConflictException   유저네임이 이미 사용중인 경우 발생
     */
    public void validateUsernameFormatAndUnique(String username) {
        if (!username.matches("^[a-zA-Z0-9_]{4,45}$")) {
            throw new BadRequestException("올바른 아이디 형식이 아닙니다", "username");
        }

        if (memberRepository.existsByUsername(username)) {
            throw new ConflictException("이미 사용중인 아이디입니다", "username");
        }
    }

    /**
     * 이메일 유효성 및 중복 검증
     *
     * @param email 검증할 이메일
     * @throws BadRequestException 이메일 형식이 올바르지 않은 경우 발생
     * @throws ConflictException   이메일이 이미 사용중인 경우 발생
     */
    public void validateEmailFormatAndUnique(String email) {
        if (!email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")) {
            throw new BadRequestException("올바른 이메일 형식이 아닙니다", "email");
        }

        if (memberRepository.existsByEmail(email)) {
            throw new ConflictException("이미 사용중인 이메일입니다", "email");
        }
    }

    /**
     * 회원 정보 변경
     *
     * @param memberId    변경할 회원의 ID
     * @param requestData 변경할 회원 정보
     */
    @Transactional(rollbackFor = Exception.class)
    public void updateMember(long memberId, MemberUpdateRequest requestData) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new NotFoundException("회원 정보를 찾을 수 없습니다"));

        member.setNickname(requestData.nickname());
        member.setPassword(passwordEncoder.encode(requestData.password()));
        member.setEmail(requestData.email());
        member.setIntroduce(requestData.introduce());
    }

    /**
     * 회원 삭제 처리
     *
     * @param memberId 삭제할 회원의 ID
     */
    @Transactional(rollbackFor = Exception.class)
    public void deleteMember(long memberId) {
        if (!memberRepository.existsById(memberId)) {
            throw new NotFoundException("회원 정보를 찾을 수 없습니다");
        }

        memberRepository.deleteById(memberId);
    }

}
