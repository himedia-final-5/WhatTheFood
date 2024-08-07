// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from 'react';
import './Faq.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Faq() {
    const navigate=useNavigate();
    const [word, setWord] = useState(null);
    const [qnaList, setQnaList] = useState([]);

    useEffect(()=>{

    })

  return (
    <div >
    <Header setWord={setWord} />
        <div className='faqBody'>
            <div className='faqCenter'>
                    <br></br>
                    <div id="faq1">|FAQ|</div>
                    <br/>
                    <div id="faq2">자주 받는 질문</div>
                    <br></br>
                {
                    qnaList.map((qnalist, idx)=>{
                        return (
                            <div className='faqlist' key={idx} >
                                
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
    <Footer/> 
    </div>
  )
}

export default Faq