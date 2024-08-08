import { Routes, Route } from "react-router-dom";
import Login from "./pages/member/Login";
import Main from "./pages/Main";
import JoinForm from "./pages/member/JoinForm";
import UpdateForm from "./pages/member/UpdateForm";
import WriteNotice from "./pages/notice/WriteNotice";
import Notice from "./pages/notice/Notice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventList from "./pages/events/EventList";
import EventDetail from "./pages/events/EventDetail";
import EventCreateBanner from "./pages/events/EventCreate";
import UpdateEvent from "./pages/events/UpdateEvent";
import Faq from "./pages/inquiry/Faq";
import FaqView from "./pages/inquiry/FaqView";
import InquiryList from "./pages/inquiry/InquiryList";
import InquiryWriteForm from "./pages/inquiry/InquiryWriteForm";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinForm" element={<JoinForm />} />
          <Route path="/updateForm" element={<UpdateForm />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/writeNotice" element={<WriteNotice />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/createEventBanner" element={<EventCreateBanner />} />
          <Route path="/updateEvent/:id" element={<UpdateEvent />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faqView/:id" element={<FaqView />} />
          <Route path="/inquiryList" element={<InquiryList />} />
          <Route path="/inquiryWriteForm" element={<InquiryWriteForm />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
