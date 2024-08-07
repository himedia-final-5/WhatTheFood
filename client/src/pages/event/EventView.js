import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './Event.css'

function EventView() {
  return (
    <div>
        <Header setWord={setWord} />
        <div className='eventBody'>
            <div className='eventCenter'>
                    <br></br>
                    <div id="event1">|event|</div>
                    <br/>
                    <div id="event2">이벤트</div>
                    <br></br>
                    <hr></hr>
                    <div>
                        <div>{}</div>
                        <div>{}</div>
                        <div>{}</div>
                    </div>
                    <div>목록으로</div>
            </div>
        </div>
        <Footer/>  
    </div>
  )
}

export default EventView