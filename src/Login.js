import React, { useState, useEffect } from "react";
import "./css/Login.scss";
import { useHistory, Link, Route, Switch } from "react-router-dom";
// import { useCookies } from 'react-cookie';
import { useForm } from "react-hook-form";
import axios from "axios";
import imgA from "./css/kakao_login_large_wide.png";
import $ from "jquery";
import Header from "./Header";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
// var onLogin = 0;

// Kakao.init('');

const { Kakao } = window;
const Login = (props) => {
    let kakao_token;
    useEffect(() => {
        props.setCount(1);
    }, []);

    const history = useHistory();
    const [idtoken, setIdtoken] = useState("");
    const { getValues, register, handleSubmit, watch, errors } = useForm();

    $(document).ready(function () {

        // 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
        var key = getCookie("key");
        $("#userId").val(key);

        if ($("#userId").val() != "") { // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
            $("#idSaveCheck").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
        }

        $("#idSaveCheck").change(function () { // 체크박스에 변화가 있다면,
            if ($("#idSaveCheck").is(":checked")) { // ID 저장하기 체크했을 때,
                setCookie("key", $("#userId").val(), 7); // 7일 동안 쿠키 보관
            } else { // ID 저장하기 체크 해제 시,
                deleteCookie("key");
            }
        });

        // ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
        $("#userId").keyup(function () { // ID 입력 칸에 ID를 입력할 때,
            if ($("#idSaveCheck").is(":checked")) { // ID 저장하기를 체크한 상태라면,
                setCookie("key", $("#userId").val(), 7); // 7일 동안 쿠키 보관
            }
        });
    });

    function setCookie(cookieName, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
        document.cookie = cookieName + "=" + cookieValue;
    }

    function deleteCookie(cookieName) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() - 1);
        document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
    }

    function getCookie(cookieName) {
        cookieName = cookieName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cookieName);
        var cookieValue = '';
        if (start != -1) {
            start += cookieName.length;
            var end = cookieData.indexOf(';', start);
            if (end == -1) end = cookieData.length;
            cookieValue = cookieData.substring(start, end);
        }
        return unescape(cookieValue);
    }



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
            // url: "http://3.36.197.174:8081/login",
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

    // function SocialLogin() {

    //     const history = useHistory()
    //     const kakaoLoginClickHandler = () => {
    //         Kakao.Auth.login({
    //             success: function (authObj) {
    //                 fetch(`${KAKAO_LOGIN_API_URI}`, {
    //                     method: "POST",
    //                     body: JSON.stringify({
    //                         access_token: authObj.access_token,
    //                     }),
    //                 })

    //                     .then(res => res.json())
    //                     .then(res => {
    //                         localStorage.setItem("Kakao_token", res.access_token);
    //                         if (res.access_token) {
    //                             alert("로그인 시도 성공")
    //                             history.push("/login");
    //                         }
    //                     })
    //             },
    //             fail: function (err) {
    //                 alert(JSON.stringify(err))
    //             },
    //         })
    //     }
    // }

    const kakaoLoginClickHandler = () => {
        Kakao.Auth.login({
            success: function (authObj) {
                kakao_token = JSON.stringify(authObj.access_token);
                // alert('login success!!');
                kakaoLogin(kakao_token);
            },
            fail: function (err) {
                console.log('kakao login faild' + JSON.stringify(err));
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
                                id="userId"
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
                                        id="idSaveCheck"
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