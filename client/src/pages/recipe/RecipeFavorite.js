import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axios, defaultErrorHandler } from "utils";
import { useSelector } from "react-redux";
import "./RecipeFavorite.css"; // 스타일 파일

export default function RecipeFavorite() {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]);
  const user = useSelector((state) => state.user); // 사용자 정보를 가져옵니다
  const memberId = user.id; // 로그인한 사용자의 ID를 가져옵니다

  useEffect(() => {
    const fetchFavoritedRecipes = async () => {
      try {
        const response = await axios.get(`/api/recipes/favorites`, {
          params: { memberId },
        });
        console.log("Fetched favorited recipes:", response.data); // 로그 추가
        setFavoritedRecipes(response.data);
      } catch (error) {
        console.error("Failed to fetch favorited recipes:", error);
        defaultErrorHandler(error);
      }
    };

    fetchFavoritedRecipes();
  }, [memberId]);


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
    </div>
  );
}
