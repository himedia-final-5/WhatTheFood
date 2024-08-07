import {  Routes, Route } from "react-router-dom";
import Login from './pages/member/Login';
import Main from './pages/Main';
import JoinForm from './pages/member/JoinForm';
import UpdateForm from './pages/member/UpdateForm';
import WriteNotice from './pages/notice/WriteNotice';
import NoticeList from './pages/notice/NoticeList';
import EventList from './pages/event/EventList';
import EventDetail from './pages/event/EventDetail';
import Faq from './pages/inquiry/Faq';
import FaqView from './pages/inquiry/FaqView';
import InquiryList from './pages/inquiry/InquiryList';
import InquiryWriteForm from './pages/inquiry/InquiryWriteForm';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/joinForm" element={<JoinForm />}/>
      <Route path="/updateForm" element={<UpdateForm />}/>
      <Route path="/noticeList" element={<NoticeList />} />
      <Route path="/writeNotice" element={<WriteNotice />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/faq" element={<Faq />}/>
      <Route path="/faqView/:id" element={<FaqView/>}/>
      <Route path="/inquiryList" element={<InquiryList/>}/>
      <Route path="/inquiryWriteForm" element={<InquiryWriteForm/>}/>


      

      

      </Routes>
    </div>
  );
}

export default App;
