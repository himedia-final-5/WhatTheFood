import {  Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Main from './Component/Main';
import JoinForm from './Component/Member/JoinForm';
import UpdateForm from './Component/Member/UpdateForm';
import Notice from './Component/Notice/Notice';
import Event from './Component/Event/Event';


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

      

      {/* <Route path="/" element={<Login />}/> */}

      </Routes>
    </div>
  );
}

export default App;
