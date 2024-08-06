import {  Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Main from './Component/Main';
import JoinForm from './Component/Member/JoinForm';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/joinForm" element={<JoinForm />}/>
      

      {/* <Route path="/" element={<Login />}/> */}

      </Routes>
    </div>
  );
}

export default App;
