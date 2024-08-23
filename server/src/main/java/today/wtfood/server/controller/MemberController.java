package today.wtfood.server.controller;

import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.member.MemberCreateRequest;
import today.wtfood.server.dto.member.MemberDetail;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.dto.member.MemberUpdateRequest;
import today.wtfood.server.dto.member.admin.MemberAdmin;
import today.wtfood.server.service.MemberService;

@RestController
@RequestMapping(path = "/members", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.CREATED)
    public GeneratedId<Long> createMember(
            @Validated
            MemberCreateRequest requestData
    ) {
        return GeneratedId.of(memberService.createMember(requestData));
    }

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

    @PostMapping("/{memberId}")
    @PreAuthorize("hasRole('ROLE_USER') and #memberId == authentication.principal.id")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMember(
            @PathVariable
            long memberId,

            @RequestParam
            @Validated
            MemberUpdateRequest requestData
    ) {
        memberService.updateMember(memberId, requestData);
    }

    @PostMapping("/{memberId}/introduce")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #memberId == authentication.principal.id)")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMemberIntroduce(
            @PathVariable
            long memberId,

            @RequestParam
            @Validated
            @Size(max = 200, message = "소개는 200자 이하로 입력해주세요")
            String introduce
    ) {
        memberService.updateMemberIntroduce(memberId, introduce);
    }

    @PostMapping("/{memberId}/profile-image")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #memberId == authentication.principal.id)")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMemberProfileImage(
            @PathVariable
            long memberId,

            @RequestParam
            @Validated
            @Size(max = 200, message = "프로필 이미지 주소가 너무 깁니다")
            String profileImage
    ) {
        memberService.updateMemberProfileImage(memberId, profileImage);
    }

    @PostMapping("/{memberId}/banner-image")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #memberId == authentication.principal.id)")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMemberBannerImage(
            @PathVariable
            long memberId,

            @RequestParam(required = false)
            @Validated
            @Size(max = 200, message = "배너 이미지 주소가 너무 깁니다")
            String bannerImage
    ) {
        memberService.updateMemberBannerImage(memberId, bannerImage);
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

}
