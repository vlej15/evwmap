import React from "react";
import { Link, Route, Switch } from "react-router-dom";

function Heam() {
  function logout() {
    localStorage.removeItem("id");
    window.location.replace("/");
  }
  return (
    <div className="pcmenu">
      <div className="global_box">
        <ul className="global_join_box">
          <li className="global_list">
            {localStorage.getItem("id") == null ? (
              <Link to="/login">
                <a className="login_box" href="#">
                  LOGIN
                </a>
              </Link>
            ) : (
              <Link to="/login">
                <a className="login_box" href="#" onClick={logout}>
                  LOGOUT
                </a>
              </Link>
            )}
          </li>
          <li className="global_list">
            {localStorage.getItem("id") == null ? (
              <Link to="/signup">
                <a className="join_box" href="#">
                  JOIN
                </a>
              </Link>
            ) : (
              <Link to="/signup">
                <a className="join_box" href="#">
                  MY PAGE
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="global_menu">
        <nav className="gub-wrap">
          <ul className="mainmenu_ul">
            <li className="gub_01 main_li">
              <Link to="/introduction">
                <a className="main_menu_list" href="">
                  <h3 className="main_bar">INTRODUCTION</h3>
                </a>
              </Link>
              {/* <div className="sub">
                                <div className="sub-list">
                                    <ul className="sub-list_ul">
                                        <li className="sub-list_li">
                                            <a href="#">서비스소개</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
            </li>

            <li className="gub_02 main_li">
              <Link to="/map">
                <a className="map_a main_menu_list" href="">
                  <h3 className="main_bar">MAP</h3>
                </a>
              </Link>
              <div className="sub sub_left">
                <div className="sub-list">
                  <ul className="sub-list_ul">
                    <li className="sub-list_li">
                      <Link to="/map">
                        <a href="">충전소 조회</a>
                      </Link>
                    </li>
                    <li className="sub-list_li">
                      <Link to="/navigate">
                        <a href="">길찾기</a>
                      </Link>
                    </li>

                    {/* <li className="sub-list_li">
                                            <a href="">신고</a>
                                        </li> */}
                  </ul>
                </div>
              </div>
            </li>

            <li className="gub_03 main_li">
              <Link to="/notice">
                <a className="com_a main_menu_list" href="">
                  <h3 className="main_bar">COMMUNITY</h3>
                </a>
              </Link>
              <div className="sub sub_left">
                <div className="sub-list">
                  <ul className="sub-list_ul">
                    <li className="sub-list_li">
                      <Link to="/notice">
                        <a href="">공지사항</a>
                      </Link>
                    </li>

                    <li className="sub-list_li">
                      <Link to="/freeboard">
                        <a href="">자유게시판</a>
                      </Link>
                    </li>
                    <li className="sub-list_li">
                      <Link to="/tipboard">
                        <a href="">TIP</a>
                      </Link>
                    </li>
                    <li className="sub-list_li">
                      <Link to="/news">
                        <a href="">뉴스</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="gub_04 main_li">
              <Link to="/faq">
                <a className="con_a main_menu_list" href="">
                  <h3 className="main_bar">CONTACT</h3>
                </a>
              </Link>
              <div className="sub sub_left">
                <div className="sub-list">
                  <ul className="sub-list_ul">
                    <li className="sub-list_li">
                      <Link to="/faq">
                        <a href="">FAQ</a>
                      </Link>
                    </li>
                    <li className="sub-list_li">
                      <Link to="/questions">
                        <a href="">문의하기</a>
                      </Link>
                    </li>
                    <li className="sub-list_li">
                      <Link to="/qlist">
                        <a href="">문의내역</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Heam;
