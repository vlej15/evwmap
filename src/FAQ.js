import React, { useState, useEffect } from "react";
import "./css/FAQ.scss";
import "./css/FaqBoard.scss";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import BannerQ from "./BannerQ";
import { Link } from "react-router-dom";

const handleChange = (e) => {
    console.log(e.target.valut);
};

const FAQ = (props) => {
    //header
    useEffect(() => {
        props.setCount(0);
    }, []);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    let [modal, modal변경] = useState(false);
    let [modal01, modal변경01] = useState(false);
    let [modal02, modal변경02] = useState(false);
    let [modal03, modal변경03] = useState(false);
    let [modal04, modal변경04] = useState(false);
    let [modal05, modal변경05] = useState(false);
    let [modal06, modal변경06] = useState(false);
    let [modal07, modal변경07] = useState(false);

    return (
        <>
            {/* <div className="end"></div> */}
            <div data-aos="fade-down" data-aos-duration="1000">
                <BannerQ />
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
                                        FAQ
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
            <div className="contentsFAQ">
                <div className="banner">
                    <p className="banner-title">F A Q</p>
                    <br></br>
                    <p className="subtitle">
                        이용자들이 가장 자주 묻는 질문입니다.
                    </p>
                </div>
                {/* <div class="banner-search">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="insert"
              name="searchKeyword"
              placeholder="검색어를 입력해 주세요"
              type="text"
            />
            <input type="submit" className="search-btn" value="검색"></input>
          </form>
        </div> */}
                <ul className="faq-area">
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경(!modal);
                        }}
                    >
                        {/* <p className="faq-title">Q</p> */}
                        <p className="q">
                            <span>Q</span>
                            충전소 별로 회원카드는 어떻게 등록하나요?
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경01(!modal01);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            완속 충전기 사용법에 대해 궁금합니다.
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal01 === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경02(!modal02);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            급속 충전기임에도 불구하고 충전 속도가 많이
                            느립니다.
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal02 === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경03(!modal03);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            완속충전기 커플러가 충전기에서 빠지지 않습니다.
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal03 === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경04(!modal04);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            전기자동차 차종별로 급속 충전 방식은 어떻게
                            다른가요?
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal04 === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경05(!modal05);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            전기자동차 충전소는 모두 24시간 운영되나요?
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal05 === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경06(!modal06);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            전기자동차 충전이 안되는 경우는 어떻게 하나요?
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal06 === true ? <Modal></Modal> : null}
                    </li>
                    <li
                        className="faq-li"
                        onClick={() => {
                            modal변경07(!modal07);
                        }}
                    >
                        <p className="q">
                            <span>Q</span>
                            SM3 ZE의 경우 커넥터 분리가 힘들어요.
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="arrow-btn"
                            />
                        </p>
                        {modal07 === true ? <Modal></Modal> : null}
                    </li>
                </ul>
                {/* <div className="paging"></div> */}
            </div>
        </>
    );
};

function Modal() {
    return (
        <>
            <div className="a">
                <p className="a-plus">
                    문의 답변란 입니다.문의 답변란 입니다.문의 답변란
                    입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
                    입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
                    입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
                    입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
                    입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
                    입니다.문의 답변란 입니다.문의 답변란 입니다.
                </p>
            </div>
        </>
    );
}

export default FAQ;
