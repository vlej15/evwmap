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
            url: "http://3.36.197.174:8081/api/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.localStorage.setItem("id", response.data.token);
                window.localStorage.setItem(
                    "user_point",
                    response.data.userPoint
                );
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
                kakao_token = JSON.stringify(authObj.access_token);
                kakaoLogin(kakao_token)
            },
            fail: function (err) {
                console.log(JSON.stringify(err));
            },
        });
    };
    function kakaoLogin(kakao_token) {
        var config = {
            method: "post",
            url: "http://3.36.197.174:8081/api/kakaologin",
            headers: {
                "Content-Type": "application/json",
            },
            data: kakao_token
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.localStorage.setItem("id", response.data.token);
                window.localStorage.setItem(
                    "user_point",
                    response.data.userPoint
                );
                if (response.data.token != null) {
                    window.location.replace("/");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <>
            <div className="end"></div>
            <div className="contentsLogin">
                <div className="banner">
                    <p className="banner-title">로그인</p>
                    <br></br>
                    <p className="subtitle">
                        로그인을 하시면 EV WMAP의 다양한 서비스를 이용하실 수
                        있습니다.
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
                            <input
                                type="submit"
                                className="login-btn"
                                value="로그인"
                            ></input>
                        </div>
                        <div className="form-check">
                            <div className="check">
                                <label for="id_save">
                                    <input
                                        type="checkbox"
                                        id="id_save"
                                        ref={register}
                                    />
                                    아이디 저장
                                </label>
                            </div>
                            <div className="find-wrap">
                                <Link to="/findid">
                                    <a href="" className="find">
                                        아이디 찾기
                                    </a>
                                </Link>
                                <p className="line">|</p>
                                <Link to="findpw">
                                    <a href="" className="find">
                                        비밀번호 찾기
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="btn-area">
                    <p className="btn-subtitle">
                        아직 EV WMAP 계정이 없으신가요?
                    </p>
                    <div className="btn-wrap">
                        <Link to="/signup">
                            <a href="" className="sign-btn">
                                회원가입
                            </a>
                        </Link>
                        <button
                            className="kakao-login"
                            onClick={kakaoLoginClickHandler}
                        >
                            카카오톡으로 로그인
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
