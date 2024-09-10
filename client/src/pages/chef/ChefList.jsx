import { useCallback, useEffect } from "react";

import "./Chef.css";
import { ErrorRender, NoContentRender } from "@layouts/fallback";
import { MemberRankItem } from "@components";
import { axios, cn } from "@utils";
import { usePromise, useDelayedSkeleton, useSearchParamState } from "@hooks";

const CATEGORY_DAY = "d";
const CATEGORY_WEEK = "w";
const CATEGORY_MONTH = "m";
const CATEGORIES = [
  [CATEGORY_DAY, "일간"],
  [CATEGORY_WEEK, "주간"],
  [CATEGORY_MONTH, "월간"],
];

/** 한번의 요청으로 가져올 데이터 개수 */
const size = 50;

export default function ChefList() {
  const [category, setCategory] = useSearchParamState("category", CATEGORY_DAY);
  const [fetchRanking, rankingData, isLoading, error] = usePromise(
    null,
    useCallback(async () => {
      const response = await axios.get(`/api/members`, {
        params: { period: category, size },
      });
      return response.data.content;
    }, [category]),
  );
  const showSkeleton = useDelayedSkeleton(isLoading);

  // 카테고리 변경 시 순위 데이터 갱신
  useEffect(() => {
    fetchRanking();
  }, [fetchRanking]);

  return error ? (
    <ErrorRender error={error} />
  ) : (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto">
      <nav className="relative flex justify-center w-full text-lg border-b mb-8">
        {CATEGORIES.map(([key, name]) => (
          <button
            key={key}
            onClick={() => setCategory(key)}
            className={cn(
              "cursor-pointer px-6 py-2 rounded-t transition-all duration-300 ease-in-out hover:font-bold",
              category === key ? "font-bold border border-b-white -mb-px" : "",
            )}
            disabled={isLoading || category === key}
          >
            {name}
          </button>
        ))}
      </nav>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {showSkeleton
          ? Array.from({ length: size }).map((_, index) => (
              <li key={`loading-${index}`}>
                <MemberRankItem isLoading={true} />
              </li>
            ))
          : rankingData &&
            rankingData.map((member, index) => (
              <li key={member.id}>
                <MemberRankItem member={member} rank={index + 1} />
              </li>
            ))}
      </ul>
      {rankingData && rankingData.length === 0 && (
        <div className="flex justify-center items-center">
          <NoContentRender message="랭킹에 등록된 요리사가 없습니다" />
        </div>
      )}
    </div>
  );
}
