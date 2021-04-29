import React, { useState } from "react";
import "./css/Header.scss";
import { Link, Route, Switch } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heam from "./Heam.js";

function Header(props) {
  return (
    <>
      <div className="dHead">
        <div className="header-wrap">
          <div className="inner">
            <h2 className="headerh2">
              <a href="#" className="arrow">
                <FontAwesomeIcon
                  icon={faBars}
                  className="arrow-btn"
                  onClick={() => {
                    props.setMenu(!props.menu);
                  }}
                />
              </a>
            </h2>
            <h1 className="mainlogo">
              <Link to="/">
                <a href="#" className="Logo">
                  "EV WMap"
                </a>
              </Link>
            </h1>
            <Heam />
          </div>
        </div>
      </div>
      <div className="null">{props.menu === true ? <Heam2 /> : null}</div>
    </>
  );
}

function Heam2() {
  return (
    <>
      <div className="end"></div>
      <div className="MH">
        <div className="heammenu">
          <div className="joinbox">
            <ul className="global_join_box">
              <li className="global_list">
                <a className="login_box" href="#">
                  로그인
                </a>
              </li>
              <li className="global_list">
                <a className="join_box" href="#">
                  회원가입
                </a>
              </li>
            </ul>
          </div>
          <div className="global_menu">
            <nav className="gub-wrap">
              <ul className="mainmenu_ul">
                <li className="area01 main_li">
                  <p className="out">
                    <p className="in" href="#">
                      소개
                    </p>
                  </p>
                </li>

                <li className="area02 main_li">
                  <p className="out">
                    <p className="in">지도</p>
                  </p>
                  <div className="sub">
                    <div className="sub-list">
                      <ul className="sub-list_ul">
                        <li className="sub-list_li">
                          <a href="">길찾기</a>
                        </li>
                        <li className="sub-list_li">
                          <a href="">예약</a>
                        </li>
                        <li className="sub-list_li">
                          <a href="">조회</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="area03 main_li">
                  <p className="out">
                    <p className="in">커뮤니티</p>
                  </p>
                  <div className="sub">
                    <div className="sub-list">
                      <ul className="sub-list_ul">
                        <Link to="/notice">
                          <li className="sub-list_li">
                            <a href="">공지사항</a>
                          </li>
                        </Link>
                        <Link to="/freeboard">
                          <li className="sub-list_li">
                            <a href="">게시판</a>
                          </li>
                        </Link>
                        <li className="sub-list_li">
                          <a href="">뉴스</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="area04 main_li">
                  <p className="out">
                    <p className="in">문의하기</p>
                  </p>
                  <div className="sub">
                    <div className="sub-list">
                      <ul className="sub-list_ul">
                        <li className="sub-list_li">
                          <a href="">FAQ</a>
                        </li>
                        <li className="sub-list_li">
                          <a href="">문의하기</a>
                        </li>
                        <li className="sub-list_li">
                          <a href="">문의내역</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
