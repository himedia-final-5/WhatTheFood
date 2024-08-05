import {  Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Main from './Component/Main';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login />}/>
      {/* <Route path="/" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/" element={<Login />}/> */}

      </Routes>
    </div>
  );
}

export default App;
