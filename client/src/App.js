import {  Routes, Route } from "react-router-dom";
import Login from './pages/member/Login';
import Main from './pages/Main';
import JoinForm from './pages/member/JoinForm';
import UpdateForm from './pages/member/UpdateForm';
import Notice from './pages/notice/Notice';
import Event from './pages/event/Event';
import Faq from './pages/inquiry/Faq';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/joinForm" element={<JoinForm />}/>
      <Route path="/updateForm" element={<UpdateForm />}/>
      <Route path="/notice" element={<Notice/>}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/faq" element={<Faq />}/>

      

      {/* <Route path="/" element={<Login />}/> */}

      </Routes>
    </div>
  );
}

export default App;
