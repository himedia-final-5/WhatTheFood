-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO notice(title, content, write_date)
VALUES ('테스트 타이틀', '테스트중', '2008-07-09');


-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;