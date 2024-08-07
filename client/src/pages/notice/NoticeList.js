import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import '../../style/board.css';

function NoticeList() {

    const [ noticeList, setNoticeList ] = useState([]);
    const [ paging, setPaging ] = useState({});
    const [ beginend, setBeginend ] = useState([]);
    const navigate = useNavigate();

    useEffect(
        ()=>{
            axios.get('/api/notices/getNotices/1')
            .then((result)=>{
                console.log('확인용22',result.data)
                console.log('확인용',result.data.notices)
                setNoticeList( [result.data] );
               
            })
            .catch((err)=>{console.error(err)})
        },[]
    )

    // useEffect(
    //     ()=>{
    //         window.addEventListener("scroll", handleScroll);
    //         return () => {
    //             window.removeEventListener("scroll", handleScroll);
    //         }
    //     }
    // );

    // const handleScroll=()=>{
    //     const scrollHeight = document.documentElement.scrollHeight - 10; // 스크롤이 가능한 크기
    //     const scrollTop = document.documentElement.scrollTop;  // 현재 위치
    //     const clientHeight = document.documentElement.clientHeight; // 내용물의 크기
    //     console.log(Number(paging.page) + 1)
    //     if( scrollTop + clientHeight >= scrollHeight ) {
    //         onPageMove( Number(paging.page) + 1 );
    //     }
    // }


    // function onBoardView( num ){
    //     axios.get(`/api/board/updateReadCount/${num}`)
    //     .then(()=>{
    //         navigate(`/boardView/${num}`);
    //     })
    //     .catch((err)=>{console.error(err)});
    // }


    function onPageMove(page){
        // 무한 스크롤
        // console.log('onPageMove(', page, ')')
        // axios.get(`/api/board/getBoardList/${page}`)
        // .then((result)=>{
        //     setPaging( result.data.paging);
        //     let boards=[]; 
        //     boards = [...boardList]; 
        //     boards = [...boards, ...result.data.boardlist ]; 
        //     setBoardList( [...boards] ); // Merge 한 리스트를 boardList 로 복사
        // })
        // .catch((err)=>{console.error(err)})

        // 페이지 표시방식
        axios.get(`/api/notices/getNotices/${page}`)
        .then((result)=>{
            setNoticeList( [...result.data.noticelist ] );
            console.log(result.data);
            setPaging( result.data.paging);

            const pageArr = [];
            for(let i=result.data.paging.beginPage; i<=result.data.paging.endPage; i++){
                pageArr.push(i);
            }
            setBeginend( [...pageArr] );
        })
        .catch((err)=>{console.error(err)})
    }

    return (
        <div className='noticeList'>
            <div className='titlerow'>
                <div className='titlecol'>번호</div>
                <div className='titlecol'>제목</div>
                <div className='titlecol'>작성일</div>
            </div>
            {
                noticeList.map((notice, idx)=>{
                    return (
                        <div className='row' key={idx}>
                            <div className='col'>{notice.id}</div>
                            <div className='col' onClick={()=>{
                                // onBoardView( notice.id );
                            }}>{notice.title}</div>
                            <div className='col'>{(notice.write_date+'').substring(0,10)}</div>
                        </div>
                    )
                })
            }



            <div id="paging" style={{textAlign:"center", padding:"10px"}}>
            {
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
            }
            </div>
        </div>
    )
}

export default NoticeList

