import React, { useState } from "react";
import "./css/QWrite.scss";
import { useForm } from "react-hook-form";
import BannerReq1 from "./BannerReq1";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const QWrite = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1000">
        <BannerReq1 />
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
                  CONTACT<div className="nav-icon"><FontAwesomeIcon icon={faSortDown} ></FontAwesomeIcon></div>
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
                    문의하기
                                        <div className="nav-icon"><FontAwesomeIcon icon={faSortDown} ></FontAwesomeIcon></div>
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
      <div className="contentsQWrite">
        <div className="banner">
          <p className="banner-title">문의하기</p>
          <br></br>
          <p className="subtitle">
            EV WMAP에 의견을 전해주세요. 항상 귀 기울이겠습니다.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input">
            <div className="write-title">
              <label for="form_name">
                <p className="write-subtitle">
                  제목 <span className="required">*</span>
                </p>
              </label>
              <input
                ref={register({ required: true })}
                type="text"
                className="input-title"
                name="form_title"
                id="form_title"
                size="91"
                required
              />
              {/* {errors.form_title && <div className="alert">필수 입력항목입니다.</div>} */}
            </div>
            <div className="type">
              <label for="">
                <p className="write-subtitle">
                  문의유형 <span class="required">*</span>
                </p>
              </label>
              <div className="select">
                <label for="good">
                  <input
                    ref={register({ required: true })}
                    className="form_type"
                    name="check"
                    value="칭찬"
                    type="radio"
                    id="good"
                    required
                  />
                  <span>칭찬 </span>
                </label>
                <label for="hate">
                  <input
                    ref={register({ required: true })}
                    className="form_type"
                    name="check"
                    value="불만"
                    type="radio"
                    id="hate"
                  />{" "}
                  <span>불만 </span>
                </label>
                <label for="prop">
                  <input
                    ref={register({ required: true })}
                    className="form_type"
                    name="check"
                    value="제안"
                    type="radio"
                    id="prop"
                  />
                  <span>제안 </span>
                </label>
              </div>
            </div>
            <div className="form-content">
              <p className="write-subtitle">
                내용 <span className="required">*</span>
              </p>
              <textarea
                ref={register({ required: true })}
                name="form_content"
                id="form_content"
                cols="30"
                rows="10"
                required
                className="input-content"
              ></textarea>
              {errors.form_content && (
                <div className="alert2">필수 입력항목입니다.</div>
              )}
            </div>
            <div className="file">
              <p className="write-subtitle">파일첨부 </p>
              <input ref={register} type="file" className="write-file " />
            </div>
            <div className="form-btn">
              <input type="submit" className="submit" value="보내기"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default QWrite;
