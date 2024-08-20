import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./RecipeUpWrite.css";
import { axios, cn } from "utils";
import { AdminFeatureContainer, ImageUploadInput } from "components/util";
import { useSelector } from "stores";
import { useInputs } from "hooks";

const categories = [
  { name: "전체", query: "" },
  { name: "한식", query: "한식" },
  { name: "양식", query: "양식" },
  { name: "일식", query: "일식" },
  { name: "중식", query: "중식" },
  { name: "분식", query: "분식" },
  { name: "간식", query: "간식" },
  { name: "베이킹", query: "베이킹" },
];

const level = [
  { name: "1", query: "1" },
  { name: "2", query: "2" },
  { name: "3", query: "3" },
  { name: "4", query: "4" },
  { name: "5", query: "5" },
];

export default function RecipeUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const [recipe, setRecipe] = useState({});
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const { inputs, onInputChange } = useInputs(recipe);

  useEffect(() => {
    axios
      .get(`/api/recipes/${id}`)
      .then((result) => {
        setRecipe(result.data);
        setSelectedCategory(result.data.category || "");
        setSelectedLevel(result.data.level || "");
      })
      .catch(console.error);
  }, [id]);

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
    setLevelDropdownOpen(false); // Close level dropdown if open
  };

  const toggleLevelDropdown = () => {
    setLevelDropdownOpen(!isLevelDropdownOpen);
    setCategoryDropdownOpen(false); // Close category dropdown if open
  };

  function onSubmit() {
    axios
      .post(`/api/recipes/${id}`, {
        ...recipe,
        ...inputs,
        category: selectedCategory,
        level: selectedLevel,
      })
      .then(() => navigate(`/recipes/${id}`))
      .catch(console.error);
  }

  return (
    <AdminFeatureContainer className="createRecipe">
      <div className="createRecipe_field">
        <label>작성자</label>
        <input type="text" defaultValue={user && user.nickname} readOnly />
      </div>
      <div className="createRecipe_field">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onInputChange}
          value={inputs.title || recipe.title || ""}
          required
        />
      </div>
      <div className="createRecipe_field">
        <label htmlFor="createdDate">작성 날짜</label>
        <input
          type="date"
          id="createdDate"
          name="createdDate"
          onChange={onInputChange}
          value={inputs.createdDate || recipe.createdDate?.slice(0, 10) || ""}
          required
        />
      </div>
      <div className="createRecipe_field">
        <label htmlFor="description">설명</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={onInputChange}
          value={inputs.description || recipe.description || ""}
          required
        />
      </div>
      <div className="createRecipe_field">
        <label htmlFor="servings">소요 시간(분)</label>
        <input
          type="text"
          id="servings"
          name="servings"
          onChange={onInputChange}
          value={inputs.servings || recipe.servings || ""}
          required
        />
      </div>
      <div className="createRecipe_field">
        <label htmlFor="level">난이도(level)</label>
        <div className="relative">
          <button
            type="button"
            onClick={toggleLevelDropdown}
            className="w-full text-left bg-gray-200 border border-gray-300 rounded-md px-4 py-2"
          >
            {selectedLevel || "난이도 선택"}
          </button>
          {isLevelDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full shadow-lg">
              {level.map((level) => (
                <button
                  key={level.query}
                  type="button"
                  onClick={() => {
                    setSelectedLevel(level.query);
                    setLevelDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2",
                    "hover:bg-gray-100",
                    "focus:outline-none",
                  )}
                >
                  {level.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="createRecipe_field">
        <label htmlFor="category">카테고리</label>
        <div className="relative">
          <button
            type="button"
            onClick={toggleCategoryDropdown}
            className="w-full text-left bg-gray-200 border border-gray-300 rounded-md px-4 py-2"
          >
            {selectedCategory || "카테고리 선택"}
          </button>
          {isCategoryDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full shadow-lg">
              {categories.map((category) => (
                <button
                  key={category.query}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category.query);
                    setCategoryDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2",
                    "hover:bg-gray-100",
                    "focus:outline-none",
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="createRecipe_field">
        <label htmlFor="videoLink">메인이미지(utube 링크)</label>
        <input
          type="text"
          id="videoLink"
          name="videoLink"
          onChange={onInputChange}
          value={inputs.videoLink || recipe.videoLink || ""}
          required
        />
      </div>

      <div className="createRecipe_field">
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

      <div className="createRecipe_field">
        <label>재료 이미지</label>
        <ImageUploadInput
          onUpload={(ingredientImage) =>
            setRecipe({ ...recipe, ingredientImage })
          }
          imageSrc={recipe.ingredientImage}
          className={cn(
            "flex flex-col items-center justify-center w-full overflow-hidden",
            "border-2 border-gray-300 border-dashed rounded-lg",
          )}
        />
      </div>

      <div className="createRecipe_field">
        <label>기본 재료</label>
        <div className="flex flex-col gap-2">
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => {
                    const newIngredients = [...recipe.ingredients];
                    newIngredients[index] = e.target.value;
                    setRecipe({ ...recipe, ingredients: newIngredients });
                  }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setRecipe({
                      ...recipe,
                      ingredients: recipe.ingredients.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                  className={cn(
                    "text-red-500 hover:text-red-700",
                    "bg-red-300 hover:bg-red-500",
                  )}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
          <button
            type="button"
            onClick={() =>
              setRecipe({
                ...recipe,
                ingredients: [...(recipe.ingredients || []), ""],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            기본 재료 추가 +
          </button>
        </div>
      </div>

      <div className="createRecipe_field">
        <label>조리 도구</label>
        <div className="flex flex-col gap-2">
          {recipe.cookingTools && recipe.cookingTools.length > 0 ? (
            recipe.cookingTools.map((tool, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={tool}
                  onChange={(e) => {
                    const newTools = [...recipe.cookingTools];
                    newTools[index] = e.target.value;
                    setRecipe({ ...recipe, cookingTools: newTools });
                  }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setRecipe({
                      ...recipe,
                      cookingTools: recipe.cookingTools.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                  className={cn(
                    "text-red-500 hover:text-red-700",
                    "bg-red-300 hover:bg-red-500",
                  )}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No cooking tools available.</p>
          )}
          <button
            type="button"
            onClick={() =>
              setRecipe({
                ...recipe,
                cookingTools: [...(recipe.cookingTools || []), ""],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            조리 도구 추가 +
          </button>
        </div>
      </div>

      <div className="createRecipe_field">
        <label htmlFor="guideLinks">가이드 링크</label>
        <input
          type="text"
          id="guideLinks"
          name="guideLinks"
          onChange={onInputChange}
          value={inputs.guideLinks || recipe.guideLinks || ""}
          required
        />
      </div>

      <div className="createRecipe_field">
        <label>조리 순서</label>
        <div className="flex flex-wrap gap-y-2">
          {recipe.cookingStep &&
            recipe.cookingStep.length > 0 &&
            recipe.cookingStep.map((cookingStep, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col relative items-center justify-center w-full",
                  "border-2 border-gray-300 border-dashed rounded-lg",
                )}
              >
                <button
                  aria-label={`remove-step-${index}`}
                  className={cn(
                    "absolute top-2 right-2 w-8 h-8 rounded-md transition-colors",
                    "text-2xl text-red-500 hover:text-red-700",
                    "bg-red-300 hover:bg-red-500",
                  )}
                  onClick={() =>
                    setRecipe({
                      ...recipe,
                      cookingStep: recipe.cookingStep.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                >
                  X
                </button>
                <ImageUploadInput
                  onUpload={(cookingStepImages) =>
                    setRecipe({ ...recipe, cookingStepImages })
                  }
                  imageSrc={cookingStep.imageUrl}
                  className={cn(
                    "flex flex-col items-center justify-center w-full overflow-hidden",
                    "border-2 border-gray-300 border-dashed rounded-lg",
                  )}
                />
                <div className="createRecipe_field w-full">
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={onInputChange}
                    value={inputs.description || cookingStep.description || ""}
                    className="w-full" // 이 부분 추가
                    required
                  />
                </div>
              </div>
            ))}
          <button
            onClick={() =>
              setRecipe({
                ...recipe,
                cookingStep: [
                  ...(recipe.cookingStep || []),
                  { imageUrl: "", description: "" },
                ],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            조리 이미지 추가 +
          </button>
        </div>

        <div className="createRecipe_field">
          <label>완성 이미지</label>
          <ImageUploadInput
            onUpload={(finishedImages) =>
              setRecipe({ ...recipe, finishedImages })
            }
            imageSrc={recipe.finishedImages}
            className={cn(
              "flex flex-col items-center justify-center w-full overflow-hidden",
              "border-2 border-gray-300 border-dashed rounded-lg",
            )}
          />
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
