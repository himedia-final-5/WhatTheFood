package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.member.IMember;
import today.wtfood.server.dto.member.MemberAuth;
import today.wtfood.server.dto.member.MemberDetail;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.security.annotation.CurrentUser;

import java.util.List;
import java.util.Map;

@Log4j2
@RestController
@RequestMapping(path = "/test")
@RequiredArgsConstructor
public class TestController {

    @GetMapping("who-am-i/{type}")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public Object testWhoAmI(
            @PathVariable("type")
            String type,

            @CurrentUser String username,
            @CurrentUser Long userId,
            @CurrentUser IMember memberInterface,
            @CurrentUser MemberAuth memberAuth,
            @CurrentUser MemberSummary memberSummary,
            @CurrentUser MemberDetail memberDetail
    ) {
        return Map.of(
                "username", username,
                "userId", userId,
                "interface", memberInterface,
                "auth", memberAuth,
                "summary", memberSummary,
                "detail", memberDetail
        ).getOrDefault(
                type,
                Map.of(
                        "error", "Invalid type",
                        "supportedTypes", List.of(
                                "username",
                                "userId",
                                "interface",
                                "auth",
                                "summary",
                                "detail"
                        )
                )
        );
    }

}
