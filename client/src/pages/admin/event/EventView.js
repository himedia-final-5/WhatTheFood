import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useParams, useNavigate } from "react-router-dom";

function EventView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [eventView, setEventView] = useState({});

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((result) => {
        setEventView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function deleteEvent() {
    const eCheck = window.confirm("이벤트 삭제하시겠습니까?");
    if (eCheck) {
      axios
        .delete(`/api/events/${id}`)
        .then(() => {
          navigate("/eList");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">이벤트</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">이벤트 진행여부</label>
          <div className="labelcontent">{eventView.title}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">이벤트 기간</label>
          <div className="labelcontent">
            {(eventView.startDate + "").substring(0, 10)} ~{" "}
            {eventView.endDate && (eventView.endDate + "").substring(0, 10)}
          </div>
        </div>
        <br></br>
        <br></br>
        <label className="labellabel">이벤트 배너</label>
        <div className="adminfield">
          <div
            className="admincol"
            style={{
              width: "50%",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={eventView.bannerImage}
              style={{ width: "50%", height: "95px" }}
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
