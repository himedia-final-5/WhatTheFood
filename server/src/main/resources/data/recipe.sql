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

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;




외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터베이스 구조 변경

-- Recipe 데이터 삽입 (member_id 추가)
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (1, 1, 'https://static.wtable.co.kr/image/production/service/recipe/972/3c5e9f76-20bf-409b-a003-daba4eb60627.jpg?size=800x800',
'간단하게 매운 어묵요리', '요즘 인기 있는 음식하면 빠질 수 없는 마라! 알싸하고 매콤한 맛에 모두 빠질 만큼 중독성 있는데요. 마라 소스만 있다면 간단하게 만들 수 있는 간식, 마라 어묵꼬치을 준비했어요! 매력 있는 어묵꼬치를 집에서 만들어 보세요.',
30, 4, 2, 'https://www.youtube.com/embed/hQp0LoZsGq8', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (2, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2344/9a1bd1e4-cbf9-4e2c-857a-56c95078bf4c.jpg?size=800x800',
'간단하게 칼칼 고추전', '매콤한 고추와 고기를 이용해 만든 간단하면서도 맛있는 고추전입니다. 주말 저녁이나 명절에 딱 어울리는 요리입니다.',
20, 2, 2, 'https://youtu.be/IoSwCiTghf0?si=kCGsdD3ZhO5ElycY', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (3, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2328/91ec15ed-2f6a-464e-ac1b-5b08eaffda0e.jpg?size=800x800',
'시원하고 깊은 맛의 성게미역국', '성게와 미역의 조화로 깊고 시원한 국물 맛을 내는 성게미역국 레시피입니다. 간단하면서도 영양 가득한 한 그릇 요리로, 특히 여름철 보양식으로도 좋습니다.',
40, 4, 2, 'https://youtu.be/z6ZGxPUd4Ac?si=BmKii98w1dDr6Ffq', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (4, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2137/d1c42852-eb66-4f04-a678-083f6608f082.jpg?size=800x800',
'목살김치찜', '풍성한 양의 목살과 잘 익은 김치가 어우러져 부드럽고 맛있는 김치찜을 완성할 수 있습니다. 이 레시피로 감칠맛 나는 김치찜을 손쉽게 만들어 보세요.',
90, 4, 2, 'https://www.youtube.com/watch?v=cIDqDT5RF3U&pp=ygUP6rmA7LmY66qp7IK07LCc', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (5, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1532/259cb807-ada0-402b-bbd3-6ab5b1ee4767.jpg?size=800x800',
'홍합탕', '잘 삶은 홍합은 그냥 먹어도 맛있지만 다양한 요리에도 잘 어울리죠~ 10월부터 12월이 제철인 살이 통통한 홍합으로 홍합탕을 끓이면 더욱 깊은 맛을 낸답니다. 따로 간을 하지 않아도 되기 때문에 제대로 손질만 하면 실패 없이 만들 수 있어요. 송송 썬 고추를 넣으면 국물이 시원하면서도 칼칼해서 국물이 금세 동나도록 먹게 될거예요!',
20, 4, 1, 'https://www.youtube.com/watch?v=t63aSsdvZKs&pp=ygUJ7ZmN7ZWp7YOV', '한식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (6, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1268/942a38ee-ceda-4ae7-850d-c6ba39542a07.jpg?size=800x800',
'송로 오일 육회 스파게티', '고급스러운 송로 오일과 육회가 만난 특별한 스파게티! 진한 풍미와 부드러운 식감이 일품으로, 특별한 날에 어울리는 요리입니다.',
25, 2, 3, 'https://www.youtube.com/watch?v=y0ecwbUGvW4&pp=ygUT7Jyh7ZqMIOyKpO2MjOqyjO2LsA%3D%3D', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (7, 1, 'https://static.wtable.co.kr/image/production/service/recipe/2681/1d0a0dc0-b3d2-4784-9e99-fd0750fa97c4.jpg?size=800x800',
'두바이 초콜릿', '두바이에서 영감을 받은 풍부한 초콜릿 맛의 디저트입니다. 달콤하고 진한 초콜릿의 맛이 일품으로, 특별한 날에 어울리는 디저트입니다.',
30, 4, 2, 'https://www.youtube.com/watch?v=yVuprH1DTLg&pp=ygUd65GQ67CU7J20IOy0iOy9nOumvyDrp4zrk6TquLA%3D', '디저트', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (8, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1412/c9052b39-229d-4a42-88fd-7ea8b5a27df1.jpg?size=500x500',
'라자냐', '풍부한 소스와 층층이 쌓인 면이 어우러지는 이탈리안 전통 요리, 라자냐입니다. 치즈와 미트 소스의 조화가 일품으로, 특별한 날에 적합한 요리입니다.',
60, 6, 4, 'https://www.youtube.com/watch?v=ZTkLFFEXQ4s&pp=ygUT65287J6Q64OQIOunjOuTpOq4sA%3D%3D', '이탈리안', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (9, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1012/0221329d-24f5-44fc-bc7d-6cd9bdd10e77.jpg?size=800x800',
'고수 페스토 크림 파스타', '신선한 고수와 페스토를 활용한 크림 파스타로, 독특한 향과 부드러운 크림 소스가 조화를 이루는 요리입니다. 색다른 맛을 원하는 분들에게 추천합니다.',
30, 2, 3, 'https://www.youtube.com/watch?v=ivNam7sY94c&pp=ygUh6rOg7IiYIO2BrOumvCDtjpjsiqTthqAg7YyM7Iqk7YOA', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (10, 1, 'https://static.wtable.co.kr/image/production/service/recipe/992/33096f46-a8fd-4b78-ae56-bba7a012fe54.jpg?size=800x800',
'원팬 새우 파스타', '간편하게 한 팬에서 조리할 수 있는 새우 파스타로, 신선한 새우와 풍부한 토마토 소스가 어우러져 맛을 더합니다.',
30, 2, 2, 'https://www.youtube.com/watch?v=shYlVEzum1g&pp=ygUX7JuQ7YysIOyDiOyasCDtjIzsiqTtg4A%3D', '양식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (11, 1, 'https://static.wtable.co.kr/image/production/service/recipe/1675/0c6d386e-2ff4-4c23-8327-b2608d7cd418.jpg?size=800x800',
'붓카케 우동', '시원한 국물과 쫄깃한 우동 면이 어우러지는 붓카케 우동입니다. 간단하게 만들 수 있으며, 뜨거운 여름 날씨에 제격인 일본식 냉우동입니다.',
20, 2, 1, 'https://www.youtube.com/watch?v=PQQNE2dMh1U&pp=ygUa67aT7Lm07LyAIOyasOuPmSDrp4zrk6TquLA%3D', '일식', 0);
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (12, 1, 'https://static.wtable.co.kr/image/production/service/recipe/719/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg?size=800x800',
'튀김덮밥 (텐동)', '바삭한 튀김과 부드러운 덮밥이 어우러진 일본식 텐동입니다. 다양한 해산물과 채소 튀김이 간장 소스와 함께 제공되어 맛있고 풍부한 한 끼 식사입니다.',
40, 2, 3, 'https://www.youtube.com/watch?v=Qc_R4Rg2jsM&pp=ygUQ7YWQ64-ZIOunjOuTpOq4sA%3D%3D', '일식', 0);


-- 재료 사진 삽입
INSERT INTO recipe_ingredient_image (id, ingredient_image)
VALUES (1, 'https://static.wtable.co.kr/image/production/service/recipe/972/1f30ff0e-b6c6-4936-9eed-083b4c4428e5.jpg?size=800x800');
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

-- 재료 삽입
INSERT INTO recipe_ingredient (id, ingredients)
VALUES
    (1, '어묵 8장'),
    (1, '꼬치 4개'),
    (1, '송송 썬 쪽파 1큰술'),
    (1, '통깨 약간'),
    (1, '마라 소스 1큰술'),
    (1, '고추장 2큰술'),
    (1, '진간장 2큰술'),
    (1, '설탕 2큰술'),
    (1, '물 1큰술'),
    (1, '후춧가루 약간');
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

-- Recipe Tools
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (1, '꼬치'), (1, '냄비'), (1, '수저'), (1, '그릇');
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

-- Recipe Guide Links
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (1, 'http://post.naver.com/viewer/postView.nhn?volumeNo=30465474&memberNo=35667439&vType=VERTICAL');
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


-- Recipe Cooking Steps
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (1, 1, 'https://static.wtable.co.kr/image/production/service/recipe/972/e3ce099f-2575-4762-b6ba-e7e328de70f5.jpg?size=800x800', '어묵은 먹기 좋게 2장씩 꼬치에 꽂아주세요.'),
    (1, 2, 'https://static.wtable.co.kr/image/production/service/recipe/972/23daf027-1c94-4d95-96c9-cdc4a337ef18.jpg?size=800x800', '끓는 물에 어묵 꼬치를 5분 정도 끓여주세요.'),
    (1, 3, 'https://static.wtable.co.kr/image/production/service/recipe/972/48f36b09-dc90-4fe6-8b06-4454eba10830.jpg?size=800x800', '볼에 소스 재료를 섞어주세요.'),
    (1, 4, 'https://static.wtable.co.kr/image/production/service/recipe/972/34e6eb8d-3cd2-4bf9-b44c-ddfdc08547b3.jpg?size=800x800', '어묵 꼬치에 소스를 발라주세요.');
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

-- Recipe Finished Images
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (1, 'https://static.wtable.co.kr/image/production/service/recipe/972/961fd6ad-a401-471a-9941-8859a7e71f81.jpg?size=800x800');
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


-- Recipe Tags
INSERT INTO recipe_tag (id, tags)
VALUES (1, '마라어묵'), (1, '간단요리');
INSERT INTO recipe_tag (id, tags)
VALUES (2, '고추전'), (2, '간단요리');
INSERT INTO recipe_tag (id, tags)
VALUES (3, '성게미역국'), (3, '보양식');
INSERT INTO recipe_tag (id, tags)
VALUES (4, '목살김치찜'), (4, '한식'), (4, '김치요리');
INSERT INTO recipe_tag (id, tags)
VALUES (5, '홍합탕'), (5, '해장음식'), (5, '국물요리');
INSERT INTO recipe_tag (id, tags)
VALUES (6, '송로오일'), (6, '육회'), (6, '스파게티'), (6, '특별한요리');
INSERT INTO recipe_tag (id, tags)
VALUES (7, '초콜릿'), (7, '디저트'), (7, '두바이'), (7, '달콤한요리');
INSERT INTO recipe_tag (id, tags)
VALUES (8, '라자냐'), (8, '이탈리안'), (8, '치즈'), (8, '미트소스');
INSERT INTO recipe_tag (id, tags)
VALUES (9, '고수'), (9, '페스토'), (9, '크림파스타'), (9, '양식');
INSERT INTO recipe_tag (id, tags)
VALUES (10, '새우'), (10, '파스타'), (10, '원팬'), (10, '간편식');
INSERT INTO recipe_tag (id, tags)
VALUES (11, '우동'), (11, '일식'), (11, '냉우동'), (11, '간편식');
INSERT INTO recipe_tag (id, tags)
VALUES (12, '텐동'), (12, '튀김'), (12, '일식'), (12, '덮밥');

-- Comments for Recipe
INSERT INTO recipe_comments (recipe_id, member_id, content)
VALUES
    (1, 1, '이거 너무 간단한데 맛있어요ㅠㅠㅠㅠ 앞으로 술안주 없으면 이겁니다!!! 오늘 뭐 먹지 사랑해요'),
    (1, 2, '라조장 고추소스 있는데 그걸로 가능한건지;;ㅎ'),
    (1, 3, '마라소스 어떤건지 궁금해요!!');
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


-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
