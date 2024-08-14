// src/pages/RecipesPage.js
import React from "react";
import { useLocation } from "react-router-dom";

const RecipesPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category");

  // 카테고리에 따라 필터링된 레시피를 가져오거나 화면에 표시합니다.
  return (
    <div>
      <h1>Recipes for {category}</h1>
      {/* 여기에 카테고리별 레시피를 표시하는 코드 추가 */}
    </div>
  );
};

export default RecipesPage;
