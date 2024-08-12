import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./EventDetail.css";
import { axios } from "utils";
import Popup from "./PopUp";

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
  
  const currentUrl = window.location.href;
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    axios
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

    if (!window.Kakao.Share || !window.Kakao.Share.sendDefault) {
      console.error("Kakao.Link.sendDefault is not available");
      return;
    }

    //   const templateId = 110915;
    //   // 이벤트별 첫 번째 이미지 선택 (혹은 다른 로직으로 이미지 선택 가능)

    //   const templateArgs = {
    //     title: events.title,
    //     description: "이벤트 설명을 여기에 추가하세요",
    //     imageUrl:
    //       events.contentImages.length > 0
    //         ? events.contentImages[0]
    //         : "기본 이미지 URL",
    //     webUrl: `http://localhost:3000/events/${events.id}`,
    //     mobileWebUrl: `http://localhost:3000/events/${events.id}`,
    //   };

    //   window.Kakao.Share.sendCustom({
    //     templateId: templateId,
    //     templateArgs: templateArgs,
    //   });
    // };

    const imageUrl =
      events.contentImages.length > 0
        ? events.contentImages[0]
        : "기본 이미지 URL";

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: events.title,
        imageUrl: imageUrl,
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
      .delete(`/events/${id}`, {
        params: { pass }, // 패스워드를 쿼리 파라미터로 전송
      })
      .then(() => {
        navigate("/events");
      })
      .catch((err) => {
        console.error(err);
        alert("이벤트 삭제에 실패했습니다.");
      });
  };

  return (
    <div className="eventdetail_wrap">
      <div className="eventdetail_btn_wrap">
        <Link to={`/updateEvent/${events.id}`}>
          <button>수정</button>
        </Link>
        <button onClick={() => deleteEvent(events.id)}>삭제</button>
        <Link to="/events">
          <button>돌아가기</button>
        </Link>
      </div>

      <div className="eventdetail_content">
        {events.contentImages && events.contentImages.length > 0 ? (
          events.contentImages.map((image, index) => (
            <div key={index} className="eventdetail_contentdetail">
              <img src={image} alt={`Content - ${index}`} />
            </div>
          ))
        ) : (
          <p>No content images available.</p>
        )}
      </div>

      <div className="event_custom-button_wrap">
        <button className="event_custom_button" onClick={sendLinkKakaoShare}>
          <img src="/images/kakao.png" alt="KakaoShare" />
        </button>
        <CopyToClipboard text={currentUrl}>
          <button
            type="submit"
            className="event_custom_button"
            onClick={() => setButtonPopup(true)}
          >
            <img src="/images/share_copy.png" alt="linkShare" />
          </button>
        </CopyToClipboard>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>링크 복사 완료</h3>
        </Popup>
      </div>
    </div>
  );
}

export default EventDetail;
