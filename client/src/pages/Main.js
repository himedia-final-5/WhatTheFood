import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

function Main() {
  const lUser = useSelector((state) => state.user);
  const [word, setWord] = useState(null);

  const [inquiryList, setInquiryList] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`/api/inquiries`)
  //     .then((result) => {
  //       setInquiryList(result.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
}

export default Main;
