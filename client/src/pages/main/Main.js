import { UndrawEatingTogether } from "components/asset";
import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "stores";
import "./Main.css";
import { axios, defaultErrorHandler } from "utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main() {
  const [events, setLatestEvent] = useState([]); //배열
  const [recipes, setLatestRecipe] = useState([]); //배열
  const [chef, setChef] = useState([]);
  const user = useSelector((state) => state.user);

  // 메인 이벤트를 가져오는 함수
  async function fetchEvents() {
    const response = await axios.get(`/api/events`, {
      params: { size: 8 },
    });
    setLatestEvent(response.data.content);
  }

  async function fetchRecipes() {
    try {
      const response = await axios.get(`/api/recipes`, {
        params: { size: 8 },
      });
      console.log("API Response:", response.data); // Check the structure of the response
      setLatestRecipe(response.data.content);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }

  async function fetchChef() {
    const response = await axios.get(`/api/members`, {
      params: { size: 8, role: "ROLE_CHEF" },
    });
    setChef(response.data.content);
  }

  useEffect(() => {
    fetchEvents();
    fetchRecipes();
    fetchChef();
  }, []);

  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow_left-arrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="66"
        fill="none"
        viewBox="0 0 19 18"
      >
        <path
          stroke="#000"
          strokeWidth="0.5"
          d="m14.953 6.469-5.07 5.062L4.828 6.47"
        ></path>
      </svg>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow_right-arrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="66"
        fill="none"
        viewBox="0 0 19 18"
      >
        <path
          stroke="#000"
          strokeWidth="0.5"
          d="m14.953 6.469-5.07 5.062L4.828 6.47"
        ></path>
      </svg>
    </div>
  );

  const CustomPrevArrowRecipe = ({ onClick }) => (
    <div className="custom-arrow_left-arrow_recipe">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="none"
      >
        <g filter="url(#ic_btn_chev_left_svg__a)">
          <circle cx="30.5" cy="29.5" r="27.5" fill="#fff"></circle>
        </g>
        <path stroke="#000" d="M35.976 44 21 29.512 36 15"></path>
        <defs>
          <filter
            id="ic_btn_chev_left_svg__a"
            width="61"
            height="61"
            x="0"
            y="0"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_622_5735"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_622_5735"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );

  const CustomNextArrowRecipe = ({ onClick }) => (
    <div className="custom-arrow_right-arrow_recipe" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="none"
      >
        <g filter="url(#ic_btn_chev_right_svg__a)">
          <circle cx="30.5" cy="29.5" r="27.5" fill="#fff"></circle>
        </g>
        <path stroke="#000" d="M25.024 44 40 29.512 25 15"></path>
        <defs>
          <filter
            id="ic_btn_chev_right_svg__a"
            width="61"
            height="61"
            x="0"
            y="0"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_622_5736"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_622_5736"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );

  const settingEvents = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true, // 자동 슬라이더 활성화
    autoplaySpeed: 3000, // 3초마다 슬라이드 전환 (단위: ms)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false, // 768px 이하에서 오토플레이 비활성화
          swipe: true, // 손가락으로 슬라이드 가능
          arrows: true, // 화살표 네비게이션 활성화
        },
      },
    ],
  };

  const settingRecipes = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <CustomPrevArrowRecipe />,
    nextArrow: <CustomNextArrowRecipe />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="main_wrap">
      <div className="main_inner_wrap">
        <div className="main_event_banner_wrap">
          <div className="main_event_banner">
            <Slider {...settingEvents}>
              {events.length > 0 ? (
                events.map((event) => (
                  <EventCard event={event} key={event.bannerImage} />
                ))
              ) : (
                <div>No events found.</div>
              )}
            </Slider>
          </div>
        </div>
        <div className="main_best_recipe_wrap">
          <div className="main_best_recipe_inner_wrap">
            <h1 className="main_recipe_title">EDITOR'S CHOICE</h1>
            <div className="main_best_recipe">
              <Slider {...settingRecipes}>
                {recipes.length > 0 ? (
                  recipes.map((recipe) => (
                    <Link
                      to={`/recipes/${recipe.id}`}
                      key={recipe.id}
                      className="recipe_state_wrap"
                    >
                      <div className="recipe_text_wrap">
                        <span className="recipe_state_name">
                          {recipe.title}
                        </span>
                        <span className="recipe_state_tags">
                          {recipe.tags.map((tag, index) => (
                            <span key={index} className="recipe_tag">
                              {tag}
                            </span>
                          ))}
                        </span>
                        <span className="recipe_state_level">
                          {recipe.level} level
                        </span>
                        <span className="recipe_state_servings">
                          {recipe.servings}인분
                        </span>
                        <span className="recipe_state_viewcount">
                          조회수 {recipe.viewCount}
                        </span>
                      </div>
                      <div className="recipe_imageUrl">
                        <img
                          src={recipe.bannerImage}
                          alt="recipe_bannerImage"
                        />
                      </div>
                    </Link>
                  ))
                ) : (
                  <div>No recipes found.</div>
                )}
              </Slider>
            </div>
          </div>
        </div>
        <div className="main_chef">
          {chef.length > 0 ? (
            chef.map((item, index) => (
              <div key={index} className="chef_container">
                <p className="chef_num">
                  <b>{index + 1}</b>
                </p>
                <Link to={`/events/${item.id}`}>
                  <div className="chef_imageUrl">
                    <img
                      className="rounded-full size-28"
                      src={item.profileImage}
                      alt="member_profileImage"
                    />
                  </div>
                </Link>
                <div className="flex justify-center py-2 text-base font-bold">
                  <p>{item.nickname}</p>
                </div>
              </div>
            ))
          ) : (
            <div>No chefs found.</div>
          )}
        </div>
        <div className="main_introduce"></div>
      </div>

      {/* {user ? ( // user를 위한 공간
        <div className="flex flex-col items-center">
          <div className="text-lg">
            <span className="font-bold">{user.nickname}</span>님 환영합니다!
          </div>
          <div className="text-neutral-600 text-base">
            당신의 권한은 <span className="font-bold">{user.role}</span>입니다.
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-lg">
            <span className="font-bold">게스트</span>님 환영합니다!
          </div>
          <div className="text-neutral-600 text-base">
            로그인을 하시면 더 많은 서비스를 이용하실 수 있습니다.
          </div>
        </div>
      )}
      <UndrawEatingTogether className="max-w-full max-h-full h-56 md:h-72 text-primary" /> */}
    </div>
  );
}

const EventCard = memo(({ event }) => (
  <Link to={`/events/${event.id}`} className="event_state_wrap">
    <div className="event_imageUrl">
      <img src={event.bannerImage} alt="event_bannerImage"></img>
    </div>
  </Link>
));
