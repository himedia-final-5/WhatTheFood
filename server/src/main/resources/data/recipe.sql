-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 기존 데이터 삭제
DELETE FROM recipe_comments WHERE recipe_id = 1;
DELETE FROM recipe_ingredient WHERE id = 1;
DELETE FROM recipe_tool WHERE id = 1;
DELETE FROM recipe_guide_link WHERE id = 1;
DELETE FROM recipe_cooking_step WHERE recipe_id = 1;
DELETE FROM recipe_finished_image WHERE id = 1;
DELETE FROM recipe_tag WHERE id = 1;
DELETE FROM favorite_recipes WHERE recipe_id = 1;
DELETE FROM recipe WHERE id = 1;
DELETE FROM recipe_ingredient_image WHERE id = 1;


-- 데이터베이스 구조 변경

-- Recipe 데이터 삽입 (member_id 추가)
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (1, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2329/e9c09320-6913-4632-a77d-b35dc529012e.jpg?size=800x800',
'멍게비빔밥', '바다의 향이 가득한 멍게와 신선한 야채들이 조화롭게 어우러진 비빔밥입니다. 상큼한 초고추장과 함께 비벼 먹는 이 요리는 간단하면서도 영양 가득한 한 끼로 손색이 없습니다.',
20, 2, 2, 'https://www.youtube.com/watch?v=wlbWyB9cSS0&pp=ygUZ66mN6rKM67mE67mU67ClIOunjOuTpOq4sA%3D%3D', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (2, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2344/9a1bd1e4-cbf9-4e2c-857a-56c95078bf4c.jpg?size=800x800',
'매콤하면서 술안주로 딱', '매콤한 고추와 고기를 이용해 만든 간단하면서도 맛있는 고추전입니다. 주말 저녁이나 명절에 딱 어울리는 요리입니다.',
20, 2, 2, 'https://youtu.be/IoSwCiTghf0?si=kCGsdD3ZhO5ElycY', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (3, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2328/91ec15ed-2f6a-464e-ac1b-5b08eaffda0e.jpg?size=800x800',
'시원하고 깊은 맛', '성게와 미역의 조화로 깊고 시원한 국물 맛을 내는 성게미역국 레시피입니다. 간단하면서도 영양 가득한 한 그릇 요리로, 특히 여름철 보양식으로도 좋습니다.',
40, 4, 2, 'https://youtu.be/z6ZGxPUd4Ac?si=BmKii98w1dDr6Ffq', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (4, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2137/d1c42852-eb66-4f04-a678-083f6608f082.jpg?size=800x800',
'밥 한그릇 뚝딱!', '풍성한 양의 목살과 잘 익은 김치가 어우러져 부드럽고 맛있는 김치찜을 완성할 수 있습니다. 이 레시피로 감칠맛 나는 김치찜을 손쉽게 만들어 보세요.',
90, 4, 2, 'https://www.youtube.com/watch?v=cIDqDT5RF3U&pp=ygUP6rmA7LmY66qp7IK07LCc', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (5, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1532/259cb807-ada0-402b-bbd3-6ab5b1ee4767.jpg?size=800x800',
'보기만 해도 시원해지는', '잘 삶은 홍합은 그냥 먹어도 맛있지만 다양한 요리에도 잘 어울리죠~ 10월부터 12월이 제철인 살이 통통한 홍합으로 홍합탕을 끓이면 더욱 깊은 맛을 낸답니다. 따로 간을 하지 않아도 되기 때문에 제대로 손질만 하면 실패 없이 만들 수 있어요. 송송 썬 고추를 넣으면 국물이 시원하면서도 칼칼해서 국물이 금세 동나도록 먹게 될거예요!',
20, 4, 1, 'https://www.youtube.com/watch?v=t63aSsdvZKs&pp=ygUJ7ZmN7ZWp7YOV', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (6, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1268/942a38ee-ceda-4ae7-850d-c6ba39542a07.jpg?size=800x800',
'고소하고 유니크한', '고급스러운 송로 오일과 육회가 만난 특별한 스파게티! 진한 풍미와 부드러운 식감이 일품으로, 특별한 날에 어울리는 요리입니다.',
25, 2, 3, 'https://www.youtube.com/watch?v=y0ecwbUGvW4&pp=ygUT7Jyh7ZqMIOyKpO2MjOqyjO2LsA%3D%3D', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (7, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2681/1d0a0dc0-b3d2-4784-9e99-fd0750fa97c4.jpg?size=800x800',
'요즘 트렌드 초콜릿', '두바이에서 영감을 받은 풍부한 초콜릿 맛의 디저트입니다. 달콤하고 진한 초콜릿의 맛이 일품으로, 특별한 날에 어울리는 디저트입니다.',
30, 4, 2, 'https://www.youtube.com/watch?v=yVuprH1DTLg&pp=ygUd65GQ67CU7J20IOy0iOy9nOumvyDrp4zrk6TquLA%3D', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (8, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1412/c9052b39-229d-4a42-88fd-7ea8b5a27df1.jpg?size=500x500',
'이탈리아의 감성 그대로', '풍부한 소스와 층층이 쌓인 면이 어우러지는 이탈리안 전통 요리, 라자냐입니다. 치즈와 미트 소스의 조화가 일품으로, 특별한 날에 적합한 요리입니다.',
60, 6, 4, 'https://www.youtube.com/watch?v=ZTkLFFEXQ4s&pp=ygUT65287J6Q64OQIOunjOuTpOq4sA%3D%3D', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (9, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1012/0221329d-24f5-44fc-bc7d-6cd9bdd10e77.jpg?size=800x800',
'고수와 파스타의 만남', '신선한 고수와 페스토를 활용한 크림 파스타로, 독특한 향과 부드러운 크림 소스가 조화를 이루는 요리입니다. 색다른 맛을 원하는 분들에게 추천합니다.',
30, 2, 3, 'https://www.youtube.com/watch?v=ivNam7sY94c&pp=ygUh6rOg7IiYIO2BrOumvCDtjpjsiqTthqAg7YyM7Iqk7YOA', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (10, 1, 'https://static.wtable.co.kr/image/production/service/recipe/992/33096f46-a8fd-4b78-ae56-bba7a012fe54.jpg?size=800x800',
'간편하고 맛있는', '간편하게 한 팬에서 조리할 수 있는 새우 파스타로, 신선한 새우와 풍부한 토마토 소스가 어우러져 맛을 더합니다.',
30, 2, 2, 'https://www.youtube.com/watch?v=shYlVEzum1g&pp=ygUX7JuQ7YysIOyDiOyasCDtjIzsiqTtg4A%3D', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (11, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1675/0c6d386e-2ff4-4c23-8327-b2608d7cd418.jpg?size=800x800',
'시원하게 탱글하게', '시원한 국물과 쫄깃한 우동 면이 어우러지는 붓카케 우동입니다. 간단하게 만들 수 있으며, 뜨거운 여름 날씨에 제격인 일본식 냉우동입니다.',
20, 2, 1, 'https://www.youtube.com/watch?v=PQQNE2dMh1U&pp=ygUa67aT7Lm07LyAIOyasOuPmSDrp4zrk6TquLA%3D', '일식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (12, 1, 'https://static.wtable.co.kr/image/production/service/recipe/719/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg?size=800x800',
'바삭하니 너무 좋아요', '바삭한 튀김과 부드러운 덮밥이 어우러진 일본식 텐동입니다. 다양한 해산물과 채소 튀김이 간장 소스와 함께 제공되어 맛있고 풍부한 한 끼 식사입니다.',
40, 2, 3, 'https://www.youtube.com/watch?v=Qc_R4Rg2jsM&pp=ygUQ7YWQ64-ZIOunjOuTpOq4sA%3D%3D', '일식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (13, 1, 'https://static.wtable.co.kr/image/production/service/recipe/629/d3d12973-e5ce-4d73-8baa-d98922ef2937.jpg?size=800x800',
'스테미나에 최고', '달콤하고 짭조름한 장어 소스가 밥과 잘 어우러지는 장어덮밥입니다. 부드러운 장어와 풍미 깊은 소스가 특징인 일식 요리입니다.',
30, 2, 3, 'https://www.youtube.com/watch?v=4VhCur_-_Xk&pp=ygUW7J6l7Ja0642u67ClIOunjOuTpOq4sA%3D%3D', '일식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (14, 1, 'https://static.wtable.co.kr/image/production/service/recipe/996/d27420df-f867-4e0d-a39e-7421a0f3bc3c.jpg?size=800x800',
'환상의 조합', '부드러운 연어와 신선한 아보카도가 밥과 잘 어우러지는 연어 아보카도 덮밥입니다. 건강하고 맛있는 일식 덮밥으로, 간편하게 만들 수 있는 레시피입니다.',
25, 2, 2, 'https://www.youtube.com/watch?v=9GZS3tb1Du4&pp=ygUk7Jew7Ja0IOyVhOuztOy5tOuPhCDrja7rsKUg66eM65Ok6riw', '일식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (15, 1, 'https://static.wtable.co.kr/image/production/service/recipe/948/5780ac56-3357-422f-b0ad-4240a3fff910.jpg?size=500x500',
'길거리에서 먹던 그맛', '부드럽고 맛있는 타코야끼를 집에서도 쉽게 만들 수 있는 레시피입니다. 타코야끼는 일본의 대표적인 길거리 음식으로, 문어와 다양한 재료가 어우러진 맛있는 간식입니다.',
30, 4, 3, 'https://www.youtube.com/watch?v=ek0y6luCQyE&pp=ygUW7YOA7L2U7JW864G8IOunjOuTpOq4sA%3D%3D', '일식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (16, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1298/425048b6-8000-45bc-978b-7c8fc0337a81.jpg?size=800x800',
'술안주로 최고', '겉은 바삭하고 속은 촉촉한 교자 레시피입니다. 다양한 재료를 사용해 만든 교자는 간단하게 집에서도 맛있게 즐길 수 있는 일식 대표 만두입니다.',
40, 4, 3, 'https://www.youtube.com/watch?v=znsJrojoTj4&pp=ygUQ6rWQ7J6QIOunjOuTpOq4sA%3D%3D', '중식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (17, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1217/8dd89b20-d8b4-4d10-89ee-144b510b0691.jpg?size=800x800',
'집에서도 만들기 쉬운', '해물과 매콤한 짜장 소스가 어우러진 매운 해물짜장 레시피입니다. 다양한 해산물과 매운 맛이 잘 어우러진 요리로, 중화 요리의 매력을 한층 높여줍니다.',
40, 4, 3, 'https://www.youtube.com/watch?v=SlY4xf8Dk1c&pp=ygUd66ek7Jq0IO2VtOusvOynnOyepSDrp4zrk6TquLA%3D', '중식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (18, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1220/8d0908bd-24e2-4e6e-982d-2c0b5594c4a8.jpg?size=800x800',
'매콤 짭잘 탱탱한 면발', '매콤하고 칼칼한 국물 맛이 일품인 해물 볶음 짬뽕입니다. 신선한 해산물과 다양한 채소가 어우러져 풍부한 맛을 제공합니다. 집에서도 쉽게 즐길 수 있는 중화 요리입니다.',
35, 4, 3, 'https://www.youtube.com/watch?v=Qapbhge2LvA&pp=ygUe7ZW066y8IOuztuydjCDsp6zrvZUg66eM65Ok6riw', '중식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (19, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1213/806a52e8-4c12-4900-9380-d1bc5ed276f5.jpg?size=800x800',
'비벼비벼 잡채랑 함께', '맛있고 간편한 중국식 잡채 덮밥입니다. 달콤하고 짭조름한 잡채와 밥이 잘 어우러져 한 끼 식사로 적합합니다. 다양한 채소와 고기의 조화가 일품입니다.',
30, 4, 2, 'https://www.youtube.com/watch?v=Dw342KkUa4U&pp=ygUYCOyeoeyxhCDrja7rsKUg66eM65Ok6riw', '중식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (20, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1224/59fb77e4-dc72-48f2-9b68-d39c578409bc.jpg?size=800x800',
'쫄깃쫄깃 너무 맛있는', '바삭한 찹쌀 옷을 입힌 탕수육에 새콤달콤한 소스를 더한 요리입니다. 찹쌀가루를 사용하여 더욱 바삭한 식감을 자랑하며, 집에서도 간편하게 즐길 수 있는 중식 요리입니다.',
40, 4, 3, 'https://www.youtube.com/watch?v=WfGs1hMSqhk&pp=ygUa7LC57IyAIO2DleyImOycoSDrp4zrk6TquLA%3D', '중식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (21, 1, 'https://static.wtable.co.kr/image/production/service/recipe/972/3c5e9f76-20bf-409b-a003-daba4eb60627.jpg?size=800x800',
'간단하면서 마라마라 얼큰맛', '요즘 인기 있는 음식하면 빠질 수 없는 마라! 알싸하고 매콤한 맛에 모두 빠질 만큼 중독성 있는데요. 마라 소스만 있다면 간단하게 만들 수 있는 간식, 마라 어묵꼬치을 준비했어요! 매력 있는 어묵꼬치를 집에서 만들어 보세요.',
30, 4, 2, 'https://www.youtube.com/embed/hQp0LoZsGq8', '분식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (22, 1, 'https://static.wtable.co.kr/image/production/service/recipe/765/8356fd78-351a-4134-accb-255155f90263.jpg?size=500x500',
'국민 분식 빠질수 없는', '부드러운 차돌박이와 쫄깃한 떡이 어우러진 매콤달콤한 떡볶이입니다. 간단한 재료로도 깊은 맛을 내며, 특별한 날은 물론 일상적인 한 끼 식사로도 손색이 없습니다.',
25, 2, 2, 'https://www.youtube.com/watch?v=_KojB9WA8vQ&pp=ygUg7LCo64-M67CV7J20IOuWoeuztuydtCDrp4zrk6TquLA%3D', '분식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (23, 1, 'https://static.wtable.co.kr/image/production/service/recipe/605/32cf80a5-ffaa-436f-8d15-9d581e8e662f.jpg?size=500x500',
'피크닉 갈때도 유용하게', '달콤하고 짭짤한 불고기를 넣어 만든 김밥으로, 풍부한 맛과 영양이 가득합니다. 누구나 쉽게 만들 수 있는 한끼 식사로, 도시락이나 피크닉에 제격입니다.',
30, 4, 2, 'https://www.youtube.com/watch?v=YkjZCoKq6MM&pp=ygUa67aI6rOg6riwIOq5gOuwpSDrp4zrk6TquLA%3D', '분식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (24, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1033/be94ce10-5f15-4fbd-8923-91fe2bdb7b59.jpg?size=800x800',
'새콤달콤 맛있는', '아삭한 콩나물과 쫄깃한 쫄면의 조화가 매력적인 매콤새콤한 쫄면 요리입니다. 간단하게 만들 수 있어 가벼운 한 끼로 좋습니다.',
20, 2, 2, 'https://www.youtube.com/watch?v=ddEsVpxZiYQ&pp=ygUa7L2p64KY66y8IOyrhOuptCDrp4zrk6TquLA%3D', '분식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (25, 1, 'https://static.wtable.co.kr/image/production/service/recipe/886/882096fb-aa2f-4c8e-92aa-38eeb17c9fb1.jpg?size=800x800',
'칠리와 김말이의 만남', '바삭한 김말이를 매콤달콤한 칠리 소스에 버무린 독특한 탕수 요리입니다. 아이들도 어른들도 좋아할 맛있는 간식입니다.',
30, 3, 2, 'https://www.youtube.com/watch?v=SPS6mKl8buk&pp=ygUh6rmA66eQ7J20IOy5oOumrCDtg5XsiJgg66eM65Ok6riw', '분식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (26, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2281/8290385a-be07-4650-9223-26ea063b044c.jpg?size=800x800',
'중독되는 맛', '달콤하고 짭짤한 맛이 일품인 마약옥수수! 한 번 먹으면 멈출 수 없는 중독적인 맛을 자랑합니다. 간단한 재료로 손쉽게 만들 수 있어 누구나 쉽게 따라할 수 있는 간식입니다.',
15, 2, 1, 'https://www.youtube.com/watch?v=U9aE_igKu7w&pp=ygUZ66eI7JW97Jil7IiY7IiYIOunjOuTpOq4sA%3D%3D', '간식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (27, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2338/03c9fce0-367f-489d-9f1b-27c0ed79eb10.jpg?size=800x800',
'어린이들 입맛에 딱', '간단하면서도 맛있는 소떡소떡! 소시지와 떡을 번갈아 가며 꼬치에 끼워 구운 후, 달콤한 소스를 발라 완성하는 간식으로, 어린이들부터 어른들까지 모두가 좋아할 만한 맛입니다.',
20, 4, 1, 'https://www.youtube.com/watch?v=6_1T8uA894E&pp=ygUW7IaM65ah7IaM65ahIOunjOuTpOq4sA%3D%3D', '간식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (28, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2276/0553d553-a0a3-4336-80bb-4f6a0fa10e38.jpg?size=500x500',
'고소하고 먹기 편한', '쫀득한 식감과 고소한 치즈의 풍미가 일품인 치즈볼! 달콤한 설탕을 뿌려서 먹으면 더 맛있어요. 집에서도 간단하게 만들어 먹을 수 있는 간식입니다.',
30, 4, 2, 'https://www.youtube.com/watch?v=iFgLLF0m_Ts&pp=ygUT7LmY7KaI67O8IOunjOuTpOq4sA%3D%3D', '간식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (29, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1657/8cfe80dd-9bf5-40f9-82c0-aef06e6d497a.jpg?size=800x800',
'건강에 좋은 아이들에게 딱', '크리미한 아보카도의 풍미를 가득 담은 아이스크림! 건강하고 고소한 맛으로, 디저트로 손색없는 아이스크림입니다. 아보카도와 몇 가지 재료만으로 간단하게 만들 수 있어요.',
15, 4, 1, 'https://www.youtube.com/watch?v=Km9IHFX66K0&pp=ygUm7JWE67O07Lm064-EIOyVhOydtOyKpO2BrOumvCDrp4zrk6TquLA%3D', '디저트', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (30, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2667/3aaa6a5a-33b4-4b57-abea-14d6f36d82ed.jpg?size=500x500',
'새콤달콤 여름에 시원하게', '상큼하고 시원한 과일 셔벗! 제철 과일을 이용해 간편하게 만들 수 있는 여름철 디저트입니다. 달콤함과 상큼함이 어우러져 입맛을 돋우는 데 최고입니다.',
20, 4, 2, 'https://www.youtube.com/watch?v=JnNLlLX-6Vs&pp=ygUa6rO87J28IOyDpOuyoO2KuCDrp4zrk6TquLA%3D', '디저트', 0);


-- 재료 사진 삽입
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (1, 'https://static.wtable.co.kr/image/production/service/recipe/2329/d12802d6-353e-4c93-a0f4-7ef36843d7c4.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (2, 'https://static.wtable.co.kr/image/production/service/recipe/1935/ingredients/e3ce099f-2575-4762-b6ba-e7e328de70f5.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (3, 'https://static.wtable.co.kr/image/production/service/recipe/2328/e841d965-b3f5-4b02-baac-461a39b03534.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (4, 'https://static.wtable.co.kr/image/production/service/recipe/2137/b123055f-1e7b-45f0-b64e-87b7e38a00a5.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (5, 'https://static.wtable.co.kr/image/production/service/recipe/1532/fdd1c86a-c39a-4293-b1fb-79fba7150936.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (6, 'https://static.wtable.co.kr/image/production/service/recipe/1268/c641d044-2c47-48f6-a660-ed87c33b2be6.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (7, 'https://static.wtable.co.kr/image/production/service/recipe/2681/da2e1bc9-f689-4418-8ded-5843c4364485.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (8, 'https://static.wtable.co.kr/image/production/service/recipe/1412/9104c428-8d71-477a-ab02-7a8c126eba09.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (9, 'https://static.wtable.co.kr/image/production/service/recipe/1012/1171f3eb-075e-43cb-96c9-11fb6cd81acf.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (10, 'https://static.wtable.co.kr/image/production/service/recipe/992/a2bf4914-de88-4061-96d6-95f2d97bb014.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (11, 'https://static.wtable.co.kr/image/production/service/recipe/1675/afcea165-b6d5-4d4c-af3e-df33b304e5f1.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (12, 'https://static.wtable.co.kr/image/production/service/recipe/719/5404c599-3533-407a-bb06-5e629e27ef02.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (13, 'https://static.wtable.co.kr/image/production/service/recipe/629/5efb281a-88b9-4d38-aa3e-10e2e8e41de3.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (14, 'https://static.wtable.co.kr/image/production/service/recipe/996/2801ad4d-a818-47ef-bf1a-06d624e73734.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (15, 'https://static.wtable.co.kr/image/production/service/recipe/948/eb07b9b7-450d-40d3-8e45-d42089636480.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (16, 'https://static.wtable.co.kr/image/production/service/recipe/1298/70775286-d060-42ba-b38e-7fc61bd050a7.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (17, 'https://static.wtable.co.kr/image/production/service/recipe/1217/0d6c3a78-74e7-4e75-88a1-e63e27d48f50.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (18, 'https://static.wtable.co.kr/image/production/service/recipe/1220/aa4cd5c4-a145-4ae7-b8be-94918bcb9142.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (19, 'https://static.wtable.co.kr/image/production/service/recipe/1213/c2fce090-3e26-4c18-a404-7909c43ac1b4.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (20, 'https://static.wtable.co.kr/image/production/service/recipe/1224/eccdee3f-2089-40f0-9ac2-553113fbbca9.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (21, 'https://static.wtable.co.kr/image/production/service/recipe/972/1f30ff0e-b6c6-4936-9eed-083b4c4428e5.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (22, 'https://static.wtable.co.kr/image/production/service/recipe/765/95037a06-cbd0-40bf-baf8-448ad7d75b2b.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (23, 'https://static.wtable.co.kr/image/production/service/recipe/605/e3e41256-6c26-461e-8d47-dc7512f71170.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (24, 'https://static.wtable.co.kr/image/production/service/recipe/1033/4506a577-a8ab-4901-b406-3e1cfb9c7609.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (25, 'https://static.wtable.co.kr/image/production/service/recipe/886/a60a2f86-444d-4a00-8ea2-75c5f92e79f7.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (26, 'https://static.wtable.co.kr/image/production/service/recipe/2281/6b8a7eb7-4717-4f51-8ccb-633930d206ef.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (27, 'https://static.wtable.co.kr/image/production/service/recipe/2338/e79cb382-efcb-43d6-9255-f60416388846.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (28, 'https://static.wtable.co.kr/image/production/service/recipe/2276/bbe4a2cd-7b7b-4e13-a5ef-00c554738d91.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (29, 'https://static.wtable.co.kr/image/production/service/recipe/1657/af704f9a-bef7-4a0d-8682-68cb2a09b922.jpg?size=800x800');
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (30, 'https://static.wtable.co.kr/image/production/service/recipe/2667/2f45ebc9-8eca-4295-9f41-cc5024bdc266.jpg?size=800x800');

-- 재료 삽입
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (1, '밥 2공기'),
    (1, '멍게 200g'),
    (1, '상추 5장'),
    (1, '깻잎 3장'),
    (1, '오이 1/2개'),
    (1, '당근 1/4개'),
    (1, '초고추장 4큰술'),
    (1, '참기름 1큰술'),
    (1, '김가루 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (2, '청양고추 10개'),
    (2, '다진 돼지고기 100g'),
    (2, '다진 마늘 1큰술'),
    (2, '소금 약간'),
    (2, '후춧가루 약간'),
    (2, '부침가루 1컵'),
    (2, '물 1/2컵'),
    (2, '계란 1개');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
     (3, '성게 200g'),
     (3, '미역 20g'),
     (3, '물 1L'),
     (3, '다진 마늘 1큰술'),
     (3, '국간장 2큰술'),
     (3, '소금 약간'),
     (3, '참기름 1큰술'),
     (3, '파 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (4, '목살 600g'),
    (4, '신 김치 1/2포기'),
    (4, '양파 1개'),
    (4, '대파 1대'),
    (4, '청양고추 2개'),
    (4, '다진마늘 1큰술'),
    (4, '된장 1큰술'),
    (4, '고춧가루 2큰술'),
    (4, '설탕 1큰술'),
    (4, '간장 2큰술'),
    (4, '물 2컵');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (5, '홍합 500g'),
    (5, '무 200g'),
    (5, '대파 1대'),
    (5, '청양고추 1개'),
    (5, '다진마늘 1큰술'),
    (5, '국간장 1큰술'),
    (5, '물 6컵'),
    (5, '소금 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (6, '스파게티 면 200g'),
    (6, '육회 100g'),
    (6, '송로 오일 2큰술'),
    (6, '간장 1큰술'),
    (6, '다진마늘 1작은술'),
    (6, '파마산 치즈 가루 1큰술'),
    (6, '소금 약간'),
    (6, '후추 약간'),
    (6, '올리브 오일 1큰술'),
    (6, '파슬리 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (7, '초콜릿 200g'),
    (7, '생크림 100g'),
    (7, '버터 50g'),
    (7, '설탕 30g'),
    (7, '바닐라 추출물 1작은술'),
    (7, '소금 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (8, '라자냐 면 12장'),
    (8, '다진 소고기 300g'),
    (8, '다진 양파 1개'),
    (8, '다진 마늘 2쪽'),
    (8, '토마토 소스 500g'),
    (8, '모짜렐라 치즈 200g'),
    (8, '파마산 치즈 50g'),
    (8, '올리브 오일 2큰술'),
    (8, '소금, 후추 약간'),
    (8, '이탈리안 허브 믹스 1작은술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (9, '파스타 면 200g'),
    (9, '크림 100g'),
    (9, '페스토 소스 3큰술'),
    (9, '다진 고수 2큰술'),
    (9, '올리브 오일 1큰술'),
    (9, '마늘 2쪽'),
    (9, '소금 약간'),
    (9, '후추 약간'),
    (9, '파마산 치즈 가루 2큰술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (10, '파스타 면 200g'),
    (10, '새우 200g'),
    (10, '다진 마늘 3쪽'),
    (10, '올리브 오일 3큰술'),
    (10, '토마토 소스 250ml'),
    (10, '물 400ml'),
    (10, '파슬리 약간'),
    (10, '소금 약간'),
    (10, '후추 약간'),
    (10, '파마산 치즈 가루 3큰술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (11, '우동 면 200g'),
    (11, '간장 3큰술'),
    (11, '미림 1큰술'),
    (11, '다시마 육수 300ml'),
    (11, '파 1대'),
    (11, '계란 1개'),
    (11, '참깨 약간'),
    (11, '김 가루 약간'),
    (11, '냉수 500ml'),
    (11, '얼음 적당량');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (12, '밥 2공기'),
    (12, '새우 6마리'),
    (12, '오징어 100g'),
    (12, '호박 1/2개'),
    (12, '가지 1개'),
    (12, '밀가루 1컵'),
    (12, '전분 1/2컵'),
    (12, '계란 1개'),
    (12, '물 1컵'),
    (12, '간장 3큰술'),
    (12, '미림 2큰술'),
    (12, '설탕 1큰술'),
    (12, '식용유 적당량'),
    (12, '소금 약간'),
    (12, '후추 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (13, '장어 200g'),
    (13, '밥 2공기'),
    (13, '간장 3큰술'),
    (13, '미림 2큰술'),
    (13, '설탕 1큰술'),
    (13, '물 100ml'),
    (13, '파 1대'),
    (13, '참깨 약간'),
    (13, '식용유 적당량'),
    (13, '소금 약간'),
    (13, '후추 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (14, '연어 200g'),
    (14, '밥 2공기'),
    (14, '아보카도 1개'),
    (14, '간장 2큰술'),
    (14, '미림 1큰술'),
    (14, '참기름 1작은술'),
    (14, '파 1대'),
    (14, '참깨 약간'),
    (14, '소금 약간'),
    (14, '후추 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (15, '타코야끼 가루 200g'),
    (15, '물 300ml'),
    (15, '문어 100g'),
    (15, '파 2대'),
    (15, '절인 생강 30g'),
    (15, '튀김가루 1큰술'),
    (15, '식용유 적당량'),
    (15, '타코야끼 소스 적당량'),
    (15, '마요네즈 적당량'),
    (15, '부추 약간'),
    (15, '가쓰오부시 약간'),
    (15, '참깨 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (16, '교자피 20장'),
    (16, '다진 돼지고기 250g'),
    (16, '다진 양배추 1컵'),
    (16, '다진 대파 2대'),
    (16, '다진 마늘 1작은술'),
    (16, '간장 2큰술'),
    (16, '미림 1큰술'),
    (16, '참기름 1큰술'),
    (16, '소금 약간'),
    (16, '후추 약간'),
    (16, '식용유 적당량'),
    (16, '물 1컵');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (17, '중화면 300g'),
    (17, '오징어 100g'),
    (17, '새우 100g'),
    (17, '홍합 100g'),
    (17, '양파 1개'),
    (17, '청경채 100g'),
    (17, '당근 1개'),
    (17, '피망 1개'),
    (17, '다진 마늘 1큰술'),
    (17, '고추장 2큰술'),
    (17, '짜장 소스 3큰술'),
    (17, '간장 1큰술'),
    (17, '설탕 1큰술'),
    (17, '식용유 적당량'),
    (17, '물 500ml'),
    (17, '후추 약간'),
    (17, '참기름 1큰술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (18, '중화면 300g'),
    (18, '오징어 100g'),
    (18, '새우 100g'),
    (18, '홍합 100g'),
    (18, '양파 1개'),
    (18, '청경채 100g'),
    (18, '당근 1개'),
    (18, '피망 1개'),
    (18, '대파 2대'),
    (18, '다진 마늘 1큰술'),
    (18, '고추장 2큰술'),
    (18, '굴소스 2큰술'),
    (18, '간장 1큰술'),
    (18, '설탕 1큰술'),
    (18, '식용유 적당량'),
    (18, '물 500ml'),
    (18, '후추 약간'),
    (18, '참기름 1큰술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (19, '잡채면 200g'),
    (19, '소고기 150g'),
    (19, '양파 1개'),
    (19, '당근 1개'),
    (19, '피망 1개'),
    (19, '표고버섯 3개'),
    (19, '다진 마늘 1큰술'),
    (19, '간장 2큰술'),
    (19, '설탕 1큰술'),
    (19, '식용유 적당량'),
    (19, '후추 약간'),
    (19, '참기름 1큰술'),
    (19, '물 300ml'),
    (19, '밥 4공기');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (20, '돼지고기 안심 300g'),
    (20, '찹쌀가루 1컵'),
    (20, '전분 1컵'),
    (20, '계란 1개'),
    (20, '식용유 적당량'),
    (20, '양파 1개'),
    (20, '피망 1개'),
    (20, '당근 1개'),
    (20, '표고버섯 3개'),
    (20, '다진 마늘 1큰술'),
    (20, '설탕 3큰술'),
    (20, '식초 3큰술'),
    (20, '간장 2큰술'),
    (20, '물 200ml'),
    (20, '후추 약간'),
    (20, '참기름 1큰술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (21, '어묵 8장'),
    (21, '꼬치 4개'),
    (21, '송송 썬 쪽파 1큰술'),
    (21, '통깨 약간'),
    (21, '마라 소스 1큰술'),
    (21, '고추장 2큰술'),
    (21, '진간장 2큰술'),
    (21, '설탕 2큰술'),
    (21, '물 1큰술'),
    (21, '후춧가루 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (22, '떡볶이 떡 300g'),
    (22, '차돌박이 200g'),
    (22, '어묵 100g'),
    (22, '양배추 1/4개'),
    (22, '대파 1대'),
    (22, '고추장 2큰술'),
    (22, '고춧가루 1큰술'),
    (22, '간장 1큰술'),
    (22, '설탕 1큰술'),
    (22, '물 2컵'),
    (22, '참기름 1큰술'),
    (22, '통깨 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (23, '김밥용 김 5장'),
    (23, '밥 3공기'),
    (23, '불고기 200g'),
    (23, '시금치 100g'),
    (23, '단무지 5줄'),
    (23, '계란 3개'),
    (23, '당근 1/2개'),
    (23, '참기름 2큰술'),
    (23, '소금 약간'),
    (23, '깨 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (24, '쫄면 200g'),
    (24, '콩나물 150g'),
    (24, '오이 1/2개'),
    (24, '당근 1/3개'),
    (24, '상추 3장'),
    (24, '계란 1개'),
    (24, '고추장 2큰술'),
    (24, '식초 1큰술'),
    (24, '설탕 1큰술'),
    (24, '간장 1작은술'),
    (24, '참기름 1큰술'),
    (24, '깨 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (25, '김말이 300g'),
    (25, '양파 1/2개'),
    (25, '피망 1/2개'),
    (25, '당근 1/3개'),
    (25, '칠리 소스 4큰술'),
    (25, '간장 1큰술'),
    (25, '설탕 1큰술'),
    (25, '식초 1큰술'),
    (25, '전분물 2큰술'),
    (25, '물 1/2컵'),
    (25, '식용유 적당량');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (26, '옥수수 2개'),
    (26, '마요네즈 2큰술'),
    (26, '설탕 1큰술'),
    (26, '파마산 치즈가루 1큰술'),
    (26, '칠리 파우더 약간'),
    (26, '파슬리 가루 약간'),
    (26, '버터 1큰술');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (27, '비엔나 소시지 8개'),
    (27, '떡볶이 떡 8개'),
    (27, '꼬치 4개'),
    (27, '케찹 2큰술'),
    (27, '고추장 1작은술'),
    (27, '설탕 1큰술'),
    (27, '물엿 1큰술'),
    (27, '식용유 약간');
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (28, '모짜렐라 치즈 200g'),
    (28, '찹쌀가루 200g'),
    (28, '설탕 2큰술'),
    (28, '소금 1작은술'),
    (28, '베이킹파우더 1작은술'),
    (28, '우유 100ml'),
    (28, '식용유 적당량');
 INSERT INTO recipe_ingredient (id, ingredients)
 VALUES
     (29, '아보카도 2개'),
     (29, '연유 100ml'),
     (29, '우유 100ml'),
     (29, '라임즙 1큰술'),
     (29, '꿀 2큰술');
 INSERT INTO recipe_ingredient (id, ingredients)
 VALUES
     (30, '오렌지 2개'),
     (30, '딸기 100g'),
     (30, '키위 1개'),
     (30, '레몬즙 1큰술'),
     (30, '설탕 2큰술'),
     (30, '물 100ml');

-- Recipe Tools
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (1, '칼'), (1, '도마'), (1, '볼'), (1, '숟가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (2, '프라이팬'), (2, '볼'), (2, '수저'), (2, '접시');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (3, '냄비'), (3, '숟가락'), (3, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (4, '냄비'), (4, '칼'), (4, '도마'), (4, '수저');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (5, '냄비'), (5, '칼'), (5, '도마'), (5, '수저');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (6, '냄비'), (6, '프라이팬'), (6, '집게'), (6, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (7, '냄비'), (7, '거품기'), (7, '스푼'), (7, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (8, '오븐'), (8, '냄비'), (8, '주걱'), (8, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (9, '냄비'), (9, '프라이팬'), (9, '주걱'), (9, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (10, '팬'), (10, '주걱'), (10, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (11, '냄비'), (11, '그릇'), (11, '숟가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (12, '튀김팬'), (12, '볼'), (12, '숟가락'), (12, '종이 타올');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (13, '팬'), (13, '그릇'), (13, '숟가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (14, '팬'), (14, '그릇'), (14, '칼'), (14, '숟가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (15, '타코야끼 팬'), (15, '볼'), (15, '숟가락'), (15, '젓가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (16, '팬'), (16, '볼'), (16, '숟가락'), (16, '주걱');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (17, '팬'), (17, '중국식 국자'), (17, '칼'), (17, '도마');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (18, '팬'), (18, '중국식 국자'), (18, '칼'), (18, '도마');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (19, '팬'), (19, '중국식 국자'), (19, '칼'), (19, '도마');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (20, '팬'), (20, '볼'), (20, '칼'), (20, '도마'), (20, '체');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (21, '꼬치'), (21, '냄비'), (21, '수저'), (21, '그릇');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (22, '냄비'), (22, '칼'), (22, '도마'), (22, '숟가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (23, '프라이팬'), (23, '도마'), (23, '칼'), (23, '김밥말이'), (23, '숟가락');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (24, '냄비'), (24, '채반'), (24, '도마'), (24, '칼'), (24, '볼');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (25, '프라이팬'), (25, '도마'), (25, '칼'), (25, '볼');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (26, '냄비'), (26, '스푼'), (26, '그릴'), (26, '브러쉬');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (27, '프라이팬'), (27, '꼬치'), (27, '브러쉬'), (27, '접시');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (28, '볼'), (28, '프라이팬'), (28, '스푼'), (28, '종이타월');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (29, '믹서기'), (29, '볼'), (29, '스푼'), (29, '아이스크림 틀');
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (30, '믹서기'), (30, '볼'), (30, '냉동용기');


-- Recipe Guide Links
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (1, 'http://www.10000recipe.com/recipe/6862036');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (2, 'http://www.10000recipe.com/recipe/4563047');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (3, 'http://www.10000recipe.com/recipe/6961803#google_vignette');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (4, 'http://www.10000recipe.com/recipe/6884026');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (5, 'http://www.10000recipe.com/recipe/6866282');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (6, 'http://blog.naver.com/peony_blossom/223476759495?isInf=true&trackingCode=nx');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (7, 'http://blog.naver.com/aza1104/223545717081');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (8, 'http://blog.naver.com/roor211/222596400754');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (9, 'http://post.naver.com/viewer/postView.nhn?volumeNo=31148158&memberNo=35667439&vType=VERTICAL');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (10, 'http://www.10000recipe.com/recipe/6948251#google_vignette');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (11, 'http://www.10000recipe.com/recipe/6937803');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (12, 'http://blog.naver.com/tganom/223479302800');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (13, 'http://blog.naver.com/bsy615/223542344295');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (14, 'http://blog.naver.com/jaura33/223513213193');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (15, 'http://blog.naver.com/cagycagy/223134283708?isInf=true&trackingCode=nx');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (16, 'http://blog.naver.com/mynamco/223447540567');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (17, 'http://blog.naver.com/tkfkd1219-/223371453593');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (18, 'http://blog.naver.com/tkfkd1219-/223371453593');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (19, 'http://blog.naver.com/weddinghsje/223104398157');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (20, 'http://blog.naver.com/bolskitchen/223474688453');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (21, 'http://post.naver.com/viewer/postView.nhn?volumeNo=30465474&memberNo=35667439&vType=VERTICAL');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (22, 'http://www.10000recipe.com/recipe/6922391');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (23, 'http://www.10000recipe.com/recipe/6892010');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (24, 'http://www.10000recipe.com/recipe/765786');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (25, 'http://www.10000recipe.com/recipe/6891719');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (26, 'http://www.10000recipe.com/recipe/6829689');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (27, 'http://www.10000recipe.com/recipe/6894810');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (28, 'http://www.10000recipe.com/recipe/6923495');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (29, 'http://blog.naver.com/pinksummer88/223546464430');
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (30, 'http://www.10000recipe.com/recipe/6872518');


-- Recipe Cooking Steps
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (1, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2329/cb10c428-a67a-49e0-816c-7e2010101ff8.jpg?size=800x800', '손질된 멍게는 먹기 좋은 크기로 잘라주세요.'),
    (1, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2329/755833d4-f455-4d2b-b23d-b5ced49e8bf8.jpg?size=800x800', '쪽파와 청양고추는 송송 썰어주세요.'),
    (1, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2329/e5b202b0-04ee-403a-8683-9089311c47bf.jpg?size=800x800', '볼에 멍게, 양념 재료, 쪽파, 청양고추를 넣어 섞어주세요.그릇에 밥을 담은 후 멍게를 듬뿍 올려주세요.  (tip. 기호에 따라 김가루를 뿌려 맛있게 즐겨주세요) ');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (2, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2344/377fab99-02d8-47d9-bf33-f6fe2804c5b4.jpg?size=800x800', '양파는 곱게 다지고 홍고추는 송송 썰어 준비해 주세요. 두부는 칼등으로 으깨 주세요.(tip. 수분이 많은 두부의 경우 물기를 꽉 짜주세요)'),
    (2, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2344/c9879a51-bb2d-4646-8ee3-ae45ec309331.jpg?size=800x800', '볼에 다진 돼지고기와 양파, 두부, 계란 흰자, 부침가루 1큰술과 양념 재료를 넣고 버무려 완성해 주세요. (tip. 계란 노른자는 반죽 재료로 써주세요)'),
    (2, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2344/8dd2cce1-428a-49be-829f-4eed1fc85bc4.jpg?size=800x800', '아삭이고추는 길게 반으로 갈라 속을 털어주세요.'),
    (2, 4, 'https://static.wtable.co.kr/image/production/service/recipe/2344/062361b1-d679-4967-84a3-e320b7139a8e.jpg?size=800x800', '아삭이고추의 안쪽 부분에 튀김가루를 묻힌 후 속 재료를 넣어주세요.(tip. 속 재료를 꾹꾹 눌러 잘 고정시켜주세요)'),
    (2, 5, 'https://static.wtable.co.kr/image/production/service/recipe/2344/0c70ff68-1513-4b67-bb30-968ef20d09fb.jpg?size=800x800', '아삭이고추 윗면에 부침가루를 살짝 뿌린 후 반죽 면에만 달걀물을 묻혀주세요.'),
    (2, 6, 'https://static.wtable.co.kr/image/production/service/recipe/2344/68fd28b7-3c34-4791-9a66-48c5016cc480.jpg?size=800x800', '법랑 접시에 유산지를 깔고 식용유를 충분히 두른 후 고추의 반죽 부분이 아래를 향하도록 올려주세요. 법랑 접시를 3단에 넣고 광파오븐 수동 요리 <구이>에서 10분간 구워주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
        (3, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2328/34327905-6c95-48d4-81a7-a972fa9cdb10.jpg?size=800x800', '미역은 물에 담가 10분 정도 불려주세요. 불린 미역은 먹기 좋게 썬 후 물기를 제거해 주세요.'),
        (3, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2328/6dfc6a37-97e8-401a-ba8f-d5a2c2ff90db.jpg?size=800x800', '냄비에 참기름을 두르고 미역을 볶아주세요. 미역이 부드러워지면 국간장을 넣고 2분정도 더 볶아주세요.'),
        (3, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2328/92ca7e7a-2a1b-40c5-ad38-6839995b598a.jpg?size=800x800', '다시마 육수를 넣고 ⅔ 정도 넣고 10분 정도 끓여주세요.'),
        (3, 4, 'https://static.wtable.co.kr/image/production/service/recipe/2328/04c8e08d-be70-4f74-add7-5e453e56411f.jpg?size=800x800', '나머지 다시마 육수를 모두 넣고 성게알과 액젓을 넣어 5분 정도 더 끓여주세요. 부족한 간은 소금으로 맞춰주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (4, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2137/a7892940-ee37-443a-a1fe-efbf8ecafc4f.jpg?size=800x800', '김치는 꼭지를 붙인 채 3등분하여 썰어주세요. 볼에 양념 재료를 넣고 섞어 양념장을 만들어주세요.(tip 김치의 숙성 정도에 따라 설탕을 가감해주세요)'),
    (4, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2137/159880a4-6b46-4706-b7c9-e33801ab419f.jpg?size=800x800', '목살은 큼직하게 자르고, 양파는 굵게 채썰어주세요. 대파와 고추는 어슷하게 썰어주세요. '),
    (4, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2137/4296e735-2430-4e4b-b7ba-88aef73f3425.jpg?size=800x800', '냄비에 김치를 담고 목살과 양파를 올린 후 양념장과 멸치다시마육수, 된장을 넣고 끓기 시작하면 불을 중간불로 줄여 1시간 20분 정도 끓여주세요.(tip 끓이는 중간 뚜껑을 열어 김치가 바닥에 눌지 않도록 저어가며 끓여주세요)(tip 부족한 간은 김치국물과 소금을 가감해서 조절해주세요)');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (5, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1532/56188a8f-6e9f-4fd0-a95b-6e536f72197b.jpg?size=800x800', '홍합 수염을 제거하고 깨끗하게 세척해주세요.'),
    (5, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1532/fbdc73b9-ac57-40e9-ac99-d120fb894a67.jpg?size=800x800', '양파는 반으로 자르고 대파는 6cm 크기로 썰어주세요.'),
    (5, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1532/d5fc6ea6-393c-488e-9709-c9744482e066.jpg?size=800x800', '청양고추와 홍고추는 어슷하게 썰어주세요.'),
    (5, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1532/ec88d022-8590-4cce-96cb-809813a08e82.jpg?size=800x800', '냄비에 홍합, 양파, 대파, 물을 넣고 5분 정도 끓인다. 거품이 생기면 걷어내주세요.'),
    (5, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1532/0e48dec3-50b2-4950-8d39-a76e7aeeb493.jpg?size=800x800', '양파가 말랑말랑해질 때까지 5분 정도 더 끓인 뒤 양파와 대파를 건져내주세요. *Tip. 오래 끓여서 물이 줄어들면 250ml 정도 더 넣어주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (6, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1268/dab0d103-15e4-4bfd-999d-5cd10ab9cc5a.jpg?size=800x800', '냄비에 꽃소금을 한 줌 넣고 물을 끓인 후 스파게티 면을 5분간 삶아주세요.'),
    (6, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1268/cb5c9685-006c-4fa1-b288-d9c2841a60a8.jpg?size=800x800', '양파와 차이브는 다지고 소금, 후추, 간마늘, 송로 오일을 육회용 고기와 함께 버무려 주세요.'),
    (6, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1268/5d568dac-0f4c-4d2b-91d4-2f74579eb532.jpg?size=800x800', '팬에 올리브유를 두르고 마늘을 손으로 으깬 후 천천히 구워 향을 낸 뒤 페페론치노를 넣어 살짝 더 볶아주세요.'),
    (6, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1268/d6a3925b-e131-4fcb-bacc-7d059d168926.jpg?size=800x800', '삶아낸 면과 치킨 스톡을 넣어 스톡의 양이 반으로 줄어들 때까지 계속 비벼 주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (7, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2681/5f280f16-8fe9-43cd-a0e7-b2e7f942e74a.jpg?size=800x800', '카다이프 면을 잘라 준비해주세요. 팬에 버터를 녹인 후 카다이프를 넣고 노릇한 황금색이 나도록 볶아주세요. '),
    (7, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2681/1cf6eb17-794b-4637-b840-30daab38e365.jpg?size=800x800', '카다이프면에 피스타치오 스프레드를 넣고 섞어주세요. '),
    (7, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2681/a2bba7f6-4330-4fa3-b88a-ac41af48ebb9.jpg?size=800x800', '핑크 초콜릿을 중탕 한 후 초콜릿 틀에 뿌린 후 냉장고에서 5분간 굳혀주세요. '),
    (7, 4, 'https://static.wtable.co.kr/image/production/service/recipe/2681/b29a4751-afbb-4e50-adce-40b91e200eba.jpg?size=800x800', '다크 초콜릿을 중탕 한 후 초콜릿 틀에 부어 골고루 펼친 후 남은 초콜릿을 덜어내고 냉장고에서 15분 정도 굳혀주세요.'),
    (7, 5, 'https://static.wtable.co.kr/image/production/service/recipe/2681/2654f28a-25ee-4923-b2d0-3a60da3a388f.jpg?size=800x800', '섞어둔 카다이프면과 피스타치오 스프레드를 넣어 평평하게 다진 후 나머지 초콜릿을 부어 평평하게 펼 친 후 냉장고에서 15분간 굳혀주세요. ');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (8, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1412/56958a49-402f-4893-9ce4-336989a072e5.jpg?size=800x800', '당근, 셀러리, 양파는 잘게 다져주세요. 마늘은 편 썰어주세요.'),
    (8, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1412/cdbf3403-a9d3-4c3e-a529-9fbfd009e888.jpg?size=800x800', '달군 팬에 올리브오일을 두른 후 당근, 셀러리, 양파를 넣어 볶아주세요. 볶은 야채는 접시에 덜어주세요.'),
    (8, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1412/1bf673d7-8b26-4e63-ad79-deb0d4103cc0.jpg?size=800x800', '야채를 볶은 팬에 올리브오일을 두른 후 마늘을 넣어 볶다가 간 소고기를 넣고 소금, 후추를 뿌려 바싹 볶아주세요.'),
    (8, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1412/2fdab193-35b0-4daf-be3c-356a14ac694f.jpg?size=800x800', '고기가 다 익으면 볶아둔 야채와 건 바질, 토마토소스를 넣어 볶아주세요.'),
    (8, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1412/fbca6fa1-2f16-451c-bb5b-f0b20c5bcf82.jpg?size=800x800', '우유를 조금씩 넣어가며 30분 정도 끓여 라구소스를 완성해 주세요.'),
    (8, 6, 'https://static.wtable.co.kr/image/production/service/recipe/1412/1efc97d2-b57f-4cc7-9cfe-85f17f5bb92b.jpg?size=800x800', '라자냐 그릇에 완성된 소스를 1~2큰술 정도 펼친 후 라자냐를 깔고 그 위에 라구소스-라자냐-슈레드 치즈- 파마산 치즈 순서대로 층층이 쌓은 후 종이호일을 덮어주세요.(tip. 가로 25cm 세로 17cm 높이 4cm 법랑 용기를 사용했어요)'),
    (8, 7, 'https://static.wtable.co.kr/image/production/service/recipe/1412/7cff06bc-fd64-4f91-aa3a-83975bcd2afb.jpg?size=800x800', '200도로 예열한 오븐에서 약 20분간 굽고 종이호일을 벗기고 5분 정도 더 구워 주세요.(tip. 10분 정도 식혀두었다가 썰어주세요)');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (9, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1012/8c185708-a3f4-4917-89c7-442157a3caba.jpg?size=800x800', '끓는 물에 소금과 면을 넣고 10~12분간 삶아낸 후 채반에 덜어 주세요.'),
    (9, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1012/e5aaca94-0345-4d72-8e7d-f98f66f01076.jpg?size=800x800', '달군 팬에 기름을 두른 후 새우를 넣어 소금, 후춧가루로 간을 하여 볶아주세요.'),
    (9, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1012/850b35c3-387a-4fff-a64c-2b49a150fc26.jpg?size=800x800', '볶은 새우에 고수 페스토와 생크림을 넣어 약불에서 섞어주세요. 기포가 올라오면 파스타면을 넣고 섞어주세요.(기호에 따라 페스토 양을 가감해 주세요)');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (10, 1, 'https://static.wtable.co.kr/image/production/service/recipe/992/9606e523-540d-459d-80a7-28ea78d69e85.jpg?size=800x800', '손질한 새우는 키친타월에 올려 물기를 제거해 주세요. 시금치는 깨끗이 씻어 먹기 좋은 크기로 찢어 주세요.  방울토마토는 반으로 잘라주세요.(손질이 되어 있지 않은 새우는 수염을 자르고 내장을 이쑤시개로 빼서 손질 후 사용해 주세요.)'),
    (10, 2, 'https://static.wtable.co.kr/image/production/service/recipe/992/ecd6161c-7b7c-4de2-b038-ca32137e2faf.jpg?size=800x800', '마늘은 편으로 썰고, 양파는 굵게 다져주세요. 페페론치노는 굵게 다져주세요.'),
    (10, 3, 'https://static.wtable.co.kr/image/production/service/recipe/992/6c7100b3-79d9-4d66-993e-ab9cccf7fc5e.jpg?size=800x800', '달군 팬에 올리브 오일을 두른 후 마늘과 양파, 페페론치노를 넣어 노릇하게 볶아주세요. 토마토와 시금치를 넣어 1분 정도 볶아주세요.'),
    (10, 4, 'https://static.wtable.co.kr/image/production/service/recipe/992/6d5f7728-5de8-4ced-af45-33b7d3c80413.jpg?size=800x800', '스파게티와 물, 소금, 후춧가루, 치킨스톡을 넣어 7분 정도 익혀주세요. 새우를 넣고 뒤집어 가며 2~3분간 익힌 후 불을 끄고 올리브오일을 2큰술 정도 넣어 잘 섞어주세요.(tip. 스파게티면이 들어갈 수 있는 크기의 팬을 사용해주세요. 팬이 작다면 스파게티 면을 반으로 잘라 사용하셔도 좋아요.)');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (11, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1675/45061f7c-f738-48a1-88aa-e5f0e932b775.jpg?size=800x800', '생수에 쯔유를 넣고 잘 저어준 후 냉동실에서 2~3시간 정도 얼려 시원하게 준비해 주세요.'),
    (11, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1675/311da772-790d-40b5-954f-29725eeb4b38.jpg?size=800x800', '냄비에 기름을 붓고 180도로 달궈주세요. 볼에 튀김가루와 찬물을 넣고 섞어주세요.'),
    (11, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1675/8c49c8ee-4f8c-4159-96f1-e826d4768925.jpg?size=800x800', '고추는 반으로 갈라 씨를 빼고 튀김옷을 입혀 바삭하게 튀겨주세요.'),
    (11, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1675/9842da02-62b2-4b54-afe5-dc5b1c9c2d40.jpg?size=800x800', '쪽파는 송송 썰고 김은 가위로 얇게 잘라주세요.'),
    (11, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1675/ce454932-01fa-4867-92f1-1410e8b8b720.jpg?size=800x800', '끓는 물에 우동면을 넣고 1분 데친 후 얼음물에 담가 헹궈주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (12, 1, 'https://static.wtable.co.kr/image/production/service/recipe/719/2a772599-275b-4959-9a86-677a537d869f.jpg?size=800x800', '새우는 깨끗이 씻어 머리와 내장, 껍질을 제거해주세요. 새우살 안쪽면에 칼집을 내어 곧게 펴주세요.'),
    (12, 2, 'https://static.wtable.co.kr/image/production/service/recipe/719/540a41f2-9c79-4cc1-99d1-d06c5e23aaa7.jpg?size=800x800', '단호박은 껍질째 깨끗이 씻어, 속을 판 후 웨지모양으로 길게 잘라주세요. 연근은 껍질을 벗기고 0.5cm두께로 썰어주세요. 표고버섯은 밑동을 살짝 잘라주세요. 꽈리고추는 깨끗이 씻어주세요.'),
    (12, 3, 'https://static.wtable.co.kr/image/production/service/recipe/719/248881f0-237f-46ad-bb8f-c27fef085a78.jpg?size=800x800', '냄비에 가쓰오부시를 제외한 소스재료를 넣고 중불에서 약 3분간 끓이다가 가쓰오부시를 넣은 후 불을 끄고 체에 걸러주세요.'),
    (12, 4, 'https://static.wtable.co.kr/image/production/service/recipe/719/cd8a3fb9-5c60-4e0a-9389-10ff323a808e.jpg?size=800x800', '볼에 튀김옷 재료를 넣어 젓가락으로 덩어리가 지지 않게 저어주세요.(tip. 반죽을 탄산수로 만들게 되면 훨씬 바삭한 튀김을 만들 수 있어요. 탄산수 대신 맥주나 얼음을 넣어 만드셔도 좋아요)'),
    (12, 5, 'https://static.wtable.co.kr/image/production/service/recipe/719/6338e9d4-e0e1-4b9f-9b94-a476b29dd1df.jpg?size=800x800', '물기를 제거한 생새우와 채소들에 튀김가루를 얇게 묻혀 털어낸 후, 섞어 놓은 튀김반죽을 입혀주세요.'),
    (12, 6, 'https://static.wtable.co.kr/image/production/service/recipe/719/d4e1c742-b303-45c7-8047-bf0cae4871d8.jpg?size=800x800', '170~180도로 달군 기름에 튀김옷을 입힌 새우와 야채들을 바삭하게 튀겨주세요.(tip. 새우와 채소를 튀길 때 젓가락으로 잡아 살짝 흔들어주세요. 그 때 생기는 튀김가루들을 붙여주면 튀김꽃이 핀 바삭한 튀김을 만들 수 있답니다)'),
    (12, 7, 'https://static.wtable.co.kr/image/production/service/recipe/719/b65383be-3298-4e19-80eb-c974baf3fc17.jpg?size=800x800', '그릇에 밥을 담은 후 소스를 2큰술 정도 둘러주세요. 튀겨낸 튀김들을 보기 좋게 얹어주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (13, 1, 'https://static.wtable.co.kr/image/production/service/recipe/629/20c5967c-4b88-45ef-9fd8-2fc48daf4105.jpg?size=800x800', '손질한 장어는 껍질의 미끄러운 부분을 칼등으로 긁어낸 후 찬물에 씻고 키친타월로 물기를 닦은 후 장어밑간재료에 10분 정도 재워주세요.밑간한 장어를 김 오른 찜통에서 3~5분 정도 쪄주세요.(장어의 두께에 따라 찌는 시간을 조절해주세요.)'),
    (13, 2, 'https://static.wtable.co.kr/image/production/service/recipe/629/aae7d2a8-9258-4a3b-ac5b-63e3fc8273ff.jpg?size=800x800', '달군 팬에 야채를 태우듯 굽고, 냄비에 구운 야채와 간장소스 재료를 넣은 후 끓으면 불을 중약불로 줄여 15분 정도 끓여 체에 걸러주세요.'),
    (13, 3, 'https://static.wtable.co.kr/image/production/service/recipe/629/8afbd054-8d20-45ac-8785-e935aa68b4af.jpg?size=800x800', '생강은 곱게 채를 썬 후 찬물에 5분 정도 담갔다가 물기를 빼주세요. 실파는 송송 썰어주세요.'),
    (13, 4, 'https://static.wtable.co.kr/image/production/service/recipe/629/168a156e-a7d7-4f4a-8201-60afe50f755c.jpg?size=800x800', '팬에 장어를 넣고 간장소스를 발라가며 구운 후 한 입 크기로 썰어주세요.(팬에 장어의 껍질쪽을 먼저 올려 구워주세요.)');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (14, 1, 'https://static.wtable.co.kr/image/production/service/recipe/996/9885139a-c159-4400-a98d-d73cc906bced.jpg?size=800x800', '아보카도는 씨앗에 칼날이 닿도록 칼집을 넣은 후 양쪽을 잡고 서로 반대 방향으로 비틀어 자른 후, 씨앗과 과육을 분리해주세요. 껍질을 벗겨 일정한 간격으로 슬라이스해 일렬로 돌돌 말아주세요. 연어는 사방 2cm 크기의 큐브 모양으로 잘라주세요.'),
    (14, 2, 'https://static.wtable.co.kr/image/production/service/recipe/996/67de391f-2d35-4f56-8431-9abc5fa9342c.jpg?size=800x800', '볼에 고추냉이 간장 소스 재료를 섞은 후 연어를 넣어 골고루 섞어주세요.'),
    (14, 3, 'https://static.wtable.co.kr/image/production/service/recipe/996/e11160c9-1b5d-49a4-8059-50782470882a.jpg?size=800x800', '그릇에 밥과 밥 밑간 재료를 넣어 밑간을 한 후 재워 둔 연어를 얹고 아보카도를 가운데에 올려주세요.'),
    (14, 4, 'https://static.wtable.co.kr/image/production/service/recipe/996/0cee147b-1d83-4800-a6f3-a0f0cf866030.jpg?size=800x800', '가운데에 달걀 노른자를 올린 후 쪽파와 통깨, 후춧가루를 뿌려주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (15, 1, 'https://static.wtable.co.kr/image/production/service/recipe/948/9c731ce5-46c4-424c-9b02-932ad64b2830.jpg?size=800x800', '반죽재료를 볼에 넣어 섞어주세요. 문어는 작게 썰고 쪽파는 송송 썰어주세요.'),
    (15, 2, 'https://static.wtable.co.kr/image/production/service/recipe/948/bfcb021c-6290-4200-96bf-a6a2692a1a73.jpg?size=800x800', '타코야끼 틀에 열이 올라오면 기름을 칠하고 반죽을 부어주세요. 문어와 쪽파를 넣고 익혀주세요.'),
    (15, 3, 'https://static.wtable.co.kr/image/production/service/recipe/948/64d4d049-14a3-4c87-88cb-aff676bcce47.jpg?size=800x800', '반죽이 어느 정도 익으면 젓가락으로 돌려가며 모양을 잡아주세요. ');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (16, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1298/c9734960-4424-49aa-91c6-55ada6059d8d.jpg?size=800x800', '피 반죽은 준비해두고, 부추와 대파는 다져서 볼에 담아주세요.'),
    (16, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1298/579f0cef-3ff7-4325-9fcd-b3a58a1611c2.jpg?size=800x800', '순서 1에 분량의 소스를 넣고 치대주세요.'),
    (16, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1298/f8f3a715-e020-4b1a-89ca-62a0d2f2d0e3.jpg?size=800x800', '동그란 피를 만들고 중앙에 속재료를 담아주세요.'),
    (16, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1298/cb3e2c3f-66bc-49bb-9a6d-600f99b9a5ad.jpg?size=800x800', '끝에서 0.5cm만큼 눌러서 모양 만들기를 시작합니다.'),
    (16, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1298/0ab709e3-316f-4d08-bd8a-8b25a4299730.jpg?size=800x800', '왼쪽 검지로 속을 밀고 오른쪽 검지로 눌러서 모양을 만들어주세요.'),
    (16, 6, 'https://static.wtable.co.kr/image/production/service/recipe/1298/586a6daf-0721-48ed-b4f6-77920621b691.jpg?size=800x800', '양 끝을 눌러서 모양을 다듬어주세요.'),
    (16, 7, 'https://static.wtable.co.kr/image/production/service/recipe/1298/f8843957-26c2-4388-9ef8-01267fb939fb.jpg?size=800x800', '찜기에서 70% 정도만 익을 만큼 쪄주세요.'),
    (16, 8, 'https://static.wtable.co.kr/image/production/service/recipe/1298/ae69b315-1f2a-47d1-a559-a9fce85bfdca.jpg?size=800x800', '분량의 재료를 골고루 섞어서 눈꽃즙을 만들어 주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (17, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1217/f7fc8ad2-3ff2-47a3-b138-fa860dee46e5.jpg?size=800x800', '양파와 호박은 깍둑썰기하고 돼지고기와 생강, 청양고추는 잘게 썰어 부추와 함께 준비해 주세요.'),
    (17, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1217/1e2ef32e-7378-471a-9820-209702ccc088.jpg?size=800x800', '오징어는 껍질을 벗겨 한입 크기로 썰고 알새우도 씻어서 준비해 주세요.'),
    (17, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1217/38356a87-957c-425f-a553-380aaae3f32d.jpg?size=800x800', '달궈진 팬에 식용유를 두르고 돼지고기를 살짝 볶은 후 다진 생강과 청양고추를 함께 넣고 볶아서 향을 내주세요.'),
    (17, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1217/c7f9df49-6d0a-402d-8c96-5b03a8b94dfc.jpg?size=800x800', '순서 3의 고기가 익으면 양파와 호박을 넣어 충분히 익혀주고 볶은 춘장을 넣어 잘 섞어줍니다.'),
    (17, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1217/a3a4d75b-3d25-403f-abbf-008d8f76c30d.jpg?size=800x800', '순서 4에 물 1컵을 붓고 간장, 설탕, 치킨파우더를 넣어 간을 맞춰주세요. 기호에 따라 연두 청양초를 넣어 매콤한 맛을 더 살려줍니다. 그 다음 순서 2의 오징어와 알새우를 넣고 끓여주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (18, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1220/c98161ba-29da-45b8-8f85-17f5c35a0d96.jpg?size=800x800', '양파, 호박, 죽순, 대파는 채 썰고, 목이버섯은 뜨거운 물에 담가 불린 뒤 청경채와 함께 먹기 좋게 썰어놓습니다.'),
    (18, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1220/224f86c1-ea45-4dd9-ab9a-33ce129a74f0.jpg?size=800x800', '오징어는 안쪽에 칼집을 넣어 채 썰고, 새우는 등 부분의 내장을 제거하고 손질하여 홍합과 함께 준비해 주세요.'),
    (18, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1220/9d13d169-da00-4811-ae4b-4c2c26308d49.jpg?size=800x800', '팬에 식용유를 두르고 다진 마늘, 다진 생강, 대파를 두반장과 함께 볶아 향을 내주세요.'),
    (18, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1220/56ada9cc-7d91-489f-8ec0-6956c1aa0dad.jpg?size=800x800', '순서 3에 1의 채소를 넣어 볶으면서 고춧가루를 넣고 채소에 잘 흡수되도록 계속 볶아주세요.'),
    (18, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1220/d89c1647-5f04-4903-8379-1b2c02ae4d16.jpg?size=800x800', '순서 4에 물을 붓고 2의 해물을 넣어 끓여주세요. 육수가 잘 끓어오르면 분량의 물, 치킨파우더, 굴소스, 설탕, 소금, 후춧가루 를 넣어 양념을 해주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (19, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1213/c56695bd-caf3-46a2-bb6f-e16b5ba9fe1d.jpg?size=800x800', '중국 당면은 미리 찬물에 30분간 담궈서 불려놔 주세요.'),
    (19, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1213/041d6914-900e-4917-85aa-577439563161.jpg?size=800x800', '모든 채소와 버섯은 채 썰고, 마늘, 대파는 다져서 준비해 주세요.'),
    (19, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1213/47bcc79b-44aa-4fad-b997-3fffdc854424.jpg?size=800x800', '고기는 채 썰어 마리네이드 한 후 기름에 볶아서 준비합니다.'),
    (19, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1213/0f6590f6-3923-4c5d-b1e2-9c8d4509b7bf.jpg?size=800x800', '분량의 재료를 골고루 섞어서 소스를 만들어 주세요.팬에 기름을 두르고 대파, 마늘을 넣어 향을 내주세요. 모든 채소와 고기를 넣고 볶은 뒤 순서 4의 소스를 넣어 볶고 마지막에 당면을 넣고 마무리하면 완성이랍니다.*Tip. 중국 당면은 전분을 원료로 만들어 말린 면으로, 한국의 당면과 달리 두껍고 탱탱한 게 특징이예요!');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (20, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1224/ce60d5fb-e1a9-4107-b42d-c39495384bcf.jpg?size=800x800', '돼지고기 등심은 4x5cm 크기로 0.5cm 두께로 썰어 칼등으로 살짝 두들겨 준비해 주세요.'),
    (20, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1224/16d9a3c0-ebea-4004-9c8b-608de402333f.jpg?size=800x800', '분량의 재료를 골고루 섞어서 튀김 반죽을 만들어 순서 1의 돼지고기를 버무려 주세요.'),
    (20, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1224/916eccaa-d051-4bd9-8f34-8bca47c7a14d.jpg?size=800x800', '분량의 재료를 골고루 섞어서 소스를 만들어 주세요..'),
    (20, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1224/cbf4ac94-cb00-43b1-9537-1c589393a9ab.jpg?size=800x800', '순서 2의 튀김 반죽을 입힌 돼지고기를 가열한 기름에 하나씩 넣어 바삭하게 튀겨 주세요.'),
    (20, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1224/4d959f9a-a113-4a36-a9ef-af3c6fdba84c.jpg?size=800x800', '뜨거운 팬에 식용유을 두르고 다진 생강을 볶아 향을 내준 뒤 순서 3의 소스를 넣고 끓여주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (21, 1, 'https://static.wtable.co.kr/image/production/service/recipe/972/e3ce099f-2575-4762-b6ba-e7e328de70f5.jpg?size=800x800', '어묵은 먹기 좋게 2장씩 꼬치에 꽂아주세요.'),
    (21, 2, 'https://static.wtable.co.kr/image/production/service/recipe/972/23daf027-1c94-4d95-96c9-cdc4a337ef18.jpg?size=800x800', '끓는 물에 어묵 꼬치를 5분 정도 끓여주세요.'),
    (21, 3, 'https://static.wtable.co.kr/image/production/service/recipe/972/48f36b09-dc90-4fe6-8b06-4454eba10830.jpg?size=800x800', '볼에 소스 재료를 섞어주세요.'),
    (21, 4, 'https://static.wtable.co.kr/image/production/service/recipe/972/34e6eb8d-3cd2-4bf9-b44c-ddfdc08547b3.jpg?size=800x800', '어묵 꼬치에 소스를 발라주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (22, 1, 'https://static.wtable.co.kr/image/production/service/recipe/765/64869f89-fa3f-4d73-a8f2-6f0bff769dbd.jpg?size=800x800', '볼에 차돌박이와 밑간 재료를 넣어 버무려 주세요.(tip. 차돌박이에 밑간을 하면 잡내를 잡아줘서 좋아요.)'),
    (22, 2, 'https://static.wtable.co.kr/image/production/service/recipe/765/59cb7dac-96e9-4475-aff1-ce291365dbed.jpg?size=800x800', '떡볶이 떡은 찬물에 10분정도 담가두고, 어묵은 삼각형의 먹기 좋은 크기로, 대파는 어슷하게 썰어주세요. 양배추는 한입크기로 썰고, 깻잎은 돌돌 말아서 채 썰어 주세요.'),
    (22, 3, 'https://static.wtable.co.kr/image/production/service/recipe/765/43fb350a-4585-4bc3-9b4d-18f844214bec.jpg?size=800x800', '달군 팬에 밑간 한 차돌박이를 노릇하게 구워주세요.'),
    (22, 4, 'https://static.wtable.co.kr/image/production/service/recipe/765/2afe1480-013d-4612-b90b-c030b60c3ac9.jpg?size=800x800', '냄비에 국물재료를 넣고 센 불에 올려 끓어오르면 떡볶이 떡을 넣고 3분 정도 끓여줍니다.'),
    (22, 5, 'https://static.wtable.co.kr/image/production/service/recipe/765/aeac387e-7972-4964-a261-57ab034631a1.jpg?size=800x800', '떡볶이 떡이 익으면 어묵과 양배추를 넣어 2~3분정도 끓인 후 삶은 달걀, 파를 넣어주세요. 구워 둔 차돌박이를 얹은 후 한 번 끓어오르면 국물의 농도를 맞춘 후 깻잎채를 얹고 불을 꺼주세요.그릇에 담고 통깨를 뿌려 맛있게 즐겨주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (23, 1, 'https://static.wtable.co.kr/image/production/service/recipe/605/2574b4e5-2911-4d0a-b1b6-2b460a1f657e.jpg?size=800x800', '적채는 얇게 채를 썰고 식초물 재료를 전자레인지에 1분 정도 돌려 설탕 입자가 녹으면 채썬 적채를 담가 20분정도 절여주세요. 당근과 오이는 곱게 채를 썰어주세요.(적채는 김밥을 쌀 때에는 물기를 꽉 짜서 사용해주세요.)'),
    (23, 2, 'https://static.wtable.co.kr/image/production/service/recipe/605/ba7d47f3-63a7-453a-af6d-89769bfdd0e7.jpg?size=800x800', '쇠고기는 키친타월에 올려 핏물을 제거하고, 먹기 좋은 크기로 썰어 불고기 양념에 10분정도 재워주세요. '),
    (23, 3, 'https://static.wtable.co.kr/image/production/service/recipe/605/f68a2268-a1c3-4b04-a3e6-699ba560c34e.jpg?size=800x800', '달군 팬에 기름을 두르고 당근채를 넣은 후 약간의 소금으로 밑간 해 볶아주세요. 팬을 한 번 닦고 쇠고기를 넣은 후 물기가 없어질 때까지 볶아주세요. '),
    (23, 4, 'https://static.wtable.co.kr/image/production/service/recipe/605/4dde8e2d-f0c6-4270-bb91-d5531fea768e.jpg?size=800x800', '고슬고슬한 밥에 밥양념 재료를 넣고 밥에 밑간을 해주세요.'),
    (23, 5, 'https://static.wtable.co.kr/image/production/service/recipe/605/d898f8c5-80d7-4f1f-b913-f16d924119ba.jpg?size=800x800', '김발 위에 김을 올리고, 밥을 고르게 편 후 상추-불고기-오이채-당근채-적채절임을 올리고 김발을 이용해서 돌돌 말아주세요.먹기 좋은 크기로 잘라 불고기 김밥을 즐겨주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (24, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1033/2c8a8695-2b0c-4711-83e4-7027b9b7d647.jpg?size=800x800', '쫄면은 가닥가닥 떼어 주세요. 볼에 양념 재료를 넣어 섞어주세요.(만든 양념장은 냉장고에서 하루 정도 숙성하면 맛이 더 깊어져요)'),
    (24, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1033/932f341c-74f3-4e28-9694-74ffcc558c35.jpg?size=800x800', '끓는물에 콩나물을 넣어 1분 정도 데친 후 얼음물에 담가 식히고 채반에 받쳐 물기를 빼주세요.'),
    (24, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1033/a39bc679-63a7-4703-bf08-6de7b52896fc.jpg?size=800x800', '끓는 물에 쫄면을 넣고 저어가며 3~4분간 삶아주세요. (물이 끓어오르면 찬물을 반 컵 정도 넣어주세요)'),
    (24, 4, 'https://static.wtable.co.kr/image/production/service/recipe/1033/7d8a3aaa-5eff-4b38-8174-095b2901198c.jpg?size=800x800', '찬물에 쫄면을 여러 번 씻어 전분기를 없애고 채반에 받쳐 물기를 빼주세요.'),
    (24, 5, 'https://static.wtable.co.kr/image/production/service/recipe/1033/7e8eba74-6439-427d-b3ff-6ad7da13e405.jpg?size=800x800', '볼에 콩나물, 쫄면, 양념장을 넣고 버무려 주세요. 삶은 달걀은 반으로 잘라주세요.그릇에 쫄면을 담고 삶은 달걀과 통깨를 올려 완성해주세요.  (기호에 따라 채를 썬 오이, 양배추 등을 곁들여도 좋아요)');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (25, 1, 'https://static.wtable.co.kr/image/production/service/recipe/886/e1842cd2-c93f-4025-954c-e397a77adc78.jpg?size=800x800', '홍피망과 청피망, 양파를 잘게 썰고, 볼에 소스 재료를 넣고 섞어주세요.'),
    (25, 2, 'https://static.wtable.co.kr/image/production/service/recipe/886/9fbf13b2-ed6d-4b0c-b7d4-cd37c17e7f46.jpg?size=800x800', '고팬에 기름을 넣고 170도로 달군 후 김말이를 넣어 바삭하게 튀겨주세요.'),
    (25, 3, 'https://static.wtable.co.kr/image/production/service/recipe/886/3411043f-9c04-492e-be56-56b712999acd.jpg?size=800x800', '달군 팬에 고추기름을 두르고 양파를 볶다가 소스 재료를 넣고 끓여주세요.'),
    (25, 4, 'https://static.wtable.co.kr/image/production/service/recipe/886/4946dcc0-1d99-47fb-b17f-e174708e4816.jpg?size=800x800', '소스가 끓으면 청피망, 파프리카를 넣어 섞어주세요. 녹말물을 넣어 걸쭉한 농도가 되면 불을 꺼주세요.접시에 김말이를 담고 소스를 곁들여 맛있게 즐겨주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (26, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2281/7d5e4820-8431-4151-b3d8-c47dbcb1878b.jpg?size=800x800', '옥수수는 껍질을 벗기고 흐르는 물에 씻은 후 물기를 제거해 주세요. (tip. 초당 옥수수가 아닌 일반 옥수수의 경우 찐 다음 사용해 주세요)'),
    (26, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2281/7b454ba1-dba7-4c00-9a69-82e0e5eef62f.jpg?size=800x800', '실온에 둔 부드러운 버터에 나머지 소스 재료와 함께 넣어 잘 섞어주세요. '),
    (26, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2281/becae96a-5d85-4dd1-8f2f-6e4a2ca8a237.jpg?size=800x800', '옥수수에 소스를 골고루 발라 구이 전용 팬에 올린 후 4단에 넣고 광파오븐 수동 요리 <구이>에서 17분 정도 구워주세요.완성된 마약 옥수수를 꺼내 파마산 치즈 가루, 파프리카 파우더, 파슬리를 뿌려 맛있게 즐겨주세요. ');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (27, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2338/fc39bca7-4d7d-4a55-b5a2-837ee73ae3a6.jpg?size=800x800', '용기에 떡볶이 떡을 담고 잠기도록 물을 넣어주세요. 법랑 접시에 석쇠를 놓고 내열 용기를 올려 1단에 넣고 <레인지> 기능으로 3분 정도 익혀주세요. 말랑말랑해진 떡은 물기를 빼서 준비해 주세요.(tip. 떡이 말랑말랑한 상태가 되어야 꼬치에 잘 꽂혀요)'),
    (27, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2338/d7f6e8e3-0fe5-48ce-baf0-bb80dbcf84ee.jpg?size=800x800', '볼에 소스 재료를 넣어 섞어주세요.'),
    (27, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2338/65fbdac9-6fdc-4b13-99ac-b59bc5d1cf37.jpg?size=800x800', '꼬치에 떡과 소시지를 번갈아 가며 끼워주세요. 남은 꼬치 부분을 알루미늄 포일로 감싸주세요.'),
    (27, 4, 'https://static.wtable.co.kr/image/production/service/recipe/2338/6b3e3333-e1d3-45db-8f15-e2f049449f70.jpg?size=800x800', '구이 전용 팬에 소떡소떡을 올린 후 기름을 골고루 발라 4단에 넣고 광파오븐 자동 요리 <에어프라이>에서 <두부강정> 1모 분량을 선택해 조리해 주세요. 조리가 시작되면 조절 기능으로 시간을 10분으로 변경해주세요.(tip. “오븐에 전송" 버튼을 누르면 시간을 조절할 필요 없이 간단하게 설정할 수 있어요)완성된 소떡소떡을 소스에 버무려 완성해 주세요. 소떡소떡을 접시에 담고 다진 견과류와 파슬리를 뿌려 맛있게 즐겨주세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (28, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2276/4c2bed96-1e7d-422d-ac8b-9781f8e69865.jpg?size=800x800', '체에 찹쌀가루와 밀가루, 설탕, 베이킹파우더, 소금을 밭쳐 곱게 내려주세요. 따뜻한 우유를 2/3 정도 넣어 섞은 후, 반죽이 어느 정도 뭉쳐지면 나머지 우유를 넣고 손으로 반죽해 주세요.(tip. 우유는 전자레인지에서 50초 정도 돌려 따뜻한 상태로 섞어주세요)(tip. 손으로 반죽하면 설탕이 녹으면서 잘 뭉쳐져요)(tip. 찹쌀가루의 수분감에 따라 우유의 양을 조절해 주세요)'),
    (28, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2276/d97dcf1a-6b49-4c31-b597-1fdb6fe32931.jpg?size=800x800', '반죽을 작은 크기로 떼어내고 가운데에 모짜렐라 치즈를 넣어 동그랗게 만들어주세요.(tip. 반죽은 20g 정도 적당한 양으로 분할해 주세요)(tip. 모짜렐라 치즈는 전자레인지에서 40초 정도 돌린 후 뭉치면 더 꽉 차게 넣을 수 있어요)'),
    (28, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2276/bfdbd7d2-9e9b-43ce-878c-1b7445a8ca36.jpg?size=800x800', '냄비에 기름이 넣고 160~170도 정도의 기름에서 굴리면서 3~4분 정도 튀겨주세요. 바삭하게 튀긴 치즈볼에 설탕을 골고루 뿌려 주세요.완성된 치즈볼을 그릇에 담아 맛있게 즐겨주세요. ');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (29, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1657/896b3b57-4adf-43a0-a10a-adec27018db4.jpg?size=800x800', '아보카도는 껍질과 씨를 제거하고 잘게 잘라주세요.'),
    (29, 2, 'https://static.wtable.co.kr/image/production/service/recipe/1657/d274178e-57e7-4dda-87ea-5770a142a31e.jpg?size=800x800', '블렌더에 코코넛 밀크, 아보카도, 꿀을 넣고 곱게 갈아주세요.'),
    (29, 3, 'https://static.wtable.co.kr/image/production/service/recipe/1657/753a4e98-436f-4b1d-bcda-c08687090d11.jpg?size=800x800', '냉동실에 순서 2를 1시간 정도 넣었다 꺼낸 후 블렌더에 다시 갈아주고 밀폐용기에 담아 하룻밤 냉동보관해주세요.먹기 20분 전에 미리 꺼내 두었다가 아이스크림컵에 담아 맛있게 즐기세요.');
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (30, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2667/f4db6a85-fa25-40fc-a8b7-252e03462b8f.jpg?size=800x800', '휴롬 착즙기에 냉동 과일을 넣고 동작해주세요.'),
    (30, 2, 'https://static.wtable.co.kr/image/production/service/recipe/2667/a6f3ff74-10b9-4ef6-9e35-052ae6b409b5.jpg?size=800x800', '섬유질이 나오는 홀에서 과일 셔벗이 나오기 시작하면 누름 봉으로 과일을 중간중간 눌러주세요. '),
    (30, 3, 'https://static.wtable.co.kr/image/production/service/recipe/2667/5083a5c8-9d30-4dcb-ab94-3ebea98e95c8.jpg?size=800x800', '용기에 냉동과일을 담아 냉동실에서 1시간 정도 두세요.완성된 셔벗은 아이스크림 스쿱으로 떠서 볼에 담아 맛있게 즐겨주세요. (tip. 허브로 장식하거나 말린 과일칩 등을 올려 장식해도 좋아요)');

INSERT INTO recipe_finished_image (id, finished_images)
VALUES (1, 'https://static.wtable.co.kr/image/production/service/recipe/2329/d093364a-c4f9-4586-9cba-871290070cef.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (2, 'https://static.wtable.co.kr/image/production/service/recipe/2344/88883df6-0bb0-41bc-b626-b9c99fd0734d.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (3, 'https://static.wtable.co.kr/image/production/service/recipe/2328/b01710fb-9119-4d4b-bb3f-f0f8d28c22bd.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (4, 'https://static.wtable.co.kr/image/production/service/recipe/2137/bdabe7f1-f06d-4ad0-835f-05ab63ddcbc0.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (5, 'https://static.wtable.co.kr/image/production/service/recipe/1532/9d6e1e22-491b-497e-a2ca-8bb012c53e90.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (6, 'https://static.wtable.co.kr/image/production/service/recipe/1268/dd8df342-f281-4621-a73c-66f38137c83a.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (7, 'https://static.wtable.co.kr/image/production/service/recipe/2681/6c4c43d9-d448-4c2c-9c4c-f1387de8e1df.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (8, 'https://static.wtable.co.kr/image/production/service/recipe/1412/245a1c29-917e-4540-8846-c90bf4f60cc6.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (9, 'https://static.wtable.co.kr/image/production/service/recipe/1012/d2daec21-56cb-4931-8768-30a1e7996907.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (10, 'https://static.wtable.co.kr/image/production/service/recipe/992/036ad564-531c-4eeb-aab6-d49763985db3.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (11, 'https://static.wtable.co.kr/image/production/service/recipe/1675/f25eddb8-daa4-4bd0-a9df-afc2c2a7fe90.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (12, 'https://static.wtable.co.kr/image/production/service/recipe/719/e3ff91fb-f8d2-44b8-bd89-48b258b4607a.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (13, 'https://static.wtable.co.kr/image/production/service/recipe/629/33a85a2b-366d-4c65-9c8c-cf03bd0dff5e.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (14, 'https://static.wtable.co.kr/image/production/service/recipe/996/96a9c08d-214a-4f2d-8bbf-a0939f0c88c8.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (15, 'https://static.wtable.co.kr/image/production/service/recipe/948/04674056-0da3-483b-90a7-9512ba25af4b.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (16, 'https://static.wtable.co.kr/image/production/service/recipe/1298/f31be7d4-75d0-484c-b26e-c7b8d6faf7b7.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (17, 'https://static.wtable.co.kr/image/production/service/recipe/1217/65818e8d-1a5b-41ab-8753-35387fc53f2c.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (18, 'https://static.wtable.co.kr/image/production/service/recipe/1220/1dbe5370-f4c5-43d8-88d3-70965819a926.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (19, 'https://static.wtable.co.kr/image/production/service/recipe/1213/151cc9ca-f219-4bdf-b1ed-6c1ad6cf1198.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (20, 'https://static.wtable.co.kr/image/production/service/recipe/1224/20bdc681-de18-486e-969a-f4fa1da58e08.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (21, 'https://static.wtable.co.kr/image/production/service/recipe/972/961fd6ad-a401-471a-9941-8859a7e71f81.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (22, 'https://static.wtable.co.kr/image/production/service/recipe/765/a1d2514e-3f4a-4e11-b649-92270d842c02.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (23, 'https://static.wtable.co.kr/image/production/service/recipe/605/36e1509d-9866-4551-bcad-b6370a97e666.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (24, 'https://static.wtable.co.kr/image/production/service/recipe/1033/6c6af075-29f1-472c-a877-cff300631e6c.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (25, 'https://static.wtable.co.kr/image/production/service/recipe/886/51afc7c4-f745-4189-83dd-050fdad05c97.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (26, 'https://static.wtable.co.kr/image/production/service/recipe/2281/6a78b261-5e75-4adf-bb50-4039b76afd0d.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (27, 'https://static.wtable.co.kr/image/production/service/recipe/2338/a1614b52-6832-4aa7-aa69-a2f912573477.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (28, 'https://static.wtable.co.kr/image/production/service/recipe/2276/ba7e24a5-471a-4a4f-83b0-3fd538ab4108.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (29, 'https://static.wtable.co.kr/image/production/service/recipe/1657/ad0acd5a-0bc8-4ee4-9823-3c298b1336e6.jpg?size=800x800');
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (30, 'https://static.wtable.co.kr/image/production/service/recipe/2667/fdc277f2-474c-4563-8aa5-b9f17caffb7e.jpg?size=800x800');


-- Recipe Tags
INSERT INTO recipe_tag (id, tags)
VALUES (1, '#멍게'), (1, '#비빔밥'), (1, '#한식'), (1, '#해산물요리');
INSERT INTO recipe_tag (id, tags)
VALUES (2, '#고추전'), (2, '#간단요리');
INSERT INTO recipe_tag (id, tags)
VALUES (3, '#성게미역국'), (3, '#보양식');
INSERT INTO recipe_tag (id, tags)
VALUES (4, '#목살김치찜'), (4, '#한식'), (4, '#김치요리');
INSERT INTO recipe_tag (id, tags)
VALUES (5, '#홍합탕'), (5, '#해장음식'), (5, '#국물요리');
INSERT INTO recipe_tag (id, tags)
VALUES (6, '#송로오일'), (6, '#육회'), (6, '#스파게티'), (6, '#특별한요리');
INSERT INTO recipe_tag (id, tags)
VALUES (7, '#초콜릿'), (7, '#디저트'), (7, '#두바이'), (7, '#달콤한요리');
INSERT INTO recipe_tag (id, tags)
VALUES (8, '#라자냐'), (8, '#이탈리안'), (8, '#치즈'), (8, '#미트소스');
INSERT INTO recipe_tag (id, tags)
VALUES (9, '#고수'), (9, '#페스토'), (9, '#크림파스타'), (9, '#양식');
INSERT INTO recipe_tag (id, tags)
VALUES (10, '#새우'), (10, '#파스타'), (10, '#원팬'), (10, '#간편식');
INSERT INTO recipe_tag (id, tags)
VALUES (11, '#우동'), (11, '#일식'), (11, '#냉우동'), (11, '#간편식');
INSERT INTO recipe_tag (id, tags)
VALUES (12, '#텐동'), (12, '#튀김'), (12, '#일식'), (12, '#덮밥');
INSERT INTO recipe_tag (id, tags)
VALUES (13, '#장어'), (13, '#덮밥'), (13, '#일식'), (13, '#고급식');
INSERT INTO recipe_tag (id, tags)
VALUES (14, '#연어'), (14, '#아보카도'), (14, '#덮밥'), (14, '#일식');
INSERT INTO recipe_tag (id, tags)
VALUES (15, '#타코야끼'), (15, '#일식'), (15, '#술안주'), (15, '#길거리음식');
INSERT INTO recipe_tag (id, tags)
VALUES (16, '#교자'), (16, '#일식'), (16, '#만두'), (16, '#술안주');
INSERT INTO recipe_tag (id, tags)
VALUES (17, '#해물짜장'), (17, '#매운음식'), (17, '#중식'), (17, '#해산물');
INSERT INTO recipe_tag (id, tags)
VALUES (18, '#해물짬뽕'), (18, '#중식'), (18, '#매운음식'), (18, '#볶음');
INSERT INTO recipe_tag (id, tags)
VALUES (19, '#잡채덮밥'), (19, '#중식'), (19, '#간편식'), (19, '#채소');
INSERT INTO recipe_tag (id, tags)
VALUES (20, '#탕수육'), (20, '#찹쌀'), (20, '#중식'), (20, '#튀김');
INSERT INTO recipe_tag (id, tags)
VALUES (21, '#마라어묵'), (21, '#간단요리');
INSERT INTO recipe_tag (id, tags)
VALUES (22, '#떡볶이'), (22, '#차돌박이'), (22, '#매콤한'), (22, '#한식');
INSERT INTO recipe_tag (id, tags)
VALUES (23, '#김밥'), (23, '#불고기'), (23, '#한식'), (23, '#도시락');
INSERT INTO recipe_tag (id, tags)
VALUES (24, '#쫄면'), (24, '#콩나물'), (24, '#한식'), (24, '#매콤한요리');
INSERT INTO recipe_tag (id, tags)
VALUES (25, '#김말이'), (25, '#칠리소스'), (25, '#탕수'), (25, '#분식');
INSERT INTO recipe_tag (id, tags)
VALUES (26, '#옥수수'), (26, '#마요네즈'), (26, '#간식'), (26, '#중독성');
INSERT INTO recipe_tag (id, tags)
VALUES (27, '#소시지'), (27, '#떡'), (27, '#간식'), (27, '#소떡소떡');
INSERT INTO recipe_tag (id, tags)
VALUES (28, '#치즈볼'), (28, '#치즈'), (28, '#간식'), (28, '#튀김');
INSERT INTO recipe_tag (id, tags)
VALUES (29, '#아보카도'), (29, '#아이스크림'), (29, '#디저트'), (29, '#여름간식');
INSERT INTO recipe_tag (id, tags)
VALUES (30, '#과일'), (30, '#셔벗'), (30, '#여름디저트'), (30, '#시원한간식');


-- Comments for Recipe
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (1, 1, '멍게의 신선한 맛이 그대로 살아있어요! 바다의 향이 가득한 비빔밥이네요.'),
    (1, 2, '간단한 재료로 만들 수 있어서 좋아요. 맛도 정말 상큼하고 좋아요!'),
    (1, 3, '멍게와 초고추장의 조화가 너무 좋아요. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (2, 1, '간단하면서도 정말 맛있어요! 너무 좋아요.'),
    (2, 2, '고추의 매콤함과 고기의 조화가 정말 좋습니다.'),
    (2, 3, '다음엔 청양고추 대신 풋고추로도 시도해봐야겠어요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
        (3, 1, '성게와 미역의 조화가 정말 일품이에요! 여름철 보양식으로 추천합니다.'),
        (3, 2, '성게가 생각보다 많이 들어가네요. 근데 정말 맛있습니다.'),
        (3, 3, '미역을 불리는 시간이 좀 걸리지만, 그만큼 보람 있는 요리입니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (4, 1, '이거 너무 맛있어요! 가족 모두 좋아했어요.'),
    (4, 2, '간단하게 따라 할 수 있어서 좋아요. 감사합니다!'),
    (4, 3, '김치찜 처음 해보는데 성공했어요!');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (5, 1, '정말 시원하고 맛있어요! 간단하게 해먹기 좋아요.'),
    (5, 2, '해장으로 이만한 게 없네요. 감사합니다!'),
    (5, 3, '홍합 좋아하는데, 이렇게 간단하게 만들 수 있다니 좋네요!');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (6, 1, '정말 고급스럽고 맛있어요! 육회랑 스파게티가 이렇게 잘 어울릴 줄 몰랐네요.'),
    (6, 2, '송로 오일의 향이 정말 좋아요. 특별한 날에 딱입니다.'),
    (6, 3, '육회를 이렇게 먹으니 정말 신선한 맛이에요. 손님 접대용으로 좋을 듯!');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (7, 1, '정말 부드럽고 진한 초콜릿 맛이 일품이에요! 두바이에서 먹었던 맛이 생각나요.'),
    (7, 2, '초콜릿과 생크림의 조화가 훌륭해요. 디저트로 완벽합니다.'),
    (7, 3, '가족들과 함께 즐기기 좋은 디저트예요. 맛있게 먹었습니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (8, 1, '라자냐가 정말 맛있어요! 소스와 치즈가 잘 어우러져서 정말 만족스러웠습니다.'),
    (8, 2, '완성된 라자냐의 맛이 정말 좋네요. 가족과 함께 즐기기에 좋습니다.'),
    (8, 3, '이탈리안 레시피 중 가장 마음에 드는 레시피입니다. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (9, 1, '고수와 페스토의 조합이 정말 독특하고 맛있어요. 크림 소스와 잘 어울리네요.'),
    (9, 2, '이렇게 새로운 파스타 맛은 처음이에요. 신선한 고수의 향이 좋습니다.'),
    (9, 3, '파스타 면과 크림 소스가 잘 어우러져서 너무 맛있었어요. 자주 해먹고 싶네요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (10, 1, '이 레시피는 정말 간단하면서도 맛있어요. 새우와 파스타의 조화가 훌륭합니다.'),
    (10, 2, '한 팬에서 조리할 수 있어서 너무 편리했어요. 가족들이 좋아했어요.'),
    (10, 3, '간단하게 만들어서 맛있게 먹을 수 있는 레시피. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (11, 1, '시원하고 맛있어요. 여름에 딱 좋은 레시피입니다. 간단하게 만들 수 있어서 좋습니다.'),
    (11, 2, '붓카케 우동을 이렇게 쉽게 만들 수 있다니 놀라워요. 맛도 좋고 준비도 간편합니다.'),
    (11, 3, '국물이 시원하고 면이 쫄깃해서 좋았어요. 자주 해먹고 싶은 레시피입니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (12, 1, '바삭한 튀김과 짭조름한 소스가 잘 어울려서 맛있어요. 덮밥으로 먹기 좋네요.'),
    (12, 2, '간단하게 만들 수 있는 텐동이라 자주 해먹을 것 같아요. 튀김이 바삭하고 맛있었습니다.'),
    (12, 3, '일식 레시피 중에서 가장 좋아하는 것 중 하나에요. 재료도 간단하고 맛도 좋습니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (13, 1, '장어가 부드럽고 소스가 너무 맛있어요. 집에서 이렇게 맛있게 장어덮밥을 만들 수 있다니 좋네요.'),
    (13, 2, '장어덮밥을 이렇게 쉽게 만들 수 있어서 놀랐어요. 정말 맛있고 자주 해먹을 것 같아요.'),
    (13, 3, '소스가 밥과 장어에 잘 배어 있어서 맛이 깊고 좋았어요. 간단하면서도 고급스러운 한 끼입니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (14, 1, '연어와 아보카도가 정말 잘 어울려요. 간단하게 만들 수 있어서 좋습니다. 건강한 한 끼로 좋네요.'),
    (14, 2, '맛도 좋고 비주얼도 훌륭해요. 자주 해먹을 것 같아요. 연어와 아보카도의 조화가 일품입니다.'),
    (14, 3, '아보카도의 부드러움과 연어의 풍미가 훌륭해요. 간단하지만 맛있는 레시피입니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (15, 1, '타코야끼가 집에서도 이렇게 맛있게 만들 수 있다니 놀랐어요. 간편하고 맛있습니다.'),
    (15, 2, '반죽이 부드럽고 문어와 조화가 잘 맞네요. 자주 해먹을 것 같습니다.'),
    (15, 3, '길거리에서 먹는 타코야끼의 맛을 집에서 즐길 수 있어서 좋았어요. 간단하면서도 맛있습니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (16, 1, '겉은 바삭하고 속은 촉촉하게 잘 구워졌어요. 집에서 만든 교자가 정말 맛있네요.'),
    (16, 2, '만두피가 부드럽고 속이 풍성해서 정말 맛있었어요. 자주 만들어 먹을 것 같습니다.'),
    (16, 3, '교자 레시피가 간단하면서도 맛있네요. 외식 대신 집에서 맛있는 교자를 즐길 수 있어 좋습니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (17, 1, '매운 짜장면이 정말 맛있어요. 해물의 풍미가 잘 어우러져서 만족스러웠습니다.'),
    (17, 2, '매운 맛과 해물이 조화롭게 어우러져 정말 맛있었습니다. 자주 해먹을 것 같아요.'),
    (17, 3, '해물의 신선함과 짜장 소스의 매운 맛이 좋았어요. 집에서도 쉽게 만들 수 있어 좋네요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (18, 1, '매운 해물짬뽕이 정말 맛있어요. 해산물의 풍미가 좋고, 국물 맛이 정말 시원하네요.'),
    (18, 2, '짬뽕이 매콤하고 진한 맛이 좋았어요. 해물과 채소가 풍부하게 들어가서 만족스럽습니다.'),
    (18, 3, '중화면과 해물이 잘 어우러져서 맛있습니다. 매운 맛이 일품이에요. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (19, 1, '잡채와 밥이 잘 어울려서 맛있었습니다. 간편하게 한 끼 식사로 좋네요.'),
    (19, 2, '중국식 잡채 덮밥이 간단하면서도 맛있어요. 다양한 채소와 고기가 함께해서 좋습니다.'),
    (19, 3, '잡채가 밥과 함께 먹으니 정말 맛있습니다. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (20, 1, '찹쌀가루 덕분에 탕수육이 정말 바삭하고 맛있어요. 소스도 너무 잘 어울립니다.'),
    (20, 2, '탕수육이 바삭하고 소스가 정말 맛있어요. 집에서 쉽게 만들 수 있어서 좋습니다.'),
    (20, 3, '찹쌀로 만든 탕수육은 정말 색다르고 맛있습니다. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (21, 1, '이거 너무 간단한데 맛있어요ㅠㅠㅠㅠ 앞으로 술안주 없으면 이겁니다!!! 오늘 뭐 먹지 사랑해요'),
    (21, 2, '라조장 고추소스 있는데 그걸로 가능한건지;;ㅎ'),
    (21, 3, '마라소스 어떤건지 궁금해요!!');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (22, 1, '차돌박이가 들어가서 떡볶이가 더 풍미가 있어요! 맛있어요.'),
    (22, 2, '매콤달콤해서 입맛에 딱 맞아요. 집에서 간편하게 만들 수 있어요.'),
    (22, 3, '차돌박이가 정말 부드럽고 맛있어요. 새로운 떡볶이를 발견했네요!');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (23, 1, '불고기가 들어가서 정말 맛있어요! 든든하고 영양가도 많아요.'),
    (23, 2, '집에서 간편하게 만들 수 있는 최고의 김밥 레시피에요.'),
    (23, 3, '불고기가 달콤하고 김밥이 고소해요. 자주 해먹을 것 같아요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (24, 1, '아삭한 콩나물이 쫄면과 잘 어울려요! 양념장도 딱 맛있습니다.'),
    (24, 2, '매콤하고 상큼한 맛이 일품입니다. 더운 날씨에 잘 어울리는 요리네요.'),
    (24, 3, '간단하게 만들 수 있어서 좋아요. 다음에도 또 해먹고 싶네요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (25, 1, '바삭한 김말이와 매콤한 칠리 소스의 조합이 환상적이에요! 색다른 맛이네요.'),
    (25, 2, '간단하지만 아주 맛있어요. 맥주 안주로도 좋습니다.'),
    (25, 3, '소스가 매콤달콤해서 아이들도 잘 먹어요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (26, 1, '간단하지만 정말 맛있어요! 한 번 먹으면 멈출 수 없네요.'),
    (26, 2, '아이들이 너무 좋아해요. 쉽게 만들 수 있어서 자주 해먹을 것 같아요.'),
    (26, 3, '달콤하고 짭짤한 맛이 일품입니다. 맥주와 함께 먹으니 최고예요!');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (27, 1, '간단한데 정말 맛있어요! 아이들 간식으로도 딱입니다.'),
    (27, 2, '소스가 정말 맛있네요. 한 번에 다 먹어버렸어요!'),
    (27, 3, '밖에서 사 먹는 것보다 집에서 직접 만들어 먹으니 더 맛있네요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (28, 1, '쫀득쫀득하고 달콤한 맛이 최고예요!'),
    (28, 2, '아이들이 정말 좋아해요. 금방 사라지네요.'),
    (28, 3, '설탕을 뿌려 먹으니 정말 맛있습니다.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (29, 1, '아보카도의 고소한 맛이 너무 좋아요. 크리미하고 달콤해요!'),
    (29, 2, '건강한 아이스크림이라 아이들에게도 좋을 것 같아요.'),
    (29, 3, '아보카도로 이렇게 맛있는 디저트를 만들 수 있다니 놀라워요.');
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (30, 1, '상큼하고 시원해서 여름에 딱이에요. 과일도 다양하게 넣을 수 있어요!'),
    (30, 2, '과일이 신선해서 너무 맛있어요. 달지 않아서 좋아요.'),
    (30, 3, '간단하게 만들 수 있는 디저트라 자주 해먹을 것 같아요.');

-- 찜 목록
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 1);  -- 사용자가 1번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 2);  -- 사용자가 2번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 3);  -- 사용자가 3번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 4);  -- 사용자가 4번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 5);  -- 사용자가 5번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 6);  -- 사용자가 6번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 7);  -- 사용자가 7번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 8);  -- 사용자가 8번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 9);  -- 사용자가 9번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 10);  -- 사용자가 10번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 11);  -- 사용자가 11번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 12);  -- 사용자가 12번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 13);  -- 사용자가 13번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 14);  -- 사용자가 14번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 15);  -- 사용자가 15번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 16);  -- 사용자가 16번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 17);  -- 사용자가 17번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 18);  -- 사용자가 18번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 19);  -- 사용자가 19번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 20);  -- 사용자가 20번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 21);  -- 사용자가 1번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 22);  -- 사용자가 22번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 23);  -- 사용자가 23번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 24);  -- 사용자가 24번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 25);  -- 사용자가 25번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 26);  -- 사용자가 26번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 27);  -- 사용자가 27번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 28);  -- 사용자가 28번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 29);  -- 사용자가 29번 레시피를 찜한 경우
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 30);  -- 사용자가 30번 레시피를 찜한 경우


-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
