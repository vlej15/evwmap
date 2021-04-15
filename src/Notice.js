import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Notice.scss";
import "./css/NoticeBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import BannerNotice from "./BannerNotice";

function Notice() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(async () => {
    var data = JSON.stringify({
      page: 1,
      keyWord: "",
      ser: "",
      cat_cd: "0",
    });

    var config = {
      method: "get",
      url: "http://3.36.160.255:8081/api/board/list",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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

      <BannerNotice />
      <div className="NTlocationData">
        <div className="inner">
          <div className="btnHome">
            <i class="fas fa-home"></i>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <div className="navMenu">
                  COMMUNITY
                  <div className="navInnerMenu">
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
                <ul className="navList">
                  <Link to="/introduction">
                    <li>
                      <a>INTRODUCTION</a>
                    </li>
                  </Link>
                  <Link to="/map">
                    <li>
                      <a>MAP</a>
                    </li>
                  </Link>
                  <Link to="/notice">
                    <li>
                      <a>COMMUNITY</a>
                    </li>
                  </Link>
                  <Link to="/faq">
                    <li>
                      <a>CONTACT</a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <a>
                  <div className="navMenu">
                    NOTICE
                    <div className="navInnersMenu">
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </a>
                <ul className="navList">
                  <Link to="/notice">
                    <li>
                      <a>NOTICE</a>
                    </li>
                  </Link>
                  <Link to="/freeboard">
                    <li>
                      <a>FREE BOARD</a>
                    </li>
                  </Link>
                  <Link to="/tipboard">
                    <li>
                      <a>TIP BOARD</a>
                    </li>
                  </Link>
                  <Link to="/news">
                    <li>
                      <a>NEWS BOARD</a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
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
                <td>{post.cat_cd}</td>
                <td key={post.cat_cd} className="td-title">
                  <Link to={`/notice/${post.cat_cd}`}>{post.b_title}</Link>
                </td>
                <td>{post.u_id}</td>
                <td>{post.b_dtt}</td>
                <td>{post.b_visite}</td>
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
