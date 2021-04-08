import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./css/Signup.scss";
import axios from "axios";

export default function Signup() {
  const { register, handleSubmit, errors, watch, getValues } = useForm();
  const password = useRef();
  password.current = watch("password");
  const [email, setEmail] = useState("");
  const basicId = "test1901107";
  // 이메일인증함수
  function emailCheck() {}
  // 아이디체크함수
  function idCheck(e) {
    e.preventDefault();
    const Check = /^(?=.*?[a-z])(?=.*?[0-9]).{6,15}$/;
    const idCheck = getValues("id");
    if (idCheck == basicId) {
      alert("이미 사용중인 아이디입니다.");
    } else if (idCheck == "") {
      alert("아이디 값이 공백입니다.");
    } else if (idCheck.match(Check)) {
      alert("사용가능한 아이디입니다.");
    } else {
      alert("아이디 양식에 맞게 입력해주세요.");
    }
  }
  // 서브밋함수
  const onSubmit = () => {
    var data = JSON.stringify({
      u_id: getValues("id"),
      u_email: getValues("email"),
      u_pwd: getValues("password"),
      u_point: 0,
    });
    console.log(getValues("id"));
    var config = {
      method: "post",
      url: "http://3.36.160.255:8081/api/join",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="end"></div>
      <div className="contentsSingup">
        <div className="banner">
          <p className="banner-title">회원가입</p>
          <br></br>
          <p className="subtitle">
            회원가입 후 EV WMAP의 다양한 서비스를 이용하세요.
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <div className="form-id">
                <label for="">
                  <p className="form-label">아이디</p>
                </label>
                <input
                  className="input-text"
                  name="id"
                  placeholder="아이디"
                  ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                  })}
                ></input>
                <button onClick={idCheck} className="btn-ct">
                  중복검사
                </button>
              </div>{" "}
              {/* form-id end */}
              <p className="input-subtitle2">(영문소문자/숫자, 6~16자)</p>
              <div className="form-pw">
                <label for="">
                  <p className="form-label">비밀번호</p>
                </label>
                <input
                  className="input-text"
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  ref={register({
                    required: true,
                    minLength: 8,
                    maxLength: 16,
                    pattern: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                />
              </div>{" "}
              {/*form-pw end*/}
              <p className="input-subtitle2">
                (영문소문자/숫자/특수문자, 6~16자)
              </p>
              <div className="form-pw2">
                <label for="">
                  <p className="form-label"></p>
                </label>
                <input
                  className="input-text"
                  name="passwordCheck"
                  type="password"
                  placeholder="비밀번호 확인"
                  ref={register({
                    validate: (value) => value === password.current,
                  })}
                />
              </div>{" "}
              {/*form-pw2 end*/}
              {errors.passwordCheck && (
                <p className="input-subtitle">비밀번호가 일치하지 않습니다.</p>
              )}
              {/*form-name end*/}
              <div className="form-email">
                <label for="">
                  <p className="form-label">이메일</p>
                </label>
                <input
                  className="input-text"
                  name="email"
                  type="email"
                  placeholder="이메일"
                  ref={register}
                />
                <button href="#" className="btn-ct" onClick={emailCheck}>
                  인증번호받기
                </button>
              </div>{" "}
              {/* form-email end */}
              <div className="form-email2">
                <label for="">
                  <p className="form-label"></p>
                </label>
                <input className="input-text" placeholder="인증번호 입력" />
                <button href="#" className="btn-ct">
                  확인
                </button>
              </div>{" "}
              {/* form-email2 end */}
              <div className="form-carNumber">
                <label for="">
                  <p className="form-label">차량번호</p>
                </label>
                <input
                  className="input-text"
                  placeholder="차량번호"
                  ref={register}
                />
              </div>
              <div className="btn-area">
                <input type="submit" value="가입하기" className="sign-btn" />
              </div>
            </div>
            {/* form-input end */}
          </form>
        </div>
      </div>
    </>
  );
}
