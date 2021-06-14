import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    faHeart as fasHeart,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
// library.add(faCheckSquare, faCoffee)

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Resolve1.scss";
import "./css/inquiry.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import DatePicker from "react-datepicker";
import { NCPClient } from "node-sens";
import BannerMap from "./BannerMap";
import ModalNotify from "./ModalNotify";

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
    const [stime, setStime] = useState("00");
    const [sminute, setSminute] = useState("00");
    const [etime, setEtime] = useState("00");
    const [eminute, setEminute] = useState("00");
    const [report, setReport] = useState(0);
    const [chargerList, setChargerList] = useState([]);
    const [Clist, setClist] = useState([]);
    const [reservationTime, setReservationTime] = useState([]);
    const [heart, setHeart] = useState(false);
    const [facilityListId, setfacilityListId] = useState([]);

    const [heartList, setHeartList] = useState([]);

    // const [hearts, setHearts] = useState([]);
    // const [nextId, setNextId] = useState(0);

    const handleHeart = (a) => {
        setHeart(!heart);
        console.log("넘겨받은 아이디" + a);
        console.log(localStorage.getItem("id_value"));

        var axios = require("axios");
        var data = JSON.stringify({
            fac_id: a,
            u_id: localStorage.getItem("id_value"),
        });

        var config = {
            method: "post",
            url: "http://3.36.197.174:8081/api/fac/up",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month =
        today.getMonth() + 1 < 10
            ? "0" + (today.getMonth() + 1)
            : today.getMonth() + 1;
    let date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate(); // 날짜
    console.log("오늘의 날짜는??? " + date);

    const fullDate = year + "-" + month + "-" + date + "T";

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
        console.log("오늘의 날짜" + year + month + date);
        //header
        props.setCount(0);

        //충전기 정보 받아오는 곳
        var axios = require("axios");

        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/station/list",
            headers: {
                Authorization: token,
            },
        };

        axios(config)
            .then(function (response) {
                console.log("충전소리스트" + JSON.stringify(response.data));
                setStationlist(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        const map = new Tmapv2.Map("map_div", {
            center: new Tmapv2.LatLng(a1, a2),
            // 지도가 생성될 div
            width: "100%", // 지도의 넓이
            height: "592px", // 지도의 높이
        });

        marker.map((mk) => {
            markers = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(mk.stat_lat, mk.stat_lng),
                icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
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
                        "http://3.36.197.174:8081/api/station?stat_lng=" +
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
                        setfacilityListId(response.data.facilityList.id);
                        setReviewtag(true);
                        setStatid(response.data.station[0].stat_id);
                        setChargerList(response.data.chargerList);
                        setClist(
                            chargerList.filter(chargerList.chg_rsvt == "Y")
                        );
                        console.log("예약가능좌석" + Clist);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        });

        marker_s = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(a1, a2),
            icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_s.png",
            iconSize: new Tmapv2.Size(24, 38),
            map: map,
        });
        marker_e = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(lng, lat),
            icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
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
                url: "https://apis.openapi.sk.com/tmap/routes?version=1&format=json&callback=result",
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
                        "총 시간 : " +
                        (resultData[0].properties.totalTime / 60).toFixed(0) +
                        "분";

                    $("#result").text(tDistance + tTime);

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
                                    var convertPoint =
                                        new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
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
                                var convertPoint =
                                    new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
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
                                    var convertPoint =
                                        new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
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
                                var convertPoint =
                                    new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
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

        var config = {
            method: "post",
            url: "http://3.36.197.174:8081/api/review",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) { })
            .catch(function (error) {
                console.log(error);
            });

        //데이터 업데이트
        var config1 = {
            method: "get",
            url:
                "http://3.36.197.174:8081/api/station?stat_lng=" +
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
    function revDelete(props) {
        const dtt = props;
        console.log(dtt);
        var data = JSON.stringify({
            re_writer: "user",
            re_reg_dtt: dtt,
        });

        var config = {
            method: "delete",
            url: "http://3.36.197.174:8081/api/review",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        var config1 = {
            method: "get",
            url:
                "http://3.36.197.174:8081/api/station?stat_lng=" +
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
    }

    const [pass, setPass] = useState(0);
    const [resorve, setResove] = useState("");

    function resolve(props) {
        var axios = require("axios");
        var data = JSON.stringify({
            stat_id: props,
            chg_id: "1",
            rsvt_start:
                fullDate +
                getValues("stime") +
                ":" +
                getValues("sminute") +
                ":00",
            rsvt_end:
                fullDate +
                getValues("etime") +
                ":" +
                getValues("eminute") +
                ":00",
            u_id: localStorage.getItem("id_value"),
        });
        console.log(
            "포스트맨 값 " +
            fullDate +
            getValues("stime") +
            ":" +
            getValues("sminute") +
            ":00"
        );

        var config = {
            method: "post",
            url: "http://3.36.197.174:8081/api/reservation",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log("ddddd");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function passModal() {
        const charger = statid;
        console.log(charger);

        var axios = require('axios');

        const reservation = (props) => {
            var config = {
                method: 'get',
                url: 'http://3.36.197.174:8081/api/todays-reservation?chg_id=' +
                    props + "&stat_id=" + statid,
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VyIiwiaWF0IjoxNjIzNjY3OTkwLCJleHAiOjE2MjM2ODU5OTB9.-COeaYr6Ao01Ss0zSnAyu4oNoOzy6ZVs57kmE1_1lEwPVlofNSuN-yoc_wQoGU9aez_TmDBwE7vFKqyiIJgJoQ'
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }



        // const reservation = (props) => {
        //     var config = {
        //         method: "get",
        //         url:
        //             "http://3.36.197.174:8081/api/todays-reservation?chg_id=" +
        //             props +
        //             "&stat_id=" +
        //             statid,
        //         headers: {
        //             Authorization: token,
        //         },
        //     };

        //     axios(config)
        //         .then(function (response) {
        //             console.log(JSON.stringify(response.data));
        //             setReservationTime(response.data);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // };

        $()
        return pass == 1 ? (
            <div className="passmodal_background">
                <div className="contentsModal">
                    {" "}
                    {/* 모달 흰배경 */}
                    <div className="modal-area">
                        <div className="close-area">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="closeBtn"
                                onClick={() => {
                                    setPass(0);
                                }}
                            />
                        </div>
                        <div className="banner">
                            <p className="banner-title">충전기 예약</p>
                            <p className="banner-subtitle">
                                충전기 선택 후 아래 표기된 시간대를 제외하고
                                입력해주세요.
                            </p>
                            <p className="banner-subtitle2">
                                * 선택 가능한 충전기가 없을 경우 예약이 불가능한
                                충전소 입니다 *
                            </p>
                        </div>
                        <form>
                            <div className="modal-form">
                                <div className="click-time">
                                    {chargerList.map((list) =>
                                        list.chg_rsvt == "Y" ? (
                                            <button
                                                className="click-btn"
                                                type="button"
                                                onClick={() => {
                                                    reservation(list.chg_id);
                                                }}
                                            >
                                                {list.chg_id}
                                            </button>
                                        ) : null
                                    )}

                                    {/* 예약 테이블 */}
                                    <ul className="timeTable">
                                        {reservationTime.map((list) => (
                                            <li>예약시간</li>
                                        ))}
                                    </ul>
                                    {/* 예약 테이블 끝 */}

                                    {/* <div className="calender"></div> */}

                                    <div className="select-time">
                                        <div className="select-wrap">
                                            <p className="select-title">
                                                예약시간 선택
                                        </p>
                                            <p className="select-start">시작시간</p>
                                            <select
                                                ref={register}
                                                name="stime"
                                                id=""
                                                onChange={() => {
                                                    setStime(getValues("stime"));
                                                }}
                                            >
                                                <option value="00">00</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                            </select>
                                            <select
                                                ref={register}
                                                name="sminute"
                                                id=""
                                                onChange={() => {
                                                    setSminute(
                                                        getValues("sminute")
                                                    );
                                                }}
                                            >
                                                <option value="00">00</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                                <option value="40">40</option>
                                                <option value="50">50</option>
                                            </select>

                                            <p className="select-end">종료시간</p>
                                            <select
                                                ref={register}
                                                name="etime"
                                                onChange={() => {
                                                    setEtime(getValues("etime"));
                                                }}
                                            >
                                                <option value="00">00</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                            </select>
                                            <select
                                                ref={register}
                                                name="eminute"
                                                id=""
                                                onChange={() => {
                                                    setEminute(
                                                        getValues("eminute")
                                                    );
                                                }}
                                            >
                                                <option value="00">00</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                                <option value="40">40</option>
                                                <option value="50">50</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="output-time">
                                    <ul>
                                        <li className="output-title">
                                            <p>
                                                <span>시작시간 :</span>
                                            </p>
                                        </li>
                                        <li className="output-time">
                                            {stime}:{sminute}
                                        </li>
                                        <li className="li-n">
                                            <p>~</p>
                                        </li>
                                        <li className="output-title">
                                            <p>
                                                <span>종료시간 :</span>
                                            </p>
                                        </li>
                                        <li className="output-time">
                                            {etime}:{eminute}
                                        </li>
                                    </ul>
                                </div>
                                <p
                                    onClick={() => {
                                        resolve(charger);
                                    }}
                                    className="rsvt-submit"
                                >
                                    예약
                                </p>
                                {/* <div className="resorveTap">
                  <div className="resorveCheckTap2">
                    <ul>
                      <li className="resorveN2 ">
                        <p
                          onClick={() => {
                            resolve(charger);
                          }}
                        >
                          예약
                      </p>
                      </li>
                    </ul>
                  </div>
                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        ) : null;
    }

    $(document).ready(function () {
        $(".click-btn").off("click").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            }
            else {
                $(this).addClass("active");
            }
        });
    });

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
            <ModalNotify
                report={report}
                setReport={setReport}
                statid={statid}
            />
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
                {/* <div class="char-search">
          <form onSubmit={handleSubmit}>
            <select className="sigugun" name="sido1" id="sido1"></select>
            <select className="sigugun" name="gugun1" id="gugun1"></select>
            <input
              className="insert"
              name="searchKeyword"
              placeholder="충전소"
              type="text"
            />

            <input type="submit" className="search-btn" value="검색" />
          </form>
        </div> */}
                <div className="inquiry_box">
                    <div className="first-wrap">
                        <div className="left_box">
                            <div class="select-box">
                                <select id="selectLevel" className="select01">
                                    <option value="0" selected="selected">
                                        교통최적 + 추천
                                    </option>
                                    <option value="1">
                                        교통최적 + 무료우선
                                    </option>
                                    <option value="2">
                                        교통최적 + 최소시간
                                    </option>
                                    <option value="3">교통최적 + 초보</option>
                                    <option value="4">
                                        교통최적 + 고속도로우선
                                    </option>
                                    <option value="10">
                                        최단거리 + 유/무료
                                    </option>
                                    <option value="12">이륜차도로우선</option>
                                    <option value="19">
                                        교통최적 + 어린이보호구역 회피
                                    </option>
                                </select>{" "}
                                <select id="year" className="select02">
                                    <option value="N" selected="selected">
                                        교통정보 표출 옵션
                                    </option>
                                    <option value="Y">Y</option>
                                    <option value="N">N</option>
                                </select>
                                <button id="btn_select" className="submit-btn">
                                    적용하기
                                </button>
                            </div>
                            <div className="chargeMap_box">
                                <div className="map_div" id="map_div"></div>
                            </div>

                            {/* chargeMap_box end */}
                        </div>
                        {/* left_box end */}

                        <div className="right_box">
                            <div className="chargeInfo_box">
                                <div className="charge_title">
                                    <h1 className="charge_name">
                                        충전소 명 :
                                        {station.map((a) => (
                                        <span>{a.stat_nm}</span>
                                    ))}
                                    </h1>
                                    {reviewtag == false ? (
                                        <button className="report_btn">
                                            <FontAwesomeIcon
                                                icon={faExclamationTriangle}
                                                className="notify_btn"
                                                title="고장신고"
                                                onClick={() => {
                                                    setReport(!report);
                                                }}
                                                disabled
                                            />
                                        </button>
                                    ) : (
                                            <button className="report_btn">
                                                <FontAwesomeIcon
                                                    icon={faExclamationTriangle}
                                                    className="notify_btn"
                                                    title="고장신고"
                                                    onClick={() => {
                                                        setReport(!report);
                                                    }}
                                                />
                                            </button>
                                        )}
                                </div>

                                <div className="infomation">
                                    <ul>
                                        <li>
                                            <p className="info-p">
                                                도로명 주소
                                            </p>
                                            {station.map((a) => (
                                                <span>{a.stat_addr}</span>
                                            ))}
                                        </li>
                                        <li>
                                            <p className="info-p">
                                                이용가능시간
                                            </p>
                                            <span>24시간 이용가능</span>
                                        </li>
                                        <li>
                                            <p className="info-p">연락처</p>
                                            <span>1522-2573</span>
                                        </li>
                                        <li>
                                            <p className="info-p">경로안내</p>
                                            <span id="result"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div id="map_wrap" class="map_wrap">
                                    <div id="map_div"></div>
                                </div>
                                <div class="map_act_btn_wrap clear_box"></div>
                                {/* <p id="result"></p> */}
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
                                    <div className="list-wrap">
                                        <table className="now-list">
                                            <thead>
                                                <tr>
                                                    <th>순번</th>
                                                    <th>충전기 타입</th>
                                                    <th>예약가능 여부</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {chargerList.map((list) => (
                                                    <tr>
                                                        <td>{list.chg_id}</td>
                                                        <td>{list.chg_type}</td>
                                                        <td>{list.chg_rsvt}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="second-wrap">
                        <div className="review_box">
                            <p className="review-title">충전소 리뷰</p>
                            <div className="review_list">
                                <table className="review_table">
                                    <tbody className="review_tbody">
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
                                                <td className="re_td_icon">
                                                    <i
                                                        class="fas fa-minus-circle"
                                                        onClick={() => {
                                                            revDelete(
                                                                rev.re_reg_dtt
                                                            );
                                                        }}
                                                    ></i>
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
                        <div className="facility_box">
                            <p className="facility-title">주변 시설</p>
                            <div className="list-wrap">
                                <table className="facility-list">
                                    <thead>
                                        <tr className="headth">
                                            <th className="th-b">시설명</th>
                                            <th>주소</th>
                                            <th className="th-s">추천수</th>
                                            <th className="th-s">추천</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {console.log(facilityList)}
                                        {facilityList.map((fac, index) => (
                                            <tr>
                                                <td>{fac.name}</td>
                                                <td>{fac.addr}</td>
                                                <td>{fac.up}</td>
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            handleHeart(fac.id);

                                                            const heartIdx = heartList.findIndex((_heart) => _heart === fac.id);

                                                            if (heartIdx === -1) {
                                                                const list = [...heartList];
                                                                list.push(fac.id);
                                                                setHeartList(list);
                                                            } else {
                                                                const list = [...heartList];
                                                                list.splice(heartIdx, 1);
                                                                setHeartList(list);
                                                            }
                                                        }}
                                                    >
                                                        {heartList.includes(fac.id) ? (
                                                            <FontAwesomeIcon
                                                                icon={fasHeart}
                                                            />
                                                        ) : (
                                                                <FontAwesomeIcon
                                                                    icon={farHeart}
                                                                    className="heartBtn"
                                                                />
                                                            )}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inquiry;
