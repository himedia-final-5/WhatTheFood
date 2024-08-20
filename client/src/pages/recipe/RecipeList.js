import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./RecipeList.css";
import { AdminFeature } from "components/util";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";
import { useSelector } from "react-redux"; // Redux를 가져옵니다

const category = [
  { name: "전체", query: "" },
  { name: "한식", query: "한식" },
  { name: "양식", query: "양식" },
  { name: "일식", query: "일식" },
  { name: "중식", query: "중식" },
  { name: "분식", query: "분식" },
  { name: "간식", query: "간식" },
  { name: "베이킹", query: "베이킹" },
];

export default function RecipeList() {
  const [throttleInterval, setThrottleInterval] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(category[0].query);
  const [favoritedRecipes, setFavoritedRecipes] = useState(new Set());

  const user = useSelector((state) => state.user); // 사용자 정보를 가져옵니다
  const memberId = user.id; // 로그인한 사용자의 ID를 가져옵니다

  const throttle = usePromiseThrottle(throttleInterval);

  // 초기화 시 찜한 레시피 목록을 가져옵니다
  useEffect(() => {
    const fetchFavoritedRecipes = async () => {
      try {
        const response = await axios.get(`/api/recipes/favorites`, {
          params: { memberId },
        });
        const recipes = response.data.content.map((recipe) => recipe.id);
        setFavoritedRecipes(new Set(recipes));
      } catch (error) {
        console.error("Failed to fetch favorited recipes:", error);
      }
    };

    fetchFavoritedRecipes();
  }, [memberId]);

  const fetchPage = async (page) => {
    const response = await axios.get(`/api/recipes`, {
      params: { page, size: 8, category: selectedCategory },
    });
    setThrottleInterval(0);
    return response.data;
  };

  const { ref, content, reset } = useInfiniteScroll(
    throttle(fetchPage),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  const handleCategoryClick = async (query) => {
    setSelectedCategory(query);
    reset();
    fetchPage(0);
  };

  const handleRecipeClick = async (recipeId) => {
    try {
      await axios.put(`/api/recipes/${recipeId}/incrementViewCount`);
    } catch (error) {
      console.error("Failed to increment view count:", error);
    }
  };

  const handleFavoriteClick = async (recipeId) => {
    if (favoritedRecipes.has(recipeId)) {
      try {
        await axios.delete(`/api/recipes/${recipeId}/favorite`, {
          params: { memberId },
        });
        setFavoritedRecipes((prev) => {
          const newSet = new Set(prev);
          newSet.delete(recipeId);
          return newSet;
        });
      } catch (error) {
        console.error("Failed to remove favorite:", error);
      }
    } else {
      try {
        await axios.post(`/api/recipes/${recipeId}/favorite`, null, {
          params: { memberId },
        });
        setFavoritedRecipes((prev) => new Set(prev).add(recipeId));
      } catch (error) {
        console.error("Failed to add favorite:", error);
      }
    }
  };

  useEffect(() => {
    reset();
    fetchPage(0).catch((error) => {
      defaultErrorHandler(error);
    });
  }, [selectedCategory, reset]);

  return (
    <div className="recipeList_wrap">
      <div className="recipe_category_wrap">
        <div className="category_filter">
          <AdminFeature>
            <Link to="/recipes/write" className="create_recipe_button">
              게시글쓰기
            </Link>
          </AdminFeature>
          {category.map((cat) => (
            <button
              key={cat.query}
              onClick={() => handleCategoryClick(cat.query)}
              className={`category_button ${selectedCategory === cat.query ? "active" : ""}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="recipe_banner_wrap">
        {content.length > 0 ? (
          content.map((recipe) => (
            <Link
              to={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="recipe_state_wrap"
              onClick={() => handleRecipeClick(recipe.id)}
            >
              <div className="recipe_text_wrap">
                <span className="recipe_state_name">{recipe.title}</span>
                <span className="recipe_state_tags">
                  {recipe.tags.map((tag, index) => (
                    <span key={index} className="recipe_tag">
                      {tag}
                    </span>
                  ))}
                </span>
                <span className="recipe_state_level">{recipe.level} level</span>
                <span className="recipe_state_servings">
                  {recipe.servings}인분
                </span>
                <span className="recipe_state_viewcount">
                  조회수 {recipe.viewCount}
                </span>
                <button
                  className={`heart-button ${favoritedRecipes.has(recipe.id) ? "favorited" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFavoriteClick(recipe.id);
                  }}
                ></button>
              </div>
              <div className="recipe_imageUrl">
                <img src={recipe.bannerImage} alt="recipe_bannerImage" />
              </div>
            </Link>
          ))
        ) : (
          <div>No recipes found.</div>
        )}
      </div>
      <div aria-label="scroll-trigger" ref={ref} />
    </div>
  );
}
