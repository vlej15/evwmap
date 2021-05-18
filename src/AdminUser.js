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

  useEffect(async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    setLoading(false);
  }, []);
  const data = [
    { name: "1월", post: 400, reple: 300 },
    { name: "2월", post: 200, reple: 270 },
    { name: "3월", post: 700, reple: 1500 },
    { name: "4월", post: 300, reple: 200 },
    { name: "5월", post: 200, reple: 1820 },
    { name: "6월", post: 1400, reple: 600 },
    { name: "7월", post: 800, reple: 330 },
    { name: "8월", post: 200, reple: 380 },
    { name: "9월", post: 900, reple: 200 },
    { name: "10월", post: 100, reple: 100 },
    { name: "11월", post: 200, reple: 100 },
    { name: "12월", post: 500, reple: 600 },
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
            <Line type="monotone" dataKey="reple" stroke="#e91756" />
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
            <Line type="monotone" dataKey="reple" stroke="#e91756" />
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


    </div >
  );
}
export default AdminUser;
