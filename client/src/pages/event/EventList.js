import { Link } from "react-router-dom";

import "./EventList.css";
import { axios } from "utils";
import { useInfiniteScroll } from "hooks";

function EventList() {
  const { ref, content } = useInfiniteScroll(async (page) => {
    /** @type {{data: PageResponse<EventSummary>}} */
    const response = await axios.get(`/api/events`, {
      params: { page, size: 8 },
    });

    return response.data;
  });

  return (
    <div className="event_banner_wrap relative">
      <Link
        to="/createEventBanner"
        className="absolute left-6 -top-10 rounded-md px-2 py-0.5 border-2"
      >
        게시글쓰기
      </Link>
      {content.length > 0 ? (
        content.map((event, index) => (
          <Link
            to={`/events/${event.id}`}
            key={index}
            className="event_state_wrap"
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
          </Link>
        ))
      ) : (
        <div>No events found.</div>
      )}
      <div aria-label="scroll-trigger" ref={ref} />
    </div>
  );
}

export default EventList;
