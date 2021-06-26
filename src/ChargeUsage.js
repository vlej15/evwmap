import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/ChargeUsage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

function ChargeUsage(props) {

    const [useList, setuseList] = useState([]);
    const [rsvtList, setrsvtList] = useState([]);
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
                console.log(JSON.stringify(response.data));
                setuseList(response.data.useList);
                setrsvtList(response.data.rsvtList);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    //예약 내역 뽑기
    function cgRsvtList() {
        var rsvtarray = [];
        var useDataArray = Object.keys(useList);
        var rsvtKeyArray = Object.keys(rsvtList);
        var count = 0;

        for (let key in rsvtList) {
            if (count == 0) {
                rsvtarray.push(
                    <tr>
                        <td>{rsvtList[key].name}</td> 
                        <td>{rsvtKeyArray[count].substr(0, 19).replace("T", " ")}</td>
                        <td>{useDataArray[count].substr(0, 19).replace("T", " ")}</td>
                    </tr>
                );
            } else {
                rsvtarray.push(
                    <tr>
                        <td>{rsvtList[key].name}</td>
                        <td>{rsvtKeyArray[count].substr(0, 19).replace("T", " ")}</td>
                        <td>충전일 없음</td>
                    </tr>
                );
            }
            count++;
        }
        return rsvtarray;
    }

    //활동 내역 뽑기
    function cgUseList() {
        var forarray = [];
        var keyArray = Object.keys(useList);
        let count = 0;

        for (let key in useList) {
            forarray.push(
                <tr>
                    <td>{useList[key].name}</td>
                    <td>{keyArray[count].substr(0, 19).replace("T", " ")}</td>
                    <td>{useList[key].amount}</td>
                    <td>{useList[key].payment}</td>
                </tr>
            )
            count++;
        }
        return forarray;
    }

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
                        </tr>
                    </thead>
                    <tbody>
                        {cgRsvtList()}
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
                            <th>충전일시</th>
                            <th className="khw">
                                충전량
                                <br />
                                <span>(khw)</span>
                            </th>
                            <th className="price">사용 포인트</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cgUseList()}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ChargeUsage;
