package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.member.MemberCreateRequest;
import today.wtfood.server.dto.member.MemberDetail;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.dto.member.MemberUpdateRequest;
import today.wtfood.server.entity.Member;
import today.wtfood.server.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원가입 처리
     *
     * @param requestData 회원가입 요청 정보
     * @return 생성된 회원의 ID
     */
    @Transactional(rollbackFor = Exception.class)
    public long createMember(MemberCreateRequest requestData) {
        // TODO: 비밀번호 암호화 처리
        return memberRepository.save(requestData.toEntity()).getId();
    }

    /**
     * 회원 목록 조회
     */
    public Page<MemberSummary> getMembers(Pageable pageable) {
        return memberRepository.findAll(pageable, MemberSummary.class);
    }

    /**
     * 회원 상세 조회
     *
     * @param memberId 조회할 회원의 ID
     * @return 조회된 회원 정보
     */
    public MemberDetail getMember(long memberId) {
        return memberRepository.findById(memberId, MemberDetail.class)
                .orElseThrow(() -> new IllegalArgumentException("해당 회원이 존재하지 않습니다."));
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
                .orElseThrow(() -> new IllegalArgumentException("해당 회원이 존재하지 않습니다."));

        member.setNickname(requestData.nickname());
        member.setPassword(requestData.password()); // TODO: 비밀번호 암호화 처리
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
        memberRepository.deleteById(memberId);
    }

}
