// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from 'react';
import '../../style/Qna.css'
import Header from '../Header';
import Footer from '../Footer';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Qna() {
    const navigate=useNavigate();
    const [word, setWord] = useState(null);
    const [qnaList, setQnaList] = useState([]);

    useEffect(()=>{

    })

  return (
    <div >
    <Header setWord={setWord} />
        <div className='qnaBody'>
            <div className='qnaCenter'>
                    <br></br>
                    <div id="qna1">|QnA|</div>
                    <br/>
                    <div id="qna2">자주받는질문</div>
                    <br></br>
                {
                    qnaList.map((qnalist, idx)=>{
                        return (
                            <div className='qnalist' key={idx} >
                                
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

export default Qna