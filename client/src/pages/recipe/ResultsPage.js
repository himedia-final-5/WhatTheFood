import React from "react";
import { useLocation } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div>
      <h1>검색 결과</h1>
      {searchResults.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul>
          {searchResults.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <p>Category: {recipe.category}</p>
              <p>Tags: {recipe.tags.join(", ")}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsPage;
