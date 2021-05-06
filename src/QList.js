import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/QList.scss";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import BannerReq2 from "./BannerReq2";
import { Link } from "react-router-dom";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const QList = (props) => {
    const [posts, setPosts] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    const [qdata, setQdata] = useState([]);
    var data = JSON.stringify({
        u_id: "youngsik1",
    });

    useEffect(async () => {
        props.setCount(0);

        var data = JSON.stringify({
            u_id: localStorage.getItem("id_value"),
        });

        var config = {
            method: "get",
            url: "http://3.36.160.255:8081/api/user/my-question",
            headers: {
                Authorization: localStorage.getItem("id"),
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

            <div className="ContactData">
                <div className="nav-area">
                    <div className="nav-homearea">
                        <i class="fas fa-home"></i>
                    </div>
                    <div className="nav-section1">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <div className="sec1-title">
                                    CONTACT
                                    <div className="nav-icon">
                                        <FontAwesomeIcon
                                            icon={faSortDown}
                                        ></FontAwesomeIcon>
                                    </div>
                                </div>
                                <ul className="sec-list">
                                    <Link to="/map">
                                        <li>
                                            <a>ROADMAP</a>
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
                    <div className="nav-section2">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <a>
                                    <div className="sec2-title">
                                        문의내역
                                        <div className="nav-icon">
                                            <FontAwesomeIcon
                                                icon={faSortDown}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </a>
                                <ul className="sec-list">
                                    <Link to="/faq">
                                        <li>
                                            <a>FAQ</a>
                                        </li>
                                    </Link>
                                    <Link to="/questions">
                                        <li>
                                            <a>문의하기</a>
                                        </li>
                                    </Link>
                                    <Link to="/qlist">
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
                    <p className="subtitle">
                        문의하신 내역을 확인할 수 있습니다.
                    </p>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th>상태</th>
                            <th className="th-title">제목</th>
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
                                    <a className="list-link">
                                        {post.q_content}
                                    </a>
                                </td>
                                <td className="list-date">{post.date}</td>
                            </tr>
                        ))}

                        <tr>
                            <td class="list-td">
                                <span className="list-span2">답변완료</span>
                            </td>
                            <td className="list-title">
                                <a className="list-link">
                                    도대체 제 문의는 언제 대답해주시나요?? 네??
                                </a>
                            </td>
                            <td className="list-date">2020.02.01</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="QList-btn">
                <button className="QList-write">
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
