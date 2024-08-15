-- 외래키 제약조건을 임시로 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터베이스 구조 변경

-- Recipe 데이터 삽입 (member_id 추가)
INSERT INTO recipe (id, member_id, banner_image, title, description, cooking_time, servings, level, video_link, category, view_count)
VALUES (1, 1, 'https://static.wtable.co.kr/image/production/service/recipe/972/3c5e9f76-20bf-409b-a003-daba4eb60627.jpg?size=800x800',
'정말 맜있는 찐요리', '요즘 인기 있는 음식하면 빠질 수 없는 마라! 알싸하고 매콤한 맛에 모두 빠질 만큼 중독성 있는데요. 마라 소스만 있다면 간단하게 만들 수 있는 간식, 마라 어묵꼬치을 준비했어요! 매력 있는 어묵꼬치를 집에서 만들어 보세요.',
30, 4, 2, 'https://www.youtube.com/embed/hQp0LoZsGq8', '한식', 0);

-- 재료 사진 삽입
INSERT INTO recipe_ingredient_image (id, ingredientImage)
VALUES
    (1, 'https://static.wtable.co.kr/image/production/service/recipe/972/1f30ff0e-b6c6-4936-9eed-083b4c4428e5.jpg?size=800x800');

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

-- Recipe Tools
INSERT INTO recipe_tool (id, cooking_tools)
VALUES (1, '꼬치'), (1, '냄비'), (1, '수저'), (1, '그릇');

-- Recipe Guide Links
INSERT INTO recipe_guide_link (id, guide_links)
VALUES (1, 'http://post.naver.com/viewer/postView.nhn?volumeNo=30465474&memberNo=35667439&vType=VERTICAL');

-- Recipe Cooking Steps
INSERT INTO recipe_cooking_step (recipe_id, step_number, image_url, description)
VALUES
    (1, 1, 'https://static.wtable.co.kr/image/production/service/recipe/972/e3ce099f-2575-4762-b6ba-e7e328de70f5.jpg?size=800x800', '어묵은 먹기 좋게 2장씩 꼬치에 꽂아주세요.'),
    (1, 2, 'https://static.wtable.co.kr/image/production/service/recipe/972/23daf027-1c94-4d95-96c9-cdc4a337ef18.jpg?size=800x800', '끓는 물에 어묵 꼬치를 5분 정도 끓여주세요.'),
    (1, 3, 'https://static.wtable.co.kr/image/production/service/recipe/972/48f36b09-dc90-4fe6-8b06-4454eba10830.jpg?size=800x800', '볼에 소스 재료를 섞어주세요.'),
    (1, 4, 'https://static.wtable.co.kr/image/production/service/recipe/972/34e6eb8d-3cd2-4bf9-b44c-ddfdc08547b3.jpg?size=800x800', '어묵 꼬치에 소스를 발라주세요.');

-- Recipe Finished Images
INSERT INTO recipe_finished_image (id, finished_images)
VALUES (1, 'https://static.wtable.co.kr/image/production/service/recipe/972/961fd6ad-a401-471a-9941-8859a7e71f81.jpg?size=800x800');

-- Recipe Tags
INSERT INTO recipe_tag (id, tags)
VALUES (1, '마라어묵'), (1, '간단요리');

-- Comments for Recipe
INSERT INTO recipe_comments (id, recipe_id, member_id, content)
VALUES
    (1, 1, 1, '이거 너무 간단한데 맛있어요ㅠㅠㅠㅠ 앞으로 술안주 없으면 이겁니다!!! 오늘 뭐 먹지 사랑해요'),
    (1, 1, 2, '라조장 고추소스 있는데 그걸로 가능한건지;;ㅎ'),
    (1, 1, 3, '마라소스 어떤건지 궁금해요!!');

-- 찜 목록
INSERT INTO favorite_recipes (member_id, recipe_id)
VALUES (1, 1);  -- 사용자가 1번 레시피를 찜한 경우

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
