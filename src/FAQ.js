import React, { useState } from "react";
import "./css/FAQ.scss";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import BannerQ from "./BannerQ";

const handleChange = (e) => {
  console.log(e.target.valut);
};

const FAQ = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  let [modal, modal변경] = useState(false);
  let [modal01, modal변경01] = useState(false);
  // let [modal02, modal변경02] = useState(false);
  // let [modal03, modal변경03] = useState(false);
  // let [modal04, modal변경04] = useState(false);
  // let [modal05, modal변경05] = useState(false);
  // let [modal06, modal변경06] = useState(false);
  // let [modal07, modal변경07] = useState(false);

  return (
    <>

      {/* <div className="end"></div> */}
      <div data-aos="fade-down"
        data-aos-duration="1000">
        <BannerQ />
      </div>
      <div className="contentsFAQ">
        <div className="banner">
          <p className="banner-title">F A Q</p>
          <br></br>
          <p className="subtitle">이용자들이 가장 자주 묻는 질문입니다.</p>
        </div>
        <div class="banner-search">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="insert"
              name="searchKeyword"
              placeholder="검색어를 입력해 주세요"
              type="text"
            />
            <input type="submit" className="search-btn" value="검색"></input>
          </form>
        </div>
        <ul className="faq-area">
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">
              충전소 별로 회원카드는 어떻게 등록하나요?
              <FontAwesomeIcon
                icon={faChevronDown}
                className="arrow-btn"
                onClick={() => {
                  modal변경(!modal);
                }}
              />
            </p>
            {modal === true ? <Modal></Modal> : null}
          </li>
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">
              완속 충전기 사용법에 대해 궁금합니다.
              <FontAwesomeIcon
                icon={faChevronDown}
                className="arrow-btn"
                onClick={() => {
                  modal변경01(!modal01);
                }}
              />
            </p>
            {modal01 === true ? <Modal></Modal> : null}
          </li>
          {/* <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">아놔 급속인데도 충전 느려요......ㅡㅡ<FontAwesomeIcon icon={faChevronDown} className="arrow-btn" onClick={() => { modal변경02(!modal02) }} /></p>
            {
              modal02 === true
                ? <Modal></Modal>
                : null
            }
          </li>
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">전기차 충전소는 모두 24시간인가요??!?!?!?!?!?!?!?!??!?!!??!?!?!?!!!!!!!!?!?!?!?!?!?급해요!!!!!!!!!!!!!!!!!!!!!!!!<FontAwesomeIcon icon={faChevronDown} className="arrow-btn" onClick={() => { modal변경03(!modal03) }} /></p>
            {
              modal03 === true
                ? <Modal></Modal>
                : null
            }
          </li>
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">질문<FontAwesomeIcon icon={faChevronDown} className="arrow-btn" onClick={() => { modal변경04(!modal04) }} /></p>
            {
              modal04 === true
                ? <Modal></Modal>
                : null
            }
          </li>
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">질문<FontAwesomeIcon icon={faChevronDown} className="arrow-btn" onClick={() => { modal변경05(!modal05) }} /></p>
            {
              modal05 === true
                ? <Modal></Modal>
                : null
            }
          </li>
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">질문<FontAwesomeIcon icon={faChevronDown} className="arrow-btn" onClick={() => { modal변경06(!modal06) }} /></p>
            {
              modal06 === true
                ? <Modal></Modal>
                : null
            }
          </li>
          <li className="faq-li">
            <p className="faq-title">Q</p>
            <p className="q">질문<FontAwesomeIcon icon={faChevronDown} className="arrow-btn" onClick={() => { modal변경07(!modal07) }} /></p>
            {
              modal07 === true
                ? <Modal></Modal>
                : null
            }
          </li> */}
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
          문의 답변란 입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
          입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란 입니다.문의
          답변란 입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
          입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란 입니다.문의
          답변란 입니다.문의 답변란 입니다.문의 답변란 입니다.문의 답변란
          입니다.문의 답변란 입니다.문의 답변란 입니다.
        </p>
      </div>
    </>
  );
}

export default FAQ;
