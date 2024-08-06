// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from 'react';
import '../../Style/Notice.css'
import Header from '../Header';
import Footer from '../Footer';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Notice() {
    const navigate=useNavigate();
    const [word, setWord] = useState(null);
    const [noticeList, setNoticeList] = useState([]);

    useEffect(()=>{

    })

  return (
    <div >
    <Header setWord={setWord} />
        <div className='noticeBody'>
            <div className='noticeCenter'>
                    <br></br>
                    <div id="notice1">|Notice|</div>
                    <br/>
                    <div id="notice2">공지사항</div>
                    <br></br>
                {
                    noticeList.map((noticelist, idx)=>{
                        return (
                            <div className='noticelist' key={idx} >
                                
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

export default Notice
