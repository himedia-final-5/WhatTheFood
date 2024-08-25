import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import PaginationNav from "components/util/PaginationNav";
import { UndrawBarista, UndrawTasting, UndrawBarbecue } from "components/asset";
import { usePageResponse } from "hooks";
import { initialPagination, cn, axios, defaultErrorHandler } from "utils";
import { useProfileDetail } from "stores/context";

const TAB_LIST = [
  { name: "레시피", api: "/api/recipes?memberId=%s", component: RecipeTab },
  {
    name: "댓글",
    api: "/api/recipes/comments?memberId=%s",
    component: CommentTab,
  },
  {
    name: "즐겨찾기",
    api: "/api/recipes/favorites?memberId=%s",
    component: FavoriteTab,
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
        <span className="recipe_state_tags text-ellipsis overflow-hidden">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="recipe_tag">
              {tag}
            </span>
          ))}
        </span>
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

function FavoriteTab({ content }) {
  return content.length === 0 ? (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4 p-8">
      <UndrawBarista className="w-1/2 md:w-56 text-primary" />
      <span className="text-lg font-bold">즐겨찾기한 레시피가 없습니다.</span>
    </div>
  ) : (
    <div className="flex flex-col gap-2 p-2">
      {content.map((item, index) => (
        <RecipeCard key={index} item={item} />
      ))}
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTabState] = useState(searchParams.get("tab") | 0);
  const initialPage = searchParams.get("page") | 0;
  const { content, setContent, pagination, setPageResponse } = usePageResponse(
    [],
    initialPagination(initialPage),
  );

  // 탭 변경 시 페이지를 0으로 초기화하기 위한 함수
  const setTab = (newTab) => {
    if (tab === newTab) return;

    setSearchParams((prev) => ({
      ...prev,
      page: 0,
    }));
    setContent([]);
    setTabState(newTab);
  };

  const onSelectPage = useCallback(
    (page) =>
      axios
        .get(TAB_LIST[tab].api.replace("%s", profile.id), {
          params: { page, size: 12 },
        })
        .then((result) => setPageResponse(result.data))
        .catch(defaultErrorHandler),
    [setPageResponse, tab, profile.id],
  );

  // 탭 혹은 페이지 변경 시 URL 변경
  useEffect(() => {
    setSearchParams({
      ...(tab ? { tab } : {}),
      ...(pagination.page ? { page: pagination.page } : {}),
    });

    //eslint-disable-next-line
  }, [pagination.page, tab]);

  useEffect(() => {
    onSelectPage(initialPage);

    //eslint-disable-next-line
  }, [onSelectPage]);

  return (
    <div className="flex flex-col flex-1 w-full h-full">
      <TabHeader tab={tab} setTab={setTab} />
      {TAB_LIST[tab].component({ content })}
      <PaginationNav pagination={pagination} onSelectPage={onSelectPage} />
    </div>
  );
}
