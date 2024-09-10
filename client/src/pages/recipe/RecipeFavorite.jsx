import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { axios, defaultErrorHandler } from "@utils";
import { useInfiniteScroll, usePromiseThrottle } from "@hooks";
import UserFeatureContainer from "@components/util/UserFeatureContainer";

export default function RecipeFavorite() {
  const userId = useSelector((state) => state?.user?.id);
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);

  const {
    ref,
    content: favoritedRecipes,
    reset,
  } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<RecipeSummary>}} */
      const response = await axios.get(`/api/recipes/favorites`, {
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

  useEffect(() => {
    reset();
  }, [reset, userId]);

  return (
    <UserFeatureContainer className="favorite-recipes-page">
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
    </UserFeatureContainer>
  );
}
