import React, { useState } from "react";
import "./css/QWrite.scss";
import { useForm } from "react-hook-form";

const QWrite = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="contentsQWrite">
        <div className="banner">
          <p className="banner-title">문의하기</p>
          <br></br>
          <p className="subtitle">
            EV WMAP에 의견을 전해주세요. 항상 귀 기울이겠습니다.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input">
            <div className="write-title">
              <label for="form_name">
                <p className="write-subtitle">
                  제목 <span className="required">*</span>
                </p>
              </label>
              <input
                ref={register({ required: true })}
                type="text"
                className="input-title"
                name="form_title"
                id="form_title"
                size="91"
                required=""
              />
              {errors.form_title && (
                <div className="alert">필수 입력항목입니다.</div>
              )}
            </div>
            <div className="type">
              <label for="">
                <p className="write-subtitle">
                  문의유형 <span class="required">*</span>
                </p>
              </label>
              <div className="select">
                <label for="good">
                  <input
                    ref={register({ required: true })}
                    className="form_type"
                    name="check"
                    value="칭찬"
                    type="radio"
                    id="good"
                  />
                  <span>칭찬 </span>
                </label>
                <label for="hate">
                  <input
                    ref={register({ required: true })}
                    className="form_type"
                    name="check"
                    value="불만"
                    type="radio"
                    id="hate"
                  />{" "}
                  <span>불만 </span>
                </label>
                <label for="prop">
                  <input
                    ref={register({ required: true })}
                    className="form_type"
                    name="check"
                    value="제안"
                    type="radio"
                    id="prop"
                  />
                  <span>제안 </span>
                </label>
              </div>
              {errors.check && (
                <div className="alert2">필수 입력항목입니다.</div>
              )}
            </div>
            <div className="form-content">
              <p className="write-subtitle">
                내용 <span className="required">*</span>
              </p>
              <textarea
                ref={register({ required: true })}
                name="form_content"
                id="form_content"
                cols="30"
                rows="10"
                required=""
                className="input-content"
              ></textarea>
              {errors.form_content && (
                <div className="alert2">필수 입력항목입니다.</div>
              )}
            </div>
            <div className="file">
              <p className="write-subtitle">파일첨부 </p>
              <input ref={register} type="file" className="write-file " />
            </div>
            <div className="form-btn">
              <input type="submit" className="submit" value="보내기"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default QWrite;
