import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate, useParams } from "react-router-dom";

function RecipeView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`/api/recipes/${id}`)
      .then((result) => {
        setRecipe(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">문의사항</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <div className="labelcontent">{recipe.title}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">등록날짜</label>
          <div className="labelcontent">
            {(recipe.created_date + "").substring(0, 10)}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원ID</label>
          <div className="labelcontent">{recipe.username}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">내용</label>
          <div className="labelcontent">{recipe.description}</div>
        </div>

        {/* <div className="adminfield">
          <label className="labellabel">내용</label>
          <div className="labelcontent">{recipe.cookingStep}</div>;
        </div> */}

        <div className="adminfield">
          <label className="labellabel">스크린샷</label>
          <div
            className="labelcontent"
            style={{ width: "300px", height: "200px" }}
          >
            <img
              src={recipe.finishedImages}
              style={{ width: "300px", height: "200px" }}
            />
          </div>
        </div>

        <div className="adminbtns">
          <button onClick={() => {}}>수정?</button>
          <button onClick={() => {}}>삭제</button>
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
