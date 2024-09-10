import { useState, useCallback, memo, useEffect } from "react";
import { Link } from "react-router-dom";

import "./RecipeList.css";
import RecipeFavoriteButton from "@components/features/recipe/RecipeFavoriteButton";
import UserFeature from "@components/util/UserFeature";
import { ErrorRender, NoContentRender } from "@layouts/fallback";
import { axios, defaultErrorHandler } from "@utils";
import {
  useInfiniteScroll,
  usePromiseThrottle,
  useDelayedSkeleton,
  useSearchParamState,
  usePromise,
} from "@hooks";
import { IconPhotoFilled } from "@tabler/icons-react";

const CATEGORY_MAP = [
  { name: "전체", query: "" },
  { name: "한식", query: "한식" },
  { name: "양식", query: "양식" },
  { name: "일식", query: "일식" },
  { name: "중식", query: "중식" },
  { name: "분식", query: "분식" },
  { name: "간식", query: "간식" },
  { name: "베이킹", query: "베이킹" },
];

/** 한번의 요청으로 가져올 데이터 개수 */
const size = 4;

export default function RecipeList() {
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const [category, setCategory] = useSearchParamState("category", "");
  const [searchTerm] = useSearchParamState("q", "");

  const [fetchRecipe, , isFetching, error] = usePromise(
    null,
    useCallback(
      async (page) => {
        let response = await axios.get(`/api/recipes`, {
          params: { page, size, category, term: searchTerm },
        });
        return response.data;
      },
      [category, searchTerm],
    ),
  );

  const showSkeleton = useDelayedSkeleton(isFetching, 300);

  // 무한 스크롤 기능
  const { ref, content, reset } = useInfiniteScroll(
    throttle(fetchRecipe),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  // category 또는 searchTerm이 변경되면 레시피 목록을 초기화하고 새로 불러옵니다.
  useEffect(() => {
    reset();
  }, [category, searchTerm, reset]);

  return error ? (
    <ErrorRender error={error} />
  ) : (
    <div className="recipeList_wrap">
      <div className="recipe_category_wrap">
        <div className="category_filter">
          <UserFeature>
            <Link to="/recipes/write" className="create_recipe_button">
              게시글쓰기
            </Link>
          </UserFeature>
          {CATEGORY_MAP.map(({ query, name }) => (
            <button
              key={query}
              onClick={() => setCategory(query)}
              className={`category_button ${category === query ? "active" : ""}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="recipe_banner_wrap">
        {content.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        {showSkeleton &&
          Array.from({ length: size }).map((_, index) => (
            <RecipeCardSkeleton key={`skeleton-${index}`} />
          ))}
      </div>
      <div aria-label="scroll-trigger" ref={ref} />
      {!isFetching && content.length === 0 && (
        <div className="flex w-full justify-center items-center">
          {/*<NoContentRender message="레시피가 없습니다." />*/}
        </div>
      )}
    </div>
  );
}

// 스켈레톤 UI 컴포넌트
const RecipeCardSkeleton = () => (
  <div className="flex flex-col rounded-md overflow-hidden border border-neutral-200 animate-pulse bg-neutral-200">
    <div className="p-3 bg-neutral-100">
      <div className="w-full h-[28.8px] mb-2">
        <div className="w-4/5 h-full rounded-md bg-neutral-300" />
      </div>
      <div className="flex gap-2 items-end">
        <div className="inline-block size-7 rounded-full object-cover bg-neutral-300" />
        <div className="inline-block w-1/5 h-5 rounded-md bg-neutral-300" />
        <div className="inline-block w-1/6 h-5 rounded-md bg-neutral-300" />
        <div className="inline-block w-1/6 h-5 rounded-md bg-neutral-300" />
        <div className="inline-block w-1/5 h-5 rounded-md bg-neutral-300" />
      </div>
    </div>
    <div className="relative">
      <svg
        className="w-full aspect-square"
        xmlns="http://www.w3.org/2000/svg"
      />
      <IconPhotoFilled className="absolute size-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-300" />
    </div>
  </div>
);

const RecipeCard = memo(({ recipe }) => {
  // 레시피를 클릭하면 해당 레시피의 조회수를 증가시킵니다.
  const handleRecipeClick = async () => {
    try {
      await axios.put(`/api/recipes/${recipe.id}/view-count`);
    } catch (error) {
      console.error("Failed to increment view count:", error);
    }
  };

  return (
    <Link
      to={`/recipes/${recipe.id}`}
      key={recipe.id}
      className="recipe_state_wrap"
      onClick={handleRecipeClick}
    >
      <div className="recipe_text_wrap relative animate-fade-in duration-300">
        <span className="recipe_state_name">{recipe.title}</span>
        <span className="recipe_state_profileImage">
          <img
            src={recipe.member.profileImage}
            alt={`${recipe.member.nickname}'s profile`}
            className="size-7 rounded-full object-cover"
          />
        </span>
        <span className="recipe_state_viewcount">{recipe.member.nickname}</span>
        <span className="recipe_state_level">{recipe.level} level</span>
        <span className="recipe_state_servings">{recipe.servings}인분</span>
        <span className="recipe_state_viewcount">
          조회수 {recipe.viewCount}
        </span>
        <RecipeFavoriteButton
          recipe={recipe}
          className="absolute top-2 right-2"
        />
      </div>
      <div className="recipe_imageUrl">
        <img src={recipe.bannerImage} alt="recipe_bannerImage" />
      </div>
    </Link>
  );
});
