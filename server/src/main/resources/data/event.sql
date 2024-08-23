-- 외래키 제약조건을 비활성화
SET SESSION FOREIGN_KEY_CHECKS = 0;

-- 데이터 삽입
INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (1, '진행중', '2024-08-01', '2024-08-10',
        'https://static.wtable.co.kr/image/production/service/staticpage/106/d4607629-6855-4ad7-85d0-3bd28713e0fb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (1,
        'https://static.wtable.co.kr/image/production/service/staticpage/106/12d20a7b-0a52-44ee-8550-682e769c8473.jpg');
INSERT INTO event_content (id, content_images)
VALUES (1,
        'https://static.wtable.co.kr/image/production/service/staticpage/106/ea8fe897-5fd1-4a55-8c20-b4146670034d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (2, '진행중', '2024-04-04', '2025-04-04',
        'https://static.wtable.co.kr/image/production/service/staticpage/102/b4935fd4-9d0a-4cc3-bc8d-f5fb5ad7d378.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/a27a5adb-30f1-44dc-9219-b85fca740d2c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/d642a6d7-9299-4627-b99b-6fa2921aaed2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/983925c5-d9b5-4037-bc90-1f05d9a78d7e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/6737caa0-b24c-48c8-8368-518167c0b4c6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/8dbdb641-138b-4376-b1be-92379a7ee9cc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/e327e170-1dcd-4ed7-9e3a-09c9fbb2dc00.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/d6acccf8-8795-4a98-bb86-c4b0c21e276a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/0bcd87bd-4ba7-4275-bab6-d47a8b14c547.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/8155e8b4-ad7f-45ee-a271-f04542e45ed3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/39a9a99c-e061-4da5-a062-0befd1365cf8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/adaf843c-13d1-4faf-a05f-58746834c5d7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/487a4427-df51-4d2e-9e2c-008e9a5a3869.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/26b60e6c-2576-40e1-a33f-2a8cdecb9399.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/fdadade0-e05c-4adf-8606-24e44ee78406.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/aade2bb7-0f17-49c4-94ed-b25e9e6ea765.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/f224f39d-f069-486e-97f7-907653d0ffcc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/b61870ae-77ba-4d82-808c-e9557eb73e1f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/6b1adfce-cdc7-482b-a062-84d3e3aace48.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/e0a2e661-deee-4099-8276-165b65e81684.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/82ca82e7-a350-449b-8349-cb5ab4916943.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/ee181985-4d6f-498e-9d91-c90bea8852b5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/147b15fb-d19f-49bd-9741-853e6b4ea8c9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/f9f85dec-a909-4bde-9b47-b3f8d7771f0e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/f6b60fce-6e25-4980-ab1c-f7ab5f1710fc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/7f205e00-70b6-4b60-9c26-e148dd6f972d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/f9b9243a-0d9f-4012-a0a0-9f3824a77ea2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/b81a572e-3d72-41f3-a87b-6ff4e44d1f60.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/30fe60e1-b981-444b-8e94-a4c13951f644.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/938fae9a-28ec-4d2f-b4e6-620cfffe0927.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/b68b6a48-1845-4e70-a4ee-e96a1ed7fdfb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/43dc099c-3da8-45f1-9519-b729dfaa4c76.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/b6c07424-6b42-4907-9772-1fb4fffba391.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/7183d598-0dfc-4d98-a7a5-0941bcba8286.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/35284b32-66db-458d-87ee-c257cf82614c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/65251d15-6d21-41d6-8b5a-8aed2d940380.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/49396973-9704-4976-977c-48878a6e16c8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/5723b91a-0825-4f7b-9ce3-e29479328391.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/61facff9-9b51-4c7e-8c65-700883bd7e13.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/d25bd372-4ac2-4220-a185-12a71e2c95e6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (2,
        'https://static.wtable.co.kr/image/production/service/staticpage/102/80efd7db-b02e-420d-bcd0-24e3425ae591.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (3, '종료', '2024-01-14', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/97/1df1c8bd-65ce-400b-88bb-14661275f351.jpg');
INSERT INTO event_content (id, content_images)
VALUES (3,
        'https://static.wtable.co.kr/image/production/service/staticpage/97/6e1f98e4-06ac-473d-9227-76cd68ed138c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (3,
        'https://static.wtable.co.kr/image/production/service/staticpage/97/0e957f25-69e9-41cd-9239-855fb8d344fd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (3,
        'https://static.wtable.co.kr/image/production/service/staticpage/97/d362f5cb-ef4f-40b6-84ec-4436c4da0beb.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (4, '진행중', '2023-11-09', '2024-11-09',
        'https://static.wtable.co.kr/image/production/service/staticpage/89/80ef41d4-e6db-4fa3-856c-794f60e5197e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/14e21066-04fb-461f-b3e4-960888c6890b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/563ddabc-fd27-4858-864c-7bcb80c9852c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/c5e86aaa-e1f1-4864-96b6-8048f81193b0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/da8e2b37-a7a8-41ce-a6cf-f3c16cc456f4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/64e68535-0100-4e7a-8f47-eef8f775f875.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/f5c12ba9-d857-4d8f-b003-6b64e4e95196.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/5e0ed926-dd71-4824-9985-f027a464d9c0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/d74c958f-20bf-4899-96fc-24dbe7e02174.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/81783de3-c8f9-4667-a3b1-6983d4da9ff0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/064b3ed1-ccd2-49e6-948c-be303065c949.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/07d2ea81-eabc-4a9d-82be-dd5313b674bb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/6c3a217a-5efd-400a-a3ff-b6fb6d5a920e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/61f69fb1-3506-4d51-873d-d008807a6474.jpg');
INSERT INTO event_content (id, content_images)
VALUES (4,
        'https://static.wtable.co.kr/image/production/service/staticpage/89/48348df2-9558-4642-8105-0a5872e809c0.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (5, '종료', '2022-09-22', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/f08fa00d-0166-4f5a-b537-afe79a2b82f7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5, 'https://video.wtable.co.kr/gif/production/service/staticpage/58/b30c8d98-ba2a-4e6d-b9a7-a3eefb1c4601.gif');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/17b348ef-1176-4ba9-998a-16717cc6c3f0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/ae25d60d-f450-44f2-be2a-cadade1ef152.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/60a8163d-21e8-4146-b603-bc1eff201783.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/8683a441-18b2-4e69-8118-5fe25d09b133.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/06b06614-df2c-4617-9516-7148b3206215.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/436b5565-0ab9-40e1-ab7a-1669119f51d7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/e299e70f-40ef-441b-bc44-7a9d514e980a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (5,
        'https://static.wtable.co.kr/image/production/service/staticpage/58/6fcae2f8-bedf-4db8-bb10-3068cbc3b698.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (6, '종료', '2022-08-12', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/53/30a9f65d-261e-4718-a783-bfd7a615383a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (6,
        'https://static.wtable.co.kr/image/production/service/staticpage/53/e424cbd7-7c60-4c41-902d-3f60913a4e6e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (6,
        'https://static.wtable.co.kr/image/production/service/staticpage/53/4643a89a-db54-44d6-ad8b-eae4eabaf2b1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (6,
        'https://static.wtable.co.kr/image/production/service/staticpage/53/0d99de8f-560d-446f-b68a-0e80f7947da8.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (7, '종료', '2022-05-29', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/13/f4efe0ee-8a1b-43bd-8d3a-747d6c1d5237.jpg');
INSERT INTO event_content (id, content_images)
VALUES (7,
        'https://static.wtable.co.kr/image/production/service/staticpage/13/a2a31324-6c7a-408e-b7b1-7c42e00bf684.jpg');
INSERT INTO event_content (id, content_images)
VALUES (7,
        'https://static.wtable.co.kr/image/production/service/staticpage/13/2c3e701d-c7e4-41fd-8b05-b582c6a5fdf7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (7,
        'https://static.wtable.co.kr/image/production/service/staticpage/13/08bc6545-439a-412c-b49d-946323057ab8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (7,
        'https://static.wtable.co.kr/image/production/service/staticpage/13/29331295-df50-4815-867b-bbfb2d9c1f64.jpg');
INSERT INTO event_content (id, content_images)
VALUES (7,
        'https://static.wtable.co.kr/image/production/service/staticpage/13/cfb65fca-05af-456b-8000-31d1ea818a40.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (8, '종료', '2022-04-30', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/44/b562c789-b544-48ca-b62a-87f0ff63dcc0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (8,
        'https://static.wtable.co.kr/image/production/service/staticpage/44/f158d433-2ea0-4b48-83e5-e3b51d3e7897.jpg');
INSERT INTO event_content (id, content_images)
VALUES (8,
        'https://static.wtable.co.kr/image/production/service/staticpage/44/b4bb5d69-f4cb-4317-9a18-d473d085bd81.jpg');
INSERT INTO event_content (id, content_images)
VALUES (8,
        'https://static.wtable.co.kr/image/production/service/staticpage/44/89d95813-1930-4a4d-97d0-e48ad3f644ca.jpg');
