import React, { useState, useEffect } from "react";
import "./css/Login.scss";
import { useHistory, Link, Route, Switch } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import imgA from "./css/kakao_login_large_wide.png";
import $ from "jquery";
import Header from "./Header";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
// var onLogin = 0;

const { Kakao } = window;
const Login = (props) => {
  let kakao_token;
  useEffect(() => {
    props.setCount(1);
  }, []);

  const history = useHistory();
  const [idtoken, setIdtoken] = useState("");
  const { getValues, register, handleSubmit, watch, errors } = useForm();

  const onSubmit = () => {
    const u_id = getValues("input-id");
    const u_pwd = getValues("input-pw");
    localStorage.setItem("id_value", u_id);
    console.log(u_id, u_pwd);
    var data = JSON.stringify({
      u_id: u_id,
      u_pwd: u_pwd,
    });

    var config = {
      method: "post",
      url: "http://193.122.106.148:8081/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.localStorage.setItem("id", response.data.token);
        window.localStorage.setItem("user_point", response.data.userPoint);
        if (response.data.token != null) {
          window.location.replace("/");
        }
      })
      .catch(function (error) {
        alert("아이디 비밀번호를 제대로 입력해주세요");
        console.log(error);
      });
  };
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        alert(JSON.stringify(authObj));
        kakao_token = JSON.stringify(authObj.access_token);
        console.log(kakao_token);
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <>
      <div className="end"></div>
      <div className="contentsLogin">
        <div className="banner">
          <p className="banner-title">로그인</p>
          <br></br>
          <p className="subtitle">
            로그인을 하시면 EV WMAP의 다양한 서비스를 이용하실 수 있습니다.
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <input
                ref={register({ required: true })}
                className="input-id"
                name="input-id"
                type="Id"
                placeholder="아이디 입력"
                required
              />
              <br></br>
              <input
                ref={register({ required: true })}
                className="input-pw"
                name="input-pw"
                placeholder="비밀번호 입력"
                type="password"
                required
              />
              <input type="submit" className="login-btn" value="로그인"></input>
            </div>
            <div className="form-check">
              <div className="check">
                <input ref={register} type="checkbox" />
                <label>
                  <span> 아이디 저장</span>
                </label>
              </div>
              <Link to="/findid">
                <a href="" className="find">
                  아이디 찾기
                </a>
              </Link>
              <Link to="findpw">
                <a href="" className="find">
                  | 비밀번호 찾기
                </a>
              </Link>
            </div>
          </form>
        </div>
        <div className="btn-area">
          <p className="btn-subtitle">아직 EV WMAP 계정이 없으신가요?</p>
          <br></br>

          <Link to="/signup">
            <a href="" className="sign-btn">
              회원가입
            </a>
          </Link>
          <div>
            <img
              onClick={kakaoLoginClickHandler}
              src={imgA}
              className="kakao_login"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
