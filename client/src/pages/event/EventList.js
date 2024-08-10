import { useNavigate } from "react-router-dom";

import "./EventList.css";
import { axios } from "utils";
import { useInfiniteScroll } from "hooks";

function EventList() {
  const navigate = useNavigate();

  const { ref, content } = useInfiniteScroll(async (page) => {
    /** @type {{data: PageResponse<EventSummary>}} */
    const response = await axios.get(`/api/events`, {
      params: { page, size: 8 },
    });

    return response.data;
  });

  return (
    <div className="event_banner_wrap">
      <button
        onClick={() => {
          navigate("/createEventBanner");
        }}
      >
        게시글쓰기
      </button>
      &nbsp;&nbsp;&nbsp;
      {content.length > 0 ? (
        content.map((event, index) => (
          <div
            key={index}
            className="event_state_wrap"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            <div className="event_text_wrap">
              <span className="event_state_name">{event.title}</span>
              <span className="event_date">
                {event.startDate.slice(0, 10)}&nbsp;&nbsp;
                {event.endDate && event.endDate.slice(0, 10)}
              </span>
            </div>

            <div className="event_imageUrl">
              <img src={event.bannerImage} alt="event_bannerImage"></img>
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

export default EventList;