INSERT INTO event_content (id, content_images)
VALUES (8,
        'https://static.wtable.co.kr/image/production/service/staticpage/44/885e0a95-0888-4bbb-8353-72ff1ad1bd50.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (9, '종료', '2022-04-08', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/845ef540-4a9d-4276-b840-108ab516adb3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/caee6171-ef77-4720-b247-ad786411d25e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/74298ff3-65fa-4a50-a0cb-3ed7d1e52c33.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/bb2b3c7d-8450-4a9e-b5f2-355507a1d957.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/4888c732-6f13-4631-96b1-59d74f3e1dd6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/981255cb-e224-430c-89a8-bb563b871383.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/c9968c89-c752-4082-b7f5-fc36595d2e57.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/07074c2b-94f2-4c12-997d-9f7114c011e7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/a6aa7538-3749-4916-951a-910364e58ef3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/6e72a528-1081-49d5-9c5f-c787d808a748.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/2e7fd081-fbae-4eec-939b-f83a826795fd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/70ff9b33-d370-4b36-9f98-93a29bb47787.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/43056bbe-4e60-45fd-9ced-17475bf7c375.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/951b6b7a-9db2-4fb9-b55e-537c044926ef.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/0b00193f-2124-4e26-8ebd-6609ce10c033.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/83488693-4f0e-46a6-84ef-97ae20a426fc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/57e423c4-7e1f-4723-a8b1-aefaa8c15fd0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/5d8f917b-2814-4603-ae9f-94f1908a04da.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/0b88b92c-363e-4d75-811c-b9f81c9a7e2c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/6e056aae-b4dc-4e47-809d-de891ccf18c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/94234c6e-326f-4eb7-945a-90852b4f56c9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/aa186759-e5a5-4bac-afad-deb8ac1e4a49.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/0a14f8b8-c4e9-48a6-b644-18e2931b7a19.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/8fa8bd92-302b-454a-a64f-bda544ed1baf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/de081ee9-05e9-4b09-93a6-2800147ff63c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (9,
        'https://static.wtable.co.kr/image/production/service/staticpage/40/e5a36870-a1a1-4a6d-bc0b-4bdcdb375f0e.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (10, '종료', '2022-03-31', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/bb16e2df-a328-4eb7-9a82-cb5ca9c6663f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/97628e9b-760c-4371-a3de-07fcda1e189e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/864942d5-5f2d-410c-a250-063eed596394.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/aeab0a3d-6cd9-46b7-8264-9cae9035868d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/90a05e88-a165-4d13-bd40-802cdee406e2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/dd72e7e3-68b7-454f-89ed-72c65ac54e66.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/cab562ad-c7d4-4fbf-ae2c-31638c3808cf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/a942cadd-a387-41b9-93f0-f87225cc9232.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/14be2bb9-a39e-40c1-97e6-341f56996d29.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/9e6bcf8e-0734-4aab-9e61-24fdda7a6267.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/2204b9d1-e5f4-4147-ad96-c73bccb4301c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/03c499b7-95af-4572-b729-26f7dac59193.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/de404e2d-1c62-4da8-9323-16622607d20e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/9fa2e275-9677-4b1e-810e-45a81a92d331.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/c8f14eb3-faf2-4ed6-95ad-df7488194dfe.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/5e7dfd98-b8c0-46e2-ace5-db63f7b5e0d0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/0fbf9ee6-1495-4ee8-9890-e876266599b9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/53d1ba95-10a3-486f-8cfa-ab8769642b86.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/0025048a-33c4-4ad9-adff-6053451aa56b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/bc095a21-aefd-4eea-b0ba-4bd7bdf9b8fb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/dc081bf4-1f17-4745-aef8-3508149a0474.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/7b853ddf-9b8c-49d8-8a11-c316605cf8d7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/6c79d3be-5745-49f3-b320-c029e9c36578.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/ae55068e-8a87-4eae-aeab-4efbaaec036d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/c94900b4-37c0-4978-a94e-5b370c016a8f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/0ea36438-8d8a-4056-9951-5cddeaeb7842.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/af196abb-992b-4305-89fb-0417797a5d84.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/06bdb3b2-25d7-4c06-a5c5-e85ad367e78d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/7ecd172c-fb7a-4f3b-88dc-31a9d7f3730c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/c3cb8d41-fc4d-4a49-bd3a-b28ff9cbb982.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/2183ae7e-ab54-4eea-9f7e-a72cd22c0b55.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/e44ddd9b-190b-46b6-aed0-db67edd17d6b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/6a62a3c3-1115-478b-8b77-2a6b830411a4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/8bf451d0-b9d4-4624-85d0-eafecaabdba8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/c4558a3c-e685-4bd8-b4f2-46097fa53699.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/e6be08c5-4548-41b1-8995-df4a52d77a28.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/8be39aa6-0032-4117-9c42-c344de25cf63.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/e7c7c5a2-7183-4352-b7c9-43cb175efa8a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/72a2dd0c-554b-4572-a972-99fda065f493.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/0c8bd2c8-f833-481b-bbc3-4444e6adc268.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/adca5b3a-a198-4ac2-9eb0-1189f6bd1b2d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/9fff3b3e-e5c4-48fa-a6d7-cc46b240b362.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/47b20fe5-7ac6-4794-a641-a3639cbb884d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/a0130a46-afc9-40bb-af17-876eede49fcc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/9aaa1f11-7189-47ec-a792-4b3a50278616.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/26edfd4e-086d-405c-8dd5-7fcdd491c459.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/bcbfab27-ff01-44fe-adaf-4ad8ab09a3c0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/cf979ba5-556d-4cf9-b26e-de739014c38f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/a811d32d-cc54-43f5-bf3e-7249765108c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (10,
        'https://static.wtable.co.kr/image/production/service/staticpage/37/5e161119-d74e-4003-a50b-a03b09fd616d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (11, '종료', '2022-03-25', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/569660e5-a02d-440e-9790-f05bbd3d9b44.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/5e25ab94-8f40-4af6-a406-d666eddf3cea.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/549358b5-9b28-4222-b08c-dc3a2a611a27.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/3930e977-edf6-4b42-afc8-ed40d7e15ade.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/ab2cb1db-5b24-4fb6-b063-a606bf06a3c8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/1065b20d-7c4a-4c1b-afbb-06653af7fad9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/4ea4eb2f-2d71-4327-8098-9f98b619ff7c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/551f24ff-7eef-4f4e-857a-5ab893816587.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/1e0021e1-6439-437d-80e1-ab064f806219.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/856d799b-e91d-41ba-96fe-9c74da01ab65.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/79b08f29-303b-473b-a7f9-516a5c56b63a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/0681a36f-bdd0-45a8-88d6-26d985b59779.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/31da252c-f33b-4f8f-a9c3-6389c31fb86c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/0c4b55fe-0c96-4efa-8c8a-eefd079b6348.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/0f04b85a-b026-4a62-ab56-39142c90026f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/92a6baa1-49b9-4773-9adb-30833473011a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/b9440f9a-c66c-421f-a592-5cccde477e23.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/58327d9d-2524-42c1-9b45-def1bc556446.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/b28640c7-97de-4a75-98cd-a2e0970da7f1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/29679ff3-d5ed-457a-8b32-6f38a7bd1878.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/99e91d48-a80a-4c17-8176-6d3932f8ec80.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/da90a386-fb8c-47f3-97ea-a10b93fe72a3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/9a2a26ae-b83b-4fcb-b56a-82a7a5a6cbdd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/87fd8f53-d7bd-4e98-8650-c078dfe16c25.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/9bb11b58-abb8-418b-b937-b637994197d6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/2ed6eaab-c7c8-4fb7-aed8-2c6267a72dd8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/ada151fe-95d3-4593-a9ea-e832992a5985.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/17b6e70e-8cd9-4d2e-a305-4844b7ce6bcc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/ea16ff48-31c6-496a-b9e5-aa8cb494cb55.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/79970dc5-1081-4ae5-85d5-fd19e7d39df6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/e4128729-5111-47e1-915f-ac3a0fddbf47.jpg');
INSERT INTO event_content (id, content_images)
VALUES (11,
        'https://static.wtable.co.kr/image/production/service/staticpage/35/11db2872-2b77-422c-8ed9-561049998a7d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (12, '종료', '2022-03-18', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/6c6d3b63-9bf6-4b4d-ba7b-556a10186a4d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/0de92379-cc09-4884-aca6-1e15e873932b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/3cb7fb0c-b409-49ab-8664-d00e263b1855.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/949fddb0-be87-45d3-988f-9d3c8fdcd7d7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/14d904bc-c1ed-4434-ab90-0268556836c4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/cf851e6b-cbb0-4464-91c4-1961ddce2e8a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/6aae2405-7371-436e-89e4-2517abb04319.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/19a2012c-c72e-4eed-8d54-bd01ad368f62.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/d1b31c8b-0139-4ff8-86f6-4cf883a5f047.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/6556563a-4ac9-45b7-9e6a-ac052ecaff66.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/b705faae-1ab9-4cd5-b345-75026df69019.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/de2f918a-3daf-45c7-b5d2-4e0d7e3b9fb2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/2460995c-f2e9-4b3d-aa7d-8687a8742d17.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/a0b2ac69-070d-4022-afd8-86dca795dafd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/953db779-154e-4dbe-ad5e-b135259d6158.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/60dcdce8-2050-43f6-b6e7-d8cf37994dda.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/bf205e82-8143-43bd-9d29-11ddcc42bddf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/14674b0e-b200-44eb-806a-0744a077ac94.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/18798e9c-b3f6-4e92-ba84-048eac8da69a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/16103712-1b47-4acb-bde6-5fbb2dc329a2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/da7d1376-dc7d-4d58-9e77-35349b6749eb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/72d4191c-b795-497d-81ca-7561916b6cb7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/7f81a1e7-fe14-4891-b6b3-49d4432381de.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/75f8d09d-581a-4f7b-a964-630ccc5f46fe.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/a5799f80-44d9-4a62-8bf8-5efa1474c1cf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/16c71c1a-6d17-4d01-9072-f44489ef29fe.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/462632ae-8e6e-4fd2-99c7-e0a332afd772.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/f97550ed-3110-4e28-82f7-820f912a4ffa.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/9ade0980-f27f-458a-b8f6-dbfe5a143d43.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/6dd91cd8-86c3-43c5-ba0b-3cf62fb24b44.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/f1b9f2ce-833b-4c49-98c9-b25b393b39a5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/50de0442-fcf3-453a-8181-0eb89cc2f0e3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/8926ee22-9ec2-4912-9b4f-77a67bcc2436.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/2ea8f9c0-38eb-4648-8ef7-20d0fb11feb7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/e3f7a4e3-cbba-406d-86be-8f1e2fdc7d08.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/7c40e321-7fd6-426b-8b61-48a94b889055.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/4b2cb8f0-30e2-4b66-9afd-d20b5c5b73e6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/77bd703f-e201-4779-b6c6-a6cb3416337f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/8c376c1a-d995-4af3-9401-7c2ea8af5752.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/18978da7-1d74-4184-aa2b-b2c4eb924743.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/d8c84a14-4d57-421e-822a-44982a972b48.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/a2b5ac9c-bf17-47ba-a1e4-d81719d1be59.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/a66c31c8-c442-4969-85e0-8a5afd9b5a79.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/a26ffd67-0e4d-43f6-96db-1f6d588fa9f0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (12,
        'https://static.wtable.co.kr/image/production/service/staticpage/31/31abb88f-a1b9-4fe7-9dd7-f535daa86f44.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (13, '종료', '2022-02-10', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/1e1b9a06-4a09-49af-9013-a9ddd17c6ae1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/e55a56f7-23dd-437c-8bc5-490b4aa046c9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/1c79a65d-c639-4084-a2a9-4e343ea73d11.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/4516a590-16ad-4410-b43d-22ab691fe8fe.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/0966d28d-9c12-4db6-98f8-954960c06fdf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/ad2c308e-3a36-4a32-b8c5-2052c7868bc7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/1415c351-cede-412b-86db-e835be081edb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/6d172adc-1975-4a4d-94ef-85ed84f32083.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/d70e0af4-c1d3-4bb5-94c4-105e0106c89f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/1b2951b9-65bf-45f3-aa6a-c44b89d5d5f3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/4828e952-de22-4f11-b2a3-674197a26b91.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/c9e3ba70-7e5a-43c6-872d-64aab8af9a77.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/61a0f956-cae0-4ab4-8a6f-fe117a68b1d5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/dbd9efac-9983-484b-9ecd-f7d9be959c83.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/1bca4d5f-994e-4078-a5a9-19340e186779.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/a2044e35-b1df-4d25-9f5a-3c0e914be27a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/e11f31c7-8e7a-4f31-82ed-a0f10be994fc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/8717cb63-700b-42d9-bccf-0ca187ebfd5b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/d7a988b3-ab40-47dd-b8b5-bd92925f2375.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/2c4fca9f-7da4-4dc7-b297-1ed034fd3aa0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/a1e5d11a-1144-4307-b73d-95d28eaf3459.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/6372330c-29ca-4aa4-b25b-ec9034b69fbf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/f3f103ae-d85f-47ea-9bd6-96453fedf40d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/7b06dd6c-1826-42c3-826d-729120064491.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/9e98fa97-841b-4dd4-b4ab-ad4295381d77.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/df22516f-bdbf-4987-bbb9-df6daca60cef.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/3a0174ce-2d1e-49ee-815e-02af40255849.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/49152665-b106-4a74-9e1d-362109925990.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/d310ad2d-471c-4c3d-b1bb-7970724fbeed.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/637a80ab-ec90-4347-b06d-c438e6b010c0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/99cd8fd8-e2c1-4ed7-95d4-e2a262e5e059.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/ee6effbb-6894-40e5-9734-1332a04c096d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/5dc71946-650c-47df-a208-fda669896135.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/ce472d3d-08de-43f5-8fb6-539ce852eff8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/b189bc02-2cc5-4f35-842a-8febb3914173.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/8f3a3469-6f1d-4682-a942-4ab35561b4b5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/be79be18-5c93-44ee-ba12-50a49391e45e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (13,
        'https://static.wtable.co.kr/image/production/service/staticpage/27/24918574-7b4f-4852-bb2b-409c89123089.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (14, '종료', '2022-01-24', NULL,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/9deb5162-7a0d-462b-bcd9-a7f9d5170c26.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/3312fb25-e378-43cb-9c9d-e00ff7fb0a91.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/2af966ca-e555-4c8b-ad8d-08b6ee066fc7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/c115f776-7035-48dd-bc67-2fca9a5d9ae2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/e5b13f06-6d40-41da-8c9a-9d72a361939d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/b3d5bce1-c596-47d7-857f-ef60c885ae4f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/289532bb-0f6c-4428-a8b9-adb1052b307d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/2a99605d-8510-4b19-b75f-0398cc40798b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/907dad54-6186-4d8a-87a3-cba5cd08d667.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/a4df0d3a-24ac-4e32-b442-3e3b650ba175.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/c7d217e0-3c13-4a41-a83b-9904aa41493e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/c2de635f-7a89-4705-bf2b-bccbb827310b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (14,
        'https://static.wtable.co.kr/image/production/service/staticpage/25/fdf0e0da-7749-47cd-9382-32a17438fe6d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (15, '종료', '2024-07-01', '2024-07-20',
        'https://static.wtable.co.kr/image/production/service/staticpage/104/4546a914-fdc0-4f90-b071-289a55da30e8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (15,
        'https://static.wtable.co.kr/image/production/service/staticpage/104/cc6ae226-d82f-4360-b339-05ef4da4197d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (15,
        'https://static.wtable.co.kr/image/production/service/staticpage/104/48de87ef-628e-4906-9b8f-82f2bff70f11.jpg');
