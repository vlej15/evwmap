import React from "react";
import "./css/Post.scss";
import "./css/PostList.scss";
import BannerNotice from "./BannerNotice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import $ from "jquery";

$(function () {
  $(".command-area")
    .find(".type")
    .click(function () {
      $("a").removeClass("active");
      $(this).addClass("active");
    });
});

function Post(props) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const token = localStorage.getItem("id");
  const pagevalue = props.pagevalue;
  const category = props.category;
  const { id } = useParams();
  const { register, handleSubmit, watch, errors, getValues } = useForm();

  useEffect(async () => {
    var data = JSON.stringify({
      criteria: {},
      b_dtt: id,
    });
    var config = {
      method: "post",
      url: "http://3.36.160.255:8081/api/gboard",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(pagevalue);
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setPost(response.data.board);
        setComment(response.data.replyList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onClick = () => {
    const rep = getValues("reply");
    var axios = require("axios");
    var data = JSON.stringify({
      cat_cd: category,
      b_dtt: id,
      r_content: rep,
      r_writer: localStorage.getItem("id_value"),
    });
    console.log(rep);

    var config = {
      method: "post",
      url: "http://3.36.160.255:8081/api/reply",
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
      <BannerNotice />
      <div className="contentsPost">
        <div className="post-area">
          <div className="title-area">
            <span className="title">{post.b_title}</span>
            <span className="writer">
              {post.u_id} | {post.date}
            </span>
          </div>
          <div className="body-area">
            <p>{post.b_content}</p>
            <div className="btn-area">
              {/* <button className="btn">수정</button> */}
              <button className="notify">신고</button>
            </div>
            {/* body-area end */}
          </div>
          <div className="command-area">
            <ul>
              <li>
                <p className="command-title">댓글</p>
              </li>
              <li>
                <a className="type active">오래된순</a>
              </li>
              <li>
                <a className="type">최신순</a>
              </li>
            </ul>
            {comment.map((comm) => (
              <div>
                <div className="command">
                  <p className="comm-writer">
                    {comm.r_writer}
                    <FontAwesomeIcon icon={faEllipsisV} className="plus" />
                  </p>
                  <p className="comm-body">{comm.r_content}</p>
                  <p className="comm-date">{comm.r_dtt}</p>
                  {/* <button onClick={() => { console.log(comm.body); }}>수정</button>
                  <button> 삭제</button> */}
                </div>
                {console.log(comm.name)}
              </div>
            ))}
          </div>
          {/* command-area end */}
        </div>{" "}
        {/* post-area end */}
        <div className="reple-area">
          <form onSubmit={handleSubmit(onClick)}>
            <p className="id">아이디</p>
            <input
              ref={register}
              type="textarea"
              className="reple-text"
              placeholder="댓글을 남겨보세요."
              name="reply"
            />
            <div className="replybtn-area">
              <input type="submit" value="등록" className="reply-btn" />
            </div>
          </form>
        </div>
        {/* repleForm end */}
        <div className="list">
          <Link to="/post">
            <button>목록</button>
          </Link>
        </div>
      </div>
      {/* contents end */}
    </>
  );
}
export default Post;
