// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from 'react';
import './Event.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Event() {
    const navigate=useNavigate();
    const [word, setWord] = useState(null);
    const [eventList, setEventList] = useState([]);

    useEffect(()=>{

    })

  return (
    <div >
    <Header setWord={setWord} />
        <div className='eventBody'>
            <div className='eventCenter'>
                    <br></br>
                    <div id="event1">|Event|</div>
                    <br/>
                    <div id="event2">이벤트</div>
                    <br></br>
                {
                    eventList.map((eventlist, idx)=>{
                        return (
                            <div className='eventlist' key={idx} >
                                
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

export default Event