import React, { useState } from "react";
import Data from "./chargedata";
import "./css/ChargeUsage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function ChargeUsage(props) {
  let [chhistory, setboard] = useState(Data);

  return (
    <>
      <div className="mypageData">
        <div className="nav-area">
          <div className="nav-homearea">
            <Link to="/">
              <i class="fas fa-home"></i>
            </Link>
          </div>
          <div className="nav-section1">
            <ul className="sec-ul">
              <li className="sec-li">
                <Link to="activity">
                  <a>
                    <div className="sec1-title">
                      MYPAGE
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-section2">
            <ul className="sec-ul">
              <li className="sec-li">
                <Link to="activity">
                  <a>
                    <div className="sec2-title">
                      이용 내역
                      <div className="nav-icon">
                        <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
                      </div>
                    </div>
                  </a>
                </Link>
                <ul className="sec-list">
                  <li>
                    <Link to="infochange">
                      <a>정보 수정</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="card">
                      <a>카드 등록</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="chargeusage">
                      <a>이용 내역</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="activity">
                      <a>활동 내역</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="contentsChargeUsage"
      // onClick={() => {
      //     props.setMenu(false);
      // }}
      >
        <div className="banner">
          <p className="banner-title">충전소 이용 내역</p>
          <br></br>
          <p className="subtitle">
            현재까지의 충전소 이용 내역을 확인 하실 수 있습니다.
          </p>
        </div>
        <table className="list">
          <thead>
            <tr>
              <th className="charge-title">충전소 명</th>
              <th>충전일</th>
              <th className="khw">
                충전량
                <br />
                <span>(khw)</span>
              </th>
              <th className="price">
                충전금액
                <br />
                <span>(원)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {chhistory.map((a, i) => {
              return <Boardlist chhistory={chhistory[i]} i={i} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Boardlist(props) {
  return (
    <>
      <tr>
        <td className="list-title">{props.chhistory.title}</td>
        <td className="list-date">{props.chhistory.date}</td>
        <td className="list-khw">{props.chhistory.khw}</td>
        <td className="list-price">{props.chhistory.price}</td>
      </tr>
    </>
  );
}

export default ChargeUsage;
