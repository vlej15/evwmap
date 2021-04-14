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
    <>
      <BannerNotice />
      <div className="contentsPost">
        <div className="post-area">
          <div className="title-area">
            <span className="title">{post.title}</span>
            <span className="writer">작성자 | 2020.02.01</span>
          </div>
          <div className="body-area">
            <p>{post.body}</p>
            <div className="btn-area">
              {/* <button className="btn">수정</button> */}
              <button className="notify">신고</button>
            </div> {/* body-area end */}
          </div>
          <div className="command-area">
            <ul>
              <li><p className="command-title">댓글</p></li>
              <li><a className="type">등록순</a></li>
              <li><a className="type">최신순</a></li>
            </ul>
            {comment.map((comm) => (
              <div>
                <div className="command">
                  <p className="comm-writer">박박디라라<FontAwesomeIcon
                    icon={faEllipsisV} className="plus" /></p>
                  <p className="comm-body">{comm.body}</p>
                  <p className="comm-date">2021-01-01</p>
                  {/* <button onClick={() => { console.log(comm.body); }}>수정</button>
                  <button> 삭제</button> */}
                </div>
                {console.log(comm.name)}
              </div>
            ))}
          </div>{/* command-area end */}
        </div> {/* post-area end */}

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
        </div> {/* repleForm end */}

        <div className="list">
          <Link to="/post">
            <button>목록</button>
          </Link>
        </div>
      </div> {/* contents end */}
    </>
  );
}
export default Post;
