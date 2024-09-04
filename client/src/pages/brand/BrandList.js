import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ErrorRender, NoContentRender } from "layouts/fallback";
import { MemberRankItem } from "components";
import { axios, cn, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromise, usePromiseThrottle } from "hooks";

const CATEGORY_BRAND = "brand";
const CATEGORY_ORGANIC = "organic";
const CATEGORY_MALL = "mall";
const CATEGORIES = [
  [CATEGORY_BRAND, "식품회사"],
  [CATEGORY_ORGANIC, "단체/기관"],
  [CATEGORY_MALL, "쇼핑몰"],
];

/** 한번의 요청으로 가져올 데이터 개수 */
const size = 50;

/** 한번 요청 시 보여줄 스켈레톤 개수 */
const skeletonCount = size / 3;

export default function BrandList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const [fetchBrand, recentContent, isLoading, error] = usePromise(
    null,
    useCallback(async (page) => {
      /** @type {{data: PageResponse<User>}} */
      const response = await axios.get(`/api/members`, {
        params: { page, size, role: "ROLE_BRAND" },
      });
      setThrottleInterval(0);
      return response.data;
    }, []),
  );

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
      const response = await fetchBrand(page);
      setThrottleInterval(0);
      return response;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  // 클릭된 카테고리에 따라 쿼리 파라미터 설정
  const handleTabClick = (category) => setSearchParams({ category });

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

  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    let timer;

    if (isLoading) {
      timer = setTimeout(() => setShowSkeleton(true), 200);
    } else {
      setShowSkeleton(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  return error ? (
    <ErrorRender error={error} />
  ) : (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8">
      <ul className="relative flex justify-center w-full text-lg border-b">
        {CATEGORIES.map(([key, name]) => (
          <li
            key={key}
            className={cn(
              "cursor-pointer px-6 py-2 rounded-t",
              category === key ? "font-bold border border-b-white -mb-px" : "",
            )}
            onClick={() => handleTabClick(key)}
          >
            {name}
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {filterContent.map((member, index) => (
          <li key={member.id}>
            <MemberRankItem member={member} rank={index + 1} />
          </li>
        ))}
        {showSkeleton &&
          Array.from({ length: skeletonCount }).map((_, index) => (
            <li key={`loading-${index}`}>
              <MemberRankItem isLoading={true} />
            </li>
          ))}
      </ul>
      <div aria-label="scroll-trigger" ref={ref} />
      {recentContent !== null && filterContent.length === 0 && (
        <div className="flex justify-center items-center">
          <NoContentRender message="등록된 브랜드가 없습니다" />
        </div>
      )}
    </div>
  );
}
