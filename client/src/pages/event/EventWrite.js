import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./EventUpCreate.css";
import { axios, cn } from "utils";
import { AdminFeatureContainer, ImageUploadInput } from "components/util";
import { useSelector } from "stores";

export default function EventWrite() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // 게시글을 작성하기 위한 데이터 form
  const [event, setEvent] = useState({
    pass: "",
    title: "",
    date: "",
    bannerImage: "",
    contentImages: [],
  });

  // 위의 입력필드에서 발생한 값을 변경 처리 해주는 함수
  function onInputChange(e) {
    // 입력 필드에서 발생한 이벤트 객체에서 name과 value를 추출합니다.
    const { name, value } = e.target;

    // 현재 상태를 기반으로 새로운 상태를 만듭니다.
    setEvent((prevEvent) => ({
      // 이전 상태의 모든 속성을 복사합니다.
      ...prevEvent,

      // 현재 변경된 입력 필드의 name에 해당하는 값을 업데이트합니다.
      // 예: name이 "title"이면, 새로운 상태에서 title: value가 됩니다.
      [name]: value,
    }));
  }

  function onSubmit() {
    // axios 라이브러리를 사용해 POST 요청을 보냅니다.
    axios
      .post("/api/events/", {
        // event 상태 객체에 저장된 모든 데이터를 요청 본문에 포함시킵니다.
        ...event,
      })
      .then(() => {
        // POST 요청이 성공하면, 사용자를 "/events" 경로로 리다이렉트합니다.
        navigate("/events");

        // 현재 상태 객체 event의 내용을 콘솔에 출력합니다.
        console.log(event);
      });
  }


  return (
    <AdminFeatureContainer className="createEvent">
      <div className="createEvent_field">
        <label>작성자</label>
        <input type="text" value={user && user.nickname} readOnly />
      </div>
      <div className="createEvent_field">
        <label>PASS</label>
        <input
          type="password"
          name="pass"
          value={event.pass}
          onChange={onInputChange}
        />
      </div>
      <div className="createEvent_field">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={onInputChange}
        />
      </div>
      <div className="createEvent_field">
        <label htmlFor="startDate">시작 날짜</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={onInputChange}
          defaultValue={event.startDate ? event.startDate.slice(0, 10) : ""}
          required
        />
      </div>
      <div className="createEvent_field">
        <label htmlFor="endDate">종료 날짜</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={onInputChange}
          defaultValue={event.endDate ? event.endDate.slice(0, 10) : ""}
          required
        />
      </div>
      <div className="createEvent_field">
        <label>배너 이미지</label>
        <ImageUploadInput
          onUpload={(bannerImage) => setEvent({ ...event, bannerImage })}
          imageSrc={event.bannerImage}
          className={cn(
            "flex flex-col items-center justify-center w-full overflow-hidden",
            "border-2 border-gray-300 border-dashed rounded-lg",
          )}
        />
      </div>
      <div className="createEvent_field">
        <label>내용 이미지 목록</label>
        <div className="flex flex-wrap gap-y-2">
          {event.contentImages.length > 0 &&
            event.contentImages.map((contentImage, index) => (
              <div
                key={index}
                className={cn(
                  "flex relative items-center justify-center w-full",
                  "border-2 border-gray-300 border-dashed rounded-lg",
                )}
              >
                <button
                  aria-label={`remove-content-${index}`}
                  className={cn(
                    "absolute top-2 right-2 w-8 h-8 rounded-md transition-colors",
                    "text-2xl text-red-500 hover:text-red-700",
                    "bg-red-300 hover:bg-red-500",
                  )}
                  onClick={() =>
                    setEvent({
                      ...event,
                      contentImages: event.contentImages.filter(
                        (_, i) => i !== index,
                      ),
                    })
                  }
                >
                  X
                </button>
                <ImageUploadInput
                  onUpload={(contentImage) =>
                    setEvent({
                      ...event,
                      contentImages: event.contentImages.map((image, i) =>
                        i === index ? contentImage : image,
                      ),
                    })
                  }
                  imageSrc={contentImage}
                  className={cn(
                    "flex flex-col items-center justify-center w-full h-full overflow-hidden",
                  )}
                />
              </div>
            ))}
          <button
            onClick={() =>
              setEvent({
                ...event,
                contentImages: [...(event.contentImages || []), ""],
              })
            }
            className={cn(
              "w-full py-2 rounded-md transition-colors",
              "text-center items-center",
              "text-2xl text-green-700 hover:text-green-200",
              "bg-green-300 hover:bg-green-500",
            )}
          >
            이미지 추가 +
          </button>
        </div>
      </div>
      <div className="createEvent_btns">
        <button onClick={onSubmit}>작성완료</button>
        <Link to="/events">
          <button>돌아가기</button>
        </Link>
      </div>
    </AdminFeatureContainer>
  );
}
