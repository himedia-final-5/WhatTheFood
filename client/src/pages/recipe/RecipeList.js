import { useState } from "react";
import { Link } from "react-router-dom";

import "./RecipeList.css";
import { AdminFeature } from "components/util";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

export default function RecipeList() {
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const { ref, content } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<RecipeSummary>}} */
      const response = await axios.get(`/api/recipes`, {
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

  return (
    <div className="recipe_banner_wrap relative">
      <AdminFeature>
        <Link
          to="/recipes/write"
          className="absolute left-6 -top-10 rounded-md px-2 py-0.5 border-2"
        >
          게시글쓰기
        </Link>
      </AdminFeature>
      {content.length > 0 ? (
        content.map((recipe, index) => (
          <Link
            to={`/recipes/${recipe.id}`}
            key={index}
            className="recipe_state_wrap"
          >
            <div className="recipe_text_wrap">
              <span className="recipe_state_name">{recipe.title}</span>
              <span className="recipe_state_tags">{recipe.tags}</span>
              <span className="recipe_state_level">{recipe.level} level</span>
              <span className="recipe_state_servings">
                {recipe.servings}인분
              </span>
            </div>

            <div className="recipe_imageUrl">
              <img src={recipe.bannerImage} alt="recipe_bannerImage"></img>
            </div>
          </Link>
        ))
      ) : (
        <div>No recipes found.</div>
      )}
      <div aria-label="scroll-trigger" ref={ref} />
    </div>
  );
}
