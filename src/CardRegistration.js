import React from "react";
import "./css/CardRegistration.scss";
import $ from "jquery";
import { Link, Route, Switch } from "react-router-dom";

function CardRegistration() {
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

  return (
    <>
      <div className="locationData">
        <div className="inner">
          <div className="btnHome">
            <Link to="/">
              <i class="fas fa-home"></i>
            </Link>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <Link to="activity">
                  <a>
                    <div className="navMenu">
                      MYPAGE
                      <div className="navInnerMenu">
                        {/* <i class="fas fa-caret-down"></i> */}
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <Link to="/card">
                  <a>
                    <div className="navMenu">
                      카드 등록
                      <div className="navInnerMenu">
                        <i class="fas fa-caret-down"></i>
                      </div>
                    </div>
                  </a>
                </Link>
                <ul className="navList">
                  <li>
                    <Link to="card">
                      <a>카드 등록</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="activity">
                      <a>활동 내역</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="chargeusage">
                      <a>이용 내역</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="infochange">
                      <a>정보 수정</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cardreg-title">
        <p className="title-p">카드등록 및 수정</p>
        <br />
        <p className="title-info">
          충전소 회원카드의 정보를 등록 및 수정할 수 있습니다.
        </p>
      </div>
      <div className="card-input">
        <div class="checkout">
          <div class="credit-card-box">
            <div class="flip">
              <div class="front">
                <div class="chip"></div>
                <div class="logo"></div>
                <div class="number"></div>
                <div class="card-holder">
                  <label className="card-label">Card holder</label>
                  <div></div>
                </div>
                <div class="card-expiration-date">
                  <label className="card-label">Expires</label>
                  <div></div>
                </div>
              </div>
              {/* <div class="back">
                                <div class="strip"></div>
                                <div class="logo"></div>
                                <div class="ccv">
                                    <label className="card-label card-label-ccv">
                                        CCV
                                    </label>
                                    <div></div>
                                </div>
                            </div> */}
            </div>
          </div>
          <form class="form" autocomplete="off" novalidate>
            <fieldset>
              <label className="card-info-label" for="card-number">
                Card Number
              </label>
              <input
                type="num"
                id="card-number"
                class="input-cart-number"
                maxlength="4"
              />
              <input
                type="num"
                id="card-number-1"
                class="input-cart-number"
                maxlength="4"
              />
              <input
                type="num"
                id="card-number-2"
                class="input-cart-number"
                maxlength="4"
              />
              <input
                type="num"
                id="card-number-3"
                class="input-cart-number"
                maxlength="4"
              />
            </fieldset>
            <fieldset>
              <label className="card-info-label" for="card-holder">
                Card holder
              </label>
              <input type="text" id="card-holder" className="card-holder" />
            </fieldset>
            <fieldset class="fieldset-expiration">
              <label className="card-info-label" for="card-expiration-month">
                Expiration date
              </label>
              <div class="select">
                <select className="card-select" id="card-expiration-month">
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
                <select className="card-select" id="card-expiration-year">
                  <option></option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
              </div>
            </fieldset>
            <fieldset class="fieldset-ccv">
              <label className="card-info-label" for="card-ccv">
                CCV
              </label>
              <input type="text" id="card-ccv" maxlength="3" />
            </fieldset>
            <button class="card-create-btn">
              <i class="fa fa-lock"></i> submit
            </button>
          </form>
        </div>
      </div>
      <div className="card-reg">
        <div className="tariffCards">
          <div className="economy div-box">
            <h3 className="div_h3">Economy Class</h3>
            <span className="div_span">Full Insurance</span>
          </div>
          <div className="premiumeconomy div-box">
            <h3 className="div_h3">Premium Economy Class</h3>
            <span className="div_span">Full Insurance</span>
          </div>
          <div className="business div-box">
            <h3 className="div_h3">Business Class</h3>
            <span className="div_span">Full Insurance</span>
          </div>
          <div className="first div-box">
            <h3 className="div_h3">First Class</h3>
            <span className="div_span">Full Insurance</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardRegistration;
