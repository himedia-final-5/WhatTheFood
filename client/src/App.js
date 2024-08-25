import { Suspense } from "react";
import { createPortal } from "react-dom";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DefaultLayout, AdminLayout } from "layouts";
import { ErrorRender, NotFoundRender } from "layouts/fallback";
import { Main } from "pages/main";
import { EmailLogin, MemberDetail, OAuth2Login } from "pages/member";
import { EventList, EventDetail, EventWrite, EventUpdate } from "pages/event";
import { FaqList, FaqDetail, FaqWrite } from "pages/faq";
import { InquiryList, InquiryDetail, InquiryWrite } from "pages/inquiry";
import {
  NoticeList,
  NoticeDetail,
  NoticeWrite,
  NoticeUpdate,
} from "pages/notice";
import { TestAssets, TestProfileGenerator } from "pages/test";

import { ChefList } from "pages/chef";

import SearchingStore from "pages/store/SearchingStore";

import Admin from "pages/admin/Login";

import MemberList from "pages/admin/member/MemberList";
import MView from "pages/admin/member/MView";
import SearchMList from "pages/admin/member/SearchMList";

import RList from "pages/admin/recipe/RecipeList";
import RView from "pages/admin/recipe/RecipeView";

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
import BList from "pages/admin/brand/BrandList";

import EList from "pages/admin/event/EventList";
import EView from "pages/admin/event/EventView";
import WEvent from "pages/admin/event/WEvent";
import EUpdate from "pages/admin/event/EUpdate";

import BrandList from "pages/admin/brand/BrandList";
import SearchRList from "pages/admin/recipe/SearchRecipeList";
import RecipeList from "pages/recipe/RecipeList";
import RecipeDetail from "pages/recipe/RecipeDetail";
import RecipeWrite from "pages/recipe/RecipeWrite";
import RecipeUpdate from "pages/recipe/RecipeUpdate";
import RecipeFavorite from "pages/recipe/RecipeFavorite";

import ResultsPage from "pages/recipe/ResultsPage";

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

              <Route path="/recipes/results" element={<ResultsPage />} />

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

            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/memberList" element={<MemberList />} />
              <Route path="/mView/:id" element={<MView />} />
              <Route path="/searchMList/:username" element={<SearchMList />} />
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
              <Route path="/brandList" element={<BList />} />
              <Route path="/eList" element={<EList />} />
              <Route path="/eView/:id" element={<EView />} />
              <Route path="/wEvent" element={<WEvent />} />
              <Route path="/eUpdate/:id" element={<EUpdate />} />
              <Route path="/rList" element={<RList />} />
              <Route path="/rView/:id" element={<RView />} />
              <Route path="/searchRList/:username" element={<SearchRList />} />
              <Route path="/BList" element={<BList />} />
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
