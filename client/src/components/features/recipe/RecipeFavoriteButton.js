import { useState, memo } from "react";
import { useSelector } from "react-redux"; // Redux를 가져옵니다
import { toast } from "react-toastify";

import "./RecipeFavoriteButton.css";
import { axios, cn } from "utils";

const RecipeFavoriteButton = memo(({ recipe, ...props }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.favorite);
  const user = useSelector((state) => state.user); // 사용자 정보를 가져옵니다

  const handleFavoriteClick = async (event) => {
    event.preventDefault(); // 기본 동작 방지
    event.stopPropagation(); // 이벤트 버블링 방지

    if (!user) {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    if (isFavorite) {
      try {
        await axios.delete(`/api/recipes/${recipe.id}/favorite`);
        setIsFavorite(false);
      } catch (error) {
        console.error("Failed to remove favorite:", error);
      }
    } else {
      try {
        await axios.post(`/api/recipes/${recipe.id}/favorite`);
        setIsFavorite(true);
      } catch (error) {
        console.error("Failed to add favorite:", error);
      }
    }
  };

  return (
    user && (
      <button
        {...props}
        className={cn(
          "heart-button",
          { favorited: isFavorite },
          props.className,
        )}
        onClick={handleFavoriteClick}
      />
    )
  );
});
export default RecipeFavoriteButton;
