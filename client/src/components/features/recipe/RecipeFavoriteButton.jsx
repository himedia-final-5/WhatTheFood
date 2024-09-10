import { useState, memo, useEffect, useRef } from "react";
import { useSelector } from "react-redux"; // Redux를 가져옵니다
import { toast } from "react-toastify";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

import { axios, cn } from "@utils";

const RecipeFavoriteButton = memo(({ recipe, ...props }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.favorite);
  const user = useSelector((state) => state.user);
  const prevIsFavoriteRef = useRef(recipe.favorite);
  const playAnimation = isFavorite && !prevIsFavoriteRef.current;

  useEffect(() => {
    prevIsFavoriteRef.current = isFavorite;
  }, [isFavorite]);

  const handleFavoriteClick = async (event) => {
    event.preventDefault(); // 기본 동작 방지
    event.stopPropagation(); // 이벤트 버블링 방지

    if (!user) {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    try {
      if (isFavorite) {
        await axios.delete(`/api/recipes/${recipe.id}/favorite`);
        setIsFavorite(false);
      } else {
        await axios.post(`/api/recipes/${recipe.id}/favorite`);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Failed to update favorite:", error);
    }
  };

  return (
    user && (
      <button
        {...props}
        className={cn("relative inline-block w-8 h-8", props.className)}
        onClick={handleFavoriteClick}
      >
        <IconHeart className="absolute w-full h-full top-0 text-neutral-400" />
        <IconHeartFilled
          className={cn(
            "absolute w-full h-full top-0 text-rose-500 transition-all duration-300 delay-0",
            isFavorite ? "opacity-100" : "opacity-0",
            playAnimation && "animate-ping repeat-1 ease-in direction-reverse",
          )}
        />
      </button>
    )
  );
});

export default RecipeFavoriteButton;
