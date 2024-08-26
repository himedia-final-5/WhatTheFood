import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";

function RecipeView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  const extractYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|watch\?.+v=)?([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    axios
      .get(`/api/recipes/${id}`)
      .then((result) => setRecipe(result.data))
      .catch(defaultErrorHandler);
  }, [id]);

  function deleteRecipe(id) {
    const ans = window.confirm("정말 해당 레시피를 삭제하시겠습니까?");
    if (ans) {
      axios.delete(`/api/recipes/${id}`);
    }
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">레시피</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <div className="labelcontent">{recipe.title}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">등록날짜</label>
          <div className="labelcontent">
            {(recipe.createdDate + "").substring(0, 10)}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원ID</label>
          <div className="labelcontent">{recipe?.member?.username}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 닉네임</label>
          <div className="labelcontent">{recipe?.member?.nickname}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">요리 카테고리</label>
          <div className="labelcontent">{recipe.category}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">기타 사항</label>
          <div className="labelcontent">
            <span>{recipe.cookingTime}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{recipe.servings}인분</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{recipe.level} level</span>
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">태그</label>
          <div className="labelcontent">
            {Array.isArray(recipe.tags) && recipe.tags.length > 0 ? (
              recipe.tags.map((tag, index) => (
                <span key={index}>{tag}&nbsp;&nbsp;&nbsp;</span>
              ))
            ) : (
              <p>No tags available.</p>
            )}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">내용</label>
          <div className="labelcontent">{recipe.description}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">썸네일 이미지</label>
          <div className="labelcontent">
            <img
              src={recipe.bannerImage}
              style={{ width: "400px", height: "300px" }}
              alt="recipe_bannerImage"
            />
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">영상</label>
          <div className="labelcontent">
            {recipe.videoLink && (
              <div className="recipedetail_video">
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeVideoId(recipe.videoLink)}`}
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">재료사진</label>
          <div className="labelcontent">
            {Array.isArray(recipe.ingredientImage) &&
            recipe.ingredientImage.length > 0 ? (
              recipe.ingredientImage.map((image, index) => (
                <div key={index} className="recipedetail_contentdetail">
                  <img
                    src={image}
                    style={{ width: "400px", height: "300px" }}
                    alt={`Ingredient - ${index}`}
                  />
                </div>
              ))
            ) : (
              <p>No ingredient images available.</p>
            )}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">기본재료</label>
          <div className="admin_recipedetail_ingredients">
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

        <div className="adminfield">
          <label className="labellabel">조리도구</label>
          <div className="labelcontent">
            {Array.isArray(recipe.cookingTools) &&
            recipe.cookingTools.length > 0 ? (
              recipe.cookingTools.map((tool, index) => (
                <span key={index}>{tool}&nbsp;&nbsp;&nbsp;</span>
              ))
            ) : (
              <p>No cooking tools listed.</p>
            )}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">조리과정</label>
          <div className="labelcontent">
            {Array.isArray(recipe.cookingStep) &&
            recipe.cookingStep.length > 0 ? (
              recipe.cookingStep.map((step, index) => (
                <div key={index} className="recipedetail_contentdetail">
                  {step.imageUrl ? (
                    <img
                      src={step.imageUrl}
                      style={{ width: "400px", height: "300px" }}
                      alt={`Cooking Step - ${index}`}
                    />
                  ) : (
                    <p>No image available for this step.</p>
                  )}
                  {step.description && <p>{step.description}</p>}
                  <br></br>
                </div>
              ))
            ) : (
              <p>No cooking steps available.</p>
            )}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">요리완성 사진</label>
          <div className="labelcontent">
            <img
              src={recipe.finishedImages}
              style={{ width: "400px", height: "300px" }}
              alt="recipe finished"
            />
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">가이드 링크</label>
          <div className="labelcontent">
            {Array.isArray(recipe.guideLinks) &&
            recipe.guideLinks.length > 0 ? (
              recipe.guideLinks.map((link, index) => (
                <span key={index}>
                  <a href={link} target="#" rel="noopener noreferrer">
                    블로그 이동
                  </a>
                </span>
              ))
            ) : (
              <p>No guide links available.</p>
            )}
          </div>
        </div>

        <div className="adminbtns">
          {/* <button onClick={() => {}}>수정?</button> */}
          <button
            onClick={() => {
              deleteRecipe(recipe.id);
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              navigate("/rList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeView;
