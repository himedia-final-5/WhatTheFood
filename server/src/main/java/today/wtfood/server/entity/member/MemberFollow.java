package today.wtfood.server.entity.member;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.lang.NonNull;

import java.io.Serializable;

/**
 * 회원 간 팔로우 관계를 나타내는 엔티티
 *
 * @implNote 회원 간 팔로우 관계를 나타내는 엔티티입니다.
 * 팔로우의 주체와 대상을 나타내는 회원 아이디를 복합키로 사용합니다.
 * 회원 칼럼이 삭제되면 팔로우 관계도 삭제됩니다.
 */
@Entity
@Table(name = "member_follow")
@IdClass(MemberFollow.PK.class)
@Getter
@RequiredArgsConstructor
@NoArgsConstructor
public class MemberFollow {

    /**
     * 팔로우의 주체가 되는 회원의 아이디
     */
    @Id
    @Column(name = "from_member_id")
    @NonNull
    private Long fromMemberId;

    /**
     * 팔로우의 대상이 되는 회원의 아이디
     */
    @Id
    @Column(name = "to_member_id")
    @NonNull
    private Long toMemberId;


    // 아래 필드는 Follow 엔티티의 외래키와 주키를 매핑하는데 사용됩니다.

    /**
     * 팔로우의 주체
     *
     * @implNote {@link JoinColumn} 속성으로 외래키 관계를 생성하고, {@code insertable}, {@code updatable}을 false로 설정합니다.
     * {@link OnDelete} 속성을 사용하여 회원이 삭제되면 팔로우 관계도 삭제됩니다.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_member_id", insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member fromMember;

    /**
     * 팔로우의 대상
     *
     * @implNote {@link JoinColumn} 속성 중 {@code insertable}, {@code updatable}을 false로 설정하여 직접 관리하지 않습니다.
     * {@link OnDelete} 속성을 사용하여 회원이 삭제되면 팔로우 관계도 삭제됩니다.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "to_member_id", insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member toMember;

    /**
     * 팔로우의 주체와 대상을 매핑하는 복합키 클래스
     */
    public static class PK implements Serializable {
        Long fromMemberId;
        Long toMemberId;
    }

}