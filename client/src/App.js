import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './pages/event/EventList';
import EventDetail from './pages/event/EventDetail';

function App() {
    return (
      <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Routes>
                <Route path="/events" element={<EventList />} />
                <Route path="/events/:id" element={<EventDetail />} />
            </Routes>
      </div>
    );
}

export default App;
