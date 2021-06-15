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

function Post(props) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const [modify, setModify] = useState(0);
  const token = localStorage.getItem("id");
  const category = props.category;
  const { id } = useParams();
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const history = useHistory();

  useEffect(async () => {
    var data = JSON.stringify({
      criteria: {},
    });
    var config = {
      method: "post",
      url: "http://3.36.197.174:8081/api/board/" + id + "?sort=desc",
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
        setComment(response.data.replyList);
        props.setBoardid(id);
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
      url: "http://3.36.197.174:8081/api/reply",
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
      url: "http://3.36.197.174:8081/api/board/" + id + "?sort=desc",
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

  function Delete() {
    var data = JSON.stringify({
      b_no: id,
    });
    var config = {
      method: "delete",
      url: "http://3.36.197.174:8081/api/board/",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.goBack();
  }
  function changeModify() {
    setModify(!modify);
    console.log(modify);
  }
  function CommDelete() {
    var data = JSON.stringify({
      r_content: "가나다라마바사",
      r_dtt: "2021-04-15T06:42:06.14421",
    });

    var config = {
      method: "delete",
      url: "http://3.36.197.174:8081/api/user/reply",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VyIiwiaWF0IjoxNjE4NDY1NTUzLCJleHAiOjE2MTg0ODM1NTN9.GOnu6QUQ9-I0pf_ctRkJn8LIPhGXdB9dAc1gcISccV_87gCk8qi-fViFhQnIFydIEaaI5LTTxkmQTzcMWBBZPQ",
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
  }

  const backPage = () => {
    history.goBack();
  };

  const replydesc = () => {
    var data = JSON.stringify({
      criteria: {},
    });
    var config = {
      method: "post",
      url: "http://3.36.197.174:8081/api/board/" + id + "?sort=asc",
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
        setComment(response.data.replyList);
        props.setBoardid(id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const replyasc = () => {
    var data = JSON.stringify({
      criteria: {},
    });
    var config = {
      method: "post",
      url: "http://3.36.197.174:8081/api/board/" + id + "?sort=desc",
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
        setComment(response.data.replyList);
        props.setBoardid(id);
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
            {post.u_id == localStorage.getItem("id_value") ? (
              <>
                <div className="btn-area1">
                  {/* <button className="btn">수정</button> */}
                  <button className="notify" onClick={Delete}>
                    | 삭제
                  </button>
                </div>
                <div className="btn-area1">
                  <Link to="/boardchange">
                    <button className="notify">| 수정 </button>
                  </Link>
                </div>
              </>
            ) : null}

            <div className="btn-area1">
              {/* <button className="btn">수정</button> */}
              <button className="notify">신고 </button>
            </div>

            {/* body-area end */}
          </div>
          <div className="command-area">
            <ul>
              <li>
                <p className="command-title">댓글</p>
              </li>
              <li>
                <a className="type active" onClick={replydesc}>
                  오래된순
                </a>
              </li>
              <li>
                <a className="type" onClick={replyasc}>
                  최신순
                </a>
              </li>
            </ul>
            {comment.map((comm, i) => (
              <PostList comment={comm} i={i} setComment={setComment} />
            ))}
          </div>
          {/* command-area end */}
        </div>
        {/* post-area end */}
        <div className="reple-area">
          <form onSubmit={handleSubmit(onClick)}>
            {localStorage.getItem("id_value") !== null ? (
              <p className="id">{localStorage.getItem("id_value")}</p>
            ) : (
              <p className="id">아이디</p>
            )}

            <input
              ref={register}
              type="textarea"
              className="reple-text"
              placeholder="댓글을 남겨보세요."
              name="reply"
              width="100%"
            />
            <div className="replybtn-area">
              <input type="submit" value="등록" className="reply-btn" />
            </div>
          </form>
        </div>
        {/* repleForm end */}
        <div className="list">
          <button onClick={backPage}>목록</button>
        </div>
      </div>
      {/* contents end */}
    </>
  );
}
export default Post;
