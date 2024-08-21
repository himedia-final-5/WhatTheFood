import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Popup from "../event/PopUp";
import "./RecipeDetail.css";

/** @type {?RecipeDetail} */
const DEFAULT_RECIPE = null;

export default function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(DEFAULT_RECIPE);
  const [commentText, setCommentText] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const user = useSelector((state) => state.user);
  const memberId = user ? user.id : null;
  const currentUrl = window.location.href;

  // 레시피와 댓글을 가져오는 함수
  const fetchRecipeAndComments = async () => {
    try {
      const recipeResult = await axios.get(`/api/recipes/${id}`);
      setRecipe(recipeResult.data);

      const commentsResult = await axios.get(`/api/recipes/${id}/comments`);
      setCommentText(commentsResult.data || []);
    } catch (error) {
      console.error("Failed to fetch recipe or comments:", error);
      toast.error("레시피 정보를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchRecipeAndComments();
  }, [id]);

  // 댓글을 추가하는 함수
  const addComment = async () => {
    try {
      if (!memberId) {
        toast.error("로그인 후 댓글을 작성할 수 있습니다.");
        return;
      }

      await axios.post(`/api/recipes/${recipe.id}/comments`, {
        memberId: memberId,
        content: commentContent,
      });

      fetchRecipeAndComments();
      setCommentContent("");
    } catch (err) {
      console.error(err);
      toast.error("댓글 작성에 실패했습니다.");
    }
  };

  // 댓글을 삭제하는 함수
  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/recipes/${recipe.id}/comments/${commentId}`, {
        params: { memberId },
      });

      fetchRecipeAndComments();
    } catch (err) {
      console.error(err);
      toast.error("댓글 삭제에 실패했습니다.");
    }
  };

  // 댓글을 수정하는 함수
  const updateComment = async (commentId, newContent) => {
    try {
      await axios.put(`/api/recipes/${recipe.id}/comments/${commentId}`, {
        memberId: memberId,
        content: newContent,
      });

      fetchRecipeAndComments();
      setEditingCommentId(null);
      setEditingContent("");
    } catch (err) {
      console.error(err);
      toast.error("댓글 수정에 실패했습니다.");
    }
  };

  // 댓글 수정 버튼 클릭 핸들러
  const handleEditClick = (comment) => {
    setEditingCommentId(comment.id);
    setEditingContent(comment.content);
  };

  // 댓글 수정 완료 핸들러
  const handleUpdateComment = () => {
    updateComment(editingCommentId, editingContent);
  };

  // 카카오 공유하기 함수
  const sendLinkKakaoShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK is not initialized");
      return;
    }

    if (!window.Kakao.Share || !window.Kakao.Share.sendDefault) {
      console.error("Kakao.Link.sendDefault is not available");
      return;
    }
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
          mobileWebUrl: `http://wtfood.today:3000/recipes/${recipe.id}`,
          webUrl: `http://wtfood.today:3000/recipes/${recipe.id}`,
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
            mobileWebUrl: `http://wtfood.today:3000/recipes/${recipe.id}`,
            webUrl: `http://wtfood.today:3000/recipes/${recipe.id}`,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: `http://wtfood.today:3000/recipes/${recipe.id}`,
            webUrl: `http://wtfood.today:3000/recipes/${recipe.id}`,
          },
        },
      ],
    });
  };

  // 레시피 삭제 함수
  const deleteRecipe = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      axios
        .delete(`/api/recipes/${id}`)
        .then(() => {
          navigate("/recipes");
          toast.success("레시피가 삭제되었습니다.");
        })
        .catch(() => {
          toast.error("레시피 삭제에 실패했습니다.");
        });
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipedetail_wrap">
      <div className="recipedetail_btn_wrap">
        {/* 관리자 기능 */}
        {user && user.role === "ROLE_ADMIN" && (
          <>
            <button onClick={() => navigate(`/recipes/write/${recipe.id}`)}>
              수정
            </button>
            <button onClick={deleteRecipe}>삭제</button>
          </>
        )}
        <button onClick={() => navigate("/recipes")}>돌아가기</button>
      </div>

      <div className="recipedetail_content">
        <h1>{recipe.title}</h1>
        <p>
          <i>{new Date(recipe.createdDate).toLocaleDateString()}</i>
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

        <div className="event_custom-button_total_wrap">
          <div className="event_custom-button_wrap">
            <button
              className="event_custom_button"
              onClick={sendLinkKakaoShare}
            >
              <img src="/images/kakao.png" alt="KakaoShare" />
            </button>
            <CopyToClipboard text={currentUrl}>
              <button
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

        {recipe.videoLink && (
          <div className="recipedetail_video">
            <iframe
              src={`https://www.youtube.com/embed/${extractYouTubeVideoId(recipe.videoLink)}`}
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* 기타 레시피 내용 표시 */}
        {/* 생략: 재료, 조리도구, 가이드 링크, 조리 단계, 완성 이미지 등 */}

        {/* 댓글 섹션 */}
        <div className="recipedetail_comment_wrap">
          <h3 className="comment-title">댓글</h3>
          <div className="recipedetail_comment">
            {commentText.length > 0 ? (
              commentText.map((comment) => (
                <div key={comment.id} className="comment-card">
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
                    <div>
                      <textarea
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                      />
                      <button onClick={handleUpdateComment}>수정 완료</button>
                      <button onClick={() => setEditingCommentId(null)}>
                        취소
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="comment-content">{comment.content}</p>
                      {comment.member.nickname === user.nickname && (
                        <div className="comment-actions">
                          <button onClick={() => handleEditClick(comment)}>
                            수정
                          </button>
                          <button onClick={() => deleteComment(comment.id)}>
                            삭제
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))
            ) : (
              <div>아직 댓글이 없습니다</div>
            )}
          </div>

          {memberId && (
            <div className="add-comment">
              <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="댓글을 작성하세요"
              />
              <button onClick={addComment}>댓글 작성</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
