import React, {useState, useEffect} from 'react'

import './InquiryList.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function InquiryList() {
    const navigate=useNavigate();
    const [word, setWord] = useState(null);
    const [qnaList, setQnaList] = useState([]);
    const [inquiryList, setInquiryList] = useState([]);

    useEffect(
        ()=>{
            axios.get(`/api/inquiries`)
            .then((result)=>{ setInquiryList( result.data );})
            .catch((err)=>{console.error(err)})
    },[]
    )

  return (
    <div >
    <Header setWord={setWord} />
        <div className='iqBody'>
                
            <div className='iqCenter'>
                
                    <br></br>
                    <br></br>
                    <div id="iq1">
                        <div>내 문의 내역</div>
                        <div id="inquiryWrite" onClick={()=>{navigate(`/inquiryWriteForm/`)}}><img src="/images/inquirywrite.png"/>문의하기</div>
                    </div>
                    <br></br>
                
                  
                {
                    inquiryList.map((inquirylist, idx)=>{
                        return (
                            <div className='item' key={idx} onClick={()=>{navigate(`/InquiryView/${inquirylist.id}`) }} >
                                <div className='name'>{inquirylist.title}</div>
                                <div className='name'>{inquirylist.date.substring(0,10)}</div>
                            </div>
                        )
                    })

                }
            </div>    
            <div id="paging" style={{textAlign:"center", padding:"10px"}}>
            {/* {
                (paging.prev)?(
                    <span style={{cursor:"pointer"}} onClick={ ()=>{ onPageMove( paging.beginPage-1 ) } } > ◀ </span>
                ):(<span></span>)
            }
            {
                (beginend)?(
                    beginend.map((page, idx)=>{
                        return (
                            <span style={{cursor:"pointer"}} key={idx} onClick={
                                ()=>{ onPageMove( page ) }
                            }>&nbsp;{page}&nbsp;</span>
                        )
                    })
                ):(<></>)
            }
            {
                (paging.next)?(
                    <span style={{cursor:"pointer"}} onClick={
                        ()=>{ onPageMove( paging.endPage+1 ) }
                    }>&nbsp;▶&nbsp;</span>
                ):(<></>)
            } */}
            </div>
            
        </div>
        <br></br>
    <Footer/> 
    </div>
  )
}

export default InquiryList
