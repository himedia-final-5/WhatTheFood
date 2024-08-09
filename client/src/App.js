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
import FaqWriteForm from "./pages/inquiry/FaqWriteForm"; //임시
import InquiryList from "./pages/inquiry/InquiryList"; // 임시
import InquiryView from "./pages/inquiry/InquiryView"; // 임시
import InquiryWriteForm from "./pages/inquiry/InquiryWriteForm"; //임시

function App() {
  return (
    <div className="App">
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

        {/* 임시*/}
        <Route path="/inquiryList" element={<InquiryList />} />
        <Route path="/inquiryView/:id" element={<InquiryView />} />
        <Route path="/inquiryWriteForm" element={<InquiryWriteForm />} />
        <Route path="/faqWriteForm" element={<FaqWriteForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
