import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import PaginationNav from "components/util/PaginationNav";
import UndrawBugFixing from "components/asset/UndrawBugFixing";
import { usePageResponse } from "hooks";
import { initialPagination, cn } from "utils";

const TAB_LIST = [
  { name: "레시피", component: RecipeTab },
  { name: "댓글", component: CommentTab },
  { name: "즐겨찾기", component: FavoriteTab },
];

function TabHeader({ tab, setTab }) {
  return (
    <div className="flex justify-around items-center w-full h-fit md:mt-2 text-xl bg-neutral-100 rounded-lg">
      {TAB_LIST.map((tabInfo, index) => (
        <button
          key={tabInfo.name}
          className={cn(
            "flex-1 transition-colors duration-300 ease-in-out px-4 py-2",
            tab === index
              ? "text-neutral-900 border-b-4 border-primary font-bold"
              : "text-neutral-500",
          )}
          onClick={() => setTab(index)}
        >
          {tabInfo.name}
        </button>
      ))}
    </div>
  );
}

function RecipeTab({ page, setPage }) {
  return (
    <div className="flex flex-col flex-1 w-full h-full justify-center items-center">
      <UndrawBugFixing className="w-1/2 h-1/2 text-red-600" />
      <div className="text-lg">준비 중인 기능입니다</div>
    </div>
  );
}

function CommentTab({ page, setPage }) {
  return (
    <div className="flex flex-col flex-1 w-full h-full justify-center items-center">
      <UndrawBugFixing className="w-1/2 h-1/2 text-green-600" />
      <div className="text-lg">준비 중인 기능입니다</div>
    </div>
  );
}

function FavoriteTab({ page, setPage }) {
  return (
    <div className="flex flex-col flex-1 w-full h-full justify-center items-center">
      <UndrawBugFixing className="w-1/2 h-1/2  text-blue-600" />
      <div className="text-lg">준비 중인 기능입니다</div>
    </div>
  );
}

export default function MemberProfileContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") | 0);
  const [tab, setTabState] = useState(searchParams.get("tab") | 0);
  const { content, pagination, setPageResponse } = usePageResponse(
    initialPagination(page),
  );

  // 탭 변경 시 페이지를 0으로 초기화하기 위한 함수
  const setTab = (tab) => {
    setPage(0);
    setTabState(tab);
  };

  // 탭 혹은 페이지 변경 시 URL 변경
  useEffect(() => {
    setSearchParams({
      ...(tab ? { tab } : {}),
      ...(page ? { page } : {}),
    });

    //eslint-disable-next-line
  }, [page, tab]);

  return (
    <div className="flex flex-col flex-1 w-full h-full">
      <TabHeader tab={tab} setTab={setTab} />
      {TAB_LIST[tab].component({ pagination, setPageResponse, content })}
      <PaginationNav pagination={pagination} onSelectPage={setPage} />
    </div>
  );
}
