package today.wtfood.server.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageableRequest;
import today.wtfood.server.dto.member.MemberCreateRequest;
import today.wtfood.server.dto.member.MemberDetail;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.dto.member.MemberUpdateRequest;
import today.wtfood.server.exception.ConflictException;
import today.wtfood.server.service.MemberService;

@RestController
@RequestMapping(path = "/members", produces = MediaType.APPLICATION_JSON_VALUE)
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }


    @PostMapping("")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.CREATED)
    public GeneratedId<Long> createMember(
            @Validated
            MemberCreateRequest requestData
    ) {
        return new GeneratedId<>(memberService.createMember(requestData));
    }

    @GetMapping("")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public Page<MemberSummary> getMembers(
            @Validated
            PageableRequest pageable
    ) {
        return memberService.getMembers(pageable, MemberSummary.class);
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
    @ResponseStatus(HttpStatus.OK)
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
