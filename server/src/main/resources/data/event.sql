-- 외래키 제약조건을 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO event (id, title, content, start_date, end_date, image_Url) VALUES
(1, '이탈리안 파스타 워크숍', '전문 셰프와 함께 진정한 이탈리안 파스타를 처음부터 끝까지 만드는 방법을 배워보세요.', '2024-08-10', '2024-08-10', 'http://static.wtable.co.kr/image/production/service/staticpage/105/bca90355-64a8-4deb-84b9-1c3ce0f36093.jpg?size=800x213'),
(2, '스시 롤링 클래스', '손으로 스시 롤을 만드는 법을 배우고 스시 마스터의 기술을 익혀보세요.', '2024-08-15', '2024-08-15', 'http://static.wtable.co.kr/image/production/service/staticpage/105/bca90355-64a8-4deb-84b9-1c3ce0f36093.jpg?size=800x213'),
(3, '프랑스 페이스트리 베이킹', '프랑스 페이스트리 베이킹의 비밀을 알아보는 즐거운 워크숍입니다.', '2024-08-20', '2024-08-20', 'http://static.wtable.co.kr/image/production/service/staticpage/105/bca90355-64a8-4deb-84b9-1c3ce0f36093.jpg?size=800x213'),
(4, '멕시칸 피에스타 요리', '멕시코의 맛을 더한 요리 기술을 익힐 수 있는 멕시칸 피에스타 요리 이벤트입니다.', '2024-08-25', '2024-08-25', 'http://static.wtable.co.kr/image/production/servi…41d4-e6db-4fa3-856c-794f60e5197e.jpg?size=800x213'),
(5, '비건 요리 마스터클래스', '비건 요리의 맛을 탐험할 수 있는 종합 마스터클래스입니다.', '2024-08-30', '2024-08-30', 'http://static.wtable.co.kr/image/production/servi…41d4-e6db-4fa3-856c-794f60e5197e.jpg?size=800x213');

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
