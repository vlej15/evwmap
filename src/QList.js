import axios from "axios";
import React, { useState, useEffect } from "react";
import './css/QList.scss';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import BannerQ from "./BannerQ";


const QList = () => {
  const [posts, setPosts] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const [qdata, setQdata] = useState([]);
  var data = JSON.stringify({
    u_id: "youngsik1",
  });


  useEffect(() => {
    const config = {
      method: "post",
      url: "http://3.36.160.255:8081/api/my-question",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setQdata(response.data);
        console.log(qdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="end"></div>
      <div data-aos="fade-down"
        data-aos-duration="1000">
        <BannerQ />
      </div>
      <div className="contentsQList">
        <div className="banner">
          <p className="banner-title">문의내역</p>
          <br></br>
          <p className="subtitle">문의하신 내역을 확인할 수 있습니다.</p>
        </div>
        <table className="list">
          <thead>
            <tr>
              <th>상태</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {qdata.map((post) => (
              <tr>
                <td class="list-td">
                  <span className="list-span1">답변대기</span>
                </td>
                <td className="list-title"><a className="list-link">{post.q_content}</a></td>
                <td className="list-date">{post.date}</td>
              </tr>
            ))}
            <tr>
              <td class="list-td">
                <span className="list-span1">답변대기</span>
              </td>
              <td className="list-title"><a className="list-link">아니~ 카드 인식이 안된다니까요??</a></td>
              <td className="list-date">2021.02.14</td>
            </tr>
            <tr>
              <td class="list-td">
                <span className="list-span2">답변완료</span>
              </td>
              <td className="list-title"><a className="list-link">아 아직도 할거 개많에 아아아아아앙아가가가가누리마ㅜㄷ라ㅣㅈ두랒둥</a></td>
              <td className="list-date">2020.02.01</td>
            </tr>
          </tbody>
        </table>
      </div >
      <div className="btn-area">
        <button className="write-btn"><FontAwesomeIcon icon={faPencilAlt} className="pencil"></FontAwesomeIcon></button>
      </div>
    </>
  )
}

export default QList;