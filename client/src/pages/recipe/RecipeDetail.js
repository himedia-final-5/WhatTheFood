import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

import "./RecipeDetail.css";
import { AdminFeature } from "components/util";
import { axios } from "utils";
import { usePromise } from "hooks";
import Popup from "../event/PopUp";

/** @type {?RecipeDetail} */
const DEFAULT_RECIPE = null;

export default function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentUrl = window.location.href;
  const [buttonPopup, setButtonPopup] = useState(false);

  const [fetchEvent, recipe, isLoading, isError] = usePromise(
    DEFAULT_RECIPE,
    async () => (await axios.get(`/api/recipes/${id}`)).data,
  );

  // Extract YouTube video ID from URL
  const extractYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|watch\?.+v=)?([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const deleteRecipe = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      toast.promise(axios.delete(`/api/recipes/${id}`), {
        pending: "레시피 삭제 중...",
        success: {
          render() {
            navigate("/recipes");
            return "레시피가 삭제되었습니다.";
          },
        },
        error: "레시피 삭제에 실패했습니다.",
      });
    }
  };

  useEffect(() => {
    if (!isLoading && (recipe == null || recipe?.id !== id)) {
      fetchEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // if (isError) {
  //   toast.error("레시피 정보를 불러오는데 실패했습니다.");
  //   return <div></div>;
  // }

  return (
    recipe && (
      <div className="recipedetail_wrap">
        <div className="recipedetail_btn_wrap">
          <AdminFeature>
            <Link to={`/recipes/write/${recipe.id}`}>
              <button>수정</button>
            </Link>
            <button onClick={deleteRecipe}>삭제</button>
          </AdminFeature>
          <Link to="/recipes">
            <button>돌아가기</button>
          </Link>
        </div>

        <div className="recipedetail_content">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <p>
            <strong>{recipe.cookingTime}분</strong>
          </p>
          <p>
            <strong>{recipe.servings}인분</strong>
          </p>
          <p>
            <strong>{recipe.level} level</strong>
          </p>
          <p>
            <strong>{recipe.category}</strong>
          </p>

          {recipe.videoLink && (
            <div className="recipedetail_video">
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(recipe.videoLink)}`}
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="recipedetail_ingredientWrap">
            <div className="recipedetail_ingredientImage">
              {Array.isArray(recipe.ingredientImage) &&
              recipe.ingredientImage.length > 0 ? (
                recipe.ingredientImage.map((image, index) => (
                  <div key={index} className="recipedetail_contentdetail">
                    <img src={image} alt={`Ingredient - ${index}`} />
                  </div>
                ))
              ) : (
                <p>No ingredient images available.</p>
              )}
            </div>
            <div className="recipedetail_ingredients">
              <h3>기본재료</h3>
              {Array.isArray(recipe.ingredients) &&
              recipe.ingredients.length > 0 ? (
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              ) : (
                <p>No ingredient list available.</p>
              )}
            </div>
          </div>

          <div className="recipedetail_cookingTools">
            <h3>조리도구</h3>
            <ul>
              {Array.isArray(recipe.cookingTools) &&
              recipe.cookingTools.length > 0 ? (
                recipe.cookingTools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))
              ) : (
                <p>No cooking tools listed.</p>
              )}
            </ul>
          </div>

          <div className="recipedetail_guideLinks">
            <h3>가이드 링크</h3>
            <ul>
              {Array.isArray(recipe.guideLinks) &&
              recipe.guideLinks.length > 0 ? (
                recipe.guideLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="#" rel="noopener noreferrer">
                      클릭하시면 블로그로 이동합니다.
                    </a>
                  </li>
                ))
              ) : (
                <p>No guide links available.</p>
              )}
            </ul>
          </div>

          <div className="recipedetail_cookingStep">
            {Array.isArray(recipe.cookingStep) &&
            recipe.cookingStep.length > 0 ? (
              recipe.cookingStep.map((step, index) => (
                <div key={index} className="recipedetail_contentdetail">
                  {step.imageUrl ? (
                    <img src={step.imageUrl} alt={`Cooking Step - ${index}`} />
                  ) : (
                    <p>No image available for this step.</p>
                  )}
                  {step.description && <p>{step.description}</p>}
                </div>
              ))
            ) : (
              <p>No cooking steps available.</p>
            )}
          </div>
          <div className="recipedetail_finishedImages">
            <div>
              {Array.isArray(recipe.finishedImages) &&
              recipe.finishedImages.length > 0 ? (
                recipe.finishedImages.map((image, index) => (
                  <div key={index} className="recipedetail_contentdetail">
                    <img src={image} alt={`Finished Image - ${index}`} />
                  </div>
                ))
              ) : (
                <p>No finished images available.</p>
              )}
            </div>
          </div>
          <div className="recipedetail_tags">
            <ul>
              {Array.isArray(recipe.tags) && recipe.tags.length > 0 ? (
                recipe.tags.map((tag, index) => <li key={index}>{tag}</li>)
              ) : (
                <p>No tags available.</p>
              )}
            </ul>
          </div>
          <div className="event_custom-button_total_wrap">
            <div className="event_custom-button_wrap">
              <CopyToClipboard text={currentUrl}>
                <button
                  type="submit"
                  className="event_custom_button"
                  onClick={() => setButtonPopup(true)}
                >
                  <img src="/images/share_copy.png" alt="linkShare" />
                </button>
              </CopyToClipboard>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>링크 복사 완료</h3>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