INSERT INTO event_content (id, content_images)
VALUES (15,
        'https://static.wtable.co.kr/image/production/service/staticpage/104/36aab80e-812b-43fd-9ad7-4ba0c5e9911b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (15,
        'https://static.wtable.co.kr/image/production/service/staticpage/104/f04dcf77-3de3-4f3a-b628-65ab87796053.jpg');
INSERT INTO event_content (id, content_images)
VALUES (15,
        'https://static.wtable.co.kr/image/production/service/staticpage/104/8052d199-f483-4bdd-b6f6-06c9e2b1bec5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (15,
        'https://static.wtable.co.kr/image/production/service/staticpage/104/0fce1c30-4089-4c10-9d72-bffcf03aef49.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (16, '종료', '2024-06-03', '2024-06-16',
        'https://static.wtable.co.kr/image/production/service/staticpage/103/0f209921-3f5c-4eb7-8c07-64207e8a0cea.jpg');
INSERT INTO event_content (id, content_images)
VALUES (16,
        'https://static.wtable.co.kr/image/production/service/staticpage/103/2c59392a-69cc-4cbb-90bd-ea64e44b27c6.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (17, '종료', '2024-03-28', '2024-04-03',
        'https://static.wtable.co.kr/image/production/service/staticpage/101/d41e72b5-3047-44c9-bf27-3d0de91b06b8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://video.wtable.co.kr/video/production/service/staticpage/101/2104b08a-1cb6-4236-8e53-1d233e99940a.mp4');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/1b8ade44-bd64-4a74-904d-002043b47732.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/f05120d4-7f7b-4a35-8829-734bc4205376.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/d93b441c-aba9-4d78-b024-0a61a6833bc9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/3211d017-9893-4e41-8055-5476706224fe.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/af60ad86-a383-4581-8f16-99a4c5102a4d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/594db0ad-b167-42cc-af17-6f52cb49a395.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/e53a976d-8604-43bf-9649-a7c111324c07.jpg');
INSERT INTO event_content (id, content_images)
VALUES (17,
        'https://static.wtable.co.kr/image/production/service/staticpage/101/b52f18d7-97b5-419f-8e26-9eb268ba3d18.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (18, '종료', '2024-03-14', '2024-03-20',
        'https://static.wtable.co.kr/image/production/service/staticpage/100/3c4f6ed1-4f50-4702-b589-c596eb9a5575.jpg');
INSERT INTO event_content (id, content_images)
VALUES (18,
        'https://static.wtable.co.kr/image/production/service/staticpage/100/8606a03c-b28c-4f80-9e43-4c97e4ebcc9f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (18,
        'https://static.wtable.co.kr/image/production/service/staticpage/100/259e48ba-4e80-49f4-bc39-8a52e29548ec.jpg');
INSERT INTO event_content (id, content_images)
VALUES (18,
        'https://static.wtable.co.kr/image/production/service/staticpage/100/aed40ad0-09d5-4247-b956-9aaa71c66349.jpg');
INSERT INTO event_content (id, content_images)
VALUES (18,
        'https://static.wtable.co.kr/image/production/service/staticpage/100/c38b8e14-acbc-4ea6-81db-eaa08dd874eb.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (19, '종료', '2024-03-14', '2024-03-21',
        'https://static.wtable.co.kr/image/production/service/staticpage/99/b7d3e0ef-6a43-4167-86cb-4c09e3858fea.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/1689445e-374d-494a-a5bf-a915ceca9559.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/ca1d36cf-fad3-4706-b559-1b7a6956868f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/1ed9f6c0-6ba5-44f0-aeae-abb63f5c98c5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/1c8b7d43-cc93-40ca-a007-c394c90e3fbb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/a8f7f662-828d-4b38-ad03-837d2878552f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/c308ca95-44c3-4a2a-a74c-516652a89284.jpg');
INSERT INTO event_content (id, content_images)
VALUES (19,
        'https://static.wtable.co.kr/image/production/service/staticpage/99/982e8deb-9684-426c-8078-e325847e7c96.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (20, '종료', '2024-02-22', '2024-03-07',
        'https://static.wtable.co.kr/image/production/service/staticpage/98/015278d4-3ebd-45af-9a8b-d7429a151537.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/8d52de3c-3c2c-4a6b-a60a-dbf4bbf392cd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/287b7182-06d2-43f2-a43f-234bf94c66a1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/1da7c8af-0e03-471d-9c73-2b397bf2247b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/a4eab097-48fc-415b-a043-f11db9a00374.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/a8177921-eadf-4a3e-ae9c-2df62a2f5b44.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/fed4ce1d-395d-4070-b6dc-1a73ffd1854d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/c5ca6b09-42c6-424b-a48e-76c27ffd162b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/8507d427-4c46-4ad0-ae5a-73086b06f0f1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (20,
        'https://static.wtable.co.kr/image/production/service/staticpage/98/f48a259f-6dc4-4354-8a96-c4626a9ac7f8.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (21, '종료', '2024-01-08', '2024-01-15',
        'https://static.wtable.co.kr/image/production/service/staticpage/94/761c867a-0cb3-4380-8452-d01446281950.jpg');
INSERT INTO event_content (id, content_images)
VALUES (21,
        'https://static.wtable.co.kr/image/production/service/staticpage/94/617ef207-2f09-4243-a88d-b6e8182abd8d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (21,
        'https://video.wtable.co.kr/video/production/service/staticpage/94/95c05052-6d61-4b89-924f-304d2a74a2c7.mp4');
INSERT INTO event_content (id, content_images)
VALUES (21,
        'https://static.wtable.co.kr/image/production/service/staticpage/94/7739e47f-41c0-4f08-9671-17b01b1f3796.jpg');
INSERT INTO event_content (id, content_images)
VALUES (21,
        'https://static.wtable.co.kr/image/production/service/staticpage/94/6d1a145f-c6af-45ab-9369-0fb638884c41.jpg');
INSERT INTO event_content (id, content_images)
VALUES (21,
        'https://static.wtable.co.kr/image/production/service/staticpage/94/51cfdaaa-0ffc-438b-87b4-22383494bbd7.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (22, '종료', '2023-12-28', '2024-01-11',
        'https://static.wtable.co.kr/image/production/service/staticpage/96/f5713352-d8fd-4ec7-86f9-959de90c7ede.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/10bc00fa-5876-43fd-ab76-ed9d37229203.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/9175e2e7-5315-4974-bff1-56609dd6e6df.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/068407ef-6a01-4f23-b462-218c3e45bfee.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/74befb5e-807a-4060-a82f-bde3dc24195b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/61f801fa-246f-4a9b-966a-1137ac4936b8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/0865e222-a794-4dfd-88a9-70ef76bad3c7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/87fa29b6-9b4a-480e-8951-ea112db01a87.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/8e2872b4-dd0d-4c86-9ebe-debd97a994ea.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/0c9e969f-afc5-408b-9439-86f073810488.jpg');
INSERT INTO event_content (id, content_images)
VALUES (22,
        'https://static.wtable.co.kr/image/production/service/staticpage/96/d509f61e-1fcf-4cee-85d1-f6d189262ba0.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (23, '종료', '2023-12-15', '2023-12-31',
        'https://static.wtable.co.kr/image/production/service/staticpage/92/0af1e8d7-f08c-4707-b0c4-61a66da266df.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/b096bad1-acaf-4089-91fc-ba0f9601be72.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/386d8e11-47b6-4df9-8edb-7a54bd0c4d1b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/a78413af-42a5-4893-8f87-ed0a1ffff03e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/92756133-5adb-4190-8924-b521c64d112d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/faef18ea-144e-49a2-be6f-3062d0589441.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/526d0a43-aa85-4863-8cf3-18ac62fa13d0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (23,
        'https://static.wtable.co.kr/image/production/service/staticpage/92/5b349102-d154-4d76-a01f-d85dbf8af35f.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (24, '종료', '2023-11-21', '2023-11-23',
        'https://static.wtable.co.kr/image/production/service/staticpage/90/1ac3b28b-e49e-4f03-a6c5-b9d504cf311b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (24,
        'https://static.wtable.co.kr/image/production/service/staticpage/90/35560a35-5d1a-4b5e-910b-40d27cdbd678.jpg');
INSERT INTO event_content (id, content_images)
VALUES (24,
        'https://static.wtable.co.kr/image/production/service/staticpage/90/807be514-d7e6-48b8-bf7d-6676fdaa4ed2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (24,
        'https://static.wtable.co.kr/image/production/service/staticpage/90/5900419f-9277-4b3a-b120-ab42adf01304.jpg');
INSERT INTO event_content (id, content_images)
VALUES (24,
        'https://static.wtable.co.kr/image/production/service/staticpage/90/c58a8caa-9851-4ba9-99de-6646947121b5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (24,
        'https://static.wtable.co.kr/image/production/service/staticpage/90/a2e42f04-f847-412c-aa7e-255cfeae43b1.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (25, '종료', '2023-08-18', '2023-08-24',
        'https://static.wtable.co.kr/image/production/service/staticpage/88/520fb9f3-514d-4435-a8de-efe5786bf47c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (25,
        'https://static.wtable.co.kr/image/production/service/staticpage/88/dfc4900d-0558-4f58-926d-dee8074c1e7d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (25,
        'https://video.wtable.co.kr/video/production/service/staticpage/88/2035d3ba-154c-4006-aeb6-c6daf4621c13.mp4');
INSERT INTO event_content (id, content_images)
VALUES (25,
        'https://static.wtable.co.kr/image/production/service/staticpage/88/32e291cf-dbb1-46e4-b014-5945b5553b4f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (25,
        'https://static.wtable.co.kr/image/production/service/staticpage/88/3f463b70-7403-408a-82fc-51df05f05a64.jpg');
INSERT INTO event_content (id, content_images)
VALUES (25,
        'https://static.wtable.co.kr/image/production/service/staticpage/88/31493099-f30f-4bbf-86c7-b860c154297e.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (26, '종료', '2023-08-11', '2023-08-17',
        'https://static.wtable.co.kr/image/production/service/staticpage/87/56d9ca0b-0c1c-49fc-8ac6-e65bdd4d808c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (26,
        'https://static.wtable.co.kr/image/production/service/staticpage/87/864a1f80-e495-489e-9e2f-906dc8fd1b0c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (26,
        'https://video.wtable.co.kr/video/production/service/staticpage/87/b4b22cea-7559-40d2-a729-66b841800bba.mp4');
