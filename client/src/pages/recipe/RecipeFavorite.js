import { useState } from "react";
import { Link } from "react-router-dom";
import { axios, defaultErrorHandler } from "utils";
import { useSelector } from "react-redux";
import "./RecipeFavorite.css"; // 스타일 파일
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

export default function RecipeFavorite() {
  const user = useSelector((state) => state.user); // 사용자 정보를 가져옵니다
  const memberId = user.id; // 로그인한 사용자의 ID를 가져옵니다
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const { ref, content: favoritedRecipes } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<RecipeSummary>}} */
      const response = await axios.get(`/api/recipes/favorites`, {
        params: { page, size: 8, memberId },
      });
      setThrottleInterval(0);
      return response.data;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  return (
    <div className="favorite-recipes-page">
      <h1>찜한 레시피 목록</h1>
      {favoritedRecipes.length > 0 ? (
        <div className="recipe-list">
          {favoritedRecipes.map((recipe) => (
            <Link
              to={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="recipe-item"
            >
              <div className="recipe-image">
                <img src={recipe.bannerImage} alt={recipe.title} />
              </div>
              <div className="recipe-title">
                <h2>{recipe.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>찜한 레시피가 없습니다.</p>
      )}
      <div aria-label="scroll-trigger" ref={ref} />
    </div>
  );
}
