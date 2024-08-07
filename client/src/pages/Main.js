import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useSelector, useDispatch } from 'react-redux';
//import { getCookie } from '../utils/cookieUtil';

function Main() {
    const lUser = useSelector( state=>state.user );
    const [word, setWord] = useState(null);

    const [inquiryList, setInquiryList] = useState([]);



    const navigate = useNavigate();

    useEffect(
      ()=>{
            axios.get(`/api/inquiries`)
            .then((result)=>{ setInquiryList( result.data );})
            .catch((err)=>{console.error(err)})
    },[]
  )


  return (
    <div>
      <Header setWord={setWord} />
      <div className="flex w-full justify-center">        
          <div className='w-5/6 text-center border border-red-500'>

                        {
                            (inquiryList)?(
                              inquiryList.map((inquirylist, idx)=>{
                                    return (
                                        <div className='flex w-full justify-center' key={idx} onClick={()=>{ navigate(`/productDetail/${inquirylist.id}`) }}>
                                            <div className='name'>{inquirylist.id}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className='name'>{inquirylist.email}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className='name'>{inquirylist.title}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className='name'>{inquirylist.content}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className='name'>{inquirylist.date.substring(0,10)}</div>
                                        </div>
                                    )
                                })
                            ):(null)
                        }
          </div>       
      </div>
      <Footer/>
    </div>
    
  )
}

export default Main
