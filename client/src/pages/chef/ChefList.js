import { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import "./Chef.css";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

const CATEGORY_DAY = "d";
const CATEGORY_WEEK = "w";
const CATEGORY_MONTH = "m";
const CATEGORIES = [
  [CATEGORY_DAY, "일간"],
  [CATEGORY_WEEK, "주간"],
  [CATEGORY_MONTH, "월간"],
];

export default function ChefList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const [rankingData, setRankingData] = useState([]);

  const category = searchParams.get("category");

  // 카테고리가 없으면 기본값으로 설정
  useLayoutEffect(() => {
    if (!category) {
      setSearchParams({ category: CATEGORY_DAY });
    }
  }, [category, setSearchParams]);

  // 서버에서 순위 데이터를 가져오는 함수
  const fetchRankingData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/recipes/view`, {
        params: { period: category },
      });

      setRankingData(response.data);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }, [category]);

  // 카테고리 변경 시 순위 데이터 갱신
  useEffect(() => {
    fetchRankingData();
  }, [fetchRankingData]);

  const { ref, content } = useInfiniteScroll(
    throttle(async (page) => {
      const response = await axios.get(`/api/members`, {
        params: { page, role: "ROLE_CHEF" },
      });
      setThrottleInterval(0);
      return response.data;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  const handlePeriodChange = (newCategory) => {
    setSearchParams({ category: newCategory });
  };

  const filterContent = content.filter(function (recipe) {});

  return (
    <div className="chef_wrap">
      <div className="chef_inner_container">
        <ul className="chef_inner_category">
          {CATEGORIES.map(([key, name]) => (
            <li
              key={key}
              onClick={() => handlePeriodChange(key)}
              className={`border px-6 py-2 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:font-bold hover:shadow-lg `}
            >
              {name}
            </li>
          ))}
        </ul>
        <div className="chef_banner_wrap">
          {rankingData.length > 0 ? (
            rankingData
              .filter((member) => member.role === "ROLE_CHEF")
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
            <div>
              {" "}
              <img
                src="/images/suprize.png"
                alt="recipe_surchImage"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}
          <div aria-label="scroll-trigger" ref={ref} />
        </div>
      </div>
    </div>
  );
}