INSERT INTO event_content (id, content_images)
VALUES (26,
        'https://static.wtable.co.kr/image/production/service/staticpage/87/e301e8b2-c879-4137-b604-49cb78538230.jpg');
INSERT INTO event_content (id, content_images)
VALUES (26,
        'https://static.wtable.co.kr/image/production/service/staticpage/87/bb631cf9-9174-4638-984c-1f9a8e42eba1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (26,
        'https://static.wtable.co.kr/image/production/service/staticpage/87/4aa5f133-668f-4030-bba6-5b5746f56fe8.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (27, '종료', '2023-08-04', '2023-08-10',
        'https://static.wtable.co.kr/image/production/service/staticpage/86/6e04525e-d91c-4fb0-9cda-920567b5dc77.jpg');
INSERT INTO event_content (id, content_images)
VALUES (27,
        'https://static.wtable.co.kr/image/production/service/staticpage/86/727b9bd3-7fbe-41b7-a4ae-167cb80debaa.jpg');
INSERT INTO event_content (id, content_images)
VALUES (27,
        'https://video.wtable.co.kr/video/production/service/staticpage/86/22298b96-37f3-48bc-8c25-bf74e898b8eb.mp4');
INSERT INTO event_content (id, content_images)
VALUES (27,
        'https://static.wtable.co.kr/image/production/service/staticpage/86/b46649be-b785-4cee-b6c7-dd5a2dbd4a39.jpg');
INSERT INTO event_content (id, content_images)
VALUES (27,
        'https://static.wtable.co.kr/image/production/service/staticpage/86/f58fa3cb-f79f-4062-b9b2-2c2f8eec80f7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (27,
        'https://static.wtable.co.kr/image/production/service/staticpage/86/19a13e42-4ba8-4ae9-b367-328bd614ee9c.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (28, '종료', '2023-07-21', '2023-07-27',
        'https://static.wtable.co.kr/image/production/service/staticpage/85/534ceb21-38af-448b-beac-0e31826e1d06.jpg');
INSERT INTO event_content (id, content_images)
VALUES (28,
        'https://static.wtable.co.kr/image/production/service/staticpage/85/0930d896-9bcf-476d-8ca9-d1ac1f217c00.jpg');
INSERT INTO event_content (id, content_images)
VALUES (28,
        'https://video.wtable.co.kr/video/production/service/staticpage/85/5df93be5-7d4a-4821-a3ad-1ec364349845.mp4');
INSERT INTO event_content (id, content_images)
VALUES (28,
        'https://static.wtable.co.kr/image/production/service/staticpage/85/88407814-ab85-436b-a756-4a4d481095db.jpg');
INSERT INTO event_content (id, content_images)
VALUES (28,
        'https://static.wtable.co.kr/image/production/service/staticpage/85/e4242d9e-d390-4057-835f-9e2a3c670692.jpg');
INSERT INTO event_content (id, content_images)
VALUES (28,
        'https://static.wtable.co.kr/image/production/service/staticpage/85/29438529-db7f-4975-ba8c-a618e0bfda7f.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (29, '종료', '2023-07-20', '2024-07-20',
        'https://static.wtable.co.kr/image/production/service/staticpage/84/d0484fed-2a3c-4fde-966e-e652df04419c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/fd123bad-45dd-4ddb-8e59-a4e7de98967a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/7006e7ab-d35c-49a2-893f-1d8898d3a16b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/061926f0-6702-4371-839e-e0e810d556cb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/74d174b2-92cd-49f4-9735-6e4e627b0e8b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/f5ea03cb-fdfb-4ccb-a514-fd1b5ecd4ff2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/30efadb4-3a3c-4691-b918-d43de473b1c2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/498aec3e-bad8-4c69-a93e-d5c4e233ce0e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/e2ecd620-42f0-41dd-a3c2-55e141ab2416.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/c9835565-0eb8-4e6e-89b3-c1aa2bafbcae.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/8ad61d76-ceff-4667-80c2-6f753eb202c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/cee78f4b-6430-4a28-be47-1299a3cf8b25.jpg');
INSERT INTO event_content (id, content_images)
VALUES (29,
        'https://static.wtable.co.kr/image/production/service/staticpage/84/3ab6ef30-1ba0-46f6-a534-14674168ff18.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (30, '종료', '2023-07-14', '2023-07-20',
        'https://static.wtable.co.kr/image/production/service/staticpage/83/7112c216-becd-4b90-a047-9f794c911728.jpg');
INSERT INTO event_content (id, content_images)
VALUES (30,
        'https://static.wtable.co.kr/image/production/service/staticpage/83/c7ed1d3c-e010-4af9-9025-9b604f7c44ad.jpg');
INSERT INTO event_content (id, content_images)
VALUES (30,
        'https://video.wtable.co.kr/video/production/service/staticpage/83/dec72161-cf5b-48c4-9112-0ac3fa4f68c1.mp4');
INSERT INTO event_content (id, content_images)
VALUES (30,
        'https://static.wtable.co.kr/image/production/service/staticpage/83/f6032e21-4710-4c37-a86a-8f7807e50adb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (30,
        'https://static.wtable.co.kr/image/production/service/staticpage/83/17af9654-81f6-4fa6-9a20-abe69689c7f9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (30,
        'https://static.wtable.co.kr/image/production/service/staticpage/83/9e992822-b5bf-495d-8a90-ce33527dd0c1.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (31, '종료', '2023-07-07', '2023-07-13',
        'https://static.wtable.co.kr/image/production/service/staticpage/82/3e772a44-0bf5-4bba-ad7c-2143bc6a3c4f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (31,
        'https://static.wtable.co.kr/image/production/service/staticpage/82/1ca68c8c-d4da-465c-89df-6761a2b2a7df.jpg');
INSERT INTO event_content (id, content_images)
VALUES (31,
        'https://video.wtable.co.kr/video/production/service/staticpage/82/24479710-41ac-4120-baf4-5cab3a2611b9.mp4');
INSERT INTO event_content (id, content_images)
VALUES (31,
        'https://static.wtable.co.kr/image/production/service/staticpage/82/04478c82-e6b3-4ca0-a93c-aa55533b1103.jpg');
INSERT INTO event_content (id, content_images)
VALUES (31,
        'https://static.wtable.co.kr/image/production/service/staticpage/82/f661aa1d-5b92-4b89-a9ec-0e25603b504b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (31,
        'https://static.wtable.co.kr/image/production/service/staticpage/82/936ee02f-96a9-43f9-a9fa-561ed6ca9c31.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (32, '종료', '2023-07-06', '2023-08-31',
        'https://static.wtable.co.kr/image/production/service/staticpage/81/de0a9e40-3632-4fd2-99ac-9820e1cd4d2a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (32,
        'https://static.wtable.co.kr/image/production/service/staticpage/81/942865dd-af3e-41ce-8401-f1d13dfe3d8d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (33, '종료', '2023-06-30', '2023-07-06',
        'https://static.wtable.co.kr/image/production/service/staticpage/80/8cfab20f-a16b-41c9-abfe-4dd013aad336.jpg');
INSERT INTO event_content (id, content_images)
VALUES (33,
        'https://static.wtable.co.kr/image/production/service/staticpage/80/4052c616-f0c3-4d89-8419-79266315fc13.jpg');
INSERT INTO event_content (id, content_images)
VALUES (33,
        'https://video.wtable.co.kr/video/production/service/staticpage/80/dc8fc16e-bae3-47cb-8263-09996333e872.mp4');
INSERT INTO event_content (id, content_images)
VALUES (33,
        'https://static.wtable.co.kr/image/production/service/staticpage/80/750c832e-bb64-4cda-b5db-034aada404ae.jpg');
INSERT INTO event_content (id, content_images)
VALUES (33,
        'https://static.wtable.co.kr/image/production/service/staticpage/80/2eb6bf47-8532-4b25-b15f-971ecca5bd9e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (33,
        'https://static.wtable.co.kr/image/production/service/staticpage/80/19cbd363-cee1-4606-ad5b-c1c268d8daf2.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (34, '종료', '2023-06-05', '2023-06-15',
        'https://static.wtable.co.kr/image/production/service/staticpage/79/35dc1851-f985-4684-abc9-8174301ae885.jpg');
INSERT INTO event_content (id, content_images)
VALUES (34,
        'https://static.wtable.co.kr/image/production/service/staticpage/79/89428efb-bf4e-4aee-80b8-7a4dc261f20e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (34,
        'https://static.wtable.co.kr/image/production/service/staticpage/79/8f934d32-eb8e-4d41-8153-3390a9d96c50.jpg');
INSERT INTO event_content (id, content_images)
VALUES (34,
        'https://static.wtable.co.kr/image/production/service/staticpage/79/f6300daf-9133-4a9a-9554-3292876d6227.jpg');
INSERT INTO event_content (id, content_images)
VALUES (34,
        'https://static.wtable.co.kr/image/production/service/staticpage/79/8b907a51-6788-49b5-bc68-faaaa0f2154a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (34,
        'https://static.wtable.co.kr/image/production/service/staticpage/79/974f69f3-0ec5-4541-9f37-ad87ac0e9ea4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (34,
        'https://static.wtable.co.kr/image/production/service/staticpage/79/bc2b9ee6-547e-4ccc-8719-6fae34696967.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (35, '종료', '2023-05-31', '2023-06-11',
        'https://static.wtable.co.kr/image/production/service/staticpage/70/137eef58-8c5b-411a-86c1-680c5bf259d7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (35,
        'https://static.wtable.co.kr/image/production/service/staticpage/70/46eff760-dc91-4b63-bb74-fca8fcd9a388.jpg');
INSERT INTO event_content (id, content_images)
VALUES (35,
        'https://static.wtable.co.kr/image/production/service/staticpage/70/a7138e77-90b0-481e-affc-ead0820ee871.jpg');
INSERT INTO event_content (id, content_images)
VALUES (35,
        'https://static.wtable.co.kr/image/production/service/staticpage/70/636a6205-e198-4330-9963-673bcf877f6b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (35,
        'https://static.wtable.co.kr/image/production/service/staticpage/70/44007ae7-88e3-439d-8a0c-ead6f7f603eb.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (36, '종료', '2023-05-30', '2023-06-13',
        'https://static.wtable.co.kr/image/production/service/staticpage/76/8719a0dc-014f-43f4-ae65-36ba9c1763ca.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/9ef0c82d-d968-416d-b226-f90a08f02dc7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/11e251bb-4d13-41a7-8d16-fd9d2ade6464.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/309b61a4-58dc-489f-a417-b0ac6ff99622.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/475c20d4-5807-43ce-9e1f-c003bf2533a6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/5e62bc04-046a-4db4-b779-d4cbdbae6c86.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/c2199d09-c590-45be-9799-a8711ae188fc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (36,
        'https://static.wtable.co.kr/image/production/service/staticpage/76/c89c51c3-2b85-40cf-933e-dafb1d6589e5.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (37, '종료', '2023-05-30', '2023-06-13',
        'https://static.wtable.co.kr/image/production/service/staticpage/74/2a1e6c1b-50ba-4dda-85f8-b0ca5e8e1fd2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/149141cc-59b7-493c-a270-fb6c1edf84b1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/b0bca43a-c0ff-4c2f-95e3-3265a68ce9a8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/741a4bf6-4b16-4e19-a7bb-f94cda7a105e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/49407c81-6bed-4471-ab55-decf100b2415.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/f96f172e-07f2-4da7-9d08-41f17d21d4af.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/dec13c93-8b60-48f4-a4cc-3fc116f42615.jpg');
