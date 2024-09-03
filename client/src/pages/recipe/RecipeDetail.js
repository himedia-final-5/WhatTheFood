import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import "./RecipeDetail.css";
import { axios, defaultErrorHandler } from "utils";
import { usePromise } from "hooks";
import Popup from "./PopUp";
import { UserFeature } from "components/util";

/** @type {?RecipeDetail} */
const DEFAULT_RECIPE = null;

export default function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [commentText, setCommentText] = useState("");
  const [commentContent, setCommentContent] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editingContent, setEditingContent] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const currentUrl = window.location.href;
  const user = useSelector((state) => state.user); // 사용자 정보를 가져옵니다
  const memberId = user ? user.id : null; // 로그인한 사용자의 ID를 가져옵니다

  const [fetchRecipe, recipe, isLoading, isError] = usePromise(
    DEFAULT_RECIPE,
    async () => (await axios.get(`/api/recipes/${id}`)).data,
  );

  // 댓글 목록을 가져오는 함수
  const fetchComments = useCallback(async () => {
    try {
      const result = await axios.get(`/api/recipes/${id}/comments`);
      setCommentContent(result.data.content || []); // commentText가 배열임을 보장
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }, [id]);

  useEffect(() => {
    if (!isLoading && (recipe == null || recipe?.id !== id)) {
      fetchRecipe();
    }
    fetchComments();

    //eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (recipe?.favoriteByMembers) {
      const isFavored = recipe.favoriteByMembers.some(
        (member) => member.id === memberId && member.username === user.username,
      );
      setIsFavorite(isFavored);
    }
  }, [recipe, memberId, user]);

  // Extract YouTube video ID from URL
  const extractYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|watch\?.+v=)?([^"&?/\s]{11})/;
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

  // 카카오 공유하기
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

    // 카카오톡 공유 불러올 이미지
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
          mobileWebUrl: `http://yorijori.recipes/recipes/${recipe.id}`,
          webUrl: `http://yorijori.recipes/recipes/${recipe.id}`,
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
            mobileWebUrl: `http://yorijori.recipes/recipes/${recipe.id}`,
            webUrl: `http://yorijori.recipes/recipes/${recipe.id}`,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: `http://yorijori.recipes/recipes/${recipe.id}`,
            webUrl: `http://yorijori.recipes/recipes/${recipe.id}`,
          },
        },
      ],
    });
  };

  function addComment() {
    if (commentText) {
      if (!memberId) {
        toast.error("로그인 후 댓글을 작성할 수 있습니다.");
        return;
      }

      axios
        .post(`/api/recipes/${recipe.id}/addComment`, {
          memberId,
          content: commentText,
        })
        .then(() => fetchComments())
        .catch(defaultErrorHandler);
    }
  }

  function deleteComment(commentId) {
    axios
      .delete(`/api/recipes/${commentId}/deleteComment`, {
        params: { memberId },
      })
      .then(() => fetchComments())
      .catch(defaultErrorHandler);
  }

  function updateComment(commentId, newContent) {
    axios
      .put(`/api/recipes/${commentId}/editComment`, {
        memberId: memberId,
        content: newContent,
      })
      .then(() => fetchComments())
      .catch(defaultErrorHandler);
  }

  const handleEditClick = (comment) => {
    setEditingCommentId(comment.id);
    setEditingContent(comment.content);
  };

  const handleUpdateClick = () => {
    if (editingCommentId && editingContent.trim() !== "") {
      updateComment(editingCommentId, editingContent);
      setEditingCommentId(null);
      setEditingContent("");
    } else {
      toast.error("댓글 내용을 입력하세요.");
    }
  };

  if (isError) {
    toast.error("레시피 정보를 불러오는데 실패했습니다.");
    return <div></div>;
  }

  const handleFavoriteClick = async (recipeId) => {
    if (!user) {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    try {
      if (isFavorite) {
        await axios.delete(`/api/recipes/${recipeId}/favorite`);
      } else {
        await axios.post(`/api/recipes/${recipeId}/favorite`);
      }
      // 찜하기 상태 변경 후 레시피 데이터를 다시 가져옴
      fetchRecipe();
    } catch (error) {
      console.error("Failed to update favorite status:", error);
      toast.error("찜하기 상태를 변경하는 데 실패했습니다.");
    }
  };

  return (
    recipe && (
      <div className="recipedetail_wrap">
        <div className="recipedetail_btn_wrap">
          <UserFeature expectId={recipe.member.id}>
            <Link to={`/recipes/write/${recipe.id}`}>
              <button>수정</button>
            </Link>
            <button onClick={deleteRecipe}>삭제</button>
          </UserFeature>
          <Link to="/recipes">
            <button>돌아가기</button>
          </Link>
        </div>

        <div className="recipedetail_content">
          <h1>{recipe.title}</h1>
          <p>{recipe.member.nickname}</p>
          <p>
            <i>{recipe.createdDate.slice(0, 10)}</i>
          </p>
          <p>{recipe.description}</p>
          <p>
            <strong>{recipe.cookingTime}</strong>
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
          <div className="recipe_custom-button_total_wrap">
            <div className="recipe_custom-button_wrap">
              {user && recipe.favoriteByMembers && (
                <button
                  className={`heart-button ${isFavorite ? "favorited" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFavoriteClick(recipe.id);
                  }}
                ></button>
              )}
              <button
                className="recipe_custom_button"
                onClick={sendLinkKakaoShare}
              >
                <img src="/images/kakao.png" alt="KakaoShare" />
              </button>
              <CopyToClipboard text={currentUrl}>
                <button
                  type="submit"
                  className="recipe_custom_button"
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
                  <p>{step.stepNumber}번</p>
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
                    <p>완성!</p>
                    <img src={image} alt={`Finished - ${index}`} />
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
          {/* 댓글 섹션 */}
          <div className="recipedetail_comment_wrap">
            <h3 className="comment-title">댓글</h3>
            <div className="recipedetail_comment">
              {Array.isArray(commentContent) && commentContent.length > 0 ? (
                commentContent.map((comment, index) => (
                  <div key={index} className="comment-card">
                    <div className="comment-header">
                      <img
                        src={
                          comment.member.profileImage ||
                          "/images/default-profile.png"
                        }
                        alt={`${comment.member.nickname}'s profile`}
                        className="comment-profile-image"
                      />
                      <span className="comment-nickname">
                        {comment.member.nickname}
                      </span>
                      <span className="comment-date">
                        {new Date(comment.createdDate).toLocaleDateString()}
                      </span>
                    </div>
                    {editingCommentId === comment.id ? (
                      <div className="comment-edit">
                        <textarea
                          value={editingContent}
                          onChange={(e) =>
                            setEditingContent(e.currentTarget.value)
                          }
                          placeholder="댓글을 입력하세요..."
                          rows="3"
                        />
                        <button onClick={handleUpdateClick}>수정 완료</button>
                        <button onClick={() => setEditingCommentId(null)}>
                          취소
                        </button>
                      </div>
                    ) : (
                      <p className="comment-content">{comment.content}</p>
                    )}
                    {comment.member.nickname === user?.nickname && (
                      <div className="comment-actions">
                        <button onClick={() => handleEditClick(comment)}>
                          수정
                        </button>
                        <button onClick={() => deleteComment(comment.id)}>
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div>아직 댓글이 없습니다</div>
              )}
            </div>
          </div>

          {/* 댓글 입력란 */}
          <div className="comment-input-wrap">
            <textarea
              defaultValue={commentText}
              onChange={(e) => setCommentText(e.currentTarget.value)}
              placeholder="댓글을 입력하세요..."
              rows="3"
            />
            <button onClick={addComment}>댓글 입력</button>
          </div>
        </div>
      </div>
    )
  );
}
