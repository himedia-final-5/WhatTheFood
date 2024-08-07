// import React, {useState, useEffect} from 'react'
import { useEffect, useState } from 'react';
import './Notice.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Notice() {
    const navigate = useNavigate();
    const [word, setWord] = useState(null);
    const [noticeList, setNoticeList] = useState([]);
    const [paging, setPaging] = useState({});

    function updatePage(data) {
        setNoticeList(data.content);
        setPaging({
            number: data.number,
            totalPages: data.totalPages,
            first:data.first,
            last : data.last
        });
    }

    useEffect(
        () => {
            axios.get('/api/notices')
                .then((result) => {
                    console.log('확인용22', result.data)
                    updatePage(result.data)
                })
                .catch((err) => { console.error(err) })
        }, []
    )

    function onPageMove(page) {
        // 페이지 표시방식
        axios.get(`/api/notices`,  {
            params: {
                pageNumber: page
            }
        })
            .then((result) => {
                updatePage(result.data)
            })
            .catch((err) => { console.error(err) })
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return '날짜 없음';

        const date = new Date(timestamp);

        return date.toISOString().substring(0, 10);
    };



    return (
        <div >
            <Header setWord={setWord} />
            <div className='noticeBody'>
                <div className='noticeCenter'>
                    <br></br>
                    <div id="notice1">|Notice|</div>
                    <br />
                    <div id="notice2">공지사항</div>
                    <br></br>

                    {
                        (noticeList.length) ? (
                            noticeList.map((notice, idx) => {
                                return (
                                    <div className='row' key={idx}>
                                        <div className='col'>{notice.id}</div>
                                        <div className='col' onClick={() => {
                                            // onBoardView( notice.id );
                                        }}>{notice.title}</div>
                                        <div className='col'>{formatDate(notice.writeDate)}</div>
                                    </div>
                                )
                            })
                        ) : (null)
                    }
                </div>
                <div id="paging" style={{ textAlign: "center", padding: "10px" }}>
                    {
                        (!paging.first) ? (
                            <span style={{ cursor: "pointer" }} onClick={() => { onPageMove(paging.number - 1) }} > ◀ </span>
                        ) : (<span></span>)
                    }
                    {
                    }
                    {
                        (!paging.last) ? (
                            <span style={{ cursor: "pointer" }} onClick={
                                () => { onPageMove(paging.number + 1) }
                            }>&nbsp;▶&nbsp;</span>
                        ) : (<></>)
                    }
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Notice
