import React, { useState } from "react";
import "./css/BoardChange.scss";
import { useForm } from "react-hook-form";

function BoardChange() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className="end"></div>
            <div className="contentsBoardChange">
                <div className="banner">
                    <p className="banner-title">게시글작성</p>
                    <br></br>
                    <p className="subtitle"></p>
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
                                placeholder="기존 제목 값"
                            />
                            {errors.form_title && (
                                <div className="alert">필수 입력항목입니다.</div>
                            )}
                        </div>
                        <div className="type">
                            <label for="">
                                <p className="write-subtitle">
                                    카테고리 <span class="required">*</span>
                                </p>
                            </label>

                            <div className="select">
                                <label for="good">
                                    <input
                                        ref={register({ required: true })}
                                        className="form_type"
                                        value="자유게시판"
                                        type="radio"
                                        id="good"
                                        name="check"
                                    />
                                    <span>자유게시판 </span>
                                </label>
                                <label for="hate">
                                    <input
                                        ref={register({ required: true })}
                                        className="form_type"
                                        value="TIP"
                                        type="radio"
                                        id="hate"
                                        name="check"
                                    />
                                    <span>TIP게시판 </span>
                                </label>
                            </div>
                        </div>

                        <div className="form-content">
                            <p className="write-subtitle">
                                내용 <span className="required">*</span>
                            </p>
                            <textarea
                                ref={register}
                                name="form_content"
                                id="form_content"
                                cols="30"
                                rows="10"
                                required=""
                                className="input-content"
                                placeholder="기존 내용 값"
                            ></textarea>
                        </div>
                        <div className="file">
                            <p className="write-subtitle">파일첨부 </p>
                            <input ref={register} type="file" className="write-file " />
                        </div>
                        <div className="form-btn">
                            <input type="submit" className="submit" value="글 수정"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default BoardChange;
