import { Suspense } from "react";
import { createPortal } from "react-dom";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DefaultLayout, EmptyLayout, AdminLayout } from "layouts";
import { ErrorRender, NotFoundRender } from "layouts/fallback";
import {
  AdminMain,
  AdminBrandList,
  AdminEventList,
  AdminEventView,
  AdminEventWrite,
  AdminEventUpdate,
  AdminFaqList,
  AdminFaqView,
  AdminFaqWrite,
  AdminFaqUpdate,
  AdminInquiryList,
  AdminInquiryView,
  AdminInquirySearchList,
  AdminMemberList,
  AdminMemberView,
  AdminMemberSearchList,
  AdminNoticeList,
  AdminNoticeView,
  AdminNoticeWrite,
  AdminNoticeUpdate,
  AdminRecipeList,
  AdminRecipeView,
  AdminRecipeSearchList,
} from "pages/admin";
import { BrandList } from "pages/brand";
import { ChefList } from "pages/chef";
import { EventList, EventDetail, EventWrite, EventUpdate } from "pages/event";
import { FaqList, FaqDetail, FaqWrite } from "pages/faq";
import { InquiryList, InquiryDetail, InquiryWrite } from "pages/inquiry";
import { Main } from "pages/main";
import { EmailLogin, MemberDetail, OAuth2Login } from "pages/member";
import {
  NoticeList,
  NoticeDetail,
  NoticeWrite,
  NoticeUpdate,
} from "pages/notice";
import { Privacy, Terms } from "pages/policy";
import {
  RecipeDetail,
  RecipeFavorite,
  RecipeList,
  RecipeUpdate,
  RecipeWrite,
} from "pages/recipe";
import { SearchingStore } from "pages/store";
import { TestAssets, TestProfileGenerator } from "pages/test";

function App() {
  return (
    <div className="App flex flex-col w-full h-full min-h-screen">
      <ErrorBoundary FallbackComponent={ErrorRender}>
        <Suspense fallback={<ErrorRender />}>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Main />} />

              <Route path="/recipes" element={<RecipeList />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} />
              <Route path="/recipes/write" element={<RecipeWrite />} />
              <Route path="/recipes/write/:id" element={<RecipeUpdate />} />
              <Route path="/recipes/favorites" element={<RecipeFavorite />} />

              <Route path="/events" element={<EventList />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/events/write" element={<EventWrite />} />
              <Route path="/events/write/:id" element={<EventUpdate />} />

              <Route path="/members/:id" element={<MemberDetail />} />
              <Route path="/login/email/:token" element={<EmailLogin />} />
              <Route path="/login/oauth2" element={<OAuth2Login />} />

              <Route path="/faqs" element={<FaqList />} />
              <Route path="/faqs/:id" element={<FaqDetail />} />
              <Route path="/faqs/write" element={<FaqWrite />} />

              <Route path="/inquiries" element={<InquiryList />} />
              <Route path="/inquiries/:id" element={<InquiryDetail />} />
              <Route path="/inquiries/write" element={<InquiryWrite />} />

              <Route path="/notices" element={<NoticeList />} />
              <Route path="/notices/:id" element={<NoticeDetail />} />
              <Route path="/notices/write" element={<NoticeWrite />} />
              <Route path="/notices/write/:id" element={<NoticeUpdate />} />

              <Route path="/chefs" element={<ChefList />} />
              <Route path="/brands" element={<BrandList />} />

              <Route path="/store" element={<SearchingStore />} />

              <Route path="/test/assets" element={<TestAssets />} />
              <Route path="/test/profile" element={<TestProfileGenerator />} />
            </Route>

            <Route element={<EmptyLayout />}>
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Route>

            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminMain />} />
              <Route path="/memberList" element={<AdminMemberList />} />
              <Route path="/mView/:id" element={<AdminMemberView />} />
              <Route
                path="/searchMList/:username"
                element={<AdminMemberSearchList />}
              />
              <Route path="/noticeList" element={<AdminNoticeList />} />
              <Route path="/nView/:id" element={<AdminNoticeView />} />
              <Route path="/wNotice" element={<AdminNoticeWrite />} />
              <Route path="/nUpdate/:id" element={<AdminNoticeUpdate />} />
              <Route path="/iList" element={<AdminInquiryList />} />
              <Route path="/iView/:id" element={<AdminInquiryView />} />
              <Route
                path="/searchIList/:username"
                element={<AdminInquirySearchList />}
              />
              <Route path="/faqList" element={<AdminFaqList />} />
              <Route path="/fView/:id" element={<AdminFaqView />} />
              <Route path="/writeFaq" element={<AdminFaqWrite />} />
              <Route path="/faqUpdate/:id" element={<AdminFaqUpdate />} />
              <Route path="/brandList" element={<AdminBrandList />} />
              <Route path="/eList" element={<AdminEventList />} />
              <Route path="/eView/:id" element={<AdminEventView />} />
              <Route path="/wEvent" element={<AdminEventWrite />} />
              <Route path="/eUpdate/:id" element={<AdminEventUpdate />} />
              <Route path="/rList" element={<AdminRecipeList />} />
              <Route path="/rView/:id" element={<AdminRecipeView />} />
              <Route
                path="/searchRList/:username"
                element={<AdminRecipeSearchList />}
              />
            </Route>
            <Route path="*" element={<NotFoundRender />} />
          </Routes>
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
