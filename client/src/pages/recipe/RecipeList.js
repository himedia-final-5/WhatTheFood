import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";
import { AdminFeature } from "components/util";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

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

  const throttle = usePromiseThrottle(throttleInterval);

  const fetchPage = async (page) => {
    /** @type {{data: PageResponse<RecipeSummary>}} */
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

  const handleCategoryClick = (query) => {
    setSelectedCategory(query);
  };

  useEffect(() => {
    // 콘텐츠 초기화
    reset();
    // 새 데이터 요청
    fetchPage(1).catch((error) => {
      defaultErrorHandler(error);
    });
  }, [selectedCategory, reset]); // dependency 배열에 reset 추가

  return (
    <div className="recipe_banner_wrap relative">
      <div className="category_filter">
        {category.map((cat) => (
          <button
            key={cat.query}
            onClick={() => handleCategoryClick(cat.query)}
            className={`category_button ${
              selectedCategory === cat.query ? "active" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
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
            </div>

            <div className="recipe_imageUrl">
              <img src={recipe.bannerImage} alt="recipe_bannerImage" />
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
