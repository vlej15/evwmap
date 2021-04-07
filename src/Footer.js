import React, { useState } from "react";
import "./css/Footer.scss";
import logoImg from "./css/FooterLogo.png";

function Footer() {
  return (
    <div className="footerMenu">
      <div className="introduce">
        <ul>
          <li>
            <div>
              <a>설치문의</a>
            </div>
          </li>
          <li>
            <a>개인정보처리방침</a>
          </li>
          <li>
            <a>사업자정보</a>
          </li>
          <div className="contents">
            <ul>
              <li>
                <a href="https://www.instagram.com/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="callLi">
                <p>070.1234.5678</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="Info">
        <img src={logoImg}></img>
        <ul>
          <li>
            <p>상호명: EVWMAP</p>
          </li>
          <li>
            <p>대표: 3조</p>
          </li>
          <li>
            <p>사업자등록번호: 443-60-00424</p>
          </li>
          <li>
            <p>고객센터: 070-1234-5678 평일 09:00-17:00 점심 12:00-13:00</p>
          </li>
          <li>
            <p>사업장소재지: 대구광역시 북구 복현로 35</p>
          </li>
          <li>
            <p>CopyrightⓒEVWMAP All rights Reserved</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
