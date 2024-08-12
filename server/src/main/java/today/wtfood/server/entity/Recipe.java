package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;

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
    private Member member; // 작성자 (회원)

    @CreationTimestamp
    @Column(name = "created_date", nullable = false, updatable = false)
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
    private Integer cookingTime; // 조리시간

    @Column(name = "servings")
    private Integer servings; // 인원

    @Column(name = "level")
    private Integer level; // 난이도

    @Column(name = "video_link", length = 200)
    private String videoLink; // 동영상 링크

    @Column(name = "category", length = 50)
    private String category; // 카테고리

    @ElementCollection
    @CollectionTable(name = "recipe_ingredient", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "ingredient", length = 100, nullable = false)
    private List<String> ingredients; // 재료

    @ElementCollection
    @CollectionTable(name = "recipe_tool", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "tool", length = 100, nullable = false)
    private List<String> cookingTools; // 조리도구

    @ElementCollection
    @CollectionTable(name = "recipe_guide_link", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "guide_link", length = 200)
    private List<String> guideLinks; // 가이드 링크

    @ElementCollection
    @CollectionTable(name = "recipe_step", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "cooking_step", length = 1000, nullable = false)
    private List<String> cookingSteps; // 조리순서

    @ElementCollection
    @CollectionTable(name = "recipe_finished_image", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "finished_image", length = 200)
    private List<String> finishedImages; // 완성품사진 경로

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;


    @Getter
    @Setter
    @Entity
    @Table(name = "comments")
    public class Comment {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false, unique = true)
        private Long id;

        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "id", nullable = false)
        private Recipe recipe;

        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "member_id", nullable = false)
        private Member member;

        @Column(name = "content", nullable = false, length = 500)
        private String content;

        @CreationTimestamp
        @Column(name = "created_date", nullable = false, updatable = false)
        private Timestamp createdDate;
    }

    @ElementCollection
    @CollectionTable(name = "recipe_tag", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "tag", length = 50)
    private List<String> tags; // 태그
}
