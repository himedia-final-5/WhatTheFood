import { useEffect, useState } from "react";
import SubMenu from "../SubMenu";
import axios from "utils";
import { useNavigate } from "react-router-dom";

function MemberList() {
  return (
    <div className="adminContainer">
      <SubMenu />
      <div className="btns" style={{ display: "flex", margin: "5px" }}>
        <input type="text" />
        <button>멤버 검색</button>
        {/* <button style={{marginLeft:"auto"}} onClick={()=>{ navigate('/writeproduct') }}>상품등록</button> */}
      </div>
    </div>
  );
}

export default MemberList;
