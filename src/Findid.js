import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./css/Findid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FindId(props) {
  const { register, watch, errors, handleSubmit } = useForm();
  console.log(watch("email"));

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="end"></div>
      <div
        className="contentsFindId"
      // onClick={() => {
      //     props.setMenu(false);
      // }}
      >
        <div className="banner">
          <p className="banner-title">아이디 찾기</p>
          <br></br>
          <p className="subtitle">아래 이메일 인증을 통해 아이디를 확인 하실 수 있습니다.</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <div className="form-name">
                <label for=""><p className="form-label">이름</p></label>
                <input
                  type="text"
                  className="input-text"
                  name="usernm"
                  maxLength="10"
                  placeholder="이름"
                  ref={register({
                    required: true,
                  })}
                  required
                />
              </div>
              <div className="form-email">
                <label for=""><p className="form-label">이메일</p></label>
                <input
                  type="email"
                  className="input-text"
                  name="email"
                  maxLength="100"
                  placeholder="이메일"
                  ref={register({
                    required: true
                  })}
                  required
                />
                <button href="#" className="btn-ct">인증번호받기</button>
              </div>
              <div className="form-insert">
                <p className="form-label"></p>
                <input
                  type="text"
                  class="input-text"
                  name="emailAuthNo"
                  maxLength="6"
                  placeholder="인증번호입력"
                  ref={register({
                    required: true,
                    minLength: 6,
                  })}
                  required
                />
                <input type="submit" className="btn-ct" value="확인"></input>
              </div>
            </div>
          </form>
        </div>
        <div className="find-pw">
          <p className="btn-subtitle">비밀번호가 기억나지 않는다면?<Link to="/find_pw" className="go-pw">비밀번호 찾기 바로가기<FontAwesomeIcon icon={faChevronCircleRight} className="arrow-btn" /></Link></p>
        </div>
      </div >
    </>
  );
}

export default FindId;
