import React from "react";
import "./css/Post.scss";
import "./css/PostList.scss";
import BannerNotice from "./BannerNotice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import $ from "jquery";
import PostList from "./PostList";

$(function () {
  $(".command-area")
    .find(".type")
    .click(function () {
      $("a").removeClass("active");
      $(this).addClass("active");
    });
});

function Qpost(props) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const [modify, setModify] = useState(0);
  const token = localStorage.getItem("id");
  const category = props.category;
  const { id } = useParams();
  const { register, handleSubmit, watch, errors, getValues } = useForm();

  useEffect(async () => {
    var axios = require("axios");
    var data = JSON.stringify({
      q_dtt: id,
    });
    console.log(id);
    var config = {
      method: "get",
      url: "http://3.36.160.255:8081/api/question?q_dtt=" + id,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPost(response.data.question);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onClick = () => {
    const rep = getValues("reply");
    var axios = require("axios");
    var data = JSON.stringify({
      cat_cd: "" + category,
      b_no: id,
      r_content: rep,
      r_writer: localStorage.getItem("id_value"),
    });

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

    var data1 = JSON.stringify({
      criteria: {},
    });
    var config1 = {
      method: "post",
      url: "http://3.36.160.255:8081/api/board/" + id,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data1,
    };
    axios(config1)
      .then(function (response) {
        console.log(response.data);
        setPost(response.data.board);
        setComment(response.data.replyList);
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
            <span className="title">{post.q_title}</span>
            <span className="writer">
              {post.u_id} | {post.date}
            </span>
          </div>
          <div className="body-area">
            <p>{post.q_content}</p>

            <div className="btn-area">
              {/* <button className="btn">수정</button> */}
              <button className="notify">신고 </button>
            </div>

            {/* body-area end */}
          </div>
          <div className="command-area"></div>
          {/* command-area end */}
        </div>
        {/* post-area end */}
        {localStorage.getItem("id_value") == "evwmapadmin1" ? (
          <div className="reple-area">
            <form onSubmit={handleSubmit(onClick)}>
              <input
                ref={register}
                type="textarea"
                className="reple-text"
                placeholder="문의 답변작성."
                name="reply"
              />
              <div className="replybtn-area">
                <input type="submit" value="등록" className="reply-btn" />
              </div>
            </form>
          </div>
        ) : null}
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
export default Qpost;
