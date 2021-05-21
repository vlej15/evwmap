import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./css/InfoChange.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function InfoChange(props) {
  //header
  useEffect(() => {
    props.setCount(1);
  }, []);

  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const password = useRef();
  password.current = watch("password");
  const [car, setCar] = useState(1);
  const [pass, setPass] = useState(0);
  const [checkpass, setCheckpass] = useState(0);
  const passCheck = () => {
    setCheckpass(!checkpass);
  };
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
                <button onClick={passCheck} type="button">
                  확인
                </button>
              </div>
              <br></br>
              {checkpass == 1 ? (
                <div>
                  <input type="password" placeholder="새 비밀번호" />
                </div>
              ) : (
                <div>
                  <input type="password" placeholder="새 비밀번호" disabled />
                </div>
              )}

              <br></br>
              <p>(영문소문자/숫자/특수문자, 6~16자)</p>
              <br></br>
              {checkpass == 1 ? (
                <div>
                  <input type="password" placeholder="새 비밀번호 확인" />
                </div>
              ) : (
                <div>
                  <input
                    type="password"
                    placeholder="새 비밀번호 확인"
                    disabled
                  />
                </div>
              )}

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
                      정보 수정
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
                  변경
                </button>
                {passModal()}
              </div>
              <div className="form-carNumber">
                <label for="">
                  <p className="form-label">차량번호</p>
                </label>
                <input
                  className="input-text"
                  placeholder="차량번호"
                  ref={register}
                />
              </div>
              <span>
                <span>누적 경고 : 10회,</span>
                <span>현재 포인트 : 100P</span>
              </span>
              {/* form-carNumber end */}
              <div className="btn-area">
                <input type="submit" value="수정하기" className="change-btn" />
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
