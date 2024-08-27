package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import today.wtfood.server.entity.member.Member;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "recipe")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "member_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member member; // 작성자 (회원)

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL")
    private Timestamp createdDate; // 작성 시간

    @Column(name = "view_count", nullable = false)
    private Integer viewCount = 0; // 조회수

    @Column(name = "banner_image", length = 200)
    private String bannerImage; // 대표사진 경로

    @Column(name = "title", length = 100, nullable = false)
    private String title; // 제목

    @Column(name = "description", length = 1000)
    private String description; // 설명

    @Column(name = "cooking_time")
    private String cookingTime; // 조리시간

    @Column(name = "servings")
    private Integer servings; // 인원

    @Column(name = "level")
    private Integer level; // 난이도

    @Column(name = "video_link", length = 200)
    private String videoLink; // 동영상 링크

    @Column(name = "category", length = 50)
    private String category; // 카테고리

    // 재료 이미지 경로 필드 추가
    @ElementCollection
    @CollectionTable(name = "recipe_ingredient_image", joinColumns = @JoinColumn(name = "id"))
    private List<String> ingredientImage; // 재료 이미지 경로

    @ElementCollection
    @CollectionTable(name = "recipe_ingredient", joinColumns = @JoinColumn(name = "id"))
    private List<String> ingredients; // 재료

    @ElementCollection
    @CollectionTable(name = "recipe_tool", joinColumns = @JoinColumn(name = "id"))
    private List<String> cookingTools; // 조리도구

    @ElementCollection
    @CollectionTable(name = "recipe_guide_link", joinColumns = @JoinColumn(name = "id"))
    private List<String> guideLinks; // 가이드 링크


    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<CookingStep> cookingStep = new ArrayList<>(); // ArrayList 넣어서 null 값 상관없게 해줄수 있음

    @Getter
    @Setter
    @Entity
    @NoArgsConstructor
    @Table(name = "recipe_cooking_step")
    public static class CookingStep {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false, unique = true)
        private Long id;

        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "recipe_id", nullable = false)
        @OnDelete(action = OnDeleteAction.CASCADE)
        private Recipe recipe;

        @Column(name = "step_number", nullable = false)
        private Integer stepNumber; // 조리 순서 번호

        @Column(name = "image_url", length = 200)
        private String imageUrl; // 이미지 경로

        @Column(name = "description", length = 1000)
        private String description; // 조리 내용
    }

    @ElementCollection
    @CollectionTable(name = "recipe_finished_image", joinColumns = @JoinColumn(name = "id"))
    private List<String> finishedImages; // 완성품사진 경로

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;


    @Getter
    @Setter
    @Entity
    @NoArgsConstructor
    @Table(name = "recipe_comments")
    public static class Comment {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false, unique = true)
        private Long id;

        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "recipe_id", nullable = false)
        @OnDelete(action = OnDeleteAction.CASCADE)
        private Recipe recipe;

        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "member_id", nullable = false)
        @OnDelete(action = OnDeleteAction.CASCADE)
        private Member member;

        @Column(name = "content", nullable = false, length = 500)
        private String content;

        @CreationTimestamp
        @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL")
        private Timestamp createdDate;
    }

    @ElementCollection
    @CollectionTable(name = "recipe_tag", joinColumns = @JoinColumn(name = "id"))
    private Set<String> tags; // 해쉬태그

    // 찜한 멤버들 목록
    @ManyToMany(mappedBy = "favoriteRecipes")
    @OnDelete(action = OnDeleteAction.CASCADE) // 찜한 레시피가 삭제되면 찜한 멤버 목록에서도 삭제
    private Set<Member> favoriteByMembers; // 이 레시피를 찜한 멤버 목록

    public void setCookingStep(List<CookingStep> cookingStep) {
        this.cookingStep.clear();
        this.cookingStep.addAll(cookingStep);
    }

}
