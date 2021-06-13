import React, { useState } from "react";
import "./css/Footer.scss";
import logoImg from "./css/FooterLogo.png";
import Policy from "./Policy"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footerMenu">
      <div className="introduce">
        <ul>
          <li>
            <div>
              <Link to="./policy">
                <a><button className="policy" onclick="window.scrollTo(0,0)">개인정보처리방침</button></a>
              </Link>
            </div>
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
              <li>
                <a href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Apr0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-kr-1003227-med-hasem-py-Evergreen-Apr0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700058439438676_creativeid_477136209358_device_c&gclid=CjwKCAjwm7mEBhBsEiwA_of-TMuMRHCQ42Tp23eVOxJtGqqKot28cy5-cdbYm65b_1UkWUPL6lu6WhoC42IQAvD_BwE&gclsrc=aw.ds">
                  <i class="fab fa-google-play"></i>
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
        {/* <img src={logoImg}></img> */}
        <ul>
          <li>
            <p>상호명: EVWMAP</p>
          </li>
          <li>
            <p>대표: 3조</p>
          </li>
          <li>
            <p>사업자등록번호: 111-11-11111</p>
          </li>
          <li>
            <p>고객센터: 070-1234-5678 평일 09:00-17:00</p>
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
