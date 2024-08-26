import { lazyLoading as $ } from "utils";

export const RecipeDetail = $(() => import("./RecipeDetail"));
export const RecipeFavorite = $(() => import("./RecipeFavorite"));
export const RecipeList = $(() => import("./RecipeList"));
export const RecipeUpdate = $(() => import("./RecipeUpdate"));
export const RecipeWrite = $(() => import("./RecipeWrite"));
