import { useCallback, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import PaginationNav from "components/util/PaginationNav";
import { UndrawTasting, UndrawBarbecue } from "components/asset";
import { usePageResponse, usePromise, useSearchParamState } from "hooks";
import { initialPagination, cn, axios, defaultErrorHandler } from "utils";
import { useProfileDetail } from "stores/context";

const TAB_LIST = [
  { name: "레시피", api: "/api/recipes?memberId=%s", component: RecipeTab },
  {
    name: "댓글",
    api: "/api/recipes/comments?memberId=%s",
    component: CommentTab,
  },
];

function RecipeTab({ content }) {
  return content.length === 0 ? (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4 p-8">
      <UndrawBarbecue className="w-3/5 md:w-72 text-primary" />
      <span className="text-lg font-bold">작성한 레시피가 없습니다.</span>
    </div>
  ) : (
    <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-2">
      {content.map((item, index) => (
        <RecipeCard key={index} item={item} />
      ))}
    </div>
  );
}

function RecipeCard({ item: recipe }) {
  const handleRecipeClick = async (recipeId) => {
    try {
      await axios.put(`/api/recipes/${recipeId}/incrementViewCount`);
    } catch (error) {
      console.error("Failed to increment view count:", error);
    }
  };

  return (
    <Link
      to={`/recipes/${recipe.id}`}
      key={recipe.id}
      className="recipe_state_wrap"
      onClick={() => handleRecipeClick(recipe.id)}
    >
      <div className="recipe_text_wrap">
        <span className="recipe_state_name">{recipe.title}</span>
        <span className="recipe_state_level">{recipe.level} level</span>
        <span className="recipe_state_servings">{recipe.servings}인분</span>
        <span className="recipe_state_viewcount">
          조회수 {recipe.viewCount}
        </span>
      </div>
      <div className="recipe_imageUrl">
        <img
          className="max-h-48"
          src={recipe.bannerImage}
          alt="recipe_bannerImage"
        />
      </div>
    </Link>
  );
}

function CommentTab({ content }) {
  return content.length === 0 ? (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4 p-8">
      <UndrawTasting className="w-full md:w-96 text-primary" />
      <span className="text-lg font-bold">작성한 댓글이 없습니다.</span>
    </div>
  ) : (
    <div className="flex flex-col gap-2 p-2">
      {content.map((item, index) => (
        <CommentCard key={index} item={item} />
      ))}
    </div>
  );
}

function CommentCard({ item: comment }) {
  return (
    <div className="flex flex-col gap-2 p-2 border-b">
      <div className="text-sm">{comment.content}</div>
    </div>
  );
}

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

export default function MemberProfileContent() {
  const profile = useProfileDetail();
  const [tab, setTab] = useSearchParamState("tab", 0);
  const [page, setPage] = useSearchParamState("page", 0);
  const { content, setContent, pagination, setPageResponse } = usePageResponse(
    null,
    initialPagination(parseInt(page)),
  );

  const fetchContent = useCallback(
    (page) => {
      setContent(null);
      axios
        .get(TAB_LIST[tab | 0].api.replace("%s", profile.id), {
          params: { page, size: 12 },
        })
        .then((result) => setPageResponse(result.data))
        .catch(defaultErrorHandler);
    },
    [setContent, setPageResponse, tab, profile.id],
  );

  useEffect(() => {
    fetchContent(page | 0);
  }, [fetchContent, page]);

  // TODO: 탭 변경 시 fetch 재요청하는 문제 해결 필요
  useLayoutEffect(() => {
    setPage(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div className="flex flex-col flex-1 w-full h-full">
      <TabHeader tab={parseInt(tab)} setTab={setTab} />
      {TAB_LIST[parseInt(tab)].component({ content: content || [] })}
      <PaginationNav pagination={pagination} onSelectPage={setPage} />
    </div>
  );
}
