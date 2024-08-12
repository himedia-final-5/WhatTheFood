-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO inquiry( answer, content, username, title )
VALUES ( '답변했다', '아아기오오', 'user01','test1'),
       ( '답변했다', '아아기오오', 'user01','test2'),
       ( '답변했다', '아아기오오', 'user01','test3'),
       ( '답변했다', '아아기오오', 'user01','test4'),
       ( '답변했다', '아아기오오', 'user01','test5'),
       ( '답변했다', '아아기오오', 'user01','test6'),
       ( null , '아아기오오', 'user01','test7'),
       ( null , '아아기오오', 'user01','test8'),
       ( null , '아아기오오', 'user01','test9'),
       ( null , '아아기오오', 'user0','test10'),
       ( null , '아아기오오', 'user01','test11'),
       ( '답변했다', '아아기오오', 'user01','test2'),
       ( '답변했다', '아아기오오', 'user01','test2'),
       ( '답변했다', '아아기오오', 'user01','test2'),
       ( '답변했다', '아아기오오', 'user01','test2'),
       ( '답변했다', '아아기오오', 'user01','test2'),
        ( '답변했다', '아dididid', 'user01','test3'),
        ( '답변했다', '아아기오오', 'user02','가가가가'),
        ( null, '아아기오오', 'user02','나나나나');




-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;