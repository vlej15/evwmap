import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Board.scss";
import "./css/TipBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import BannerTip from "./BannerTip";

function TipBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState("");
  const token = localStorage.getItem("id");

  useEffect(async () => {
    var config = {
      method: "get",
      url: "http://3.36.160.255:8081/api/boardlist?page=0&cat_cd=2",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPosts(response.data.boardList);
        setPage(response.data.pagination);
        console.log("전" + response.data.pagination);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const totalPage = page.totalPageCnt;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
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
        totalPage={totalPage}
        setPosts={setPosts}
        setPage={setPage}
      ></Pagination>
    </div>
  );
}
function Posts({ posts, loading }) {
  return (
    <>
      {/* <div className="end"></div> */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <BannerTip />
      </div>
      <div className="TlocationData">
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
                    TIP
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
                  <Link to={`/post/${post.id}`}>{post.b_title}</Link>
                </td>
                <td>{post.u_id}</td>
                <td>{post.date + post.time}</td>
                <td>{post.b_visite}</td>
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
  totalPage,
  setPosts,
  setPage,
}) {
  const pageNumbers = totalPage;
  return (
    <div className="pageNation">
      <div>
        <APagination count={pageNumbers} size="large" onChange={handleChange} />
      </div>
    </div>
  );
  function handleChange(e, value) {
    var config = {
      method: "get",

      url: "http://3.36.160.255:8081/api/boardlist?page=" + value + "&cat_cd=2",
      headers: {
        Authorization: localStorage.getItem("id"),
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        setPosts(response.data.boardList);
        setPage(response.data.pagination);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default TipBoard;
