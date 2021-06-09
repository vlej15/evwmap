import React, { useState, useEffect } from "react";
import "./css/Activity.scss";
import "./css/FreeBoard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { post } from "jquery";

function Activity(props) {
    const id = localStorage.getItem("id_value");
    const token = localStorage.getItem("id");
    const [post, setPost] = useState([]);
    const [reply, setReply] = useState([]);

    //header
    useEffect(async () => {
        props.setCount(1);

        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/" + id + "/boardlist",
            headers: {
                Authorization: token,
            },
        };

        await axios(config)
            .then(function (response) {
                setPost(response.data);
                console.log(post);
            })
            .catch(function (error) {
                console.log(error);
            });

        var data = "";

        var config1 = {
            method: "get",
            url: "http://3.36.197.174:8081/api/" + id + "/replylist",
            headers: {
                Authorization: token,
            },
            data: data,
        };

        await axios(config1)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setReply(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

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
                        {post.map((post) => (
                            <tr>
                                <td>
                                    <Link to={`/notice/` + post.b_no}>
                                        {post.b_title}
                                    </Link>
                                </td>
                                <td>{post.date}</td>
                                <td>{post.b_visite}</td>
                            </tr>
                        ))}
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
                        {reply.map((post) => (
                            <tr>
                                <td class="list-title">
                                    <a className="list-link" href="#">
                                        {post.r_content}
                                    </a>
                                </td>
                                <td class="list-date">{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Activity;
