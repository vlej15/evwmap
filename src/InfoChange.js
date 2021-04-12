import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./css/InfoChange.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function InfoChange() {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const password = useRef();
  password.current = watch("password");
  const [car, setCar] = useState(1);
  const [pass, setPass] = useState(0);
  function passModal() {
    return pass == 1 ? (
      <div className="passmodal_background">
        <div className="passModal">
          <div className="mdPass">
            <h3>비밀번호 변경</h3>
          </div>
          <div className="closeWrap">
            <FontAwesomeIcon
              icon={faTimes}
              className="closeBtn"
              onClick={() => {
                setPass(0);
              }}
            />
          </div>
          <form>
            <div className="inputType">
              <div>
                <input type="password" placeholder="현재 비밀번호" />
              </div>
              <br></br>
              <div>
                <input type="password" placeholder="새 비밀번호" />
              </div>
              <br></br>
              <p>(영문소문자/숫자/특수문자, 6~16자)</p>
              <br></br>
              <div>
                <input type="password" placeholder="새 비밀번호 확인" />
              </div>
              <div>
                <br></br>
                <input type="submit" value="변경하기" className="subBtn" />
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    ) : null;
  }
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
                <Link to="activity">
                  <a>
                    <div className="navMenu">
                      활동 내역
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
      <div className="contentsInfoChange">
        <div className="banner">
          <p className="banner-title">정보수정</p>
        </div>{" "}
        {/* banner end */}
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
                  disabled
                />
              </div>{" "}
              {/* form-id end */}
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
                  disabled
                />
                <button
                  type="button"
                  onClick={() => {
                    setPass(!pass);
                  }}
                  className="btn-ct"
                >
                  변경
                </button>
                {passModal()}
              </div>
              <div className="form-name">
                <label for="">
                  <p className="form-label">이름</p>
                </label>
                <input
                  name="name"
                  className="input-text"
                  placeholder="이름"
                  ref={register}
                  disabled
                />
              </div>{" "}
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
                <button href="#" className="btn-ct">
                  변경
                </button>
              </div>
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
              </div>{" "}
              {/* form-carNumber end */}
              <div className="btn-area">
                <input type="submit" value="수정하기" className="change-btn" />
              </div>
            </div>{" "}
            {/* form-input end */}
          </form>
        </div>{" "}
        {/* .form end */}
      </div>
    </>
  );
}
