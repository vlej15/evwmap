import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Board.scss";
import "./css/FreeBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import BannerTip from "./BannerTip";

let pagekey = 0;
function TipBoard(props) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const token = localStorage.getItem("id");
  const setPagevalue = props.setPagevalue;
  const setCategory = props.setCategory;
  setCategory(2);

  const { id } = useParams();

  useEffect(async () => {
    //header
    props.setCount(0);

    var config = {
      method: "get",
      url: "http://193.122.106.148:8081/api/boardlist?page=0&cat_cd=2",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPosts(response.data.boardList);
        props.setBno(response.data.boardList[0].b_no + 1);
        setPage(response.data.pagination);

        console.log("전" + response.data.pagination);
      })
      .catch(function (error) {
        console.log(error);
      });

    var config1 = {
      method: "get",
      url: "http://193.122.106.148:8081/api/board/total",
      headers: {},
    };

    await axios(config1)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setTotal(response.data[2]);
        console.log("total" + total);
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
      <Posts
        posts={currentPosts(posts)}
        loading={loading}
        setPagevalue={setPagevalue}
        total={total}
      />
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
        setCategory={setCategory}
      ></Pagination>
    </div>
  );
}
function Posts(props) {
  const posts = props.posts;
  const setPagevalue = props.setPagevalue;
  console.log(posts);

  return (
    <>
      {/* <div className="end"></div> */}

      <div data-aos="fade-down" data-aos-duration="1000">
        <BannerTip />
      </div>

      <div className="FlocationData">
        <div className="nav-area">
          <div className="nav-homearea">
            <i class="fas fa-home"></i>
          </div>
          <div className="nav-section1">
            <ul className="sec-ul">
              <li className="sec-li">
                <div className="sec1-title">
                  COMMUNITY
                  <div className="nav-icon">
                    <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
                  </div>
                </div>
                <ul className="sec-list">
                  <Link to="/map">
                    <li>
                      <a>ROADMAP</a>
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
          <div className="nav-section2">
            <ul className="sec-ul">
              <li className="sec-li">
                <a>
                  <div className="sec2-title">
                    TIP BOARD
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
                    </div>
                  </div>
                </a>
                <ul className="sec-list">
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
          <p className="banner-title">TIP 게시판</p>
          <br></br>
          <p className="subtitle">
            이용자들과 다양한 TIP을 공유 하실 수 있습니다.
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
            {posts.map((post, index) => (
              <tr>
                {pagekey == 0 ? (
                  <td>{props.total - index}</td>
                ) : (
                  <td>{props.total - (String(pagekey) + index)}</td>
                )}
                <td key={post.b_no} className="td-title">
                  <Link
                    to={`/notice/${post.b_no}`}
                    onClick={setPagevalue(post.b_dtt)}
                  >
                    {post.b_title}
                  </Link>
                </td>
                <td>{post.u_id}</td>
                <td>{post.date}</td>
                <td>{post.b_visite}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-area">
          {localStorage.getItem("id") != null ? (
            <Link to="boardwrite">
              <button className="write-btn">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="pencil"
                ></FontAwesomeIcon>
              </button>
            </Link>
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
    pagekey = value - 1;
    var config = {
      method: "get",

      url:
        "http://193.122.106.148:8081/api/boardlist?page=" + value + "&cat_cd=2",
      headers: {
        Authorization: localStorage.getItem("id"),
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPosts(response.data.boardList);
        setPage(response.data.pagination);
        console.log("후" + response.data.pagination);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default TipBoard;