INSERT INTO event_content (id, content_images)
VALUES (37,
        'https://static.wtable.co.kr/image/production/service/staticpage/74/3792ca09-0a9c-4a39-bc19-cfbb6ec03c9c.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (38, '종료', '2023-05-30', '2023-06-13',
        'https://static.wtable.co.kr/image/production/service/staticpage/73/b1915eb1-95fb-4d9a-9d8a-a15d7cacbfa7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/ae06c553-8a10-4996-a0c4-89a27d9ba0cb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/17c67230-2319-4e4f-93ce-e0141a3cde2f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/e3393347-6a80-47a0-bcb1-de6ab6ce8679.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/145102ce-71d8-4d81-96cd-8e6a0f906f33.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/5b4c9857-e747-43a2-ad6d-1ae178f3a95a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/27afa5d8-5cb2-412f-ab50-527f7dbe116b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (38,
        'https://static.wtable.co.kr/image/production/service/staticpage/73/72cca103-80d3-45b5-a200-7debf99cb6ae.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (39, '종료', '2023-05-30', '2023-06-13',
        'https://static.wtable.co.kr/image/production/service/staticpage/72/d72a138b-e5af-499c-9b40-85c08c5291be.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/99130113-2d8a-4d99-a1be-acf8a8419bb1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/5bf214ca-227e-416c-a53e-313dc9b9d5fb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/2241db91-39b4-4ce0-aa98-c3d8b6de20d8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/72543e43-c671-49bc-a3d4-aa43e8144f81.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/f50cfca1-44fc-4a8c-84ab-78786c0eedbe.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/62f07f64-9bf4-4a0a-b5f2-31973a06ffbd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (39,
        'https://static.wtable.co.kr/image/production/service/staticpage/72/32778053-382e-47fa-92ad-3640006c0006.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (40, '종료', '2023-05-30', '2023-06-13',
        'https://static.wtable.co.kr/image/production/service/staticpage/71/03db444f-c23c-4c60-9342-cf71cf0313a3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/e9ea8dbd-3134-435d-b63a-f0c5da23d36f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/b7df60b5-ef8e-4bc1-9f0d-caae7c5d5205.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/fbc6c5bd-1104-4164-8dbe-e02289260cdd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/d117203d-7289-4293-a499-f57050bc5391.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/86b5899c-d723-4253-8347-ebe4c75a8644.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/302fc746-2e7a-4964-902e-7b2713ca4818.jpg');
INSERT INTO event_content (id, content_images)
VALUES (40,
        'https://static.wtable.co.kr/image/production/service/staticpage/71/8c8fa269-4492-418f-8b27-471d73ba2c8b.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (41, '종료', '2023-05-30', '2023-06-16',
        'https://static.wtable.co.kr/image/production/service/staticpage/77/a90e43b2-0949-44bb-8510-61c0a3e24f4f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/a7001268-b161-45f9-8ddb-5982a1254efc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://video.wtable.co.kr/video/production/service/staticpage/77/22279775-6d10-48ae-b21d-b309f6949eca.mp4');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/f66b7eec-b75b-49a0-92c8-4fa55ef8d71b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/02798c8d-fcf5-4576-a382-71b2cacc144f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/f3425a18-9258-40f4-825c-397cead41ccf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/5ca8a34a-7e87-4b78-9376-457641b70064.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/8b28acb1-dab6-4d9f-ada7-7ed38f5bcc8b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/87d7ace2-832b-4815-919c-a449e2792773.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/cb023a7e-a027-47ef-b20b-62853780d94d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/325b7f3c-8d73-4ae1-ace7-848b5ae5c596.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/e0d38bb1-13b0-4c38-836b-39ecb0532e1a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/98f33f4e-031d-47fc-bd07-318022f0b20f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/a267b0a8-9e56-416e-8ecb-6aca6f6e1d23.jpg');
INSERT INTO event_content (id, content_images)
VALUES (41,
        'https://static.wtable.co.kr/image/production/service/staticpage/77/c2e8df43-6c4b-427d-81c2-761e245d0995.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (42, '종료', '2023-05-21', '2024-03-28',
        'https://static.wtable.co.kr/image/production/service/staticpage/68/00491c04-45d7-40cf-8c96-812b96a60e3e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/1927ee41-60db-4316-814a-8de9d1a274d8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/7397a40b-aa86-4788-8b14-240631f5c877.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/a51352c0-22de-438d-8741-e686318a6674.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/289e1ad5-67e3-4a51-9972-7a8ae315ad72.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/8e7b71cb-0a1e-48b2-aa05-1e904053574e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/ba389271-dfa6-4a59-8d98-d72203310890.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/c9268142-1cfa-4e12-a292-aa75fba932fa.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/6e1a6ce8-aef8-49aa-8791-ebe16412e1b1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/3182f0e8-daea-4c63-9fd9-b89a1f14e6a5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (42,
        'https://static.wtable.co.kr/image/production/service/staticpage/68/41a0e97b-95ad-4c11-abc2-64c52796427e.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (43, '종료', '2023-05-11', '2023-05-24',
        'https://static.wtable.co.kr/image/production/service/staticpage/65/d1aea3c2-7f11-4a92-9570-7352a9b2cad9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (43,
        'https://static.wtable.co.kr/image/production/service/staticpage/65/175f8db6-4cc0-4d03-a359-5169defd3db6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (43,
        'https://static.wtable.co.kr/image/production/service/staticpage/65/cf91f94e-e6f4-4897-b9ed-635f83d33a57.jpg');
INSERT INTO event_content (id, content_images)
VALUES (43,
        'https://static.wtable.co.kr/image/production/service/staticpage/65/485017e4-c97f-4f30-b123-53e9b53b74ff.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (44, '종료', '2022-12-05', '2022-12-18',
        'https://static.wtable.co.kr/image/production/service/staticpage/64/e75ba1e4-fc13-44af-8aad-092a52314357.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/a3d3f9e2-f3aa-474f-9598-d7c925d498ad.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/31da7969-1dd4-42ad-80aa-f0439b61d85a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/a7c5f694-cfaf-4963-adf3-7a7e0a3e4d6e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/e9d94983-b61d-4c8d-acf3-03b6f61f196c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/c2638b53-a1a1-4b68-b8a0-bf850008576a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/37ad7f74-e375-424d-a46f-9c2fe96533f8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/60b985f7-3dd8-49bb-86fa-bacc2f4e92cb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/c786b058-9546-45ab-836a-662539d3e58f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/52af77d8-1505-48e2-8385-fa2b7a4135a9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/dccd06c1-34c1-4666-94b1-097972770a58.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/2c0886ee-c9e3-4c05-8159-c9ae9a97e60b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/ec2862d2-74ab-4515-802a-a0f78f87a05a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/760c8525-5d3a-4cef-a173-881a5e5d7b56.jpg');
INSERT INTO event_content (id, content_images)
VALUES (44,
        'https://static.wtable.co.kr/image/production/service/staticpage/64/7f3b2335-a0d5-41ca-abae-6da03923a60d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (45, '종료', '2022-11-04', '2022-11-18',
        'https://static.wtable.co.kr/image/production/service/staticpage/63/235eb4d0-cc25-436b-9f35-9b8263de4862.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/d269cf6c-1e46-42c3-ad83-04627a3a7195.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/f93d9e9c-5252-4287-97cc-b73504379a4f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/fed04e02-55a8-41c6-abf3-eaa51f198b39.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/f6197a66-30f2-4809-ad79-93082d893036.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/2099a0e9-d2b5-4e55-9a1e-b2d6a90f7267.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/7268bb70-7136-4632-83d1-ae84e7e7d001.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/91d5df9c-b406-4a6c-9869-87a13ead9ec6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/485cd149-47c3-467b-b7e8-b050cc5c3af4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (45,
        'https://static.wtable.co.kr/image/production/service/staticpage/63/3a6237b3-8173-4851-9f9b-4a965d9e9a5a.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (46, '종료', '2022-10-14', '2022-10-26',
        'https://static.wtable.co.kr/image/production/service/staticpage/62/ab1a3714-7cd6-4bcf-b5c8-c63a3f488aae.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/7579d88c-72ec-4031-97e8-f8ff3b21cbb0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/be4d4216-023f-4736-b9ae-086400a23ea8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/64f78bd6-feb1-441e-b7f8-86cd8b4dd4f7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/237d03d3-6100-4687-a814-7cc27de7786e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/6475097f-da36-4e30-bb63-f4ece66f1c80.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/b8ecce5c-2bf7-4e5a-872b-e3efbb052680.jpg');
INSERT INTO event_content (id, content_images)
VALUES (46,
        'https://static.wtable.co.kr/image/production/service/staticpage/62/2a5b8be5-73cd-4188-86b4-45be1ae47e8d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (47, '종료', '2022-10-06', '2023-11-30',
        'https://static.wtable.co.kr/image/production/service/staticpage/59/7e8e4492-0905-45c3-bf2e-339607ac2793.jpg');
INSERT INTO event_content (id, content_images)
VALUES (47,
        'https://static.wtable.co.kr/image/production/service/staticpage/59/eacbbb3d-b7c2-4d75-96b8-b6949998f882.jpg');
INSERT INTO event_content (id, content_images)
VALUES (47,
        'https://static.wtable.co.kr/image/production/service/staticpage/59/580b64f7-4c70-4123-bf70-83074387aa96.jpg');
INSERT INTO event_content (id, content_images)
VALUES (47,
        'https://static.wtable.co.kr/image/production/service/staticpage/59/dc610180-51d6-4857-94bd-07a7df0ddd15.jpg');
INSERT INTO event_content (id, content_images)
VALUES (47,
        'https://static.wtable.co.kr/image/production/service/staticpage/59/8b0d2d9f-3a40-43d8-b403-5a2f8749948b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (47,
        'https://static.wtable.co.kr/image/production/service/staticpage/59/aa19dd46-2bd1-42ec-b26c-8d9791dc5afe.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (48, '종료', '2022-10-06', '2022-10-06',
        'https://static.wtable.co.kr/image/production/service/staticpage/60/a7964bc3-a386-4c65-bb9c-810dde04e7cf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/2685acb1-f5fb-4646-911b-92b0be4c3caf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/7926863a-cb8c-4af5-be84-25d79da042ae.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/9ff7aae7-035d-4418-98f4-a493b0b02cde.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/c6c8a89c-0266-4d77-bc0f-20fbbf6ad6a2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/28ce808e-8abe-4052-b868-40773ccaa69a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/4b1a355e-8e41-4dcf-9907-3e9623618d1a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/ecc353d4-0f68-47dc-bbb2-d0f4d764b67f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/cfb1715f-8acf-4c7c-90fc-1c5a0e57f256.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/d5783cae-ad73-4140-9d70-93d6a9a1f1a5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/0c1b5396-2523-4e64-adce-42dbba377a07.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/729df58a-97db-45f6-b286-98abd29262b0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/69a02ec5-00ae-47c9-bd02-2a836524f1a1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/9913fb18-e6b0-44aa-99de-d2b3dfbc83a2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/b4ad4650-0201-4301-b9dc-83e696d80195.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/570187f7-5786-4f1d-89dc-75e2b0c33c04.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/2af48f10-3d7d-443f-9d98-98ef34dc2fe0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/0803ff2a-ac2c-4934-a5c4-67e9a09d8f2f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/8cc79d7f-4f73-4f91-aac1-5efabc987884.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/83b4ee46-eb45-47f8-ab46-4b87d9a93700.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/62db83e0-374c-4504-a3e1-7cf538cab123.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/647970f6-f4de-4b71-ad50-b64514a13559.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/92da0f14-95df-403a-8a23-a183ae829e6c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/40ae1f8d-9019-4290-91b9-cc1b5abb7405.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/c9345233-1d0d-44cb-9483-d083768633d0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/5a911e13-9e0d-4ed7-959f-f6aee040e063.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/d9cbb5b7-b572-4db7-bbb4-2d784a06c474.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/97b75222-aadf-4944-9f97-54f9ac72b984.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/f4a05fcf-1697-44bb-81d3-b12bb8b5b9f6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/23fdb4fd-84fc-4734-8365-4bc11b955e88.jpg');
