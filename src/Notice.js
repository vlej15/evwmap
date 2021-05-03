import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Notice.scss";
import "./css/NoticeBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link, useParams } from "react-router-dom";
import BannerNotice from "./BannerNotice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function Notice() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState("");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("id");

    useEffect(async () => {
        var config = {
            method: "get",
            url: "http://3.36.160.255:8081/api/boardlist?page=0&cat_cd=0",
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
    console.log("현재 페이지 번호 " + page.page);
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
function Posts(props) {
    const posts = props.posts;
    console.log(posts);
    return (
        <>
            {/* <div className="end"></div> */}

            <div data-aos="fade-down" data-aos-duration="1000">
                <BannerNotice />
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
                                    COMMUNITY<div className="nav-icon"><FontAwesomeIcon icon={faSortDown} ></FontAwesomeIcon></div>
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
                                        Notice
                                        <div className="nav-icon"><FontAwesomeIcon icon={faSortDown} ></FontAwesomeIcon></div>
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
                                    <Link to={`/notice/${post.id}`}>
                                        {post.title}
                                    </Link>
                                    <Link to={`/notice/${post.b_dtt}`}>
                                        {post.b_title}
                                    </Link>
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
    totalPage,
    setPosts,
    setPage,
}) {
    const pageNumbers = totalPage;
    return (
        <div className="pageNation">
            <div>
                <APagination
                    count={pageNumbers}
                    size="large"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
    function handleChange(e, value) {
        var config = {
            method: "get",

            url:
                "http://3.36.160.255:8081/api/boardlist?page=" +
                value +
                "&cat_cd=0",
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

export default Notice;
