import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, Route, Switch } from "react-router-dom";
import "./css/Findpw.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

function FindPw(props) {
  const { register, watch, errors, handleSubmit } = useForm();
  console.log(watch("email"));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="end"></div>
      <div
        className="contentsFindPw"
      // onClick={() => {
      //     props.setMenu(false);
      // }}
      >
        <div className="banner">
          <p className="banner-title">비밀번호 찾기</p>
          <br></br>
          <p className="subtitle">아래 이메일 인증을 통해 비밀번호를 변경 하실 수 있습니다.</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <div className="form-id">
                <label for=""><p className="form-label">아이디</p></label>
                <input
                  type="text"
                  className="input-text"
                  name="userid"
                  placeholder="아이디"
                  ref={register({
                    required: true,
                    maxLength: 15,
                  })}
                  required
                />
                {errors.userid &&
                  errors.userid.type === "required" && (
                    <p className="notice">
                      This field is required
                    </p>
                  )}
                {errors.userid &&
                  errors.userid.type === "maxLength" && (
                    <p className="notice">
                      Your input exceed maximum length
                    </p>
                  )}
              </div> {/*form-id end*/}
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
              </div> {/*form-phone end*/}
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
              </div> {/*form-insert end*/}
              <div className="form-pw1">
                <label for=""><p className="form-label">변경 비밀번호</p></label>
                <input
                  type="password"
                  className="input-text"
                  placeholder="변경 비밀번호"
                  ref={register({
                    required: true,
                    minLength: 10,
                  })}
                  required
                />
              </div> {/*form-pw end*/}
              <div className="form-pw2">
                <label for=""><p className="form-label"></p></label>
                <input
                  type="password"
                  className="input-text"
                  placeholder="변경 비밀번호 확인"
                  ref={register({
                    required: true,
                    validate: (value) =>
                      value === password.current,
                  })}
                  required
                />
                {errors.password_confirm &&
                  errors.password_confirm.type ===
                  "required" && (
                    <p className="notice">
                      This field is required
                    </p>
                  )}
                {errors.password_confirm &&
                  errors.password_confirm.type ===
                  "validate" && (
                    <p className="notice">
                      The passwords do not match
                    </p>
                  )}
                <input type="submit" className="btn-ct" value="비밀번호변경"></input>
              </div> {/*form-pw end*/}
            </div>{/*form-input end*/}
          </form>
        </div >{/*.form end*/}
        <div className="find-id">
          <p className="btn-subtitle">아이디가 기억나지 않는다면?<a href="Find_id.js" onclick="" className="go-id">아이디 찾기 바로가기<FontAwesomeIcon icon={faChevronCircleRight} className="arrow-btn" /></a></p>
        </div>
      </div>
    </>
  );
}

export default FindPw;
