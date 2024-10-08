import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";

function EventView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [eventView, setEventView] = useState({});

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((result) => setEventView(result.data))
      .catch(defaultErrorHandler);
  }, [id]);

  function deleteEvent() {
    const eCheck = window.confirm("이벤트 삭제하시겠습니까?");
    if (eCheck) {
      axios
        .delete(`/api/events/${id}`)
        .then(() => navigate("/eList"))
        .catch(defaultErrorHandler);
    }
  }

  return (
    <div className="adminContainerEvent">
      <SubMenu />
      <div className="adminCategory">이벤트</div>
      <br></br>
      <div className="productTableEvent">
        <div className="adminfieldEvent">
          <label className="labellabel">진행 여부</label>

          <div className="labelcontent">{eventView.title}</div>
        </div>
        <br></br>
        <div className="adminfieldEvent">
          <label className="labellabel">이벤트 기간</label>
          <div className="labelcontent">
            {(eventView.startDate + "").substring(0, 10)} ~{" "}
            {eventView.endDate && (eventView.endDate + "").substring(0, 10)}
          </div>
        </div>
        <br></br>
        <br></br>
        <label className="labellabel">이벤트 배너</label>
        <div className="adminfieldEvent">
          <div className="admincol">
            <img
              src={eventView.bannerImage}
              // style={{ width: "50%", height: "95px" }}
              alt="event banner"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <label className="labellabel">이벤트 내용</label>
        <div className="adminfield">
          {eventView.contentImages && eventView.contentImages.length > 0 ? (
            eventView.contentImages.map((image, index) => (
              <div key={index} className="labelcontent">
                <img src={image} alt={`Content - ${index}`} />
              </div>
            ))
          ) : (
            <p>No content images available.</p>
          )}
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              navigate(`/eUpdate/${eventView.id}`);
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              deleteEvent();
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              navigate("/eList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventView;
