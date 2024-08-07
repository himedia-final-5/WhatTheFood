import {  Routes, Route } from "react-router-dom";
import Login from './pages/member/Login';
import Main from './pages/Main';
import JoinForm from './pages/member/JoinForm';
import UpdateForm from './pages/member/UpdateForm';
import WriteNotice from './pages/notice/WriteNotice';
import Notice from './pages/notice/Notice';
import EventList from './pages/event/EventList';
import EventDetail from './pages/event/EventDetail';
import Faq from './pages/inquiry/Faq';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/joinForm" element={<JoinForm />}/>
      <Route path="/updateForm" element={<UpdateForm />}/>
      <Route path="/notice" element={<Notice />} />
      <Route path="/writeNotice" element={<WriteNotice />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/faq" element={<Faq />}/>

      

      {/* <Route path="/" element={<Login />}/> */}

      </Routes>
    </div>
  );
}

export default App;
