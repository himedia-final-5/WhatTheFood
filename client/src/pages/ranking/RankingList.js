import { useState } from "react";
import { Link } from "react-router-dom";

import "./css.css";
import { AdminFeature } from "components/util";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

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
      <ul>
        <AdminFeature>
          <Link
            to="/events/write"
            className="absolute left-6 -top-5 px-2 py-0.5 "
          >
            레시피
          </Link>
          <Link
            to="/events/write"
            className="absolute left-24 -top-5 px-2 py-0.5 "
          >
            검색어
          </Link>
          <Link
            to="/events/write"
            className="absolute left-40 -top-5 px-2 py-0.5 "
          >
            쉐프
          </Link>
        </AdminFeature>
      </ul>
      {content.length > 0 ? (
        content.map((event, index) => (
          <Link
            to={`/events/${event.id}`}
            key={index}
            className="event_state_wrap"
          >
            <div className="event_imageUrl">
              <img src={event.bannerImage} alt="event_bannerImage"></img>
            </div>

            <div className="event_text_wrap">
              <span className="event_state_name">{event.title}</span>
              <span className="event_date">
                {event.startDate.slice(0, 10)}&nbsp;&nbsp;
                {event.endDate && event.endDate.slice(0, 10)}
              </span>
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
