import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SubMenu from "../SubMenu";
import { axios, defaultErrorHandler } from "utils";

function MView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [memberView, setMemberView] = useState({});
  const [role, setRole] = useState("");

  useEffect(() => {
    axios
      .get(`/api/members/admin/${id}`)
      .then((result) => {
        setMemberView(result.data);
        setRole(result.data.role);
      })
      .catch(defaultErrorHandler);
  }, [id]);

  function deleteMember() {
    const mCheck = window.confirm("회원 삭제하시겠습니까?");
    if (mCheck) {
      axios
        .delete(`/api/members/admin/${id}`)
        .then(() => navigate("/memberList"))
        .catch(defaultErrorHandler);
    }
  }

  function handleRoleChange(e) {
    setRole(e.currentTarget.value);
  }

  function updateMember() {
    const ans = window.confirm("해당 회원등급을 수정하시겠습니까?");
    if (ans) {
      axios
        .put(`/api/members/updateMemberGrade/${id}`, null, {
          params: { role },
        })
        .then(() => setMemberView({ ...memberView, role }))
        .catch(defaultErrorHandler);
    }
  }

  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="adminCategory">회원 정보</div>
      <div className="productTable">
        <div className="adminfield">
          <label className="labellabel">회원 이름</label>
          <div className="labelcontent">
            {memberView.username} &nbsp;({memberView.role})
          </div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 이메일</label>
          <div className="labelcontent">{memberView.email}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 닉네임</label>
          <div className="labelcontent">{memberView.nickname}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 소개</label>
          <div className="labelcontent">{memberView.introduce}</div>
        </div>

        <div className="adminfield">
          <label className="labellabel">회원 등급</label>
          <div className="labelcontent">
            {memberView.role}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
            {role}&nbsp;&nbsp;
            <select
              name="MemberGrade"
              value={role}
              onChange={handleRoleChange}
              style={{ border: "1px solid black" }}
            >
              <option
                value="ROLE_USER"
                defaultValue={memberView.role === "ROLE_USER"}
                onChange={(e) => {
                  setRole(e.currentTarget.value);
                }}
              >
                일반유저
              </option>
              <option
                value="ROLE_CHEF"
                defaultValue={memberView.role === "ROLE_CHEF"}
                onChange={(e) => {
                  setRole(e.currentTarget.value);
                }}
              >
                쉐프
              </option>
              <option
                value="ROLE_BRAND"
                defaultValue={memberView.role === "ROLE_BRAND"}
                onChange={(e) => {
                  setRole(e.currentTarget.value);
                }}
              >
                브랜드
              </option>
            </select>
          </div>
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
              updateMember();
            }}
          >
            회원 등급 설정
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
