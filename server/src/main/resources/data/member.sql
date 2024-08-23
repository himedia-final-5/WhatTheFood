-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;


-- 임시로 비밀번호 기본값을 설정
-- $2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC : 1111
ALTER TABLE member
    MODIFY password VARCHAR(255) DEFAULT '$2a$10$QXmpZE9pcNXwzUNZQxMu7OuYeYTsJXveFoVvz77rR7R6vjaJgn5IC';


-- 일반 회원 데이터 삽입
INSERT INTO member(id, username, nickname, email, profile_image)
VALUES (01, 'user01', '홍길동', 'user01@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=01'),
       (02, 'user02', '홍길순', 'user02@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=02'),
       (03, 'user03', '김철수', 'user03@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=03'),
       (04, 'user04', '나유리', 'user04@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=04'),
       (05, 'user05', '신짱구', 'user05@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=05'),
       (06, 'user06', '최민수', 'user06@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=06'),
       (07, 'user07', '오세진', 'user07@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=07'),
       (08, 'user08', '송하영', 'user08@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=08'),
       (09, 'user09', '고은솔', 'user09@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=09'),
       (10, 'user10', '안재민', 'user10@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=10'),
       (11, 'user11', '백소현', 'user11@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=11'),
       (12, 'user12', '류하린', 'user12@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=12'),
       (13, 'user13', '차예빈', 'user13@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=13'),
       (14, 'user14', '조민기', 'user14@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=14'),
       (15, 'user15', '장은지', 'user15@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=15'),
       (16, 'user16', '김하나', 'user16@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=16'),
       (17, 'user17', '임지아', 'user17@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=17'),
       (18, 'user18', '허은채', 'user18@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=18'),
       (19, 'user19', '민지우', 'user19@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=19'),
       (20, 'user20', '윤지호', 'user20@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=20'),
       (21, 'user21', '방준혁', 'user21@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=21'),
       (22, 'user22', '곽시우', 'user22@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=22'),
       (23, 'user23', '손민준', 'user23@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=23'),
       (24, 'user24', '김신솔', 'user24@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=24'),
       (25, 'user25', '이채린', 'user25@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=25'),
       (26, 'user26', '백진희', 'user26@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=26'),
       (27, 'user27', '강동현', 'user27@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=27'),
       (28, 'user28', '신해솔', 'user28@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=28'),
       (29, 'user29', '배준석', 'user29@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=29'),
       (30, 'user30', '차예린', 'user30@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=30'),
       (31, 'user31', '강민수', 'user31@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=31'),
       (32, 'user32', '조윤아', 'user32@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=32'),
       (33, 'user33', '성동일', 'user33@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=33'),
       (34, 'user34', '이하린', 'user34@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=34'),
       (35, 'user35', '고아라', 'user35@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=35'),
       (36, 'user36', '오지훈', 'user36@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=36'),
       (37, 'user37', '문성준', 'user37@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=37'),
       (38, 'user38', '최유진', 'user38@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=38'),
       (39, 'user39', '김지민', 'user39@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=39'),
       (40, 'user40', '안세현', 'user40@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=40'),
       (41, 'user41', '남민재', 'user41@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=41'),
       (42, 'user42', '권솔아', 'user42@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=42'),
       (43, 'user43', '박찬호', 'user43@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=43'),
       (44, 'user44', '민정훈', 'user44@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=44'),
       (45, 'user45', '박사나', 'user45@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=45'),
       (46, 'user46', '조은비', 'user46@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=46'),
       (47, 'user47', '최유상', 'user47@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=47'),
       (48, 'user48', '강민성', 'user48@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=48'),
       (49, 'user49', '조현준', 'user49@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=49'),
       (50, 'user50', '최민주', 'user50@wtfood.today', 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=50');


-- 관리자 회원 데이터 삽입
INSERT INTO member(id, username, nickname, email, role, profile_image)
VALUES (101, 'admin', '탐관오리', 'admin101@wtfood.today', 'ROLE_ADMIN', 'https://www.svgrepo.com/show/228839/duck.svg');


-- 셰프 회원 데이터 삽입
ALTER TABLE member
    MODIFY role VARCHAR(255) DEFAULT 'ROLE_CHEF';
INSERT INTO member(id, username, nickname, email, profile_image)
VALUES (201, 'chef01', '백종원', 'chef201@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=01'),
       (202, 'chef02', '상디', 'chef202@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=02'),
       (203, 'chef03', '비룡', 'chef203@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=03'),
       (204, 'chef04', '태양이', 'chef204@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=04'),
       (205, 'chef05', '고든램지', 'chef205@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=05'),
       (206, 'chef06', '냠냠이', 'chef206@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=06'),
       (207, 'chef07', '맛나용', 'chef207@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=07'),
       (208, 'chef08', '짜장몬', 'chef208@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=08'),
       (209, 'chef09', '푸딩왕', 'chef209@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=09'),
       (210, 'chef10', '버거킹콩', 'chef210@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=10'),
       (211, 'chef11', '바삭달콤', 'chef211@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=11'),
       (212, 'chef12', '김치마왕', 'chef212@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=12'),
       (213, 'chef13', '라면마스터', 'chef213@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=13'),
       (214, 'chef14', '돈까스짱', 'chef214@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=14'),
       (215, 'chef15', '떡볶이킹', 'chef215@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=15'),
       (216, 'chef16', '두부도사', 'chef216@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=16'),
       (217, 'chef17', '감자마법사', 'chef217@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=17'),
       (218, 'chef18', '김밥요정', 'chef218@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=18'),
       (219, 'chef19', '치킨장인', 'chef219@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=19'),
       (220, 'chef20', '국수도령', 'chef220@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=20'),
       (221, 'chef21', '스시요괴', 'chef221@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=21'),
       (222, 'chef22', '피자도우', 'chef222@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=22'),
       (223, 'chef23', '갈비천사', 'chef223@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=23'),
       (224, 'chef24', '쌀국수맨', 'chef224@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=24'),
       (225, 'chef25', '생선도적', 'chef225@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=25'),
       (226, 'chef26', '새우대왕', 'chef226@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=26'),
       (227, 'chef27', '육회귀신', 'chef227@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=27'),
       (228, 'chef28', '초코빙수', 'chef228@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=28'),
       (229, 'chef29', '양꼬치달인', 'chef229@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=29'),
       (230, 'chef30', '오므라이스', 'chef230@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=30'),
       (231, 'chef31', '불고기용사', 'chef231@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=31'),
       (232, 'chef32', '우동타이탄', 'chef232@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=32'),
       (233, 'chef33', '파스타망치', 'chef233@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=33'),
       (234, 'chef34', '부침개타자', 'chef234@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=34'),
       (235, 'chef35', '만두대사', 'chef235@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=35'),
       (236, 'chef36', '꼬치술사', 'chef236@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=36'),
       (237, 'chef37', '수제비고수', 'chef237@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=37'),
       (238, 'chef38', '메밀무사', 'chef238@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=38'),
       (239, 'chef39', '순대천재', 'chef239@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=39'),
       (240, 'chef40', '어묵파이터', 'chef240@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=40'),
       (241, 'chef41', '찜닭사령관', 'chef241@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=41'),
       (242, 'chef42', '양념치킨', 'chef242@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=42'),
       (243, 'chef43', '계란군주', 'chef243@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=43'),
       (244, 'chef44', '쫄면광대', 'chef244@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=44'),
       (245, 'chef45', '라면귀공자', 'chef245@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=45'),
       (246, 'chef46', '미역바다', 'chef246@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=46'),
       (247, 'chef47', '찹쌀떡장수', 'chef247@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=47'),
       (248, 'chef48', '설렁탕사자', 'chef248@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=48'),
       (249, 'chef49', '떡갈비기사', 'chef249@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=49'),
       (250, 'chef50', '도넛공작', 'chef250@wtfood.today', 'https://api.dicebear.com/9.x/thumbs/svg?seed=50');

ALTER TABLE member
    MODIFY role VARCHAR(255) DEFAULT 'ROLE_BRAND';
INSERT INTO member(id, username, nickname, email, profile_image)
VALUES (301, 'brand01', '맛있는한입', 'brand301@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=01'),
       (302, 'brand02', '감칠맛하우스', 'brand302@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=02'),
       (303, 'brand03', '바삭한향기', 'brand303@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=03'),
       (304, 'brand04', '입맛도둑', 'brand304@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=04'),
       (305, 'brand05', '스푼앤포크', 'brand305@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=05'),
       (306, 'brand06', '쿡앤조이', 'brand306@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=06'),
       (307, 'brand07', '맛의조각', 'brand307@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=07'),
       (308, 'brand08', '한끼궁전', 'brand308@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=08'),
       (309, 'brand09', '소울푸드연구소', 'brand309@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=09'),
       (310, 'brand10', '꿀맛이네', 'brand310@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=10'),
       (311, 'brand11', '한입천국', 'brand311@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=11'),
       (312, 'brand12', '바삭프라임', 'brand312@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=12'),
       (313, 'brand13', '맛좀봐라', 'brand313@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=13'),
       (314, 'brand14', '구름속파스타', 'brand314@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=14'),
       (315, 'brand15', '행복한식탁', 'brand315@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=15'),
       (316, 'brand16', '소문난집밥', 'brand316@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=16'),
       (317, 'brand17', '고소한한입', 'brand317@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=17'),
       (318, 'brand18', '포크의향연', 'brand318@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=18'),
       (319, 'brand19', '든든한끼', 'brand319@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=19'),
       (320, 'brand20', '요리마을', 'brand320@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=20'),
       (321, 'brand21', '치즈랩', 'brand321@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=21'),
       (322, 'brand22', '바삭바삭치킨', 'brand322@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=22'),
       (323, 'brand23', '알싸한향기', 'brand323@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=23'),
       (324, 'brand24', '금손주방', 'brand324@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=24'),
       (325, 'brand25', '핫앤크리스피', 'brand325@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=25'),
       (326, 'brand26', '입소문국수', 'brand326@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=26'),
       (327, 'brand27', '맛있네집', 'brand327@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=27'),
       (328, 'brand28', '입맛천국', 'brand328@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=28'),
       (329, 'brand29', '치킨천재', 'brand329@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=29'),
       (330, 'brand30', '맛있는기술', 'brand330@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=30'),
       (331, 'brand31', '감칠맛마을', 'brand331@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=31'),
       (332, 'brand32', '냠냠스푼', 'brand332@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=32'),
       (333, 'brand33', '고소한식당', 'brand333@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=33'),
       (334, 'brand34', '맛의여행', 'brand334@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=34'),
       (335, 'brand35', '주방천사', 'brand335@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=35'),
       (336, 'brand36', '한입포차', 'brand336@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=36'),
       (337, 'brand37', '짭짤한모퉁이', 'brand337@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=37'),
       (338, 'brand38', '골목식당', 'brand338@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=38'),
       (339, 'brand39', '향기의집', 'brand339@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=39'),
       (340, 'brand40', '행복한한상', 'brand340@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=40'),
       (341, 'brand41', '바삭타임', 'brand341@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=41'),
       (342, 'brand42', '소울푸드하우스', 'brand342@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=42'),
       (343, 'brand43', '맛있는코너', 'brand343@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=43'),
       (344, 'brand44', '오감만족식탁', 'brand344@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=44'),
       (345, 'brand45', '한입에쏙', 'brand345@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=45'),
       (346, 'brand46', '든든한한그릇', 'brand346@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=46'),
       (347, 'brand47', '요리의비밀', 'brand347@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=47'),
       (348, 'brand48', '맛있는시간', 'brand348@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=48'),
       (349, 'brand49', '꿀맛카페', 'brand349@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=49'),
       (350, 'brand50', '신선한두부', 'brand350@wtfood.today', 'https://api.dicebear.com/9.x/icons/svg?seed=50');


-- 수정된 칼럼을 다시 복구
ALTER TABLE member
    MODIFY password VARCHAR(255) NULL;
ALTER TABLE member
    MODIFY role ENUM ('ROLE_ADMIN', 'ROLE_BRAND', 'ROLE_CHEF', 'ROLE_USER') DEFAULT 'ROLE_USER' NULL;


-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
