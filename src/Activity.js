import React, { useState } from "react";
import "./css/Activity.scss";
import "./css/MypageMenu.scss";
import Data from "./data.js";
import Replydata from "./replydata.js";

function Activity(props) {
  let [board, setboard] = useState(Data);
  let [reply, setreply] = useState(Replydata);

  return (
    <>
      <div className="locationData">
        <div className="inner">
          <div className="btnHome">
            <i class="fas fa-home"></i>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <a>
                  <div className="navMenu">
                    MYPAGE
                    <div className="navInnerMenu">
                      {/* <i class="fas fa-caret-down"></i> */}
                    </div>
                  </div>
                </a>
                {/* <ul className="navList">
                  <li>
                    <a>INTODUCTION</a>
                  </li>
                  <li>
                    <a>MAP</a>
                  </li>
                  <li>
                    <a>COMMUNITY</a>
                  </li>
                  <li>
                    <a>CONTACT</a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <a>
                  <div className="navMenu">
                    활동내역
                    <div className="navInnerMenu">
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </a>
                <ul className="navList">
                  <li>
                    <a>활동내역</a>
                  </li>
                  <li>
                    <a>충전기 이용내역</a>
                  </li>
                  <li>
                    <a>회원정보 수정</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="contentsActivity"
        // onClick={() => {
        //     props.setMenu(false);
        // }}
      >
        <div className="banner">
          <p className="banner-title">활동 내역</p>
          <br></br>
          <p className="subtitle">회원님의 활동내역을 확인 하실 수 있습니다.</p>
        </div>
        <table className="list">
          <thead>
            <tr>
              <th>게시글 제목</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {board.map((a, i) => {
            return <Boardlist board={board[i]} i={i} key={i} />;
          })}
        </tbody>

        <table className="list">
          <thead>
            <tr>
              <th>댓글내용</th>
              <th>작성일</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {reply.map((a, i) => {
            return <ReplyData reply={reply[i]} i={i} key={i} />;
          })}
        </tbody>
      </div>
    </>
  );
}

function Boardlist(props) {
  return (
    <>
      <tr>
        <td className="list-title">
          <div className="check-box">
            <input type="checkbox" />
          </div>
          <a className="list-link" href="#">
            {props.board.title}
          </a>
        </td>
        <td class="list-date">{props.board.date}</td>
        <td class="list-view">{props.board.hit}</td>
      </tr>
    </>
  );
}

function ReplyData(props) {
  return (
    <>
      <tr>
        <td class="list-title">
          <div className="check-box">
            <input type="checkbox" />
          </div>
          <a className="list-link" href="#">
            {props.reply.title}
          </a>
        </td>
        <td class="list-date">{props.reply.date}</td>
      </tr>
    </>
  );
}

export default Activity;