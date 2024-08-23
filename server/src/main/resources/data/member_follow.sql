-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;


-- 데이터 삽입 (랜덤으로 팔로우 관계 생성)
INSERT IGNORE INTO member_follow (from_member_id, to_member_id)
SELECT m1.id AS from_member_id, m2.id AS to_member_id
FROM member m1
         CROSS JOIN member m2
WHERE m1.id != m2.id
  AND RAND() < (CASE m2.role WHEN 'ROLE_USER' THEN 0.1 -- 일반 회원 팔로우 확률 10%
                             WHEN 'ROLE_CHEF' THEN 0.3 -- 셰프 팔로우 확률 30%
                             WHEN 'ROLE_BRAND' THEN 0.5 -- 브랜드 팔로우 확률 50%
                             WHEN 'ROLE_ADMIN' THEN 0.7 -- 관리자 팔로우 확률 70%
                             ELSE 0 -- 알 수 없는 역할은 팔로우하지 않음
    END)
ON DUPLICATE KEY UPDATE from_member_id = from_member_id;


-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
