import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./EventUpCreate.css";
import { axios, cn } from "utils";
import { AdminFeatureContainer, ImageUploadInput } from "components/util";
import { useSelector } from "stores";
import { useInputs } from "hooks";

function UpdateEvent() {
  const navigate = useNavigate();

  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const [event, setEvent] = useState({});
  const { inputs, onInputChange } = useInputs(event);

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((result) => setEvent(result.data))
      .catch(console.error);
  }, [id]);

  function onSubmit() {
    axios
      .post(`/api/events/${id}`, { ...event, ...inputs })
      .then(() => navigate(`/events/${id}`))
      .catch(console.error);
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

export default UpdateEvent;
