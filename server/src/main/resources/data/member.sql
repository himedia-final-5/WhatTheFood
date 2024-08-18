-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
-- $2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC : 1111
INSERT INTO member(username, nickname, email, password, profile_image)
VALUES ('user01', '홍길동', 'user01@wtfood.today', '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user01'),
       ('user02', '홍길순', 'user02@wtfood.today', '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user02'),
       ('user03', '김철수', 'user03@wtfood.today', '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user03'),
       ('user04', '나유리', 'user04@wtfood.today', '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user04'),
       ('user05', '신짱구', 'user05@wtfood.today', '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user05');

INSERT INTO member(username, nickname, email, password, role, profile_image)
VALUES ('admin', '탐관오리', 'duck@wtfood.today', '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC',
        'ROLE_ADMIN', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user05');

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;