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
  console.log("페이지 값" + pagevalue);
  useEffect(async () => {
    var data = JSON.stringify({
      criteria: {},
      b_dtt: pagevalue,
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
        console.log(JSON.stringify(response.data));
        setPost(response.data.board);
        setComment(response.data.replyList);
        console.log(post);
        console.log(comment);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BannerNotice />
      <div className="contentsPost">
        <div className="post-area">
          <div className="title-area">
            <span className="title">{post.b_title}</span>
            <span className="writer">작성자 | 2020.02.01</span>
          </div>
          <div className="body-area">
            <p>{post.body}</p>
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
                    박박디라라
                    <FontAwesomeIcon icon={faEllipsisV} className="plus" />
                  </p>
                  <p className="comm-body">{comm.body}</p>
                  <p className="comm-date">2021-01-01</p>
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
          <form>
            <p className="id">아이디</p>
            <input
              type="textarea"
              className="reple-text"
              placeholder="댓글을 남겨보세요."
            />
            <div className="replybtn-area">
              <input type="submit" value="등록" className="reply-btn" />
            </div>
          </form>
        </div>{" "}
        {/* repleForm end */}
        <div className="list">
          <Link to="/post">
            <button>목록</button>
          </Link>
        </div>
      </div>{" "}
      {/* contents end */}
    </>
  );
}
export default Post;
