import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import "./css/InfoChange.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function InfoChange(props) {
    const [count, setCount] = useState(0);
    const history = useHistory();
    const token = localStorage.getItem("id");
    //header
    useEffect(() => {
        props.setCount(1);

        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/user/user/warning",
            headers: {
                Authorization: token,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setCount(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const { register, handleSubmit, errors, watch, getValues } = useForm();
    const password = useRef();
    password.current = watch("newPass");
    const [car, setCar] = useState(1);
    const [pass, setPass] = useState(0);
    const [checkpass, setCheckpass] = useState(0);
    let PassCheck = false;

    const passCheck = async () => {
        var data = JSON.stringify({
            u_id: localStorage.getItem("id_value"),
            u_pwd: getValues("nowPass"),
        });

        var config = {
            method: "post",
            url: "http://3.36.197.174:8081/api/user/password",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                PassCheck = response.data;
                if (PassCheck == true) {
                    setCheckpass(!checkpass);
                    alert("??????????????? ?????????????????????.");
                } else {
                    alert("??????????????? ??????????????????");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const onSubmit = () => { };

    const onCheck = (e) => {
        e.preventDefault();
        if (getValues("newPass") == getValues("passwordCheck")) {
            var data = JSON.stringify({
                u_id: localStorage.getItem("id_value"),
                u_pwd: getValues("newPass"),
            });

            var config = {
                method: "patch",
                url: "http://3.36.197.174:8081/api/user/find/password",
                headers: {
                    Authorization: token,
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
            alert("??????????????? ??????????????? ?????????????????????.");
            localStorage.removeItem("id_value");
            localStorage.removeItem("id");
            localStorage.removeItem("user_point");
            history.push("/");
        } else {
            alert("??? ??????????????? ???????????? ????????????.");
        }
    };
    function passModal() {
        return pass == 1 ? (
            <div className="modal_background">
                <div className="contentsModal">
                    <div className="modal-area">
                        <div className="close-area">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="closeBtn"
                                onClick={() => {
                                    setPass(0);
                                }}
                            />
                        </div>
                        <div className="banner">
                            <p className="banner-title">???????????? ??????</p>
                        </div>
                        <form onSubmit={handleSubmit(onCheck)}>
                            <div className="modal-form">
                                <div className="form-insert">
                                    <input
                                        ref={register}
                                        name="nowPass"
                                        type="password"
                                        placeholder="?????? ????????????"
                                        className="firstInput"
                                    />
                                    <button
                                        onClick={passCheck}
                                        type="button"
                                        className="subBtn"
                                    >
                                        ??????
                                    </button>
                                </div>
                                {checkpass == 1 ? (
                                    <div>
                                        <input
                                            className="input-text"
                                            name="newPass"
                                            type="password"
                                            placeholder="????????????"
                                            ref={register({
                                                required: true,
                                                minLength: 8,
                                                maxLength: 16,
                                                pattern:
                                                    /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                            })}
                                        />
                                        {errors.newPass && (
                                            <p className="input-subtitle">
                                                ??????????????? ????????? ?????? ??????????????????.
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                        <div className="form-insert2">
                                            <input
                                                type="password"
                                                placeholder="??? ????????????"
                                                disabled
                                            />
                                        </div>
                                    )}
                                <p className="input-subtitle">(???????????????/??????/????????????, 6~16???)</p>
                                {checkpass == 1 ? (
                                    <div className="form-insert2">
                                        <input
                                            name="passwordCheck"
                                            type="password"
                                            placeholder="???????????? ??????"
                                            ref={register({
                                                validate: (value) =>
                                                    value === password.current,
                                            })}
                                        />
                                        {errors.passwordCheck && (
                                            <p className="input-subtitle">
                                                ??????????????? ???????????? ????????????.
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                        <div className="form-insert2">
                                            <input
                                                type="password"
                                                placeholder="??? ???????????? ??????"
                                                disabled
                                            />
                                        </div>
                                    )}
                                <div className="btn-wrap">
                                    <button
                                        type="submit"
                                        value="????????????"
                                        className="btn-submit"
                                    >???????????? ??????</button>
                                </div>
                            </div>
                        </form>
                    </div>???
                </div>
                <div></div>
            </div>
        ) : null;
    }
    return (
        <>
            <div className="mypageData">
                <div className="nav-area">
                    <div className="nav-homearea">
                        <Link to="/">
                            <i class="fas fa-home"></i>
                        </Link>
                    </div>
                    <div className="nav-section1">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <Link to="activity">
                                    <a>
                                        <div className="sec1-title">MYPAGE</div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-section2">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <Link to="activity">
                                    <a>
                                        <div className="sec2-title">
                                            ?????? ??????
                                            <div className="nav-icon">
                                                <FontAwesomeIcon
                                                    icon={faSortDown}
                                                ></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <ul className="sec-list">
                                    <li>
                                        <Link to="infochange">
                                            <a>?????? ??????</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="card">
                                            <a>?????? ??????</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="chargeusage">
                                            <a>?????? ??????</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="activity">
                                            <a>?????? ??????</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contentsInfoChange">
                <div className="banner">
                    <p className="banner-title">????????????</p>
                </div>{" "}
                {/* banner end */}
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-input">
                            <div className="form-id">
                                <label for="">
                                    <p className="form-label">?????????</p>
                                </label>
                                <input
                                    className="input-text"
                                    name="id"
                                    placeholder={localStorage.getItem(
                                        "id_value"
                                    )}
                                    ref={register({
                                        required: true,
                                        minLength: 6,
                                        maxLength: 15,
                                    })}
                                    disabled
                                />
                            </div>{" "}
                            {/* form-id end */}
                            <div className="form-pw">
                                <label for="">
                                    <p className="form-label">????????????</p>
                                </label>
                                <input
                                    className="input-text"
                                    name="password"
                                    type="password"
                                    placeholder="????????????????????????"
                                    ref={register({
                                        required: true,
                                        minLength: 8,
                                        maxLength: 16,
                                        pattern:
                                            /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    })}
                                    disabled
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPass(!pass);
                                    }}
                                    className="btn-ct"
                                >
                                    ??????
                                </button>
                                {passModal()}
                            </div>
                            <div className="form-carNumber">
                                <label for="">
                                    <p className="form-label">????????????</p>
                                </label>
                                <input
                                    className="input-text"
                                    placeholder="????????????"
                                    ref={register}
                                />
                            </div>
                            {/* form-carNumber end */}

                            <div className="p-wrap">
                                <p>?????? ??????&nbsp;: {count}&nbsp;,&nbsp; </p>
                                <p>
                                    &nbsp;?????? ?????????&nbsp;:{" "}
                                    {localStorage.getItem("user_point")}P
                                </p>
                            </div>

                            <div className="btn-area">
                                <input
                                    type="submit"
                                    value="????????????"
                                    className="change-btn"
                                />
                            </div>
                        </div>
                        {/* form-input end */}
                    </form>
                </div>
                {/* .form end */}
            </div>
        </>
    );
}
