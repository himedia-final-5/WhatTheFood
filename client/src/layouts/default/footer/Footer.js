import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <Link className="footer-logo" to="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/about">회사소개</Link>
              </li>
              <li>
                <Link to="/terms">이용약관</Link>
              </li>
              <li>
                <Link to="/privacy">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/contact">광고/제휴</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/utube.png" alt="YouTube" />
          </a>
        </div>
        <div className="footer-info">
          <p>
            책임자1 : 김현재&nbsp;&nbsp;|&nbsp;&nbsp; 책임자2 : 이준서
            &nbsp;&nbsp;|&nbsp;&nbsp; 책임자3 : 김태희&nbsp;&nbsp;|&nbsp;&nbsp;
            책임자4 : 김재연
          </p>
          <p>
            본 콘텐츠의 저작권은 제공처 또는 WhatTheFood에 있으며, 이를 무단
            이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 없습니다.
          </p>
          <p>© WhatTheFood Corp.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
