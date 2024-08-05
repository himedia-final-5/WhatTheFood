-- 외래키 제약조건을 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO event (id, title, content, start_date, end_date, image_Url) VALUES
(1, '이탈리안 파스타 워크숍', '전문 셰프와 함께 진정한 이탈리안 파스타를 처음부터 끝까지 만드는 방법을 배워보세요.', '2024-08-10 10:00:00', '2024-08-10 15:00:00', 'http://example.com/images/pasta.jpg'),
(2, '스시 롤링 클래스', '손으로 스시 롤을 만드는 법을 배우고 스시 마스터의 기술을 익혀보세요.', '2024-08-15 11:00:00', '2024-08-15 14:00:00', 'http://example.com/images/sushi.jpg'),
(3, '프랑스 페이스트리 베이킹', '프랑스 페이스트리 베이킹의 비밀을 알아보는 즐거운 워크숍입니다.', '2024-08-20 09:00:00', '2024-08-20 12:00:00', 'http://example.com/images/pastry.jpg'),
(4, '멕시칸 피에스타 요리', '멕시코의 맛을 더한 요리 기술을 익힐 수 있는 멕시칸 피에스타 요리 이벤트입니다.', '2024-08-25 16:00:00', '2024-08-25 19:00:00', 'http://example.com/images/mexican.jpg'),
(5, '비건 요리 마스터클래스', '비건 요리의 맛을 탐험할 수 있는 종합 마스터클래스입니다.', '2024-08-30 14:00:00', '2024-08-30 17:00:00', 'http://example.com/images/vegan.jpg');

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
