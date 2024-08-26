import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, cn, defaultErrorHandler } from "utils";
import { ImageUploadInput } from "components/util";

function WEvent() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    date: "",
    bannerImage: "",
    contentImages: [],
  });

  function onInputChange(e) {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  }

  function submitEvent() {
    axios
      .post("/api/events/", event)
      .then(() => navigate("/eList"))
      .catch(defaultErrorHandler);
  }

  return (
    <div className="adminContainerEvent">
      <SubMenu />
      <div className="adminCategory">이벤트 등록</div>
      <div className="productTableEvent">
        <div className="adminfield">
          <label className="labellabel">진행 여부</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={onInputChange}
            className="adminSearch"
          />
        </div>
        <div className="adminfield">
          <label htmlFor="startDate" className="labellabel">
            시작 날짜
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="adminSearch"
            onChange={onInputChange}
            defaultValue={event.startDate ? event.startDate.slice(0, 10) : ""}
            required
          />
        </div>
        <div className="adminfield">
          <label htmlFor="endDate" className="labellabel">
            종료 날짜
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="adminSearch"
            onChange={onInputChange}
            defaultValue={event.endDate ? event.endDate.slice(0, 10) : ""}
            required
          />
        </div>
        <br></br>
        <br></br>
        <div className="adminfieldEvent">
          <label className="labellabel">배너 이미지</label>
          <div className="flex flex-wrap gap-y-2">
            <ImageUploadInput
              onUpload={(bannerImage) => setEvent({ ...event, bannerImage })}
              imageSrc={event.bannerImage}
              className={cn(
                "flex flex-col items-center justify-center w-full overflow-hidden",
                "border-2 border-gray-300 border-dashed rounded-lg",
              )}
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="adminfieldEvent">
          <label className="labellabel">내용 이미지</label>
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
                      "absolute top-1.1 right-2 w-8 h-8 rounded-md transition-colors",
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
        <div className="adminbtns">
          <button
            onClick={() => {
              submitEvent();
            }}
          >
            등록
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

export default WEvent;
