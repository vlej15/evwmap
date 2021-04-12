import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Board.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import BannerTip from "./BannerTip";

function TipBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    setLoading(false);
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  return (
    <div className="comunityTop">
      <Posts posts={currentPosts(posts)} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
        page={currentPage}
        setCurrentPage={setCurrentPage}
        setPostsPerPage={setPostsPerPage}
      ></Pagination>
    </div>
  );
}
function Posts({ posts, loading }) {
  return (
    <>
      <div className="end"></div>
      <div data-aos="fade-down" data-aos-duration="1000">
        <BannerTip />
      </div>
      <div className="contentsBoard">
        <div className="start"></div>
        <div className="banner">
          <p className="banner-title">TIP 게시판</p>
          <br></br>
          <p className="subtitle">
            전기차와 관련된 다양한 TIP을 공유 하실 수 있습니다.
          </p>
        </div>
        <table className="list">
          <thead>
            <tr>
              <th>번호</th>
              <th className="th-title">제목</th>
              <th>글쓴이</th>
              <th className="th-date">작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td key={post.id} className="td-title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </td>
                <td>작성자</td>
                <td>작성일</td>
                <td>10</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-area">
          {localStorage.getItem("id") != null ? (
            <button className="write-btn">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="pencil"
              ></FontAwesomeIcon>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  page,
  setCurrentPage,
  setPostsPerPage,
}) {
  let pageNumber = 0;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    pageNumber += 1;
  }

  return (
    <div className="pageNation">
      <div>
        <APagination
          count={pageNumbers.length}
          color="standard"
          onChange={handleChange}
        />
      </div>
    </div>
  );
  function handleChange(e, value) {
    paginate(value);
  }
}

export default TipBoard;
