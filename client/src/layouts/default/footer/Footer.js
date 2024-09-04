import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  function openPopupPage(url) {
    window.open(url, "_blank", "width=600,height=800");
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-links hidden xs:block">
            <ul>
              <li>
                <button onClick={() => openPopupPage("/about")}>
                  회사소개
                </button>
              </li>
              <li>
                <button onClick={() => openPopupPage("/terms")}>
                  이용약관
                </button>
              </li>
              <li>
                <button onClick={() => openPopupPage("/privacy")}>
                  개인정보처리방침
                </button>
              </li>
              <li>
                <Link to="/notices">공지사항</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <p>
            책임자1 : 김현재&nbsp;&nbsp;|&nbsp;&nbsp; 책임자2 : 조준서
            &nbsp;&nbsp;|&nbsp;&nbsp; 책임자3 : 김태희&nbsp;&nbsp;|&nbsp;&nbsp;
            책임자4 : 김재연
          </p>
          <p className="hidden xs:block">
            E-mail : help@yorijori.recipes / Fax : 02-123-4567 / 서울시 종로구
            인사동 / 문의전화(운영시간 평일 10:00~18:00) : 02-1111-2222 / 서비스
            이용문의 : 070-1234-4321 / 광고 및 제휴 문의 :
            contact@yorijori.recipes / (주)요리조리 / &nbsp;&nbsp;&nbsp;&nbsp;
            사업자등록번호 000-00-00000 / 본 콘텐츠의 저작권은 제공처 또는
            yorijori에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적
            책임을 질 수 없습니다.
          </p>
          <p>© yorijori Corp.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
