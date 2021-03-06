import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Pointmodal from "./Pointmodal";

function Heam({ point, setpoint }) {
  const [userInfo, setUserInfo] = useState([]);

  const userId = localStorage.getItem("id");
  const idValue = localStorage.getItem("id_value");
  const token = localStorage.getItem("id");

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://3.36.197.174:8081/api/user/" + idValue,
      headers: {
        Authorization: token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUserInfo(response.data);
        console.log("회원정보", userInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function reaxios() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://3.36.197.174:8081/api/user/" + idValue,
      headers: {
        Authorization: token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUserInfo(response.data);
        console.log("리턴회원정보", userInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function buttonClick() {
    alert("로그인하시기 바랍니다.");
  }
  function logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("id_value");
    localStorage.removeItem("token");
    localStorage.removeItem("user_point");
    window.location.replace("/");
  }
  return (
    <div className="pcmenu">
      <div className="global_box">
        <ul className="global_join_box">
          <li className="global_list_point">
            <Pointmodal
              point={point}
              setpoint={setpoint}
              userPoint={userInfo.u_point}
              reaxios={reaxios}
            />
            {localStorage.getItem("id") == null ? null : (
              <a
                className="point_box"
                href="#"
                onClick={() => {
                  setpoint(!point);
                }}
              >
                MY POINT : {userInfo.u_point}P
              </a>
            )}
          </li>
          <li className="global_list login">
            {localStorage.getItem("id") == null ? (
              <Link to="/login">
                <a className="login_box" href="#">
                  LOGIN
                </a>
              </Link>
            ) : (
              <Link to="/">
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
              <Link to="/activity">
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
            <li className="gub_02 main_li">
              <Link to="/map">
                <a className="map_a main_menu_list" href="">
                  <h3 className="main_bar">MAP</h3>
                </a>
              </Link>
            </li>
            <li className="gub_03 main_li">
              <Link to="/notice">
                <a className="com_a main_menu_list" href="">
                  <h3 className="main_bar">COMMUNITY</h3>
                </a>
              </Link>
            </li>
            <li className="gub_04 main_li">
              <Link to="/faq">
                <a className="con_a main_menu_list" href="">
                  <h3 className="main_bar">CONTACT</h3>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sub sub_left">
          <div className="sub-list">
            <ul className="sub-list_ul sub-ul-02">
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
                  <a href="">TIP게시판</a>
                </Link>
              </li>
              <li className="sub-list_li">
                <Link to="/news">
                  <a href="">뉴스게시판</a>
                </Link>
              </li>
            </ul>
            <ul className="sub-list_ul sub-ul-03">
              <li className="sub-list_li">
                <Link to="/faq">
                  <a href="">FAQ</a>
                </Link>
              </li>
              {userId == null ? (
                <>
                  <li className="sub-list_li">
                    <Link to="/login">
                      <a href="" onClick={buttonClick}>
                        문의하기
                      </a>
                    </Link>
                  </li>
                  <li className="sub-list_li">
                    <Link to="/login">
                      <a href="" onClick={buttonClick}>
                        문의내역
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heam;
