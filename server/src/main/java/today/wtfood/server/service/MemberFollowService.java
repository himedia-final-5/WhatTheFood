package today.wtfood.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.member.MemberProfileSummary;
import today.wtfood.server.entity.member.MemberFollow;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.ConflictException;
import today.wtfood.server.repository.MemberFollowRepository;

@Service
@RequiredArgsConstructor
public class MemberFollowService {

    private final MemberFollowRepository memberFollowRepository;

    /**
     * 팔로우 관계를 생성합니다
     *
     * @param fromMemberId 팔로우의 주체가 되는 회원의 아이디
     * @param toMemberId   팔로우의 대상이 되는 회원의 아이디
     * @throws BadRequestException 자기 자신을 팔로우할 경우 발생
     */
    @Transactional
    public void createFollow(long fromMemberId, long toMemberId) throws BadRequestException {
        if (fromMemberId == toMemberId) {
            throw new BadRequestException("자기 자신을 팔로우할 수 없습니다.", "memberId");
        }

        if (isFollowing(fromMemberId, toMemberId)) {
            throw new ConflictException("이미 팔로우한 회원입니다.", "memberId");
        }

        memberFollowRepository.save(new MemberFollow(fromMemberId, toMemberId));
    }

    /**
     * 팔로우 관계를 삭제합니다
     *
     * @param fromMemberId 팔로우의 주체가 되는 회원의 아이디
     * @param toMemberId   팔로우의 대상이 되는 회원의 아이디
     * @throws BadRequestException 팔로우 관계가 존재하지 않을 경우 발생
     */
    @Transactional
    public void deleteFollow(Long fromMemberId, Long toMemberId) {
        if (!isFollowing(fromMemberId, toMemberId)) {
            throw new BadRequestException("팔로우 관계가 존재하지 않습니다.", "memberId");
        }

        memberFollowRepository.deleteByFromMemberIdAndToMemberId(fromMemberId, toMemberId);
    }

    /**
     * 팔로우 관계가 존재하는지 확인합니다
     *
     * @param fromMemberId 팔로우의 주체가 되는 회원의 아이디
     * @param toMemberId   팔로우의 대상이 되는 회원의 아이디
     * @return 팔로우 관계가 존재하면 true, 그렇지 않으면 false
     */
    public boolean isFollowing(Long fromMemberId, Long toMemberId) {
        return memberFollowRepository.existsByFromMemberIdAndToMemberId(fromMemberId, toMemberId);
    }

    /**
     * 팔로우의 주체가 되는 회원의 팔로잉 수를 조회합니다
     *
     * @param fromMemberId 팔로우의 주체가 되는 회원의 아이디
     * @return 팔로잉 수
     */
    public long countFollowing(Long fromMemberId) {
        return memberFollowRepository.countByFromMemberId(fromMemberId);
    }

    /**
     * 팔로우의 대상이 되는 회원의 팔로워 수를 조회합니다
     *
     * @param toMemberId 팔로우의 대상이 되는 회원의 아이디
     * @return 팔로워 수
     */
    public long countFollowers(Long toMemberId) {
        return memberFollowRepository.countByToMemberId(toMemberId);
    }

    /**
     * 팔로우의 주체가 되는 회원의 팔로잉 목록을 조회합니다
     *
     * @param fromMemberId  팔로우의 주체가 되는 회원의 아이디
     * @param currentUserId 현재 로그인한 회원의 아이디
     * @param pageable      페이지 정보
     * @return 팔로잉 목록
     */
    public Page<MemberProfileSummary> getFollowing(Long fromMemberId, Long currentUserId, Pageable pageable) {
        return memberFollowRepository.findByFromMemberId(fromMemberId, currentUserId, pageable);
    }

    /**
     * 팔로우의 대상이 되는 회원의 팔로워 목록을 조회합니다
     *
     * @param toMemberId    팔로우의 대상이 되는 회원의 아이디
     * @param currentUserId 현재 로그인한 회원의 아이디
     * @param pageable      페이지 정보
     * @return 팔로워 목록
     */
    public Page<MemberProfileSummary> getFollowers(Long toMemberId, Long currentUserId, Pageable pageable) {
        return memberFollowRepository.findByToMemberId(toMemberId, currentUserId, pageable);
    }

}
