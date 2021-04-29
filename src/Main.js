import React from "react";
import BannerMain from "./BannerMain";
import "./css/Main.scss";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";
import section1 from "./css/section1.jpg";
import section1_2 from "./css/section1_2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import main_section1 from "./css/main-section1.jpg";
import main_section2 from "./css/main-section2.jpg";
import main_section31 from "./css/main-section37.JPG";
import main_section32 from "./css/main-section38.jpg";
import main_section33 from "./css/main-section39.jpg";

const Main = () => {
  const userId = localStorage.getItem("id");
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <BannerMain />
      <div className="contentsMain">
        <div className="section1">
          <div className="section-textarea">
            <p className="section1-title">EV WMAP</p>
            <p className="section1-subtitle">Eletric Vehicle World MAP</p>
            <p className="section1-text">
              <span>E</span>V WMAP은 전국 어디서나 <span>전</span>기차를 <br />
              보다 <span>편</span>리하게 이용할 수 있는
              <br /> 전기차 유저 필수 <span>애</span>플리케이션입니다.
            </p>
            <div className="section1-line"></div>
            <button className="map-btn">EV WMAP 앱으로 보기</button>
          </div>
          <img src={main_section1} className="img1"></img>
          <div className="section1-div"></div>
          <p className="section1-imgtitle">Eletric Vehicle World MAP</p>
        </div>
        {/* section end */}

        <div className="section2">
          <div className="section2-textarea">
            <p className="section2-title">
              EV WMAP<span>SERVICE</span>
            </p>
            <p className="section2-subtitle">
              여러장의 회원카드를 간편하게 핸드폰에 저장하세요
            </p>
            <div className="section2-line"></div>
            {userId == null ? (
              <Link to="/login">
                <button className="card-btn">회원카드 등록하기</button>
              </Link>
            ) : (
              <Link to="/card">
                <button className="card-btn">회원카드 등록하기</button>
              </Link>
            )}
          </div>
          <img src={main_section2} className="img2"></img>
        </div>
        {/* section end */}

        <div className="section3">
          <p className="section3-title">OUR SERVICE</p>
          <div className="section3-imgarea">
            <div className="section3-divarea">
              <img src={main_section31} className="img3"></img>
              <p className="section3-text1">충전소예약</p>
              <p className="section3-text2">
                빈 충전기 찾지 말고 원하는 충전기를 예약하여 사용하세요
              </p>
            </div>
            <div className="section3-divarea">
              <img src={main_section32} className="img3"></img>
              <p className="section3-text1">주변시설검색</p>
              <p className="section3-text2">
                충전하는 동안 시간을 보낼 수 있는 곳을 찾아보세요
              </p>
            </div>
            <div className="section3-divarea">
              <img src={main_section33} className="img3"></img>
              <p className="section3-text1">커뮤니티</p>
              <p className="section3-text2">
                EV WMAP 이용자들과 다양한 의견을 교류하세요
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* contents end */}
    </>
  );
};
export default Main;
