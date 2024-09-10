import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./EventUpCreate.css";
import { axios, cn, defaultErrorHandler } from "utils";
import { AdminFeatureContainer, ImageUploadInput } from "components/util";
import { useSelector } from "stores";
import { useInputs } from "hooks"; //수정시 삽입 데이터 hooks

export default function EventUpdate() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  // 데이터 수정시 저장변수
  const [event, setEvent] = useState({});
  // 데이터 삽입시 필요한 변수
  const { inputs, onInputChange } = useInputs(event);

  useEffect(() => {
    // 컴포넌트가 마운트되거나 id가 변경될 때 실행됩니다.
    axios
      .get(`/api/events/${id}`) // 서버로부터 특정 ID를 가진 이벤트 데이터를 GET 요청으로 가져옵니다.
      .then((result) => setEvent(result.data)) // 서버로부터 받은 데이터를 setEvent를 사용해 상태에 저장합니다.
      .catch(defaultErrorHandler); // 요청이 실패하면 오류를 출력합니다.
  }, [id]); // id가 변경될 때마다 이 useEffect가 다시 실행됩니다.

  function onSubmit() {
    // 서버에 POST 요청을 보내는 함수입니다.
    // `/api/events/${id}` 경로로 데이터를 전송합니다.
    axios
      .post(`/api/events/${id}`, {
        // event 객체와 inputs 객체의 내용을 하나로 병합하여 서버로 보냅니다.
        ...event,
        ...inputs,
      })
      .then(() => {
        // POST 요청이 성공하면 `/events/${id}` 경로로 리다이렉트합니다.
        navigate(`/events/${id}`);
        toast.success("이벤트가 수정되었습니다");
      })
      .catch(defaultErrorHandler);
  }

  return (
    <AdminFeatureContainer className="createEvent">
      <div className="createEvent_field">
        <label>작성자</label>
        <input type="text" defaultValue={user && user.nickname} readOnly />
      </div>
      <div className="createEvent_field">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onInputChange}
          defaultValue={event.title}
          required
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
        <label>컨텐츠 이미지 목록</label>
        <div className="flex flex-wrap gap-y-2">
          {event.contentImages &&
            event.contentImages.length > 0 &&
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
        <Link to={`/events`}>
          <button>돌아가기</button>
        </Link>
      </div>
    </AdminFeatureContainer>
  );
}
