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
    axios
      .delete(`/api/events/${id}`)
      .then(() => {
        navigate("/eList");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">이벤트</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <div className="labelcontent">{eventView.title}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">등록날짜</label>
          <div className="labelcontent">
            {(eventView.date + "").substring(0, 10)}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">내용</label>
          <div className="labelcontent">{eventView.content}</div>
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              navigate(`/eventUpdate/${eventView.id}`);
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
