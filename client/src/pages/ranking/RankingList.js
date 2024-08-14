import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./css.css";

import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

export default function RankingList() {
  const starStyle = {
    color: "#FFB400",
    fontSize: "15px",
  };

  const navigate = useNavigate();

  const handleCategoryClick = (query) => {
    navigate(`/recipes?category=${query}`);
  };

  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const categories = [
    { name: "이탈리안", query: "italian" },
    { name: "중식", query: "chinese" },
    { name: "멕시칸", query: "mexican" },
    { name: "인도식", query: "indian" },
    { name: "한식", query: "korean" },
    { name: "일식", query: "japanese" },
  ];
  const { ref, content } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<EventSummary>}} */
      const response = await axios.get(`/api/events`, {
        params: { page, size: 8 },
      });
      setThrottleInterval(0);
      return response.data;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  return (
    <div className="ranking_banner_wrap relative">
      <div className="absolute -top-28">
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <button
                onClick={() => handleCategoryClick(category.query)}
                className="category-button"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute flex space-x-16 -top-16 left-96 text-lg "></div>
      <div className="absolute flex right-80 top-4 text-lg ">
        <p className="border py-1 px-5">일간</p>
        <p className="border py-1 px-5">주간</p>
        <p className="border py-1 px-5">월간</p>
        <FaStar style={starStyle} />
        <FaRegStar style={starStyle} />
      </div>

      {content.length > 0 ? (
        content.map((event, index) => (
          <div key={index} className="ranking_container">
            <p className="ranking_num">
              <b>{index + 1}</b>
            </p>
            <div className="ranking_state_wrap">
              <Link to={`/events/${event.id}`}>
                <div className="ranking_imageUrl">
                  <img src={event.bannerImage} alt="event_bannerImage" />
                </div>
              </Link>
              <div className="ranking_text_below">
                <p>{event.title}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No events found.</div>
      )}
      <div aria-label="scroll-trigger" ref={ref} />
    </div>
  );
}
