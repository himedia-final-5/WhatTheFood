import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./RecipeUpWrite.css";
import { axios, cn, defaultErrorHandler } from "utils";
import { UserFeatureContainer, ImageUploadInput } from "components/util";
import { useSelector } from "stores";

export default function RecipeWrite() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // 카테고리,난이도 toggle 선택을 위한 변수
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // 게시글을 작성하기 위한 데이터 form
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    cookingTime: "",
    servings: "",
    level: "",
    videoLink: "",
    category: "",
    ingredientImage: [],
    ingredients: [],
    cookingTools: [],
    createdDate: "",
    bannerImage: "",
    guideLinks: [],
    cookingStep: [],
    finishedImages: [],
    tags: [],
  });

  // 카테고리 입력을 위한 form
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

  // level 입력을 위한 form
  const level = [
    { name: "1", query: "1" },
    { name: "2", query: "2" },
    { name: "3", query: "3" },
    { name: "4", query: "4" },
    { name: "5", query: "5" },
  ];

  // 카테고리 toggle 다운 함수
  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
    setLevelDropdownOpen(false); // Close level dropdown if open
  };

  // level toggle 다운 함수
  const toggleLevelDropdown = () => {
    setLevelDropdownOpen(!isLevelDropdownOpen);
    setCategoryDropdownOpen(false); // Close category dropdown if open
  };

  // 현재 변경된 입력 필드의 name에 해당하는 값을 업데이트 하는 함수
  function onInputChange(e) {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  }

  function onSubmit() {
    axios
      .post("/api/recipes", {
        ...recipe,
        category: selectedCategory,
        level: selectedLevel,
      })
      .then(() => navigate("/recipes"))
      .catch(defaultErrorHandler);
  }

  return (
    <UserFeatureContainer className="createRecipe">
      <div className="createRecipe_field">
        <label>작성자</label>
        <input type="text" value={user && user.nickname} readOnly />
      </div>
      <div className="createRecipe_field">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={onInputChange}
        />
      </div>
      <div className="createRecipe_field">
        <label htmlFor="description">설명</label>
        <input
          type="text"
          name="description"
          value={recipe.description}
          onChange={onInputChange}
        />
      </div>

      <div className="createRecipe_field">
        <label htmlFor="cookingTime">조리 시간</label>
        <input
          type="text"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={onInputChange}
        />
      </div>
      <div className="createRecipe_field">
        <label>요리량</label>
        <input
          type="number"
          name="servings"
          value={recipe.servings}
          onChange={onInputChange}
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
        <label>메인이미지(utube 링크)</label>
        <input
          type="text"
          name="videoLink"
          value={recipe.videoLink}
          onChange={onInputChange}
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
        <div className="flex flex-wrap gap-y-2">
          {recipe.ingredientImage.length > 0 &&
            recipe.ingredientImage.map((ingredientImage, index) => (
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
                      ingredientImage: recipe.ingredientImage.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                >
                  X
                </button>
                <ImageUploadInput
                  onUpload={(ingredientImage) =>
                    setRecipe({
                      ...recipe,
                      ingredientImage: recipe.ingredientImage.map((image, i) =>
                        i === index ? ingredientImage : image,
                      ),
                    })
                  }
                  imageSrc={ingredientImage}
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
                ingredientImage: [...(recipe.ingredientImage || []), ""],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            재료 이미지 추가 +
          </button>
        </div>
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
        <label>가이드 링크</label>
        <div className="flex flex-col gap-2">
          {recipe.guideLinks && recipe.guideLinks.length > 0 ? (
            recipe.guideLinks.map((link, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  value={link}
                  onChange={(e) => {
                    const newLinks = [...recipe.guideLinks];
                    newLinks[index] = e.target.value;
                    setRecipe({ ...recipe, guideLinks: newLinks });
                  }}
                  className="w-full"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setRecipe({
                      ...recipe,
                      guideLinks: recipe.guideLinks.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                  className={cn(
                    "absolute top-2 right-2 text-red-500 hover:text-red-700 z-30",
                    "bg-red-300 hover:bg-red-500",
                    "w-8 h-8 rounded-md",
                  )}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No guide links available.</p>
          )}
          <button
            type="button"
            onClick={() =>
              setRecipe({
                ...recipe,
                guideLinks: [...(recipe.guideLinks || []), ""],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            가이드 링크 추가 +
          </button>
        </div>
      </div>
      <div className="createRecipe_field">
        <label>조리 순서</label>
        <div className="flex flex-wrap gap-y-2">
          {recipe.cookingStep &&
            recipe.cookingStep.length > 0 &&
            recipe.cookingStep.map((step, index) => (
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
                  onClick={() => {
                    const newSteps = recipe.cookingStep.filter(
                      (_, i) => i !== index,
                    );
                    setRecipe({ ...recipe, cookingStep: newSteps });
                  }}
                >
                  X
                </button>

                <ImageUploadInput
                  onUpload={(imageUrl) => {
                    const newSteps = [...recipe.cookingStep];
                    newSteps[index].imageUrl = imageUrl;
                    setRecipe({ ...recipe, cookingStep: newSteps });
                  }}
                  imageSrc={step.imageUrl}
                  className={cn(
                    "flex flex-col items-center justify-center w-full overflow-hidden",
                    "border-2 border-gray-300 border-dashed rounded-lg",
                  )}
                />
                <div className="createRecipe_field w-full">
                  <input
                    type="text"
                    id={`stepNumber-${index}`}
                    name={`stepNumber-${index}`}
                    onChange={(e) => {
                      const newSteps = [...recipe.cookingStep];
                      newSteps[index].stepNumber = parseInt(e.target.value, 10);
                      setRecipe({ ...recipe, cookingStep: newSteps });
                    }}
                    value={step.stepNumber || ""}
                    className="w-full mt-2"
                    required
                    placeholder="조리 순서 번호"
                  />
                  <input
                    type="text"
                    id={`description-${index}`}
                    name={`description-${index}`}
                    onChange={(e) => {
                      const newSteps = [...recipe.cookingStep];
                      newSteps[index].description = e.target.value;
                      setRecipe({ ...recipe, cookingStep: newSteps });
                    }}
                    value={step.description || ""}
                    className="w-full"
                    required
                    placeholder="조리 내용 입력"
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
                  { imageUrl: "", description: "", stepNumber: 1 },
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
          <div className="flex flex-col gap-2">
            {recipe.finishedImages && recipe.finishedImages.length > 0 ? (
              recipe.finishedImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col items-center justify-center w-full overflow-hidden",
                    "border-2 border-gray-300 border-dashed rounded-lg",
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setRecipe({
                        ...recipe,
                        finishedImages: recipe.finishedImages.filter(
                          (_, i) => i !== index,
                        ),
                      })
                    }
                    className={cn(
                      "absolute top-2 right-2 text-red-500 hover:text-red-700",
                      "bg-red-300 hover:bg-red-500",
                      "w-8 h-8 rounded-md",
                    )}
                  >
                    X
                  </button>
                  <ImageUploadInput
                    onUpload={(imageUrl) => {
                      const newImages = [...recipe.finishedImages];
                      newImages[index] = imageUrl;
                      setRecipe({ ...recipe, finishedImages: newImages });
                    }}
                    imageSrc={image}
                    className={cn(
                      "flex flex-col items-center justify-center w-full overflow-hidden",
                      "border-2 border-gray-300 border-dashed rounded-lg",
                    )}
                  />
                </div>
              ))
            ) : (
              <p>No finished images available.</p>
            )}
            <button
              type="button"
              onClick={() =>
                setRecipe({
                  ...recipe,
                  finishedImages: [...(recipe.finishedImages || []), ""],
                })
              }
              className={cn(
                "w-full py-2 rounded-md transition-colors",
                "text-center items-center",
                "text-2xl text-green-700 hover:text-green-200",
                "bg-green-300 hover:bg-green-500",
              )}
            >
              완성 이미지 추가 +
            </button>
            <div className="createRecipe_field">
              <label>해쉬태그</label>
              <div className="flex flex-col gap-2">
                {recipe.tags && recipe.tags.length > 0 ? (
                  recipe.tags.map((link, index) => (
                    <div key={index} className="relative">
                      <input
                        type="text"
                        value={link}
                        onChange={(e) => {
                          const newTag = e.target.value.startsWith("#")
                            ? e.target.value
                            : `#${e.target.value}`;
                          const newLinks = [...recipe.tags];
                          newLinks[index] = newTag;
                          setRecipe({ ...recipe, tags: newLinks });
                        }}
                        className="w-full"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setRecipe({
                            ...recipe,
                            tags: recipe.tags.filter((_, i) => i !== index),
                          })
                        }
                        className={cn(
                          "absolute top-2 right-2 text-red-500 hover:text-red-700 z-30",
                          "bg-red-300 hover:bg-red-500",
                          "w-8 h-8 rounded-md",
                        )}
                      >
                        X
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No tags available.</p>
                )}
                <button
                  type="button"
                  onClick={() =>
                    setRecipe({
                      ...recipe,
                      tags: [...(recipe.tags || []), ""],
                    })
                  }
                  className={cn(
                    "w-full py-2 rounded-md transition-colors",
                    "text-center items-center",
                    "text-2xl text-green-700 hover:text-green-200",
                    "bg-green-300 hover:bg-green-500",
                  )}
                >
                  해쉬 태그 추가 +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="createRecipe_btns">
        <button onClick={onSubmit}>작성완료</button>
        <Link to="/recipes">
          <button>돌아가기</button>
        </Link>
      </div>
    </UserFeatureContainer>
  );
}
