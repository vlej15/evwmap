import React, { useEffect, useState } from "react";
import "./css/AdminUser.scss";
import {
    Tooltip,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Label,
} from "recharts";
import { Link } from "react-router-dom";
import axios from "axios";
import APagination from "@material-ui/lab/Pagination";

function AdminUser() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [boardCnt, setBoardCnt] = useState([]);
    const [replyCnt, setReplyCnt] = useState([]);
    const token = localStorage.getItem("id");

    useEffect(async () => {
        setLoading(true);
        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/board/month-data",
            headers: {
                Authorization: token,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setBoardCnt(response.data.boardCnt);
                setReplyCnt(response.data.replyCnt);
                console.log("월 값" + boardCnt["2021-05"]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const data = [
        { name: "1월", post: 0, reple: 0 },
        { name: "2월", post: 0, reple: 0 },
        { name: "3월", post: 0, reple: 0 },
        { name: "4월", post: 0, reple: 0 },
        { name: "5월", post: boardCnt["2021-05"], reple: replyCnt["2021-05"] },
        { name: "6월", post: 0, reple: 0 },
        { name: "7월", post: 0, reple: 0 },
        { name: "8월", post: 0, reple: 0 },
        { name: "9월", post: 0, reple: 0 },
        { name: "10월", post: 0, reple: 0 },
        { name: "11월", post: 0, reple: 0 },
        { name: "12월", post: 0, reple: 0 },
    ];

    return (
        <div className="contentsAdminUser">
            <div className="chart-area">
                <p className="chart-title">게시판 그래프</p>
                <div className="chart-content">
                    <LineChart
                        width={650}
                        height={350}
                        data={data}
                        margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
                        stroke={"#eee"}
                        color={"#111"}
                    >
                        <Line type="monotone" dataKey="post" stroke="#76c8d3" />
                        <Line
                            type="monotone"
                            dataKey="reple"
                            stroke="#e91756"
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name"></XAxis>
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>

            <div className="table-area">
                <p className="table-title">게시판 경고 목록</p>
                <table className="table-content">
                    <thead>
                        <th>제목</th>
                        <th>경고일</th>
                        <th>아이디</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-search">
                    <input type="text" placeholder="아이디 검색" />
                    <button>검색</button>
                </div>
                <div className="pageNationA">
                    <div>
                        <APagination count="5" />
                    </div>
                </div>
            </div>

            <div className="chart-area">
                <p className="chart-title">리뷰 그래프</p>
                <div className="chart-content">
                    <LineChart
                        width={650}
                        height={350}
                        data={data}
                        margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
                        stroke={"#333"}
                        color={"#111"}
                    >
                        <Line type="monotone" dataKey="post" stroke="#76c8d3" />
                        <Line
                            type="monotone"
                            dataKey="reple"
                            stroke="#e91756"
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name"></XAxis>
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>

            <div className="table-area">
                <p className="table-title">리뷰 경고 목록</p>
                <table className="table-content">
                    <thead>
                        <th>제목</th>
                        <th>경고일</th>
                        <th>아이디</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                        <tr>
                            <td>게시글</td>
                            <td>욕설</td>
                            <td>dlwlsghk123</td>
                        </tr>
                    </tbody>
                </table>
                {/* <div className="table-search">
          <input type="text" placeholder="아이디 검색" />
          <button>검색</button>
        </div> */}
                <div className="pageNationA">
                    <div>
                        <APagination count="5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminUser;
