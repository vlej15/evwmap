import React, { useState } from "react";
import { Link, Route, Switch, useHistory, withRouter } from "react-router-dom";
import "./css/BoardChange.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

function BoardChange(props) {
  const history = useHistory();
  const id = props.boardid;
  const token = localStorage.getItem("id");
  const [post, setPost] = useState([]);
  const { register, handleSubmit, watch, errors, getValues } = useForm();

  const onSubmit = () => {
    var data = JSON.stringify({
      cat_cd: getValues("cat_cd"),
      b_title: getValues("b_title"),
      b_content: getValues("b_content"),
      b_no: id,
    });

    var config = {
      method: "put",
      url: "http://193.122.106.148:8081/api/board",
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
    history.push("/notice/" + id);
  };

  useEffect(async () => {
    var data = JSON.stringify({
      criteria: {},
    });
    var config = {
      method: "post",
      url: "http://193.122.106.148:8081/api/board/" + id + "?sort=desc",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setPost(response.data.board);
        setTitle(response.data.board.b_title);
        setBody(response.data.board.b_content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <div className="end"></div>
      <div className="contentsBoardChange">
        <div className="banner">
          <p className="banner-title">게시글수정</p>
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
                name="b_title"
                id="form_title"
                size="91"
                required=""
                value={title}
                onChange={onTitleChange}
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
                value={body}
                onChange={onBodyChange}
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
