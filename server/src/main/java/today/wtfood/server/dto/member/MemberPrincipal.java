package today.wtfood.server.dto.member;


import today.wtfood.server.entity.Member;

/**
 * 회원의 최소한의 정보가 포함된 인터페이스 구현체
 *
 * @param id
 * @param username
 */
public record MemberPrincipal(
        long id,
        String username
) implements IMember {

    public MemberPrincipal(Member member) {
        this(member.getId(), member.getUsername());
    }

    @Override
    public long getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return username;
    }

}
