import { useState, memo } from "react";
import { Link } from "react-router-dom";

import "./EventList.css";
import { AdminFeature } from "@components/util";
import { axios, defaultErrorHandler } from "@utils";
import { useInfiniteScroll, usePromiseThrottle } from "@hooks";

export default function EventList() {
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
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
    <div className="event_banner_wrap relative">
      <AdminFeature>
        <Link
          to="/events/write"
          className="absolute left-6 -top-10 rounded-md px-2 py-0.5 border-2"
        >
          게시글쓰기
        </Link>
      </AdminFeature>
      {content.length > 0 ? (
        content.map((event) => <EventCard event={event} key={event.id} />)
      ) : (
        <div>No events found.</div>
      )}
      <div aria-label="scroll-trigger" ref={ref} />
    </div>
  );
}

const EventCard = memo(({ event }) => (
  <Link to={`/events/${event.id}`} className="event_state_wrap">
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
));
