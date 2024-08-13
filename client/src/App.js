import { Suspense } from "react";
import { createPortal } from "react-dom";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header, Footer } from "components/layout";
import { FallbackRender } from "components/layout/error";
import { Main } from "pages/main";
import { MemberJoin, MemberLogin, MemberUpdate } from "pages/member";
import { EventList, EventDetail, EventWrite, EventUpdate } from "pages/event";
import { FaqList, FaqDetail, FaqWrite } from "pages/faq";
import { InquiryList, InquiryDetail, InquiryWrite } from "pages/inquiry";
import { NoticeList, NoticeDetail, NoticeWrite } from "pages/notice";
import { TestAssets } from "pages/test";

import Admin from "pages/admin/Login";

import MemberList from "pages/admin/member/MemberList";
import MView from "pages/admin/member/MView";

import NList from "pages/admin/notice/NoticeList";
import NView from "pages/admin/notice/NView";
import WriteNotice from "pages/admin/notice/NoticeWriteForm";
import NUpdate from "pages/admin/notice/NUpdate";

import IList from "pages/admin/inquiry/InquiryList";
import IView from "pages/admin/inquiry/InquiryView";
import SearchIList from "pages/admin/inquiry/SearchIList";

import FList from "pages/admin/inquiry/FaqList";
import FaqView from "pages/admin/inquiry/FaqView";
import WFaq from "pages/admin/inquiry/WriteFaq";
import FaqUpdate from "pages/admin/inquiry/FaqUpdate";

function App() {
  return (
    <div className="App flex flex-col w-full h-full">
      <ErrorBoundary FallbackComponent={FallbackRender}>
        <Suspense fallback={<FallbackRender />}>
          <Header />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signin" element={<MemberLogin />} />
              <Route path="/signup" element={<MemberJoin />} />
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
              <Route path="/test/assets" element={<TestAssets />} />
              {/* Admin */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/memberList" element={<MemberList />} />
              <Route path="/mView/:id" element={<MView />} />
              <Route path="/noticeList" element={<NList />} />
              <Route path="/nView/:id" element={<NView />} />
              <Route path="/wNotice" element={<WriteNotice />} />
              <Route path="/nUpdate/:id" element={<NUpdate />} />
              <Route path="/iList" element={<IList />} />
              <Route path="/iView/:id" element={<IView />} />
              <Route path="/searchIList/:username" element={<SearchIList />} />
              <Route path="/faqList" element={<FList />} />
              <Route path="/fView/:id" element={<FaqView />} />
              <Route path="/writeFaq" element={<WFaq />} />
              <Route path="/faqUpdate/:id" element={<FaqUpdate />} />
            </Routes>
          </div>

          <Footer />
        </Suspense>
      </ErrorBoundary>

      {createPortal(
        <ToastContainer
          transition={Flip}
          position="top-right"
          closeButton={false}
          autoClose={2000}
          closeOnClick={true}
          pauseOnHover={true}
        />,
        document.getElementById("toast"),
      )}
    </div>
  );
}

export default App;
