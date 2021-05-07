import React, { useState, useEffect } from "react";
import "./css/Activity.scss";
import "./css/FreeBoard.scss";
import Data from "./data.js";
import Replydata from "./replydata.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function Activity(props) {
    //header
    useEffect(() => {
        props.setCount(1);
    }, []);

    let [board, setboard] = useState(Data);
    let [reply, setreply] = useState(Replydata);

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
                                        <div className="sec1-title">MYPAGE</div>
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
                                            활동 내역
                                            <div className="nav-icon">
                                                <FontAwesomeIcon
                                                    icon={faSortDown}
                                                ></FontAwesomeIcon>
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

            <div className="contentsActivity">
                <div className="banner">
                    <p className="banner-title">활동 내역</p>
                    <br></br>
                    <p className="subtitle">
                        회원님의 활동내역을 확인 하실 수 있습니다.
                    </p>
                </div>
                <table className="list1">
                    <thead>
                        <tr>
                            <th className="th-title">게시글 제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {board.map((a, i) => {
                            return <Boardlist board={board[i]} i={i} key={i} />;
                        })}
                    </tbody>
                </table>

                <table className="list2">
                    <thead>
                        <tr>
                            <th className="th-title">댓글내용</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reply.map((a, i) => {
                            return <ReplyData reply={reply[i]} i={i} key={i} />;
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
                <td className="td-title">
                    <a href="#">{props.board.title}</a>
                </td>
                <td>{props.board.date}</td>
                <td>{props.board.hit}</td>
            </tr>
        </>
    );
}

function ReplyData(props) {
    return (
        <>
            <tr>
                <td class="list-title">
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
