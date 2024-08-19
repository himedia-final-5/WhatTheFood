import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

import "./RecipeDetail.css";
import "../event/EventDetail.css";
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
    if ((!isLoading, recipe == null && recipe?.id !== id)) {
      fetchEvent();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const loadKakaoSDK = () => {
      if (!window.Kakao) {
        console.error("Kakao SDK is not loaded");
        return;
      }
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("1cd0714fe86698514fb7dcd40504e5bf");
      }
    };

    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.integrity =
      "sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4";
    script.crossOrigin = "anonymous";
    script.onload = loadKakaoSDK;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [id]);

  const sendLinkKakaoShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK is not initialized");
      return;
    }

    if (!window.Kakao.Share || !window.Kakao.Share.sendDefault) {
      console.error("Kakao.Link.sendDefault is not available");
      return;
    }

    //   const templateId = 110915;
    //   // 이벤트별 첫 번째 이미지 선택 (혹은 다른 로직으로 이미지 선택 가능)

    //   const templateArgs = {
    //     title: event.title,
    //     description: "이벤트 설명을 여기에 추가하세요",
    //     imageUrl:
    //       event.contentImages.length > 0
    //         ? event.contentImages[0]
    //         : "기본 이미지 URL",
    //     webUrl: `http://localhost:3000/events/${event.id}`,
    //     mobileWebUrl: `http://localhost:3000/events/${event.id}`,
    //   };

    //   window.Kakao.Share.sendCustom({
    //     templateId: templateId,
    //     templateArgs: templateArgs,
    //   });
    // };

    const imageUrl =
      recipe.finishedImages.length > 0
        ? recipe.finishedImages[0]
        : "기본 이미지 URL";

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: recipe.title,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: `http://localhost:3000/recipes${recipe.id}`,
          webUrl: `http://localhost:3000/recipes/${recipe.id}`,
        },
      },
      social: {
        likeCount: 777,
        commentCount: 77,
        sharedCount: 777,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: `http://localhost:3000/recipes${recipe.id}`,
            webUrl: `http://localhost:3000/recipes${recipe.id}`,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: `http://localhost:3000/recipes${recipe.id}`,
            webUrl: `http://localhost:3000/recipes${recipe.id}`,
          },
        },
      ],
    });
  };

  if (isError) {
    toast.error("레시피 정보를 불러오는데 실패했습니다.");
    return <div></div>;
  }

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
            <strong>{recipe.level}level</strong>
          </p>
          {recipe.videoLink && (
            <p>
              <strong>Video:</strong>{" "}
              <a
                href={recipe.videoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </p>
          )}
          <p>
            <strong>Category:</strong> {recipe.category}
          </p>
          <div className="recipedetail_ingredientImage">
            <div>{recipe.ingredientImage}</div>
          </div>
          <div className="recipedetail_ingredients">
            <h3>Ingredients:</h3>
            <ul>
              {Array.isArray(recipe.ingredients) &&
              recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <p>No ingredients listed.</p>
              )}
            </ul>
          </div>

          <div className="recipedetail_cookingTools">
            <h3>Cooking Tools:</h3>
            <ul>
              {recipe.cookingTools && recipe.cookingTools.length > 0 ? (
                recipe.cookingTools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))
              ) : (
                <p>No cooking tools listed.</p>
              )}
            </ul>
          </div>

          <div className="recipedetail_cookingStep">
            {recipe.cookingStep && recipe.cookingStep.length > 0 ? (
              recipe.cookingStep.map((image, index) => (
                <div key={index} className="recipedetail_contentdetail">
                  <img src={image} alt={`cookingStep - ${index}`} />
                </div>
              ))
            ) : (
              <p>No cookingStep images available.</p>
            )}
          </div>
        </div>

        <div className="event_custom-button_wrap">
          <button className="event_custom_button" onClick={sendLinkKakaoShare}>
            <img src="/images/kakao.png" alt="KakaoShare" />
          </button>
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
    )
  );
}
