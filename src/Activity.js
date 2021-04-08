import React, { useState } from "react";
import "./css/Activity.scss";
import Data from "./data.js";
import Replydata from "./replydata.js";

function Activity(props) {
  let [board, setboard] = useState(Data);
  let [reply, setreply] = useState(Replydata);

  return (
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
      {/* <div className="ac_reply">
        <div className="ac_reply_list">
          <table>
            <caption>
              <span className="blind">댓글 목록</span>
            </caption>
            <colgroup>
              <col />
              <col className="colreply" /> */}
      {/* <!-- <col style="width: 80px;"> --> */}
      {/* </colgroup>
            <thead>
              <tr>
                <th scope="col">댓글 내용</th>
                <th scope="col">작성일</th> */}
      {/* <!-- <th scope="col"></th> --> */}
      {/* </tr>
            </thead>
            <tbody>
              {reply.map((a, i) => {
                return <ReplyData reply={reply[i]} i={i} key={i} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="reply_btn">
          <div className="fl">
            <div className="check_box">
              <input type="checkbox" className="selectAll" />
              <label for="selectAll">전체선택</label>
            </div>
          </div>
          <div className="fr">
            <a href="#" className="All_remove">
              삭제
            </a>
          </div>
        </div>
        <div class="re_prev_next">
          <a href="#" className="page_nv">
            페이지번호
          </a>
        </div>
      </div> */}
    </div>
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
