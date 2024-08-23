package today.wtfood.server.dto.member;

import today.wtfood.server.entity.member.Member;

/**
 * 회원의 최소한의 정보가 포함된 인터페이스
 *
 * @implNote Projection for {@link Member}
 */
public interface IMember {

    long getId();

    String getUsername();

}
