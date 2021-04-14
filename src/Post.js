import React from "react";
import "./css/Post.scss";
import "./css/PostList.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Post() {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    // 게시판 데이터
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const recommend = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const p_result = response.data;
    const c_result = recommend.data;

    const p_data = p_result.find((item) => item.id == id);
    const c_data = c_result.filter((commend) => commend.postId == id);
    setPost(p_data);
    setComment(c_data);
    console.log(p_data, c_data);
  }, []);

  // const posts = props.posts;
  // const comments = props.comments;

  // const { id } = useParams();

  // const post = posts.find((post) => post.id == id);
  // const comment = comments.filter((commend) => commend.postId == id);
  // console.log(post.id);
  return (
    <div className="postWrap">
      <div className="post">
        <div className="title">
          <div>
            <h1>{post.title}</h1>
            <p>작성자 | 2011.11.01</p>
          </div>
        </div>
        <div className="postBody">
          <p>{post.body}</p>
        </div>
        <div className="gideLine"></div>
        <div className="wBtnWrap">
          <div className="tBtnWrap">
            <Link to="/post">
              <button>목록으로</button>
            </Link>
          </div>
          <button className="backBtn">글 수정</button>
          <button>신고하기</button>
        </div>
        <h1 className="commTitle">댓글</h1>
        {comment.map((comm) => (
          <div>
            <p>
              <p className="commWriter">이진화</p>
              <p className="commBody">{comm.body}</p>
              <p className="commDate">2021-01-01</p>
              <button
                onClick={() => {
                  console.log(comm.body);
                }}
              >
                수정
              </button>
              <button> 삭제</button>
              <div className="gideLine"></div>
            </p>
            {console.log(comm.name)}
          </div>
        ))}
        <div className="repleForm">
          <form>
            <p>아이디</p>
            <input
              type="textarea"
              className="textBtn"
              placeholder="댓글을 남겨보세요"
            />
            <div className="smBtnWrap">
              <input type="submit" value="댓글 등록" className="smBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Post;