import React, { useState } from "react";
import "./css/BoardWrite.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormData from "form-data";

function BoardWrite() {
    const { register, handleSubmit, watch, errors, getValues } = useForm();
    const [files, setFiles] = useState([]);
    const onSubmit = (e) => {
        const title = getValues("b_title");
        const category = getValues("cat_cd");
        const body = getValues("form_content");
        console.log(title);
        const formData = new FormData();
        // formData.append("file", files);
        // console.log(title, category, body, files);

        axios
            .post("/", {
                title: title,
                category: category,
                body: body,
                file: files,
            })
            .then((res) => console.log(res));

        // axios({
        //   method: "post",
        //   url: "/user/12345",
        //   data: {
        //     title: title,
        //     category: category,
        //     body: body,
        //     files,
        //   },
        // }).then((res) => console.log(res));
    };
    const onClick = async () => {
        const formData = new FormData();
        // const config = {
        //   headers: { "Access-Control-Allow-Origin": "*" },
        // };
        formData.append("file", files.length && files[0].uploadedFile);
        formData.append("title", getValues("b_title"));
        formData.append("category", getValues("cat_cd"));
        formData.append("body", getValues("b_content"));
        // 서버의 upload API 호출
        axios({
            method: "post",
            url: "/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: localStorage.getItem("access_token"),
            },
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFiles([...files, { uploadedFile: file }]);
    };

    return (
        <>
            <div className="end"></div>
            <div className="contentsBoardWrite">
                <div className="banner">
                    <p className="banner-title">게시글작성</p>
                    <br></br>
                    <p className="subtitle"></p>
                </div>
                <form
                    onSubmit={handleSubmit(onClick)}
                    action="/api/register"
                    encType="multipart/form-data"
                    method="POST"
                >
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
                                name="b_title"
                                id="form_title"
                                size="91"
                                required=""
                                placeholder="제목을 입력해 주세요"
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
                                        value="1"
                                        type="radio"
                                        id="good"
                                        name="cat_cd"
                                    />
                                    <span>자유게시판 </span>
                                </label>
                                <label for="hate">
                                    <input
                                        ref={register({ required: true })}
                                        className="form_type"
                                        value="2"
                                        type="radio"
                                        id="hate"
                                        name="cat_cd"
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
                                name="b_content"
                                id="form_content"
                                cols="30"
                                rows="10"
                                required=""
                                className="input-content"
                                placeholder="내용을 입력하세요"
                            ></textarea>
                        </div>
                        <div className="file">
                            <p className="write-subtitle">파일첨부 </p>
                            <input
                                ref={register}
                                type="file"
                                className="write-file"
                                name="file"
                                onChange={handleUpload}
                            />
                        </div>
                        <div className="form-btn">
                            <input type="submit" className="submit" value="글 작성"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default BoardWrite;