INSERT INTO event_content (id, content_images)
VALUES (48,
        'https://static.wtable.co.kr/image/production/service/staticpage/60/a3edb400-efbf-49e8-bb6b-522da05bf128.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (49, '종료', '2022-10-06', '2022-10-19',
        'https://static.wtable.co.kr/image/production/service/staticpage/61/87b71ba4-a486-4fb6-9bbe-00bec9b5af6f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (49,
        'https://static.wtable.co.kr/image/production/service/staticpage/61/a797e571-b0b4-444d-86ce-5e7312122017.jpg');
INSERT INTO event_content (id, content_images)
VALUES (49,
        'https://static.wtable.co.kr/image/production/service/staticpage/61/a067b954-cc76-4e9a-a7e4-fe5998f1223c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (49,
        'https://static.wtable.co.kr/image/production/service/staticpage/61/7fe56abb-c063-4182-8f8d-a055d977afd3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (49,
        'https://static.wtable.co.kr/image/production/service/staticpage/61/bc8138a7-8468-44cb-9c82-752600fd484a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (49,
        'https://static.wtable.co.kr/image/production/service/staticpage/61/6d5f7912-9760-460a-93a2-4f40acf987a8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (49,
        'https://static.wtable.co.kr/image/production/service/staticpage/61/5b781adc-7422-4e57-8a8c-66ce9d6c05ed.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (50, '종료', '2022-09-14', '2022-09-30',
        'https://static.wtable.co.kr/image/production/service/staticpage/57/05140610-19c5-4457-a609-05258fa77f84.jpg');
INSERT INTO event_content (id, content_images)
VALUES (50,
        'https://static.wtable.co.kr/image/production/service/staticpage/57/853d347e-b994-40a7-beb4-40f560c6e15f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (50,
        'https://static.wtable.co.kr/image/production/service/staticpage/57/ec752a76-ec7f-4066-b51e-d25445526601.jpg');
INSERT INTO event_content (id, content_images)
VALUES (50,
        'https://static.wtable.co.kr/image/production/service/staticpage/57/120998ef-3db4-41d9-92aa-57967748cfbf.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (51, '종료', '2022-09-10', '2022-09-12',
        'https://static.wtable.co.kr/image/production/service/staticpage/56/0343676f-4374-466c-a2be-09f1590734d0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (51,
        'https://static.wtable.co.kr/image/production/service/staticpage/56/9addb67e-856b-48af-90d5-2dedee7672b4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (51,
        'https://static.wtable.co.kr/image/production/service/staticpage/56/ecbfd351-ca6d-4ecc-aade-f0920f620107.jpg');
INSERT INTO event_content (id, content_images)
VALUES (51,
        'https://static.wtable.co.kr/image/production/service/staticpage/56/6c8171b6-5367-4e56-9d9a-64cd4f68f70a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (51,
        'https://static.wtable.co.kr/image/production/service/staticpage/56/080bb31b-2739-4e1a-9822-472aa141cf45.jpg');
INSERT INTO event_content (id, content_images)
VALUES (51,
        'https://static.wtable.co.kr/image/production/service/staticpage/56/5c95d903-0894-4333-b82c-8c995a8f590a.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (52, '종료', '2022-08-16', '2022-09-04',
        'https://static.wtable.co.kr/image/production/service/staticpage/55/52566fa2-2570-45d5-8c45-93202f157c94.jpg');
INSERT INTO event_content (id, content_images)
VALUES (52,
        'https://static.wtable.co.kr/image/production/service/staticpage/55/2294c247-3cdc-4ceb-a13f-07f7460ec3a8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (52,
        'https://static.wtable.co.kr/image/production/service/staticpage/55/7e78d27e-99aa-4651-831f-26fcd2f0f1a0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (52,
        'https://static.wtable.co.kr/image/production/service/staticpage/55/21ec3bd4-63b6-49d1-ad45-4aeb21ee855b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (52,
        'https://static.wtable.co.kr/image/production/service/staticpage/55/4bd64a56-05f0-49a2-b176-9b34b8bdc5dd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (52,
        'https://static.wtable.co.kr/image/production/service/staticpage/55/1d5712f3-1de9-46b3-a8a5-d17af5daffa4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (52,
        'https://static.wtable.co.kr/image/production/service/staticpage/55/14d7b5cc-3a09-4863-ad77-5d667e43318c.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (53, '종료', '2022-08-10', '2022-08-12',
        'https://static.wtable.co.kr/image/production/service/staticpage/54/8519e6ee-e66d-42ff-92f9-30c62aafd439.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/583c0482-70e5-4a9b-9b59-14318a11735b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/adacdd12-4d91-41cb-bdf0-ab20ead7ba6d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/3e12d087-6b30-4912-9c53-439440db0f62.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/1869f0bc-a4d7-437b-a4f5-e4f7fe8b17a0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/58eb06c1-0d77-41ab-9e91-c08392ea5c28.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/d86873fa-ff1f-4454-aabc-4b9e3fb3f5e4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/4741b3a3-3d5b-49c4-bfeb-b7432ebce4c8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/d0294272-b3b5-4696-a779-0d44d368311c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/5777d0cb-11ff-455f-a0a6-0f7629ae2330.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/0857035a-74dc-4d94-bd48-1bec3c6c5487.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/21387831-e7de-4365-a9bd-3a6edc0fea29.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/6858bab4-967a-48e9-b050-539add3f69b0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/8aff3623-b0a6-453f-9838-9937ec9523bd.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/3d8e60d2-aa34-4465-ba0c-ce0bf3238801.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/b3bac823-122c-4c8d-9c01-e788d9a713c4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/6daae38c-d1cb-456d-840e-4c9f50ed4ddf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/797f2709-6c12-4b52-91fd-1ca42c3855c4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/6e94e41c-f6c0-4d3c-93af-971958d2d52f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/d46f23df-e0f9-40be-a427-95580d2e8c70.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/e7de8b1c-7d28-4e60-bd4c-5ffbad79066f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/3b71f13a-2336-4216-bbd5-7c968a859891.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/482cf516-7cf0-4a01-a7e9-ec37d1af9475.jpg');
INSERT INTO event_content (id, content_images)
VALUES (53,
        'https://static.wtable.co.kr/image/production/service/staticpage/54/a4cc5b64-9c76-4aa0-b5fb-5bc04a22dcc3.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (54, '종료', '2022-07-06', '2023-11-30',
        'https://static.wtable.co.kr/image/production/service/staticpage/52/edd11e4e-1710-42e1-8fe7-4b74a867b8b7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (54,
        'https://static.wtable.co.kr/image/production/service/staticpage/52/8ccb74bb-e47f-4053-ae21-53c4d5faec40.jpg');
