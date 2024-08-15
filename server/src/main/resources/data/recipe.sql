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
VALUES (7, 'https://blog.naver.com/aza1104/223545717081');

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

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
