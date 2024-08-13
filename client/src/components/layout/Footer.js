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
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
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
            기사배열 책임자 : 김수향&nbsp;&nbsp;|&nbsp;&nbsp;청소년 보호 책임자
            : 이정규
          </p>
          <p>
            본 콘텐츠의 저작권은 제공처 또는 WhatTheFood에 있으며, 이를 무단
            이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
          </p>
          <p>© WhatTheFood Corp.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