INSERT INTO event_content (id, content_images)
VALUES (54,
        'https://static.wtable.co.kr/image/production/service/staticpage/52/edee036c-83e3-4e96-8e78-684e83f526c0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (54,
        'https://static.wtable.co.kr/image/production/service/staticpage/52/d746a49a-f5ee-48d2-9986-c7aa6aeb59ad.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (55, '종료', '2022-06-16', '2022-07-31',
        'https://static.wtable.co.kr/image/production/service/staticpage/51/57f00848-f502-446a-86f9-479e41430cb1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (55, NULL);
INSERT INTO event_content (id, content_images)
VALUES (55,
        'https://static.wtable.co.kr/image/production/service/staticpage/51/8f086e64-fae3-47e8-a786-6afbd8d981dd.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (56, '종료', '2022-05-31', '2022-06-07',
        'https://static.wtable.co.kr/image/production/service/staticpage/50/21be4b95-3314-4080-b459-5eec8fbd26b0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (56,
        'https://static.wtable.co.kr/image/production/service/staticpage/50/41339cee-7956-497d-9746-5a5bbb7058e5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (56,
        'https://static.wtable.co.kr/image/production/service/staticpage/50/2ce31f5c-3590-49d3-b8a7-8f67a4de84c0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (56,
        'https://static.wtable.co.kr/image/production/service/staticpage/50/fbb9bc2f-aae8-4339-ab19-ce687636c755.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (57, '종료', '2022-05-19', '2022-05-20',
        'https://static.wtable.co.kr/image/production/service/staticpage/48/2bd15951-3162-4050-a0b6-decbf2461fd6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (57,
        'https://static.wtable.co.kr/image/production/service/staticpage/48/276405aa-2573-474d-912d-56e3504981c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (57,
        'https://static.wtable.co.kr/image/production/service/staticpage/48/20d45e35-12a7-4a9f-b9f8-4738a3f3fbac.jpg');
INSERT INTO event_content (id, content_images)
VALUES (57,
        'https://static.wtable.co.kr/image/production/service/staticpage/48/b54ccb4b-6507-46db-a7ee-165d60129b20.jpg');
INSERT INTO event_content (id, content_images)
VALUES (57,
        'https://static.wtable.co.kr/image/production/service/staticpage/48/3e37c03d-d1f6-4af6-91fb-db2c3ab71049.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (58, '종료', '2022-05-15', '2022-05-22',
        'https://static.wtable.co.kr/image/production/service/staticpage/47/1891a619-e45f-41a3-aa8e-c0314336301f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (58,
        'https://static.wtable.co.kr/image/production/service/staticpage/47/822610c7-e323-45d3-b53c-6e6188ec0fe8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (58,
        'https://static.wtable.co.kr/image/production/service/staticpage/47/9087ecba-4d17-4b03-bfe2-75cfef0caf5b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (58,
        'https://static.wtable.co.kr/image/production/service/staticpage/47/905a6a28-e820-4837-afe0-8e633a678ddb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (58,
        'https://static.wtable.co.kr/image/production/service/staticpage/47/f3ec3842-77f5-4c57-bfd9-70e59f16b63d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (58,
        'https://static.wtable.co.kr/image/production/service/staticpage/47/aaa17391-f775-45fc-b7f8-1955e29292c9.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (59, '종료', '2022-05-14', '2022-05-21',
        'https://static.wtable.co.kr/image/production/service/staticpage/46/df011ecc-3883-4dd5-8aa0-3b417bba0fd8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (59,
        'https://static.wtable.co.kr/image/production/service/staticpage/46/151be170-092a-416c-93ec-0bc6c9cb8d62.jpg');
INSERT INTO event_content (id, content_images)
VALUES (59, 'https://video.wtable.co.kr/gif/production/service/staticpage/46/38e4f269-4428-48ea-859f-3490a7390dd0.gif');
INSERT INTO event_content (id, content_images)
VALUES (59,
        'https://static.wtable.co.kr/image/production/service/staticpage/46/dbfda24c-3b85-4cfd-98ca-6c6af7642f8a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (59,
        'https://static.wtable.co.kr/image/production/service/staticpage/46/828e48e0-3d57-47d8-941a-d2e6ac6ac2ee.jpg');
INSERT INTO event_content (id, content_images)
VALUES (59,
        'https://static.wtable.co.kr/image/production/service/staticpage/46/b7dd9627-eb10-4cba-8949-c01b95e4c2c9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (59,
        'https://static.wtable.co.kr/image/production/service/staticpage/46/200fb807-011c-497b-a764-dabbccdf50e4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (59,
        'https://static.wtable.co.kr/image/production/service/staticpage/46/a6c74a0c-8105-4fcb-863b-df40cf4a86de.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (60, '종료', '2022-04-26', '2022-04-27',
        'https://static.wtable.co.kr/image/production/service/staticpage/43/b4babda0-51a7-43d7-a669-bcc35318c483.jpg');
INSERT INTO event_content (id, content_images)
VALUES (60,
        'https://static.wtable.co.kr/image/production/service/staticpage/43/790a060a-8c55-4b9a-8a71-b6ec7637517a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (60,
        'https://static.wtable.co.kr/image/production/service/staticpage/43/15321115-d4bb-4e77-8788-dc2911f75be5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (60,
        'https://static.wtable.co.kr/image/production/service/staticpage/43/e6f91cf0-4f09-44f0-802b-cca19129f570.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (61, '종료', '2022-04-26', '2022-04-28',
        'https://static.wtable.co.kr/image/production/service/staticpage/42/f8f69184-db90-4922-8256-0fa43ae0f2c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/fc3e81c0-c09f-4fec-8d21-2a20590c77da.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/5524e9f3-ad95-484b-ad78-e20adad95d39.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/d8b31821-9c6c-4458-9be6-91376e84784b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/de601c2b-380f-4f8a-ba5a-ba731c0a2459.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/2e8a7ea4-c92b-41d3-af10-aad128e1f2e5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/8c05c7c4-ff94-42bb-80ed-18c51249ae03.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/0723d5ff-98a6-4c29-8e1c-95ed4f70e860.jpg');
INSERT INTO event_content (id, content_images)
VALUES (61,
        'https://static.wtable.co.kr/image/production/service/staticpage/42/aa6c00f6-7efe-476d-af05-f290301692b1.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (62, '종료', '2022-04-21', '2022-04-24',
        'https://static.wtable.co.kr/image/production/service/staticpage/41/f7d67868-deb5-4731-b702-7c25ebec627c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/b0ec0bce-78cd-4af1-aab3-65aa48eee464.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/70edb6fa-292e-446a-b3f7-03792cecdf43.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/03fee88b-b7fd-46d4-a3e3-396a444f49cc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/753355bb-3e09-4da8-9867-2d3bf72eebf0.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/a7a7eebf-bac5-4120-90fe-ab2c06c44d01.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/ed38fe96-6741-49c8-a04a-91a2c33a7e55.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/20be030c-dd05-44ac-8c28-7d3a050137c9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/110cdf83-f2d0-4486-8a59-58932bec3559.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/13655e58-e957-4db4-8589-c2e3e8078058.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/17ab2d67-66f8-4f97-bd9f-197080d1c1fa.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/cbf4b862-6b6b-4702-9a4f-3c5d4fc366b5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/9941bcdd-ef44-43b4-aa0f-3390e793b8b5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/3248de4a-9b08-401b-b699-ecb70c5d6f3c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/8e66034b-05a1-4495-9d22-ef4d4db9a4c6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/b60fa5bf-ec20-4808-be55-ab8949d91871.jpg');
INSERT INTO event_content (id, content_images)
VALUES (62,
        'https://static.wtable.co.kr/image/production/service/staticpage/41/beac2fbe-d58f-43c0-b7d2-12bbb6eb818f.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (63, '종료', '2022-04-09', '2022-04-10',
        'https://static.wtable.co.kr/image/production/service/staticpage/39/4bf34432-1db7-47ab-ac84-c85beef7e91e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/14b157a8-939c-401c-a86a-ada70aabaef9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/06847400-ba48-453d-99a0-01581e85245d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/3a56686a-1430-40ae-89a6-397134db2297.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/05fd5fc2-09d5-45a8-8c39-ea80c828b26c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/0d5ccb62-00cc-47aa-b075-da4aafe74277.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/3c25c356-7f68-46a9-a812-941ebd7d60bf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/6b97aecd-eefb-42f0-88d7-ec8ad1a455d2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/a5d0f43a-54d9-404b-996a-554bbac0a4d6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/7380ff42-4276-4895-b166-f1ea89f11449.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/69175e11-ece0-46d4-b13f-49947a521f68.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/1cea3a7e-fdf9-4189-8ffc-dbe82961992a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/eb662a73-7e60-43be-855e-ed1c817f77d1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/6725784c-d0dc-4533-a84b-b4fc594ff9b3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/38a9d50b-0860-4681-b8ef-cd83afcc3731.jpg');
INSERT INTO event_content (id, content_images)
VALUES (63,
        'https://static.wtable.co.kr/image/production/service/staticpage/39/6bc1278c-edc5-429f-b72d-5751831b526a.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (64, '종료', '2022-04-02', '2022-04-03',
        'https://static.wtable.co.kr/image/production/service/staticpage/38/7df51b87-1252-423f-b581-a2f977f88ef4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/c8a68389-062a-4982-93ef-8436ecb9014b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/86138a19-607d-49be-b7cb-898d489c3fe6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/9c21a8fe-fd9b-4fc1-8274-6ec157183870.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/fa6d59ed-2419-494f-9eb0-429d39289054.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/6d6c53f7-8fb1-41a0-b820-2f84e6718237.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/9aeef379-751f-4294-a204-9e8f8c20b4d1.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/abb90af8-fabc-48ff-972d-d8f048274386.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/2bcec51a-781e-4cc1-b94d-8441bc81a0ed.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/7372d7c4-1d4b-47e6-abd6-887a499ac310.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/933c8035-27e4-43c1-815a-d29bad375116.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/7cffadea-e3e6-42ac-bd0d-0367e6b3edcf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/c9cbb217-066e-4386-a344-5d66bb17e8bb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/39169c33-e8ef-4b85-9f1a-f40659017e50.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/450edff3-cd59-47c5-9237-ebff682e6808.jpg');
INSERT INTO event_content (id, content_images)
VALUES (64,
        'https://static.wtable.co.kr/image/production/service/staticpage/38/5f43ec01-e5a8-4c35-b55f-f793522041cc.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (65, '종료', '2022-04-01', '2022-04-01',
        'https://static.wtable.co.kr/image/production/service/staticpage/36/67cb9930-74ee-4302-8ab0-9e14de71bf34.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/59e7d343-927e-484d-8d7f-8f5c4be40ce2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/69b64c27-ea0b-403b-a70f-04529bece72f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/5be8b57e-b1a8-4683-92b2-263d65a108c5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/8d7e90ed-d01c-421a-ac5b-e5fab2af80ff.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/2dcaf5bc-e546-4ef5-a3cc-d3e131b4f7ed.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/41f84784-cb27-4e7e-bde9-4303b2a6a34c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (65,
        'https://static.wtable.co.kr/image/production/service/staticpage/36/43bc2ae6-7ff7-4881-8cda-133d37161e40.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (66, '종료', '2022-03-31', '2022-04-30',
        'https://static.wtable.co.kr/image/production/service/staticpage/33/50203ec2-8b7d-41fd-8c89-048f3639efd6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (66,
        'https://static.wtable.co.kr/image/production/service/staticpage/33/af9e05d2-7e6e-45a2-80b8-2c5402ca8b95.jpg');
INSERT INTO event_content (id, content_images)
VALUES (66,
        'https://static.wtable.co.kr/image/production/service/staticpage/33/62f7d5d1-a6a2-4ca8-a6da-8953a9139637.jpg');
INSERT INTO event_content (id, content_images)
VALUES (66,
        'https://static.wtable.co.kr/image/production/service/staticpage/33/62acc83e-11ac-41de-9921-34237933e6a2.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (67, '종료', '2022-03-26', '2022-03-27',
        'https://static.wtable.co.kr/image/production/service/staticpage/34/942cc670-63df-4a14-83f4-0b4f3b275d2b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/99db5e89-357d-4b36-8299-00d41771525a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/43424759-5c8b-4699-b984-c3c136daa2ac.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/9e390e78-55d6-490b-8222-bd018d072b67.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/0a792be4-51f1-4617-907e-af64d1caa5fc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/eb7ef808-ab46-48b7-9c75-9b2e8214d759.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/86234666-6ae3-411b-a45d-bf9d25ec3e53.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/26f054f0-e79e-4852-babf-9d477f4b1a5e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/843e30a7-7986-4db4-b8d7-451d1eb71418.jpg');
INSERT INTO event_content (id, content_images)
VALUES (67,
        'https://static.wtable.co.kr/image/production/service/staticpage/34/ca54ba6b-d0af-49d4-b96c-a0a62e65730f.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (68, '종료', '2022-03-19', '2022-03-20',
        'https://static.wtable.co.kr/image/production/service/staticpage/32/28f094b0-77c7-47e8-bef1-daf23dbe3907.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/df0316c3-e5ce-4eda-ba33-9315278ec291.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/057587b6-51d5-4b66-9c54-010677528b65.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/8de47520-79c4-4fd2-9259-c5ea0710e0ca.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/8e128171-0a3f-40c9-bdcc-73eb1383e1c2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/839f052f-34a7-402a-8e53-e669886dcf4f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/83047efc-cbc8-441e-b949-5bc6c18f6a55.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/271accbb-d457-402d-86cf-875f0b584c4c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/369b960f-adc3-4a49-af28-8da81850d0fc.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/7ae6ad29-0bad-463d-aa7c-2f11b584c44e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (68,
        'https://static.wtable.co.kr/image/production/service/staticpage/32/6135f715-172d-4747-a494-5ed43d5a007d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (69, '종료', '2022-03-08', '2022-03-16',
        'https://static.wtable.co.kr/image/production/service/staticpage/30/7d1558e6-a6e4-4808-8eee-68769e23bcae.jpg');
INSERT INTO event_content (id, content_images)
VALUES (69,
        'https://static.wtable.co.kr/image/production/service/staticpage/30/98aafe8c-83ee-4b27-a824-85d3b6031794.jpg');
INSERT INTO event_content (id, content_images)
VALUES (69,
        'https://static.wtable.co.kr/image/production/service/staticpage/30/f09bd268-4a9b-4580-8901-70867c07e7e4.jpg');
INSERT INTO event_content (id, content_images)
VALUES (69,
        'https://static.wtable.co.kr/image/production/service/staticpage/30/89a4f1dd-29ff-4485-8ec1-0764235c0366.jpg');
INSERT INTO event_content (id, content_images)
VALUES (69,
        'https://static.wtable.co.kr/image/production/service/staticpage/30/a0433d03-0986-45aa-bc4f-c60f2669965c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (69,
        'https://static.wtable.co.kr/image/production/service/staticpage/30/904f6651-8a3b-434c-b2db-dbe83912d6c7.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (70, '종료', '2022-02-28', '2022-03-31',
        'https://static.wtable.co.kr/image/production/service/staticpage/29/2bc11e26-4725-4316-a018-ef6ce361b204.jpg');
INSERT INTO event_content (id, content_images)
VALUES (70,
        'https://static.wtable.co.kr/image/production/service/staticpage/29/73c96810-27fe-4b9a-bda5-f92341fba8c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (70,
        'https://static.wtable.co.kr/image/production/service/staticpage/29/988cfacc-9b9d-49b0-ae94-024d2a8e5cfb.jpg');
INSERT INTO event_content (id, content_images)
VALUES (70,
        'https://static.wtable.co.kr/image/production/service/staticpage/29/0b193b30-2099-4ced-a84d-bffd2c5b5fa1.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (71, '종료', '2022-02-13', '2022-02-28',
        'https://static.wtable.co.kr/image/production/service/staticpage/24/e44bfa5f-460e-43ee-bcf9-a6c11e8c399f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (71,
        'https://static.wtable.co.kr/image/production/service/staticpage/24/99ae84f7-548b-43c3-8cbd-135fda9f92aa.jpg');
INSERT INTO event_content (id, content_images)
VALUES (71,
        'https://static.wtable.co.kr/image/production/service/staticpage/24/ad054e53-66c3-4e77-a9b6-c285f257d74f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (71,
        'https://static.wtable.co.kr/image/production/service/staticpage/24/acd1e5a1-3c12-4083-9e58-6583814c62b0.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (72, '종료', '2022-01-25', '2022-02-01',
        'https://static.wtable.co.kr/image/production/service/staticpage/26/d23ece13-dfbe-4718-8252-0f6aedb66980.jpg');
INSERT INTO event_content (id, content_images)
VALUES (72,
        'https://static.wtable.co.kr/image/production/service/staticpage/26/da402ada-0455-4e0a-b192-e9fd9fcb6c7c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (72,
        'https://static.wtable.co.kr/image/production/service/staticpage/26/c108a6eb-1971-4060-a620-a143fa81fe56.jpg');
INSERT INTO event_content (id, content_images)
VALUES (72,
        'https://static.wtable.co.kr/image/production/service/staticpage/26/0df16cc3-86a5-4c70-875a-817303a2f757.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (73, '종료', '2022-01-16', '2022-01-24',
        'https://static.wtable.co.kr/image/production/service/staticpage/23/a495cf7a-fbc0-475d-9891-e5c33f00c573.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/b2f35573-fdc7-4bbf-8133-a7708ffd95a5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/6b207b7b-1dd2-4aab-9d14-5d42329a6df5.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/fee14101-e507-452f-ab66-cd4772d5619d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/4b022eae-7b19-43d7-9468-c6fcdb0ac417.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/e316abe5-89fa-476a-8108-755659ef6246.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/e969192e-7fe0-4248-b6ce-50d3dce5b7ed.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/adc38f6c-19a7-44a1-8102-a16b62a49c3a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (73,
        'https://static.wtable.co.kr/image/production/service/staticpage/23/cbded9e0-d3d0-4242-8cf4-66371026f1cb.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (74, '종료', '2022-01-11', '2022-01-24',
        'https://static.wtable.co.kr/image/production/service/staticpage/22/95b35964-5375-48a2-95c6-f71c2f8515af.jpg');
INSERT INTO event_content (id, content_images)
VALUES (74,
        'https://static.wtable.co.kr/image/production/service/staticpage/22/53ea8171-66c8-4d52-9951-ab9de4d6bbed.jpg');
INSERT INTO event_content (id, content_images)
VALUES (74,
        'https://static.wtable.co.kr/image/production/service/staticpage/22/494ffa32-a1c4-4ff9-8f94-30e6072c09d2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (74,
        'https://static.wtable.co.kr/image/production/service/staticpage/22/a52cf5c3-c6f5-4415-8195-c7840ed35805.jpg');
INSERT INTO event_content (id, content_images)
VALUES (74,
        'https://static.wtable.co.kr/image/production/service/staticpage/22/274930a3-1872-455c-92e6-6e0873995cca.jpg');
INSERT INTO event_content (id, content_images)
VALUES (74,
        'https://static.wtable.co.kr/image/production/service/staticpage/22/7c01253a-f41c-42ee-8d3f-7127e0d988a6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (74,
        'https://static.wtable.co.kr/image/production/service/staticpage/22/734127ee-8c0f-4a76-9ef7-42ca7d4e1b5e.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (75, '종료', '2022-01-05', '2022-01-08',
        'https://static.wtable.co.kr/image/production/service/staticpage/21/dc30d362-f237-457a-9954-54455206b430.jpg');
INSERT INTO event_content (id, content_images)
VALUES (75,
        'https://static.wtable.co.kr/image/production/service/staticpage/21/57be0efd-9111-4afd-ae12-82dea057376d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (75,
        'https://static.wtable.co.kr/image/production/service/staticpage/21/913a8330-4f7d-46ba-b72e-1ba257c0c355.jpg');
INSERT INTO event_content (id, content_images)
VALUES (75,
        'https://static.wtable.co.kr/image/production/service/staticpage/21/f2d4c929-2fe6-4133-a0a4-787187ea9538.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (76, '종료', '2021-12-28', '2021-12-31',
        'https://static.wtable.co.kr/image/production/service/staticpage/20/5ba83072-459e-4d96-bf6f-ab7827deb14b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/3dbcb7a6-b839-4f60-b4ca-c2712d10cbba.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/2370f155-72a8-44e7-849e-48c96c96fae6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/7d40254b-dd0d-4d32-84cf-129fae17a10d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/5dc8d95f-88ce-4e0e-b005-d14efef5162b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/826446e1-e707-4dd4-a17b-da4d39550a1c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/10ac95f2-ed1a-4790-91a6-ffbf365fb9e6.jpg');
INSERT INTO event_content (id, content_images)
VALUES (76,
        'https://static.wtable.co.kr/image/production/service/staticpage/20/aa1bca29-3fa9-4a0b-84fe-e53d7f4807d1.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (77, '종료', '2021-12-26', '2021-12-28',
        'https://static.wtable.co.kr/image/production/service/staticpage/19/3358fa0a-e93b-4371-81f7-4e8a1698166b.jpg');
INSERT INTO event_content (id, content_images)
VALUES (77,
        'https://static.wtable.co.kr/image/production/service/staticpage/19/64bc5eed-4fd5-42dd-870b-425d0258f836.jpg');
INSERT INTO event_content (id, content_images)
VALUES (77,
        'https://static.wtable.co.kr/image/production/service/staticpage/19/dbfa3b4c-78ff-46ae-972a-8dd50de66d85.jpg');
INSERT INTO event_content (id, content_images)
VALUES (77,
        'https://static.wtable.co.kr/image/production/service/staticpage/19/134c594a-0989-4320-9065-3617576cdcb1.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (78, '종료', '2021-12-19', '2021-12-24',
        'https://static.wtable.co.kr/image/production/service/staticpage/18/5a1f394c-70e5-4b45-83e0-b35d8c5e6ce2.jpg');
INSERT INTO event_content (id, content_images)
VALUES (78,
        'https://static.wtable.co.kr/image/production/service/staticpage/18/1efe7081-3fdf-4bcd-bef8-980803f0979f.jpg');
INSERT INTO event_content (id, content_images)
VALUES (78,
        'https://static.wtable.co.kr/image/production/service/staticpage/18/9183aa3d-5d44-4b32-9982-0c7fed35c3a8.jpg');
INSERT INTO event_content (id, content_images)
VALUES (78,
        'https://static.wtable.co.kr/image/production/service/staticpage/18/3192a7d3-be29-4979-b1a3-92722ae1f1a7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (78,
        'https://static.wtable.co.kr/image/production/service/staticpage/18/0d092d0c-1286-4f5f-a472-90e8841928ed.jpg');
INSERT INTO event_content (id, content_images)
VALUES (78,
        'https://static.wtable.co.kr/image/production/service/staticpage/18/a6bf1b43-603f-4983-ac4e-777670650cd3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (78,
        'https://static.wtable.co.kr/image/production/service/staticpage/18/3b5d946a-32aa-4ad9-af0d-6cc05f63c12f.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (79, '종료', '2021-12-14', '2021-12-19',
        'https://static.wtable.co.kr/image/production/service/staticpage/17/0f6948a0-dd66-4a6e-9a31-3ce180891eee.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/9f3add1c-2d85-4bf7-a3e9-ede645b90834.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/8eee1c13-5529-471d-aed7-c943da755939.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/c9b16efd-fb72-48b2-87b9-b3ee873f22f3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/9a2ec8cb-fce5-433f-b593-6961cd1423d7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/f40ffc0a-cb05-4cbc-96e8-17f32ba7d75e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/383c580f-0059-4ecd-a2c0-6d9fe24a9391.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/6b8e6a20-9379-4f07-8dac-81112ccc0a12.jpg');
INSERT INTO event_content (id, content_images)
VALUES (79,
        'https://static.wtable.co.kr/image/production/service/staticpage/17/77747457-13d9-4d4e-93c7-85fb29459dcd.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (80, '종료', '2021-11-21', '2021-11-26',
        'https://static.wtable.co.kr/image/production/service/staticpage/16/5f0ea6b8-7c72-4e3f-a7da-51fcc236dd85.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/525d5301-b61f-4577-8223-0a9b16fa36b7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/6d422af3-9fb7-4827-b3b4-aa73c0db2082.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/8c05cdd8-9925-469d-b093-d1d1178e3509.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/1a8d110c-e00e-4981-8e4c-2f33e0c54897.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/fb8b507a-bd92-44a7-9004-560aedfab8a3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/c3d69dca-2459-48bf-88b2-36cac1ec223e.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/47ba96f2-35bb-4ad2-ab2c-1ac50994e37d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/bb60f6f0-c529-4545-be34-dbd8a6aaa5ab.jpg');
INSERT INTO event_content (id, content_images)
VALUES (80,
        'https://static.wtable.co.kr/image/production/service/staticpage/16/92fdc35d-5f16-40e8-b968-db4075ff905c.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (81, '종료', '2021-11-02', '2023-05-22',
        'https://static.wtable.co.kr/image/production/service/staticpage/15/fbe454ab-7f32-4379-b9a3-e5087f34a141.jpg');
INSERT INTO event_content (id, content_images)
VALUES (81,
        'https://static.wtable.co.kr/image/production/service/staticpage/15/29828d56-23a3-483b-901f-d130d8584385.jpg');
INSERT INTO event_content (id, content_images)
VALUES (81,
        'https://static.wtable.co.kr/image/production/service/staticpage/15/08915f42-284f-40f0-9114-2b0307997280.jpg');
INSERT INTO event_content (id, content_images)
VALUES (81,
        'https://static.wtable.co.kr/image/production/service/staticpage/15/60d84f05-f45b-437d-b44c-f64103411f0d.jpg');
INSERT INTO event_content (id, content_images)
VALUES (81,
        'https://static.wtable.co.kr/image/production/service/staticpage/15/c348c08e-ab3d-45fc-9395-8bc6ff69213c.jpg');
INSERT INTO event_content (id, content_images)
VALUES (81,
        'https://static.wtable.co.kr/image/production/service/staticpage/15/eb476461-1320-45a0-8122-a48b60b5c50f.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (82, '종료', '2021-11-02', '2021-11-11',
        'https://static.wtable.co.kr/image/production/service/staticpage/14/400665b1-3e33-4d34-aa42-e79ab961f9f7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/8a524b1e-54d7-450d-a39d-1dff0e69e901.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://video.wtable.co.kr/video/production/service/staticpage/14/02aef8bc-0c42-41e6-be92-810b377594e8.mp4');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/4f91d444-657e-4cfe-a868-8df7accf8c8a.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/c821b734-d4fa-49d0-995f-475a86bafeb7.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/02e94853-9078-471c-867d-11f1f74fddbf.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/b0a7731c-0726-4006-bb94-17363b7d2141.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/a62ff287-774d-46ab-be84-a49b4b0c35c3.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/7238ab2d-dd3f-436a-936b-21403e038aef.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/32a7453a-7d9c-4a7a-9796-69852c0258c9.jpg');
INSERT INTO event_content (id, content_images)
VALUES (82,
        'https://static.wtable.co.kr/image/production/service/staticpage/14/ec4145c9-27c6-41c2-b1d3-b12c23f6f06d.jpg');

INSERT INTO event (id, title, start_date, end_date, banner_image)
VALUES (83, '종료', '2021-10-18', '2021-10-22',
        'https://static.wtable.co.kr/image/production/service/staticpage/12/0de628ac-e12f-4243-aef5-44d5e916ae37.png');
INSERT INTO event_content (id, content_images)
VALUES (83,
        'https://static.wtable.co.kr/image/production/service/staticpage/12/fa191aac-4845-4cb1-8103-c0773e365fed.png');
INSERT INTO event_content (id, content_images)
VALUES (83,
        'https://static.wtable.co.kr/image/production/service/staticpage/12/812c83b4-c3c8-47e6-a0ec-25163596acbb.png');
INSERT INTO event_content (id, content_images)
VALUES (83,
        'https://static.wtable.co.kr/image/production/service/staticpage/12/6e12374a-5d6e-4c6f-a79a-d81a7a03e56a.png');

-- 외래키 제약조건을 다시 활성화
SET SESSION FOREIGN_KEY_CHECKS = 1;
