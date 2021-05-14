import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./css/CardRegistration.scss";
import $ from "jquery";
import { Link, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function CardRegistration(props) {
  const { register, watch, errors, handleSubmit, getValues } = useForm();

  //header
  useEffect(() => {
    props.setCount(1);
  }, []);

  let date = new Date();
  let getdate = date.getFullYear();

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
      $(".tariffCards").css("transform", "translateX(-300px)");
      $(".checkout").css("transform", "translateX(270px)");
      $(".checkout").css("opacity", "1");
    });
  });

  function onClick() {
    console.log("기관명" + getValues("agency"));
    console.log(
      "카드번호" +
        getValues("card_number_1") +
        getValues("card_number_2") +
        getValues("card_number_3") +
        getValues("card_number_4")
    );
    console.log(getValues("month") + getValues("year"));
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
                      카드 등록
                      <div className="nav-icon">
                        <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
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
      <div className="banner">
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
            onSubmit={handleSubmit(onClick)}
          >
            <fieldset>
              <label className="card-info-label" for="card-holder">
                Card holder
              </label>
              <div className="select">
                <select ref={register} className="card-select" name="agency">
                  <option value="기관1">기관1</option>
                  <option value="기관2">기관2</option>
                  <option value="기관3">기관3</option>
                  <option value="기관4">기관4</option>
                  <option value="기관5">기관5</option>
                </select>
              </div>
              {/* <input
                                type="text"
                                id="card-holder"
                                className="card-holder"
                            /> */}
            </fieldset>
            <fieldset>
              <label className="card-info-label" for="card-number">
                Card Number
              </label>
              <input
                ref={register}
                type="num"
                id="card-number-1"
                class="input-cart-number"
                maxlength="4"
                name="card_number_1"
              />
              <input
                ref={register}
                type="num"
                id="card-number-2"
                class="input-cart-number"
                maxlength="4"
                name="card_number_2"
              />
              <input
                ref={register}
                type="num"
                id="card-number-3"
                class="input-cart-number"
                maxlength="4"
                name="card_number_3"
              />
              <input
                ref={register}
                type="num"
                id="card-number-4"
                class="input-cart-number"
                maxlength="4"
                name="card_number_4"
              />
            </fieldset>

            <fieldset class="fieldset-expiration">
              <label className="card-info-label" for="card-expiration-month">
                Expiration date
              </label>
              <div class="select">
                <select
                  ref={register}
                  className="card-select"
                  id="card-expiration-month"
                  name="month"
                >
                  <option></option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="select">
                <select
                  ref={register}
                  className="card-select"
                  id="card-expiration-year"
                  name="year"
                >
                  <option></option>
                  <option>{getdate}</option>
                  <option>{getdate + 1}</option>
                  <option>{getdate + 2}</option>
                  <option>{getdate + 3}</option>
                  <option>{getdate + 4}</option>
                  <option>{getdate + 5}</option>
                  <option>{getdate + 6}</option>
                  <option>{getdate + 7}</option>
                  <option>{getdate + 8}</option>
                  <option>{getdate + 9}</option>
                </select>
              </div>
            </fieldset>
            <button class="card-create-btn" type="submit">
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
    </>
  );
}

export default CardRegistration;
