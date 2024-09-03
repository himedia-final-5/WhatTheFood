package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.member.*;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.MemberFollowService;
import today.wtfood.server.service.MemberService;

@RestController
@RequestMapping(path = "/members", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberFollowService memberFollowService;

    @GetMapping("")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public PageResponse<?> getMembers(
            @PageableDefault(sort = "id")
            Pageable pageable,

            @RequestParam(value = "role", required = false)
            String role,

            @RequestParam(value = "username", required = false)
            String username,

            @RequestParam(value = "period", defaultValue = "d")
            String period
    ) {
        // TODO: 동적 쿼리로 변경
        if (role != null && !role.isEmpty()) {
            return PageResponse.of(memberService.getMembersByRole(role, pageable, MemberSummary.class));
        }
        if (username != null && !username.isEmpty()) {
            return PageResponse.of(memberService.getMembersByUsername(username, pageable));
        }

        if (period != null && !period.isEmpty()) {
            return PageResponse.of(switch (period.toLowerCase()) {
                case "d" -> memberService.getDailyViewsRanking(pageable);
                case "w" -> memberService.getWeeklyViewsRanking(pageable);
                case "m" -> memberService.getMonthlyViewsRanking(pageable);
                default -> throw new BadRequestException("period는 'd', 'w', 'm' 중 하나여야 합니다.", "period");
            });
        }
        return PageResponse.of(memberService.getMembers(pageable, MemberSummary.class));
    }

    @GetMapping("/{memberId}")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public MemberDetail getMember(@PathVariable long memberId) {
        return memberService.getMemberById(memberId, MemberDetail.class);
    }

    @PutMapping("/{memberId}/role")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.OK)
    public void updateMemberRole(@PathVariable long memberId, @RequestParam String role) {
        memberService.updateMemberRole(memberId, role);
    }

    @GetMapping("/check-username")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void checkUsername(@RequestParam String username) {
        memberService.validateUsernameFormatAndUnique(username);
    }

    @GetMapping("/{memberId}/profile")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public MemberProfileDetail getMembers(
            @PathVariable
            long memberId,

            @Nullable
            @CurrentUser
            Long currentUserId
    ) {
        return memberService.getMemberProfile(memberId, currentUserId);
    }

    @PostMapping("/{memberId}/profile")
    @PreAuthorize("hasRole('ROLE_USER') and #memberId == authentication.principal.id")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMember(
            @PathVariable
            long memberId,

            @RequestBody
            @Validated
            MemberProfileUpdateRequest requestData
    ) {
        memberService.updateMemberProfile(memberId, requestData);
    }

    @DeleteMapping("/{memberId}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #memberId == authentication.principal.id)")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMember(@PathVariable long memberId) {
        memberService.deleteMember(memberId);
    }

    @PostMapping("/{memberId}/follow")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void follow(
            @PathVariable
            long memberId,

            @CurrentUser
            long currentUserId
    ) {
        memberFollowService.createFollow(currentUserId, memberId);
    }

    @DeleteMapping("/{memberId}/follow")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unfollow(
            @PathVariable
            long memberId,

            @CurrentUser
            long currentUserId
    ) {
        memberFollowService.deleteFollow(currentUserId, memberId);
    }

    @GetMapping("/{memberId}/followings")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public PageResponse<MemberProfileSummary> getFollowing(
            @PathVariable
            long memberId,
            @PageableDefault(sort = "id")
            Pageable pageable,

            @Nullable
            @CurrentUser
            Long currentUserId
    ) {
        return PageResponse.of(memberFollowService.getFollowing(memberId, currentUserId, pageable));
    }

    @GetMapping("/{memberId}/followers")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public PageResponse<MemberProfileSummary> getFollowers(
            @PathVariable
            long memberId,
            @PageableDefault(sort = "id")
            Pageable pageable,

            @Nullable
            @CurrentUser
            Long currentUserId
    ) {
        return PageResponse.of(memberFollowService.getFollowers(memberId, currentUserId, pageable));
    }

}
