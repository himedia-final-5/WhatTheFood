import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useNavigate, useParams } from "react-router-dom";

function InquiryView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [qnaView, setQnaView] = useState({});
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    axios
      .get(`/api/inquiries/${id}`)
      .then((result) => {
        setQnaView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function iqAnswer() {
    axios
      .put(`/api/inquiries/${id}/answer`, null, { params: { answer } })
      .then(() => {
        navigate("/iList");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">문의사항</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">제목</label>
          <div className="labelcontent">{qnaView.title}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">등록날짜</label>
          <div className="labelcontent">
            {(qnaView.date + "").substring(0, 10)}
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원ID</label>
          <div className="labelcontent">{qnaView.username}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">내용</label>
          <div className="labelcontent">{qnaView.content}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">스크린샷</label>
          <div className="labelcontent">{qnaView.image}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">답변 내용</label>

          <textarea
            style={{ fontSize: "20px" }}
            rows="10"
            value={answer}
            placeholder={qnaView.answer}
            onChange={(e) => {
              setAnswer(e.currentTarget.value);
            }}
          ></textarea>
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              iqAnswer();
            }}
          >
            답변등록/수정
          </button>
          <button onClick={() => {}}>삭제</button>
          <button
            onClick={() => {
              navigate("/iList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default InquiryView;
