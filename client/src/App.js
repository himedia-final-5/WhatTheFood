import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './component/event/EventList';
import EventDetail from './component/event/EventDetail';
import EventForm from './component/event/EventForm';

function App() {
    return (
      <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Routes>
                <Route path="/events" element={<EventList />} />
                <Route path="/events/:id" element={<EventDetail />} />
                <Route path="/events/create" element={<EventForm />} />
            </Routes>
      </div>
    );
}

export default App;
