import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./css/Findid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

function FindId(props) {
  const { register, watch, errors, handleSubmit, getValues } = useForm();
  const [email, setEmail] = useState(0);
  const [emailNumber, setEmailNumber] = useState(1);
  const [submit, setSubmit] = useState(0);

  const onSubmit = () => {
    const email = getValues("email");
    console.log(email);
    var config = {
      method: "get",
      url: "http://3.36.197.174:8081/api/user/find/id?u_email=" + email,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VyIiwiaWF0IjoxNjE4OTAxMjM0LCJleHAiOjE2MTg5MTkyMzR9.5-MjTuNSNwKq77-pJJ_xnvBN1FCvbJUz9qfjBpuxkX23p5Gwa_YHgduAwoBNxXcj7IJrRae9LwzJkr2SJLDKkQ",
      },
    };

    $("#btn-email").click(function () {
      console.log(1);
    });

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const emailPass = () => {
    var data = JSON.stringify({
      userEmail: getValues("email"),
    });

    var config = {
      method: "post",
      url: "http://3.36.197.174:8081/api/email",
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
    alert("인증번호가 전송되었습니다. 이메일을 확인해주세요");
  };

  const emailCheck = async () => {
    var data = JSON.stringify({
      confirm: getValues("emailPass"),
    });

    var config = {
      method: "post",
      url: "http://3.36.197.174:8081/api/confirm",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setEmailNumber(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (emailNumber == 0) {
      setEmail(1);
      alert("정상적으로 인증되었습니다.");
      setSubmit(1);
    } else {
      alert("인증번호를 제대로 입력해주세요.");
    }
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
          <p className="subtitle">
            아래 휴대폰 인증을 통해 아이디를 확인 하실 수 있습니다.
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <div className="form-name">
                <label for="">
                  <p className="form-label">이름</p>
                </label>
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
                <label for="">
                  <p className="form-label">이메일</p>
                </label>
                <input
                  type="email"
                  className="input-text"
                  name="email"
                  maxLength="100"
                  placeholder="이메일"
                  ref={register({
                    required: true,
                  })}
                  required
                />
                <button
                  href="#"
                  className="btn-ct"
                  onClick={emailPass}
                  id="btn-email"
                >
                  인증메일받기
                </button>
              </div>

              <div className="form-insert">
                <p className="form-label"></p>
                <input
                  type="text"
                  class="input-text"
                  name="emailAuthNo"
                  maxLength="9"
                  placeholder="인증번호입력"
                  ref={register({
                    required: true,
                    minLength: 9,
                  })}
                  required
                />
                <button className="btn-ct" value="확인" onClick={emailCheck}>
                  확인
                </button>
              </div>
              <div className="btn-wrap">
                <input
                  className="btn-submit"
                  type="submit"
                  value="아이디 찾기"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="find-pw">
          <p className="btn-subtitle">
            비밀번호가 기억나지 않는다면?
            <Link to="/findpw" className="go-pw">
              비밀번호 찾기 바로가기
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="arrow-btn"
              />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default FindId;
