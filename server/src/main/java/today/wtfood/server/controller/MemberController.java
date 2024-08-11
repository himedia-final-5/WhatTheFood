package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
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
import today.wtfood.server.exception.ConflictException;
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

    @GetMapping("/check-username")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void checkUsername(
            @RequestParam
            String username
    ) {
        if (!memberService.checkUsernameExists(username)) {
            throw new ConflictException("Username already exists");
        }
    }

    @PostMapping("/{memberId}")
    @PreAuthorize("hasRole('ROLE_USER') and #memberId == authentication.principal.id")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMember(
            @PathVariable
            long memberId,

            @Validated
            MemberUpdateRequest requestData
    ) {
        memberService.updateMember(memberId, requestData);
    }

    @DeleteMapping("/{memberId}")
    @PreAuthorize("hasRole('ROLE_USER') and #memberId == authentication.principal.id")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMember(
            @PathVariable
            long memberId
    ) {
        memberService.deleteMember(memberId);
    }

}
