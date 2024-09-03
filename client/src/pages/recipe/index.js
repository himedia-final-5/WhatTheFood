import { lazyLoading as $ } from "utils";

// TODO: 레시피 CSS 파편화
import "./RecipeList.css";
import "./RecipeDetail.css";
import "./RecipeFavorite.css";
import "./RecipeUpWrite.css";

export const RecipeDetail = $(() => import("./RecipeDetail"));
export const RecipeFavorite = $(() => import("./RecipeFavorite"));
export const RecipeList = $(() => import("./RecipeList"));
export const RecipeUpdate = $(() => import("./RecipeUpdate"));
export const RecipeWrite = $(() => import("./RecipeWrite"));
