import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/ChargeUsage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

function ChargeUsage(props) {

    const [useList, setuseList] = useState([]);
    const [usedata, setusedata] = useState([]);
    const [usestat, setusestat] = useState([]);
    const idvalue = localStorage.getItem("id_value");
    const token = localStorage.getItem("id");

    //header
    useEffect(() => {
        //header color
        props.setCount(1);
        //정보 받아오는 곳
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://3.36.197.174:8081/api/myuseinfo?u_id=' + idvalue,
            headers: { 
                'Authorization': token
            }
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setuseList(response.data.use);
                // setusedata(useList.data);
                setusestat(useList.station);
                console.log("useList", useList);
                // console.log("usedata", usedata);
                // console.log("usestat", usestat);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        // render()
    }, []);

    // const listprint = () => {
    //         {(usestat && usestat.map((ststmap) => (
    //             (usedata && usedata.map((datamap) => (
    //                 <tr>
    //                     <td>{ststmap.stat_nm}</td>
    //                     <td>{datamap.use_dtt.substr(0, 10)}</td>
    //                     <td>{datamap.use_chg_amt}</td>
    //                     <td>{datamap.use_payment}</td>
    //                 </tr>
    //             )))
    //         )))}
    //     }

    // let [chhistory, setboard] = useState(Data);
    // const [chargeusagelist, setchargerlist] = useState([]);

    return (
        <>
            <div className="mypageData">
                <div className="nav-area">
                    <div className="nav-homearea">
                        <Link to="/">
                            <i class="fas fa-home"></i>
                        </Link>
                    </div>
                    <div className="nav-section1">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <Link to="activity">
                                    <a>
                                        <div className="sec1-title">MYPAGE</div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-section2">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <Link to="activity">
                                    <a>
                                        <div className="sec2-title">
                                            이용 내역
                                            <div className="nav-icon">
                                                <FontAwesomeIcon
                                                    icon={faSortDown}
                                                ></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <ul className="sec-list">
                                    <li>
                                        <Link to="infochange">
                                            <a>정보 수정</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="card">
                                            <a>카드 등록</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="chargeusage">
                                            <a>이용 내역</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="activity">
                                            <a>활동 내역</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="contentsChargeUsage"
            // onClick={() => {
            //     props.setMenu(false);
            // }}
            >

                <div className="banner">
                    <p className="banner-title">충전소 예약 내역</p>
                    <br></br>
                    <p className="subtitle">
                        회원님의 충전소 예약 내역을 확인 하실 수 있습니다.
                    </p>
                </div>
                <table className="list2">
                    <thead>
                        <tr>
                            <th className="th-title">충전소명</th>
                            <th>예약일시</th>
                            <th>충전일시</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {reply.map((post) => (
                            <tr>
                                <td class="list-title">
                                    <a className="list-link" href="#">
                                        {post.r_content}
                                    </a>
                                </td>
                                <td class="list-date">{post.date}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>

                <div className="banner">
                    <p className="banner-title">충전소 이용 내역</p>
                    <br></br>
                    <p className="subtitle">
                        현재까지의 충전소 이용 내역을 확인 하실 수 있습니다.
                    </p>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th className="charge-title">충전소 명</th>
                            <th>충전일</th>
                            <th className="khw">
                                충전량
                                <br />
                                <span>(khw)</span>
                            </th>
                            <th className="price">사용 포인트</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {useList.station&&(useList.station).map((ststmap) => (
                            (useList.data&&useList.data).map((datamap) => (
                                <tr>
                                    <td>{ststmap.stat_nm}</td>
                                    <td>{datamap.use_dtt.substr(0, 10)}</td>
                                    <td>{datamap.use_chg_amt}</td>
                                    <td>{datamap.use_payment}</td>
                                </tr>
                            ))
                        ))} */}
                        
                    </tbody>
                </table>
            </div>
            {/* {console.log("겹치는 아이디",statId, statId.length)} */}
        </>
    );
}

export default ChargeUsage;
