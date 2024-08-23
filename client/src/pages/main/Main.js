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
  const [content, setLatestEvent] = useState([]); //배열
  const user = useSelector((state) => state.user);

  // 메인 이벤트를 가져오는 함수
  async function fetchEvents() {
    const response = await axios.get(`/api/events`, {
      params: { size: 8 },
    });
    setLatestEvent(response.data.content);
  }
  useEffect(() => {
    fetchEvents();
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
        <path stroke="#000" d="m14.953 6.469-5.07 5.062L4.828 6.47"></path>
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
        <path stroke="#000" d="m14.953 6.469-5.07 5.062L4.828 6.47"></path>
      </svg>
    </div>
  );

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="main_wrap">
      <div className="main_inner_wrap">
        <div className="main_event_banner_wrap">
          <div className="main_event_banner">
            <Slider {...settings}>
              {content.length > 0 ? (
                content.map((event) => (
                  <EventCard event={event} key={event.bannerImage} />
                ))
              ) : (
                <div>No events found.</div>
              )}
            </Slider>
          </div>
        </div>
        <div className="main_best_recipe"></div>
        <div className="main_category_recipe"></div>
        <div className="main_chef"></div>
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
