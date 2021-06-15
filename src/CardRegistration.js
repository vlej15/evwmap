import React, { useEffect } from "react";
import "./css/CardRegistration.scss";
import { useForm } from "react-hook-form";
import $ from "jquery";
import { Link, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function CardRegistration(props) {
    const { register, handleSubmit, errors, watch, getValues } = useForm();
    //header
    useEffect(() => {
        props.setCount(1);
    }, []);

    let date = new Date();
    let getdate = date.getFullYear();
    const token = localStorage.getItem("id");

    $(function () {
        $(document).on("click", ".div-box", function () {
            var getClass = $(this).attr("class");
            if (getClass == "economy div-box") {
                $(".front").css(
                    "background",
                    "linear-gradient(135deg, #f8dc81, #ffc75f)"
                );
            } else if (getClass == "premiumeconomy div-box") {
                $(".front").css(
                    "background",
                    "linear-gradient(135deg, #50c4ed, #387adf)"
                );
            } else if (getClass == "business div-box") {
                $(".front").css(
                    "background",
                    "linear-gradient(135deg, #c1d343, #66a96b)"
                );
            } else if (getClass == "first div-box") {
                $(".front").css(
                    "background",
                    "linear-gradient(135deg, #bd7be8, #8063e1)"
                );
            }
            $(".tariffCards").css("left", "33%");
            $(".checkout").css("transform", "translateX(270px)");
            $(".checkout").css("opacity", "1");
        });
    });

    const onSubmit = () => {
        var axios = require("axios");
        var data = JSON.stringify({
            agcy_id: getValues("cardName"),
            u_id: localStorage.getItem("id_value"),
            uc_no:
                getValues("card_1") +
                getValues("card_2") +
                getValues("card_3") +
                getValues("card_4"),
            uc_issue_dt: getValues("year") + getValues("month"),
        });

        var config = {
            method: "post",
            url: "http://3.36.197.174:8081/api/my-card",
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
    };
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
                                            카드 등록
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
                                            <a>정보 수정</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="card">
                                            <a>카드 등록</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="chargeusage">
                                            <a>이용 내역</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="activity">
                                            <a>활동 내역</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contentsCard">
                <div className="banner1">
                    <p className="banner-title">카드등록 및 수정</p>
                    <br></br>
                    <p className="subtitle">
                        충전소 회원카드의 정보를 등록 및 수정할 수 있습니다.
                    </p>
                </div>
                <div className="card-input">
                    <div class="checkout">
                        <form
                            class="card-input-form"
                            autocomplete="off"
                            novalidate
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <fieldset>
                                <label
                                    className="card-info-label"
                                    for="card-holder"
                                >
                                    Card holder
                                </label>
                                <div className="select">
                                    <select
                                        className="card-select"
                                        name="cardName"
                                        ref={register}
                                    >
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                        <option>F</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset>
                                <label
                                    className="card-info-label"
                                    for="card-number"
                                >
                                    Card Number
                                </label>
                                <input
                                    ref={register}
                                    type="num"
                                    name="card_1"
                                    id="card-number"
                                    class="input-cart-number"
                                    maxlength="4"
                                />
                                <input
                                    ref={register}
                                    type="num"
                                    name="card_2"
                                    id="card-number-1"
                                    class="input-cart-number"
                                    maxlength="4"
                                />
                                <input
                                    ref={register}
                                    type="num"
                                    name="card_3"
                                    id="card-number-2"
                                    class="input-cart-number"
                                    maxlength="4"
                                />
                                <input
                                    ref={register}
                                    type="num"
                                    name="card_4"
                                    id="card-number-3"
                                    class="input-cart-number"
                                    maxlength="4"
                                />
                            </fieldset>

                            <fieldset class="fieldset-expiration">
                                <label
                                    className="card-info-label"
                                    for="card-expiration-month"
                                >
                                    Expiration date
                                </label>
                                <div class="select">
                                    <select
                                        className="card-select"
                                        id="card-expiration-month"
                                        ref={register}
                                        name="month"
                                    >
                                        <option></option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div class="select">
                                    <select
                                        className="card-select"
                                        id="card-expiration-year"
                                        name="year"
                                        ref={register}
                                    >
                                        <option></option>
                                        <option
                                            value={getdate
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate}
                                        </option>
                                        <option
                                            value={(getdate + 1)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 1}
                                        </option>
                                        <option
                                            value={(getdate + 2)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 2}
                                        </option>
                                        <option
                                            value={(getdate + 3)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 3}
                                        </option>
                                        <option
                                            value={(getdate + 4)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 4}
                                        </option>
                                        <option
                                            value={(getdate + 5)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 5}
                                        </option>
                                        <option
                                            value={(getdate + 6)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 6}
                                        </option>
                                        <option
                                            value={(getdate + 7)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 7}
                                        </option>
                                        <option
                                            value={(getdate + 8)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 8}
                                        </option>
                                        <option
                                            value={(getdate + 9)
                                                .toString()
                                                .substr(2, 4)}
                                        >
                                            {getdate + 9}
                                        </option>
                                    </select>
                                </div>
                            </fieldset>
                            <button type="submit" class="card-create-btn">
                                <i class="fa fa-lock"></i>
                                <span className="submit-btn">submit</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="card-reg">
                    <div className="tariffCards">
                        <div className="economy div-box">
                            <h3 className="div_h3"></h3>
                            <span className="div_span"></span>
                        </div>
                        <div className="premiumeconomy div-box">
                            <h3 className="div_h3"></h3>
                            <span className="div_span"></span>
                        </div>
                        <div className="business div-box">
                            <h3 className="div_h3"></h3>
                            <span className="div_span"></span>
                        </div>
                        <div className="first div-box">
                            <h3 className="div_h3"></h3>
                            <span className="div_span"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardRegistration;
