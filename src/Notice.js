import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Notice.scss";
import "./css/FreeBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link, useParams } from "react-router-dom";
import BannerNotice from "./BannerNotice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

let i = 2;
let pagekey = 0;
function Notice(props) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState("");
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const token = localStorage.getItem("id");
    const setPagevalue = props.setPagevalue;
    const setCategory = props.setCategory;

    setCategory(0);

    useEffect(async () => {
        //header
        props.setCount(0);

        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/boardlist?page=0&cat_cd=0",
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
                console.log("총 글 수 " + posts.length);
                console.log("전" + response.data.pagination);
            })
            .catch(function (error) {
                console.log(error);
            });

        var config1 = {
            method: "get",
            url: "http://3.36.197.174:8081/api/board/total",
            headers: {},
        };

        await axios(config1)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setTotal(response.data[0]);
                console.log("total" + total);
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
            <Posts
                posts={currentPosts(posts)}
                loading={loading}
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
                        <Link to="/">
                            <i class="fas fa-home"></i>
                        </Link>
                    </div>
                    <div className="nav-section1">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <div className="sec1-title">
                                    COMMUNITY
                                    <div className="nav-icon">
                                        <FontAwesomeIcon
                                            icon={faSortDown}
                                        ></FontAwesomeIcon>
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
                                        NOTICE
                                        <div className="nav-icon">
                                            <FontAwesomeIcon
                                                icon={faSortDown}
                                            ></FontAwesomeIcon>
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
                        {posts.map((post, index) => (
                            <tr>
                                {pagekey == 0 ? (
                                    <td>{props.total - index}</td>
                                ) : (
                                    <td>
                                        {props.total -
                                            (String(pagekey) + index)}
                                    </td>
                                )}
                                <td key={post.b_no} className="td-title">
                                    <Link to={`/notice/${post.b_no}`}>
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
        pagekey = value - 1;
        var config = {
            method: "get",

            url:
                "http://3.36.197.174:8081/api/boardlist?page=" +
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
