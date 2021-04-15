import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Notice.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import BannerNotice from "./BannerNotice";

function Notice() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const data = JSON.stringify({
    u_id: "youngsik1",
  });

  useEffect(async () => {
    setLoading(true);
    const response = await axios("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
    setLoading(false);
    console.log(posts);
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
      {/* <div className="end"></div> */}
      <div data-aos="fade-down"
        data-aos-duration="1000">
        <BannerNotice />
      </div>
      <div className="contentsNotice">
        {/* <div className="start"></div> */}
        <div className="banner">
          <p className="banner-title">공지사항</p>
          <br></br>
          <p className="subtitle">
            EV WMAP의 공지 및 업데이트 소식을 전합니다.
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
                  <Link to={`/notice/${post.id}`}>{post.title}</Link>
                </td>
                <td>작성자</td>
                <td>작성일</td>
                <td>10</td>
              </tr>
            ))}
          </tbody>
        </table>
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
          size="large"
          onChange={handleChange}
        />
      </div>
    </div>
  );
  function handleChange(e, value) {
    paginate(value);
  }
}

export default Notice;
