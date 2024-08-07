-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO inquiry( answer, content, email, title )
VALUES ( '답변했다', '아아기오오', 'user01@wtfood.today','test1'),
       ( '답변했다', '아아기오오', 'user01@wtfood.today','test2'),
       ( '답변했다', '아아기오오', 'user01@wtfood.today','test3'),
       ( '답변했다', '아아기오오', 'user01@wtfood.today','test4'),
       ( '답변했다', '아아기오오', 'user01@wtfood.today','test5'),
       ( '답변했다', '아아기오오', 'user01@wtfood.today','test6'),
       ( null , '아아기오오', 'user01@wtfood.today','test7'),
       ( null , '아아기오오', 'user01@wtfood.today','test8'),
       ( null , '아아기오오', 'user01@wtfood.today','test9'),
       ( null , '아아기오오', 'user01@wtfood.today','test10'),
       ( null , '아아기오오', 'user01@wtfood.today','test11'),
       ( '답변했다', '아아기오오', 'user02@wtfood.today','test2'),
       ( '답변했다', '아아기오오', 'user02@wtfood.today','test2'),
       ( '답변했다', '아아기오오', 'user02@wtfood.today','test2'),
       ( '답변했다', '아아기오오', 'user02@wtfood.today','test2'),
       ( '답변했다', '아아기오오', 'user02@wtfood.today','test2'),
        ( '답변했다', '아dididid', 'asdf','test3');




-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;