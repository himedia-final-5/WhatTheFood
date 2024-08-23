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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
