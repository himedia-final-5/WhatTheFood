import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";

import "./Brand.css";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";
import { useLayoutEffect } from "react";

const CATEGORY_BRAND = "brand";
const CATEGORY_ORGANIC = "organic";
const CATEGORY_MALL = "mall";
const CATEGORIES = [
  [CATEGORY_BRAND, "식품회사"],
  [CATEGORY_ORGANIC, "단체/기관"],
  [CATEGORY_MALL, "쇼핑몰"],
];

export default function BrandList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);

  const category = searchParams.get("category") || CATEGORY_BRAND;

  // 카테고리가 없으면 기본값으로 설정
  useLayoutEffect(() => {
    if (!category) {
      setSearchParams({ category: CATEGORY_BRAND });
    }
  }, [category, setSearchParams]);

  // 무한 스크롤 및 데이터 가져오기
  const { ref, content } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<User>}} */
      const response = await axios.get(`/api/members`, {
        params: { page, role: "ROLE_BRAND" },
      });
      setThrottleInterval(0);
      return response.data;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  // 클릭된 카테고리에 따라 쿼리 파라미터 설정
  const handleTabClick = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  // 필터링 로직
  const filterContent = content.filter(function (member) {
    // TODO: 카테고리 별 필터링 로직 추가
    // 임시로 임의의 값으로 필터링

    switch (category) {
      case CATEGORY_BRAND:
        return member.id % 3 === 0;
      case CATEGORY_ORGANIC:
        return member.id % 3 === 1;
      case CATEGORY_MALL:
        return member.id % 3 === 2;
      default:
        return true;
    }
  });

  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto gap-8">
      <ul className="relative flex border-b text-lg">
        {CATEGORIES.map(([key, name]) => (
          <li
            key={key}
            className={`cursor-pointer border-s-transparent px-6 py-2 ${category === key ? "active" : ""}`}
            onClick={() => handleTabClick(key)}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center w-full gap-4">
        {filterContent.length > 0 ? (
          filterContent
            .filter((member) => member.role === "ROLE_BRAND")
            .map((member, index) => (
              <div key={index} className="chef_container">
                <p className="chef_num">
                  <b>{index + 1}</b>
                </p>
                <Link to={`/members/${member.id}`}>
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
  );
}
