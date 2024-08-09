import { Routes, Route } from "react-router-dom";

import { Header, Footer } from "components/layout";
import { Main } from "pages/main";
import { MemberJoin, MemberLogin, MemberUpdate } from "pages/member";
import { EventList, EventDetail, EventWrite, EventUpdate } from "pages/event";
import { FaqList, FaqDetail, FaqWrite } from "pages/faq";
import { InquiryList, InquiryDetail, InquiryWrite } from "pages/inquiry";
import { NoticeList, NoticeDetail, NoticeWrite } from "pages/notice";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/joinForm" element={<MemberJoin />} />
        <Route path="/login" element={<MemberLogin />} />
        <Route path="/setting" element={<MemberUpdate />} />

        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/createEventBanner" element={<EventWrite />} />
        <Route path="/updateEvent/:id" element={<EventUpdate />} />

        <Route path="/faq" element={<FaqList />} />
        <Route path="/faqView/:id" element={<FaqDetail />} />
        <Route path="/faqWriteForm" element={<FaqWrite />} />

        <Route path="/inquiryList" element={<InquiryList />} />
        <Route path="/inquiryView/:id" element={<InquiryDetail />} />
        <Route path="/inquiryWriteForm" element={<InquiryWrite />} />

        <Route path="/notice" element={<NoticeList />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/writeNotice" element={<NoticeWrite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
