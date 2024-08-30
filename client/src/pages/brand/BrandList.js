import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import "./Brand.css";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

export default function BrandList() {
  const [activeId, setActiveId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const items = ["식품회사", "단체/기관", "쇼핑몰"];
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);

  // 무한 스크롤 및 데이터 가져오기
  const { ref, content } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<User>}} */
      const response = await axios.get(`/api/members`, {
        params: { page, size: 8 },
      });
      setThrottleInterval(0);
      return response.data;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  // 랜덤으로 항목을 선택하는 함수
  const randomItem = useCallback(() => {
    const randomId = Math.floor(Math.random() * items.length);
    setActiveId(randomId);
    if (randomId === 0) setKeyword("cp");
    else if (randomId === 1) setKeyword("gm");
    else if (randomId === 2) setKeyword("mall");
    else setKeyword("");
  }, [items.length]);

  // 클릭된 항목에 따라 필터 키워드를 설정
  const handleClick = (id) => {
    setActiveId(id);
    if (id === 0) setKeyword("brand22");
    else if (id === 1) setKeyword("brand23");
    else if (id === 2) setKeyword("brand24");
    else setKeyword("");
  };

  // 필터링 로직
  const filterContent = content.filter((member) =>
    keyword ? member.username.includes(keyword) : true,
  );

  useEffect(() => {
    // 브랜드 리스트 페이지 들어갈때 랜덤으로 항목 선택
    randomItem();
  }, [randomItem]);

  return (
    <div>
      <div>
        <div>
          <ul className="relative flex right-28 top-10 border-b ml-96 mr-44 pb-0 text-lg">
            {/*("식품회사", "단체/기관", "쇼핑몰") 생성 및 클릭 시 css 변화*/}
            {items.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer border-s-transparent px-6 py-2 ${activeId === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="chef_banner_wrap">
            {/* ROLE_BRAND 만 출력, 페이지 들어올 때 항목 랜덤으로 선택 */}
            {filterContent.length > 0 ? (
              filterContent
                .filter((member) => member.role === "ROLE_BRAND")
                .map((member, index) => (
                  <div key={index} className="chef_container">
                    <p className="chef_num">
                      <b>{index + 1}</b>
                    </p>
                    <Link to={`/brands/${member.id}`}>
                      <div className="chef_imageUrl">
                        <img
                          className="rounded-full size-28"
                          src={member.profileImage}
                          alt="member_profileImage"
                        />
                      </div>
                    </Link>
                    <div className="flex justify-center py-2 text-base font-bold">
                      <p>{member.nickname}</p>
                    </div>
                  </div>
                ))
            ) : (
              <div>No events found.</div>
            )}
            <div aria-label="scroll-trigger" ref={ref} />
          </div>
        </div>
      </div>
    </div>
  );
}
