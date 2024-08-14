import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import { axios } from "utils";
import { useParams, useNavigate } from "react-router-dom";

function MView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [memberView, setMemberView] = useState({});

  useEffect(() => {
    axios
      .get(`/api/members/admin/${id}`)
      .then((result) => {
        setMemberView(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function deleteMember() {
    const mCheck = window.confirm("회원 삭제하시겠습니까?");
    if (mCheck) {
      axios
        .delete(`/api/members/admin/${id}`)
        .then(() => {
          navigate("/memberList");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">회원 정보</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">회원 이름</label>
          <div>{memberView.username}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 이메일</label>
          <div>{memberView.email}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 닉네임</label>
          <div>{memberView.nickname}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 소개</label>
          <div>{memberView.introduce}</div>
        </div>

        <div className="adminbtns">
          <button
            onClick={() => {
              deleteMember();
            }}
          >
            회원 삭제
          </button>
          <button
            onClick={() => {
              navigate("/memberList");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default MView;
