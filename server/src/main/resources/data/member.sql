-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO member(username, nickname, email, password)
VALUES ('user01', '홍길동', 'user01@wtfood.today', '1111'),
       ('user02', '홍길순', 'user02@wtfood.today', '1111'),
       ('user03', '김철수', 'user03@wtfood.today', '1111'),
       ('user04', '나유리', 'user04@wtfood.today', '1111'),
       ('user05', '신짱구', 'user05@wtfood.today', '1111');

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;