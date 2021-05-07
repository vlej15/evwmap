import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Resolve1.scss";
import "./css/inquiry.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

import BannerMap from "./BannerMap";

const { Tmapv2 } = window;

var lat = 1;
var lng = 1;

function Inquiry(props) {
    const { register, handleSubmit, errors, watch, getValues } = useForm();
    const [review, setReview] = useState([]);
    const [station, setStation] = useState([]);
    const [facilityList, setFacilityList] = useState([]);
    const [reviewtag, setReviewtag] = useState(false);
    const [statid, setStatid] = useState([]);
    const [stationlist, setStationlist] = useState([]);

    const token = localStorage.getItem("id");

    const a1 = props.a1;
    const a2 = props.a2;
    const marker = props.marker;

    let lat1 = 0;
    let lng1 = 0;

    var map;
    var markerInfo;

    //출발지,도착지 마커
    var marker_s, marker_e, marker_p, markers;
    //경로그림정보
    var drawInfoArr = [];
    var drawInfoArr2 = [];

    var chktraffic = [];
    var resultdrawArr = [];
    var resultMarkerArr = [];

    var markerLayer;
    const getId = localStorage.getItem("id");

    useEffect(() => {
        //header
        props.setCount(0);

        //충전기 정보 받아오는 곳
        var axios = require("axios");

        var config = {
            method: "get",
            url: "http://3.36.160.255:8081/api/station/list",
            headers: {
                Authorization: token,
            },
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setStationlist(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        const map = new Tmapv2.Map("map_div", {
            center: new Tmapv2.LatLng(a1, a2),
            // 지도가 생성될 div
            width: "750px", // 지도의 넓이
            height: "550px", // 지도의 높이
        });

        marker.map((mk) => {
            markers = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(mk.stat_lat, mk.stat_lng),
                icon:
                    "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
                iconSize: new Tmapv2.Size(24, 38),
                map: map,
            });

            markers.addListener("click", function (evt) {
                console.log(mk.stat_lat, mk.stat_lng);
                lat1 = mk.stat_lng;
                lat1 = mk.stat_lat;
                lat = mk.stat_lat;
                lng = mk.stat_lng;
                var config = {
                    method: "get",
                    url:
                        "http://3.36.160.255:8081/api/station?stat_lng=" +
                        lng +
                        "&stat_lat=" +
                        lat,
                    headers: {
                        Authorization: token,
                    },
                };
                axios(config)
                    .then(function (response) {
                        setReview(response.data.reviewList);
                        setStation(response.data.station);
                        setFacilityList(response.data.facilityList);
                        setReviewtag(true);
                        setStatid(response.data.station[0]["stat_id"]);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        });

        marker_s = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(a1, a2),
            icon:
                "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_s.png",
            iconSize: new Tmapv2.Size(24, 38),
            map: map,
        });
        marker_e = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(lng, lat),
            icon:
                "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
            iconSize: new Tmapv2.Size(24, 38),
            map: map,
        });
        $("#btn_select").click(function () {
            //기존 맵에 있던 정보들 초기화
            resettingMap();
            var searchOption = $("#selectLevel").val();
            var trafficInfochk = $("#year").val();
            //JSON TYPE EDIT [S]
            $.ajax({
                type: "POST",
                url:
                    "https://apis.openapi.sk.com/tmap/routes?version=1&format=json&callback=result",
                async: false,
                data: {
                    appKey: "l7xx7e0f3fa63ea24325bc1914cf5d911bf7",
                    startX: a2,
                    startY: a1,
                    endX: lng,
                    endY: lat,
                    reqCoordType: "WGS84GEO",
                    resCoordType: "EPSG3857",
                    searchOption: searchOption,
                    trafficInfo: trafficInfochk,
                },
                success: function (response) {
                    var resultData = response.features;

                    var tDistance =
                        "총 거리 : " +
                        (resultData[0].properties.totalDistance / 1000).toFixed(
                            1
                        ) +
                        "km,";
                    var tTime =
                        " 총 시간 : " +
                        (resultData[0].properties.totalTime / 60).toFixed(0) +
                        "분,";
                    var tFare =
                        " 총 요금 : " +
                        resultData[0].properties.totalFare +
                        "원,";

                    $("#result").text(tDistance + tTime + tFare);

                    //교통정보 표출 옵션값을 체크
                    if (trafficInfochk == "Y") {
                        for (var i in resultData) {
                            //for문 [S]
                            var geometry = resultData[i].geometry;
                            var properties = resultData[i].properties;

                            if (geometry.type == "LineString") {
                                //교통 정보도 담음
                                chktraffic.push(geometry.traffic);
                                var sectionInfos = [];
                                var trafficArr = geometry.traffic;

                                for (var j in geometry.coordinates) {
                                    // 경로들의 결과값들을 포인트 객체로 변환
                                    var latlng = new Tmapv2.Point(
                                        geometry.coordinates[j][0],
                                        geometry.coordinates[j][1]
                                    );
                                    // 포인트 객체를 받아 좌표값으로 변환
                                    var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
                                        latlng
                                    );

                                    sectionInfos.push(convertPoint);
                                }

                                drawLine(sectionInfos, trafficArr);
                            } else {
                                var markerImg = "";
                                var pType = "";

                                if (properties.pointType == "S") {
                                    //출발지 마커
                                    markerImg =
                                        "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
                                    pType = "S";
                                } else if (properties.pointType == "E") {
                                    //도착지 마커
                                    markerImg =
                                        "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
                                    pType = "E";
                                } else {
                                    //각 포인트 마커
                                    markerImg =
                                        "http://topopen.tmap.co.kr/imgs/point.png";
                                    pType = "P";
                                }

                                // 경로들의 결과값들을 포인트 객체로 변환
                                var latlon = new Tmapv2.Point(
                                    geometry.coordinates[0],
                                    geometry.coordinates[1]
                                );
                                // 포인트 객체를 받아 좌표값으로 다시 변환
                                var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
                                    latlon
                                );

                                var routeInfoObj = {
                                    markerImage: markerImg,
                                    lng: convertPoint._lng,
                                    lat: convertPoint._lat,
                                    pointType: pType,
                                };
                                // 마커 추가
                                addMarkers(routeInfoObj);
                            }
                        } //for문 [E]
                    } else {
                        for (var i in resultData) {
                            //for문 [S]
                            var geometry = resultData[i].geometry;
                            var properties = resultData[i].properties;

                            if (geometry.type == "LineString") {
                                for (var j in geometry.coordinates) {
                                    // 경로들의 결과값들을 포인트 객체로 변환
                                    var latlng = new Tmapv2.Point(
                                        geometry.coordinates[j][0],
                                        geometry.coordinates[j][1]
                                    );
                                    // 포인트 객체를 받아 좌표값으로 변환
                                    var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
                                        latlng
                                    );
                                    // 포인트객체의 정보로 좌표값 변환 객체로 저장
                                    var convertChange = new Tmapv2.LatLng(
                                        convertPoint._lat,
                                        convertPoint._lng
                                    );
                                    // 배열에 담기
                                    drawInfoArr.push(convertChange);
                                }
                                drawLine(drawInfoArr, "0");
                            } else {
                                var markerImg = "";
                                var pType = "";

                                if (properties.pointType == "S") {
                                    //출발지 마커
                                    markerImg =
                                        "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
                                    pType = "S";
                                } else if (properties.pointType == "E") {
                                    //도착지 마커
                                    markerImg =
                                        "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
                                    pType = "E";
                                } else {
                                    //각 포인트 마커
                                    markerImg =
                                        "http://topopen.tmap.co.kr/imgs/point.png";
                                    pType = "P";
                                }

                                // 경로들의 결과값들을 포인트 객체로 변환
                                var latlon = new Tmapv2.Point(
                                    geometry.coordinates[0],
                                    geometry.coordinates[1]
                                );
                                // 포인트 객체를 받아 좌표값으로 다시 변환
                                var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
                                    latlon
                                );

                                var routeInfoObj = {
                                    markerImage: markerImg,
                                    lng: convertPoint._lng,
                                    lat: convertPoint._lat,
                                    pointType: pType,
                                };

                                // Marker 추가
                                addMarkers(routeInfoObj);
                            }
                        } //for문 [E]
                    }
                },
                error: function (request, status, error) {
                    console.log(
                        "code:" +
                            request.status +
                            "\n" +
                            "message:" +
                            request.responseText +
                            "\n" +
                            "error:" +
                            error
                    );
                },
            });
            //JSON TYPE EDIT [E]
        });
        function addComma(num) {
            var regexp = /\B(?=(\d{3})+(?!\d))/g;
            return num.toString().replace(regexp, ",");
        }

        function addMarkers(infoObj) {
            var size = new Tmapv2.Size(24, 38); //아이콘 크기 설정합니다.

            if (infoObj.pointType == "P") {
                //포인트점일때는 아이콘 크기를 줄입니다.
                size = new Tmapv2.Size(8, 8);
            }

            marker_p = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(infoObj.lat, infoObj.lng),
                icon: infoObj.markerImage,
                iconSize: size,
                map: map,
            });

            resultMarkerArr.push(marker_p);
        }
        function drawLine(arrPoint, traffic) {
            var polyline_;

            if (chktraffic.length != 0) {
                // 교통정보 혼잡도를 체크
                // strokeColor는 교통 정보상황에 다라서 변화
                // traffic :  0-정보없음, 1-원활, 2-서행, 3-지체, 4-정체  (black, green, yellow, orange, red)

                var lineColor = "";

                if (traffic != "0") {
                    if (traffic.length == 0) {
                        //length가 0인것은 교통정보가 없으므로 검은색으로 표시

                        lineColor = "#06050D";
                        //라인그리기[S]
                        polyline_ = new Tmapv2.Polyline({
                            path: arrPoint,
                            strokeColor: lineColor,
                            strokeWeight: 6,
                            map: map,
                        });
                        resultdrawArr.push(polyline_);
                        //라인그리기[E]
                    } else {
                        //교통정보가 있음

                        if (traffic[0][0] != 0) {
                            //교통정보 시작인덱스가 0이 아닌경우
                            var trafficObject = "";
                            var tInfo = [];

                            for (var z = 0; z < traffic.length; z++) {
                                trafficObject = {
                                    startIndex: traffic[z][0],
                                    endIndex: traffic[z][1],
                                    trafficIndex: traffic[z][2],
                                };
                                tInfo.push(trafficObject);
                            }

                            var noInfomationPoint = [];

                            for (var p = 0; p < tInfo[0].startIndex; p++) {
                                noInfomationPoint.push(arrPoint[p]);
                            }

                            //라인그리기[S]
                            polyline_ = new Tmapv2.Polyline({
                                path: noInfomationPoint,
                                strokeColor: "#06050D",
                                strokeWeight: 6,
                                map: map,
                            });
                            //라인그리기[E]
                            resultdrawArr.push(polyline_);

                            for (var x = 0; x < tInfo.length; x++) {
                                var sectionPoint = []; //구간선언

                                for (
                                    var y = tInfo[x].startIndex;
                                    y <= tInfo[x].endIndex;
                                    y++
                                ) {
                                    sectionPoint.push(arrPoint[y]);
                                }

                                if (tInfo[x].trafficIndex == 0) {
                                    lineColor = "#06050D";
                                } else if (tInfo[x].trafficIndex == 1) {
                                    lineColor = "#61AB25";
                                } else if (tInfo[x].trafficIndex == 2) {
                                    lineColor = "#FFFF00";
                                } else if (tInfo[x].trafficIndex == 3) {
                                    lineColor = "#E87506";
                                } else if (tInfo[x].trafficIndex == 4) {
                                    lineColor = "#D61125";
                                }

                                //라인그리기[S]
                                polyline_ = new Tmapv2.Polyline({
                                    path: sectionPoint,
                                    strokeColor: lineColor,
                                    strokeWeight: 6,
                                    map: map,
                                });
                                //라인그리기[E]
                                resultdrawArr.push(polyline_);
                            }
                        } else {
                            //0부터 시작하는 경우

                            var trafficObject = "";
                            var tInfo = [];

                            for (var z = 0; z < traffic.length; z++) {
                                trafficObject = {
                                    startIndex: traffic[z][0],
                                    endIndex: traffic[z][1],
                                    trafficIndex: traffic[z][2],
                                };
                                tInfo.push(trafficObject);
                            }

                            for (var x = 0; x < tInfo.length; x++) {
                                var sectionPoint = []; //구간선언

                                for (
                                    var y = tInfo[x].startIndex;
                                    y <= tInfo[x].endIndex;
                                    y++
                                ) {
                                    sectionPoint.push(arrPoint[y]);
                                }

                                if (tInfo[x].trafficIndex == 0) {
                                    lineColor = "#06050D";
                                } else if (tInfo[x].trafficIndex == 1) {
                                    lineColor = "#61AB25";
                                } else if (tInfo[x].trafficIndex == 2) {
                                    lineColor = "#FFFF00";
                                } else if (tInfo[x].trafficIndex == 3) {
                                    lineColor = "#E87506";
                                } else if (tInfo[x].trafficIndex == 4) {
                                    lineColor = "#D61125";
                                }

                                //라인그리기[S]
                                polyline_ = new Tmapv2.Polyline({
                                    path: sectionPoint,
                                    strokeColor: lineColor,
                                    strokeWeight: 6,
                                    map: map,
                                });
                                //라인그리기[E]
                                resultdrawArr.push(polyline_);
                            }
                        }
                    }
                } else {
                }
            } else {
                polyline_ = new Tmapv2.Polyline({
                    path: arrPoint,
                    strokeColor: "#ffee00",
                    strokeWeight: 4,
                    outline: true,
                    outlineColor: "#000000",
                    map: map,
                });
                resultdrawArr.push(polyline_);
            }
        }
        function resettingMap() {
            //기존마커는 삭제
            marker_s.setMap(null);
            marker_e.setMap(null);

            if (resultMarkerArr.length > 0) {
                for (var i = 0; i < resultMarkerArr.length; i++) {
                    resultMarkerArr[i].setMap(null);
                }
            }

            if (resultdrawArr.length > 0) {
                for (var i = 0; i < resultdrawArr.length; i++) {
                    resultdrawArr[i].setMap(null);
                }
            }

            chktraffic = [];
            drawInfoArr = [];
            resultMarkerArr = [];
            resultdrawArr = [];
        }
    }, []);
    const onClick = () => {
        var axios = require("axios");
        var data = JSON.stringify({
            stat_id: statid,
            re_content: getValues("review"),
            re_writer: localStorage.getItem("id_value"),
        });
        console.log(getValues("review"));

        var config = {
            method: "post",
            url: "http://3.36.160.255:8081/api/review",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {})
            .catch(function (error) {
                console.log(error);
            });

        //데이터 업데이트
        var config1 = {
            method: "get",
            url:
                "http://3.36.160.255:8081/api/station?stat_lng=" +
                lng +
                "&stat_lat=" +
                lat,
            headers: {
                Authorization: token,
            },
        };
        axios(config1)
            .then(function (response) {
                setReview(response.data.reviewList);
                console.log(response.data.reviewList);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const [pass, setPass] = useState(0);
    const [resorve, setResove] = useState("");

    function passModal() {
        let charger = stationlist.find((slist) => slist.stat_id == statid);
        console.log(charger);
        return pass == 1 ? (
            <div className="passmodal_background">
                <div className="passModal">
                    <div className="mdPass">
                        <h3>충전기 예약</h3>
                    </div>
                    <div className="closeWrap">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="closeBtn"
                            onClick={() => {
                                setPass(0);
                            }}
                        />
                    </div>
                    <form>
                        <div className="ulType">
                            <div>
                                <ul>
                                    <li
                                        className="typeBtn"
                                        onClick={() => {
                                            setResove(1);
                                        }}
                                    >
                                        1
                                    </li>
                                </ul>
                            </div>
                            <div className="searchTable">
                                <p>예약현황목록</p>
                                <p>
                                    현재 예약된 시간대를 제외하고 입력해주시기
                                    바랍니다.
                                </p>
                                <ul className="timeTable">
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                    <li>09:00 ~ 09:30</li>
                                </ul>
                                <input placeholder="시작시간입력 ex) 1400" />
                                <input placeholder="종료시간입력 ex) 1430" />
                            </div>
                            <div className="resorveTap">
                                <div className="checkTap">
                                    <ul>
                                        <li className="resorveY"></li>
                                        <li>예약가능</li>
                                        <li className="resorveN"></li>
                                        <li>예약불가</li>
                                    </ul>
                                </div>
                                <div className="resorveCheckTap">
                                    <ul>
                                        <li className="resorveY">
                                            <p>선택한충전기</p>
                                        </li>
                                        <li className="resorveN">
                                            <p>{resorve}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resorveCheckTap2">
                                    <ul>
                                        <li className="resorveN2 ">
                                            <p
                                                onClick={() => {
                                                    alert(
                                                        "예약이 완료되었습니다."
                                                    );
                                                }}
                                            >
                                                예약
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        ) : null;
    }

    return (
        <>
            {/* <ModalNotify /> */}
            <div data-aos="fade-down" data-aos-duration="1000">
                <BannerMap />
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
                                    ROADMAP
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
                </div>
            </div>
            <div className="end"></div>
            <div className="contentsInquiry">
                <div className="banner">
                    <p className="banner-title">충전소 조회</p>
                    <br></br>
                    <p className="subtitle">
                        전국 전기차 충전소 위치 및 관련 정보들을 손쉽게 확인
                        하실 수 있습니다.
                    </p>
                </div>
                <div class="char-search">
                    <form onSubmit={handleSubmit}>
                        <select
                            className="sigugun"
                            name="sido1"
                            id="sido1"
                        ></select>
                        <select
                            className="sigugun"
                            name="gugun1"
                            id="gugun1"
                        ></select>
                        <input
                            className="insert"
                            name="searchKeyword"
                            placeholder="충전소"
                            type="text"
                        />

                        <input
                            type="submit"
                            className="search-btn"
                            value="검색"
                        />
                    </form>
                </div>
                <div className="inquiry_box">
                    <div className="left_box">
                        <div className="chargeMap_box">
                            <div>
                                <div className="map">
                                    <div className="map_div" id="map_div"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right_box">
                        <div className="chargeInfo_box">
                            <div className="charge_title">
                                <h1 className="charge_name">
                                    충전소 명 :
                                    {station.map((a) => (
                                        <span>{a.stat_nm}</span>
                                    ))}
                                </h1>
                                <button className="report_btn">
                                    <FontAwesomeIcon
                                        icon={faExclamationTriangle}
                                        className="notify_btn"
                                        title="고장신고"
                                    />
                                </button>
                            </div>

                            <div className="infomation">
                                <ul>
                                    <li>
                                        <p className="info-p">도로명 주소</p>
                                        {station.map((a) => (
                                            <span>{a.stat_addr}</span>
                                        ))}
                                    </li>
                                    <li>
                                        <p className="info-p">이용가능시간</p>
                                        <span>24시간 이용가능</span>
                                    </li>
                                    <li>
                                        <p className="info-p">연락처</p>
                                        <span>1522-2573</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="now">
                                <p className="now-title">
                                    충전기 정보
                                    {reviewtag == false ? (
                                        <button
                                            className="rsvt-btn"
                                            type="button"
                                            onClick={() => {
                                                setPass(!pass);
                                            }}
                                            disabled
                                        >
                                            예약
                                        </button>
                                    ) : (
                                        <button
                                            className="rsvt-btn"
                                            type="button"
                                            onClick={() => {
                                                setPass(!pass);
                                            }}
                                        >
                                            예약
                                        </button>
                                    )}
                                </p>
                                {passModal()}
                                <table className="now-list">
                                    <thead>
                                        <tr>
                                            <th>순번</th>
                                            <th>충전기 타입</th>
                                            <th>충전기 상태</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>승용차 AC 완속</td>
                                            <td>충전대기</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>승용차 AC 완속</td>
                                            <td>충전대기</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>승용차 AC 완속</td>
                                            <td>충전대기</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>승용차 AC 완속</td>
                                            <td>충전대기</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="review_box">
                        <p className="review-title">충전소 리뷰</p>
                        <div className="review_list">
                            <table className="review_table">
                                <tbody className="review_tbody">
                                    {review.map((review) => {
                                        <tr className="re_tr">
                                            <td className="re_input">
                                                {review.re_content}
                                            </td>
                                            <td className="re_td_date">
                                                2021-03-26
                                            </td>
                                            <td className="re_td_id">
                                                {review.re_writer}
                                            </td>
                                        </tr>;
                                    })}
                                    {review.map((rev) => (
                                        <tr className="re_tr">
                                            <td className="re_input">
                                                {rev.re_content}
                                            </td>
                                            <td className="re_td_date">
                                                {rev.date}
                                            </td>
                                            <td className="re_td_id">
                                                {rev.re_writer}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <form>
                            <div className="review_input">
                                {reviewtag == false ? (
                                    <input
                                        className="review_text"
                                        type="text"
                                        placeholder="리뷰를 입력해주세요."
                                        disabled
                                    />
                                ) : (
                                    <input
                                        ref={register}
                                        className="review_text"
                                        type="text"
                                        placeholder="리뷰를 입력해주세요."
                                        name="review"
                                    />
                                )}
                                {reviewtag == false ? (
                                    <button
                                        disabled
                                        type="button"
                                        onClick={onClick}
                                        className="create"
                                    >
                                        입 력
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={onClick}
                                        className="create"
                                    >
                                        입 력
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                    <p className="review-title">주변 시설</p>
                    <div className="facility_box">
                        <table className="now-list">
                            <thead>
                                <tr>
                                    <th>시설명</th>
                                    <th>시설정보</th>
                                    <th>전화번호</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facilityList.map((fac) => (
                                    <tr>
                                        <td>{fac.name}</td>
                                        <td>승용차 AC 완속</td>
                                        <td>충전대기</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inquiry;
