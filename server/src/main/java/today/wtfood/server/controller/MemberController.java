package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.member.MemberDetail;
import today.wtfood.server.dto.member.MemberProfileSummary;
import today.wtfood.server.dto.member.MemberProfileUpdateRequest;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.dto.member.admin.MemberAdmin;
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
    public PageResponse<MemberSummary> getMembers(
            @PageableDefault(sort = "id")
            Pageable pageable
    ) {
        return PageResponse.of(memberService.getMembers(pageable, MemberSummary.class));
    }

    @GetMapping("/{memberId}")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public MemberDetail getMember(
            @PathVariable
            long memberId
    ) {
        return memberService.getMemberById(memberId, MemberDetail.class);
    }

    @GetMapping("admin")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.OK)
    public PageResponse<MemberAdmin> getMembersAdmin(
            @PageableDefault(sort = "id")
            Pageable pageable
    ) {
        return PageResponse.of(memberService.getMembers(pageable, MemberAdmin.class));
    }

    @GetMapping("admin/{memberId}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.OK)
    public MemberAdmin getMemberAdmin(
            @PathVariable
            long memberId
    ) {
        return memberService.getMemberById(memberId, MemberAdmin.class);
    }

    @GetMapping("username/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public PageResponse<MemberSummary> getMemberList(
            @PathVariable("username")
            String username,
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        return PageResponse.of(memberService.getMemberList(username, pageable));
    }


    @GetMapping("/check-username")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void checkUsername(
            @RequestParam
            String username
    ) {
        memberService.validateUsernameFormatAndUnique(username);
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
        memberService.updateMember(memberId, requestData);
    }

    @DeleteMapping("/{memberId}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #memberId == authentication.principal.id)")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMember(
            @PathVariable
            long memberId
    ) {
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
