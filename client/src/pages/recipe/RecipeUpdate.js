import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./RecipeUpWrite.css";
import { axios, cn } from "utils";
import { AdminFeatureContainer, ImageUploadInput } from "components/util";
import { useSelector } from "stores";
import { useInputs } from "hooks";

export default function RecipeUpdate() {
  const navigate = useNavigate();

  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const [recipe, setRecipe] = useState({});
  const { inputs, onInputChange } = useInputs(recipe);

  useEffect(() => {
    axios
      .get(`/api/recipes/${id}`)
      .then((result) => setRecipe(result.data))
      .catch(console.error);
  }, [id]);

  function onSubmit() {
    axios
      .post(`/api/recipes/${id}`, { ...recipe, ...inputs })
      .then(() => navigate(`/recipes/${id}`))
      .catch(console.error);
  }

  return (
    <AdminFeatureContainer className="createRacipe">
      <div className="createRacipe_field">
        <label>작성자</label>
        <input type="text" defaultValue={user && user.nickname} readOnly />
      </div>
      <div className="createRacipe_field">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onInputChange}
          defaultValue={recipe.title}
          required
        />
      </div>
      <div className="createRacipe_field">
        <label htmlFor="createdDate">시작 날짜</label>
        <input
          type="date"
          id="createdDate"
          name="createdDate"
          onChange={onInputChange}
          defaultValue={
            recipe.createdDate ? recipe.createdDate.slice(0, 10) : ""
          }
          required
        />
      </div>
      <div className="createRacipe_field">
        <label>배너 이미지</label>
        <ImageUploadInput
          onUpload={(bannerImage) => setRecipe({ ...recipe, bannerImage })}
          imageSrc={recipe.bannerImage}
          className={cn(
            "flex flex-col items-center justify-center w-full overflow-hidden",
            "border-2 border-gray-300 border-dashed rounded-lg",
          )}
        />
      </div>
      <div className="createRacipe_field">
        <label>컨텐츠 이미지 목록</label>
        <div className="flex flex-wrap gap-y-2">
          {recipe.contentImages &&
            recipe.contentImages.length > 0 &&
            recipe.contentImages.map((contentImage, index) => (
              <div
                key={index}
                className={cn(
                  "flex relative items-center justify-center w-full",
                  "border-2 border-gray-300 border-dashed rounded-lg",
                )}
              >
                <button
                  aria-label={`remove-content-${index}`}
                  className={cn(
                    "absolute top-2 right-2 w-8 h-8 rounded-md transition-colors",
                    "text-2xl text-red-500 hover:text-red-700",
                    "bg-red-300 hover:bg-red-500",
                  )}
                  onClick={() =>
                    setRecipe({
                      ...recipe,
                      contentImages: recipe.contentImages.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                >
                  X
                </button>
                <ImageUploadInput
                  onUpload={(contentImage) =>
                    setRecipe({
                      ...recipe,
                      contentImages: recipe.contentImages.map((image, i) =>
                        i === index ? contentImage : image,
                      ),
                    })
                  }
                  imageSrc={contentImage}
                  className={cn(
                    "flex flex-col items-center justify-center w-full h-full overflow-hidden",
                  )}
                />
              </div>
            ))}
          <button
            onClick={() =>
              setRecipe({
                ...recipe,
                contentImages: [...(recipe.contentImages || []), ""],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            이미지 추가 +
          </button>
        </div>
      </div>
      <div className="createRecipe_btns">
        <button onClick={onSubmit}>작성완료</button>
        <Link to={`/recipes`}>
          <button>돌아가기</button>
        </Link>
      </div>
    </AdminFeatureContainer>
  );
}
