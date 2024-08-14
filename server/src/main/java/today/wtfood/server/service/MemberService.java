package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.member.MemberCreateRequest;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.dto.member.MemberUpdateRequest;
import today.wtfood.server.entity.Member;
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
                .orElseThrow(() -> new NotFoundException("Invalid member ID"));
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
                .orElseThrow(() -> new NotFoundException("Invalid member username"));
    }


    /**
     * username 중복 체크
     *
     * @param username 중복 체크할 username
     * @return 중복 여부
     */
    public boolean checkUsernameExists(String username) {
        return !memberRepository.existsByUsername(username);
    }

    /**
     * email 중복 체크
     *
     * @param email 중복 체크할 email
     * @return 중복 여부
     */
    public boolean checkEmailExists(String email) {
        return !memberRepository.existsByEmail(email);
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
                .orElseThrow(() -> new NotFoundException("Invalid member ID"));

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
            throw new NotFoundException("Invalid member ID");
        }

        memberRepository.deleteById(memberId);
    }

    public Page<MemberSummary> getMemberList(String username, Pageable pageable) {
        return memberRepository.findAllByUsername(username, pageable);
    }
}
