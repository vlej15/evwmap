import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/QList.scss";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import BannerReq2 from "./BannerReq2";
import { Link } from "react-router-dom";

const QList = () => {
  const [posts, setPosts] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [qdata, setQdata] = useState([]);

  useEffect(() => {
    var data = JSON.stringify({
      u_id: "user",
    });

    var config = {
      method: "get",
      url: "http://3.36.160.255:8081/api/user/my-question",
      headers: {
        Authorization: "Bearer" + localStorage.getItem("id"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setQdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1000">
        <BannerReq2 />
      </div>
      <div className="FaqlocationData">
        <div className="inner">
          <div className="btnHome">
            <i class="fas fa-home"></i>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <div className="navMenu">
                  CONTACT
                  <div className="navInnerMenu">
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
                <ul className="navList">
                  <Link to="/introduction">
                    <li>
                      <a>INTRODUCTION</a>
                    </li>
                  </Link>
                  <Link to="/map">
                    <li>
                      <a>MAP</a>
                    </li>
                  </Link>
                  <Link to="/notice">
                    <li>
                      <a>COMMUNITY</a>
                    </li>
                  </Link>
                  <Link to="/faq">
                    <li>
                      <a>CONTACT</a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <a>
                  <div className="navMenu">
                    FAQ
                    <div className="navInnersMenu">
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </a>
                <ul className="navList">
                  <Link to="/notice">
                    <li>
                      <a>FAQ</a>
                    </li>
                  </Link>
                  <Link to="/freeboard">
                    <li>
                      <a>문의하기</a>
                    </li>
                  </Link>
                  <Link to="/tipboard">
                    <li>
                      <a>문의내역</a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contentsQList">
        <div className="banner">
          <p className="banner-title">문의내역</p>
          <br></br>
          <p className="subtitle">문의하신 내역을 확인할 수 있습니다.</p>
        </div>
        <table className="list">
          <thead>
            <tr>
              <th>상태</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {qdata.map((post) => (
              <tr>
                <td class="list-td">
                  <span className="list-span1">답변대기</span>
                </td>
                <td className="list-title">
                  <a className="list-link">{post.q_content}</a>
                </td>
                <td className="list-date">{post.date}</td>
              </tr>
            ))}
            <tr>
              <td class="list-td">
                <span className="list-span1">답변대기</span>
              </td>
              <td className="list-title">
                <a className="list-link"></a>
              </td>
              <td className="list-date">2021.02.14</td>
            </tr>
            <tr>
              <td class="list-td">
                <span className="list-span2">답변완료</span>
              </td>
              <td className="list-title">
                <a className="list-link">
                  아 아직도 할거 개많에
                  아아아아아앙아가가가가누리마ㅜㄷ라ㅣㅈ두랒둥
                </a>
              </td>
              <td className="list-date">2020.02.01</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-area">
        <button className="write-btn">
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="pencil"
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
};

export default QList;
