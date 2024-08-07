import React, {useState, useEffect} from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useNavigate } from "react-router-dom";

function InquiryWriteForm() {
    const [word, setWord] = useState(null);



    const navigate=useNavigate();

  return (
    <div>
        <Header setWord={setWord} />   






        <Footer/>
    </div>
  )
}

export default InquiryWriteForm
