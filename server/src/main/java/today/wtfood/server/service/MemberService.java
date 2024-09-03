package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.member.*;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.ConflictException;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.MemberRepository;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.TemporalAdjusters;

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
     */
    @Transactional(rollbackFor = Exception.class)
    public void createMember(MemberCreateRequest requestData) {
        Member member = requestData.toEntity(passwordEncoder.encode(requestData.password()));
        member.setProfileImage("https://api.dicebear.com/9.x/bottts-neutral/svg?seed=" + requestData.username());
        memberRepository.save(member);
    }

    /**
     * 회원 목록 조회
     */
    public <T> Page<T> getMembers(Pageable pageable, Class<T> projectionType) {
        return memberRepository.findAllBy(pageable, projectionType);
    }

    public <T> Page<T> getMembersByRole(String role,
                                        Pageable pageable,
                                        Class<T> memberAdminClass) {
        return memberRepository.findByRole(Member.Role.valueOf(role), pageable, memberAdminClass);
    }

    /**
     * 일간 레시피 조회수 랭킹 조회
     *
     * @return 레시피 조회수 랭킹
     */
    public Page<MemberRankingSummary> getDailyViewsRanking(Pageable pageable) {
        LocalDate today = LocalDate.now();
        Timestamp startOfDay = Timestamp.valueOf(today.atStartOfDay());
        Timestamp endOfDay = Timestamp.valueOf(today.atTime(LocalTime.MAX));

        return memberRepository.findAllOrderByTotalViews(startOfDay, endOfDay, pageable);
    }

    /**
     * 주간 레시피 조회수 랭킹 조회
     *
     * @return 레시피 조회수 랭킹
     */
    public Page<MemberRankingSummary> getWeeklyViewsRanking(Pageable pageable) {
        LocalDate today = LocalDate.now();
        LocalDate startOfWeek = today.with(TemporalAdjusters.previousOrSame(java.time.DayOfWeek.MONDAY));
        LocalDate endOfWeek = today.with(TemporalAdjusters.nextOrSame(java.time.DayOfWeek.SUNDAY));

        Timestamp startOfWeekTs = Timestamp.valueOf(startOfWeek.atStartOfDay());
        Timestamp endOfWeekTs = Timestamp.valueOf(endOfWeek.atTime(LocalTime.MAX));

        return memberRepository.findAllOrderByTotalViews(startOfWeekTs, endOfWeekTs, pageable);
    }

    /**
     * 월간 레시피 조회수 랭킹 조회
     *
     * @return 레시피 조회수 랭킹
     */
    public Page<MemberRankingSummary> getMonthlyViewsRanking(Pageable pageable) {
        LocalDate today = LocalDate.now();
        LocalDate startOfMonth = today.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate endOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());

        Timestamp startOfMonthTs = Timestamp.valueOf(startOfMonth.atStartOfDay());
        Timestamp endOfMonthTs = Timestamp.valueOf(endOfMonth.atTime(LocalTime.MAX));

        return memberRepository.findAllOrderByTotalViews(startOfMonthTs, endOfMonthTs, pageable);
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
     * 회원 프로필 조회
     *
     * @param memberId      조회할 회원의 아이디
     * @param currentUserId 현재 로그인한 회원의 아이디
     * @return 회원 프로필 정보
     * @throws NotFoundException 회원 정보를 찾을 수 없을 때 발생
     */
    public MemberProfileDetail getMemberProfile(long memberId, Long currentUserId) {
        return memberRepository.findProfileById(memberId, currentUserId)
                .orElseThrow(() -> new NotFoundException("회원 정보를 찾을 수 없습니다"));
    }

    /**
     * 회원 프로필 변경
     *
     * @param memberId    변경할 회원의 ID
     * @param requestData 변경할 프로필 정보
     */
    @Transactional(rollbackFor = Exception.class)
    public void updateMemberProfile(long memberId, MemberProfileUpdateRequest requestData) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new NotFoundException("회원 정보를 찾을 수 없습니다"));

        member.setNickname(requestData.getNickname());
        member.setIntroduce(requestData.getIntroduce());
        member.setProfileImage(requestData.getProfileImage());
        member.setBannerImage(requestData.getBannerImage());
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

    public Page<MemberSummary> getMembersByUsername(String username, Pageable pageable) {
        return memberRepository.findAllByUsername(username, pageable);
    }

    @Transactional(rollbackFor = Exception.class)
    public void updateMemberRole(long memberId, String role) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new NotFoundException("회원 정보를 찾을 수 없습니다"));
        member.setRole(Member.Role.valueOf(role));
    }

}
