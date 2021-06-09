import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import "./css/Signup.scss";
import axios from "axios";

export default function Signup(props) {
    useEffect(() => {
        props.setCount(1);
    }, []);
    const { register, handleSubmit, errors, watch, getValues } = useForm();
    const password = useRef();
    password.current = watch("password");
    const [email, setEmail] = useState(0);
    const [carnumber, setCarNumber] = useState(0);
    const [emailNumber, setEmailNumber] = useState(1);
    const [submit, setSubmit] = useState(0);
    const history = useHistory();
    let idValue;

    // 아이디체크함수
    const idCheck = async (e) => {
        e.preventDefault();

        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/user/id?u_id=" + getValues("id"),
            headers: {},
        };

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                idValue = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        if (idValue == getValues("id")) {
            alert("동일한 아이디가 존재합니다.");
        } else {
            alert("사용 가능한 아이디입니다.");
        }
    };
    // 서브밋함수
    const onSubmit = () => {
        if (email == 0) {
            alert("이메일 인증을 받아주세요");
        } else {
            var data = JSON.stringify({
                u_id: getValues("id"),
                u_email: getValues("email"),
                u_pwd: getValues("password"),
                u_point: 0,
            });

            console.log(getValues("id"));
            var config = {
                method: "post",
                url: "http://3.36.197.174:8081/api/join",
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
            history.push("/");
        }
    };
    const addCarNumber = () => {
        setCarNumber(!carnumber);
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
                            <p className="input-subtitle2">
                                (영문소문자/숫자, 6~16자)
                            </p>
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
                                        pattern:
                                            /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    })}
                                />
                            </div>
                            {errors.password && (
                                <p className="input-subtitle">
                                    비밀번호를 양식에 맞춰 입력해주세요.
                                </p>
                            )}
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
                                        validate: (value) =>
                                            value === password.current,
                                    })}
                                />
                            </div>
                            {/*form-pw2 end*/}
                            {errors.passwordCheck && (
                                <p className="input-subtitle">
                                    비밀번호가 일치하지 않습니다.
                                </p>
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
                                <button
                                    href="#"
                                    className="btn-ct"
                                    onClick={emailPass}
                                >
                                    인증번호받기
                                </button>
                            </div>
                            {/* form-email end */}
                            <div className="form-email2">
                                <label for="">
                                    <p className="form-label"></p>
                                </label>
                                <input
                                    name="emailPass"
                                    className="input-text"
                                    placeholder="인증번호 입력"
                                />
                                <button
                                    href="#"
                                    className="btn-ct"
                                    onClick={emailCheck}
                                >
                                    확인
                                </button>
                            </div>{" "}
                            {/* form-email2 end */}
                            <div className="form-carNumber">
                                <label for="">
                                    <p className="form-label">차량번호</p>
                                </label>
                                <div>
                                    <input
                                        className="input-text"
                                        placeholder="차량번호"
                                        ref={register}
                                    />
                                </div>
                                {carnumber == 0 ? (
                                    <i
                                        class="fas fa-plus"
                                        onClick={addCarNumber}
                                    ></i>
                                ) : (
                                    <i
                                        class="fas fa-minus"
                                        onClick={addCarNumber}
                                    ></i>
                                )}
                            </div>
                            {carnumber == 1 ? (
                                <div className="form-carNumber1">
                                    <div>
                                        <input
                                            className="input-text"
                                            placeholder="차량번호2"
                                            ref={register}
                                        />
                                    </div>
                                </div>
                            ) : null}
                            {submit == 0 ? (
                                <div className="btn-area">
                                    <input
                                        type="submit"
                                        value="가입하기"
                                        className="sign-btn"
                                        disabled
                                    />
                                </div>
                            ) : (
                                <div className="btn-area">
                                    <input
                                        type="submit"
                                        value="가입하기"
                                        className="sign-btn"
                                    />
                                </div>
                            )}
                        </div>
                        {/* form-input end */}
                    </form>
                </div>
            </div>
        </>
    );
}
