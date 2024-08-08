import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EventDetail.css";
import "../../styles/Reset.css";
import jaxios from "../../utils/jwtUtil";

function EventDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [events, setEvents] = useState({
    startDate: "",
    endDate: "",
    title: "",
    contentImages: [],
    pass: "",
  });

  useEffect(() => {
    jaxios
      .get(`/api/events/${id}`)
      .then((result) => {
        console.log(result.data);
        setEvents(result.data);
      })
      .catch((err) => {
        console.error(err);
      });

    const loadKakaoSDK = () => {
      if (!window.Kakao) {
        console.error("Kakao SDK is not loaded");
        return;
      }
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("1cd0714fe86698514fb7dcd40504e5bf");
      }
    };

    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.integrity =
      "sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4";
    script.crossOrigin = "anonymous";
    script.onload = loadKakaoSDK;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [id]);

  const sendLinkKakaoShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK is not initialized");
      return;
    }

    if (!window.Kakao.Link || !window.Kakao.Link.sendDefault) {
      console.error("Kakao.Link.sendDefault is not available");
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: events.title,
        description: "내용",
        imageUrl: "원하는 이미지",
        link: {
          mobileWebUrl: `http://localhost:3000/events/${events.id}`,
          webUrl: `http://localhost:3000/events/${events.id}`,
        },
      },
      social: {
        likeCount: 777,
        commentCount: 77,
        sharedCount: 777,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: `http://localhost:3000/events/${events.id}`,
            webUrl: `http://localhost:3000/events/${events.id}`,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: `http://localhost:3000/events/${events.id}`,
            webUrl: `http://localhost:3000/events/${events.id}`,
          },
        },
      ],
    });
  };

  const deleteEvent = (id) => {
    const pass = window.prompt("삭제할 패스워드를 입력하세요");
    if (events.pass !== pass) {
      return alert("패스워드가 일치하지 않습니다");
    }
    axios
      .delete(`/api/events/deleteEvent/${events.id}`)
      .then(() => {
        navigate("/events");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="eventdetail_wrap">
      <div className="eventdetail_btn_wrap">
        <button onClick={() => navigate(`/updateEvent/${events.id}`)}>
          수정
        </button>
        <button onClick={() => deleteEvent(events.id)}>삭제</button>
        <button onClick={() => navigate("/events")}>돌아가기</button>
      </div>

      <div className="eventdetail_content">
        {events.contentImages && events.contentImages.length > 0 ? (
          events.contentImages.map((image, index) => (
            <div key={index} className="eventdetail_contentdetail">
              <img src={image} alt={`Content Image ${index}`} />
            </div>
          ))
        ) : (
          <p>No content images available.</p>
        )}
      </div>

      <div className="event_custom-button_wrap">
        <button className="event_custom-button" onClick={sendLinkKakaoShare}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 22 24"
          >
            <rect width="24" height="24" fill="white" />
            <path
              d="M7 14.5L12 9.5L17 14.5"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          이벤트 공유하기
        </button>
      </div>
    </div>
  );
}

export default EventDetail;
