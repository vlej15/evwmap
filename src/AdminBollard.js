import React from "react";
import "./css/AdminBollard.scss";
import { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

const { Tmapv2 } = window;

var lat = 1;
var lng = 1;

var map;

function AdminBollard(props) {
    const onSubmit = (data) => console.log(data);
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
        // props.setCount(0);

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
                // console.log(JSON.stringify(response.data));
                setStationlist(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        const map = new Tmapv2.Map("map_div", {
            center: new Tmapv2.LatLng(a1, a2),
            // 지도가 생성될 div
            width: "100%", // 지도의 넓이
            height: "500px", // 지도의 높이
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
            url: "http://3.36.197.174:8081/api/review",
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

    const [pass, setPass] = useState(0);
    const [resorve, setResove] = useState("");

    return (
        <div className="contentsAdminBollard">
            <div className="banner">
                <p className="banner-title">볼라드 관리</p>
            </div>
            <div className="content-box">
                {/* <div className="scroll_content02"> */}
                <div className="left-box">
                    <div className="bollard-list">
                        {/* 밑 div에 필요한 태그 추가해서 차량정보, 기관정보 배치하면 될 듯 */}
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                        <div className="vehicle">충전기 목록</div>
                    </div>
                    <div className="list-search">
                        <form class="search-form">
                            <button type="submit" className="search-button">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="search_btn"
                                />
                            </button>
                            <input
                                type="search"
                                value=""
                                placeholder="Search"
                                class="search-input"
                            />
                        </form>
                    </div>
                </div>

                <div className="right-box">
                    <div className="bollard-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-id">
                                <label for="">
                                    <p className="form-label">충전소 ID</p>
                                </label>
                                <input
                                    className="input-text"
                                    name="id"
                                    placeholder="충전소 ID"
                                />
                            </div>{" "}
                            {/* form-id end */}
                            <div className="form-type">
                                <label for="">
                                    <p className="form-label">충전기 타입</p>
                                </label>
                                <select>
                                    <option value="">충전기 타입</option>
                                    <option value="DC차데모">DC차데모</option>
                                    <option value="AC3상">AC3상</option>
                                    <option value="DC콤보">DC콤보</option>
                                </select>
                            </div>{" "}
                            {/*form-type end*/}
                            <input
                                type="submit"
                                className="submit-btn"
                                value="등록"
                            ></input>
                            <div className="form-state">
                                <label for="">
                                    <p className="form-label">상태</p>
                                </label>
                                <div className="radio-area">
                                    <label for="good">
                                        <input
                                            ref={register({ required: true })}
                                            className="form_type"
                                            name="check"
                                            value="0"
                                            type="radio"
                                            id="good"
                                            required
                                        />
                                        <span>사용가능</span>
                                    </label>
                                    <label for="hate">
                                        <input
                                            ref={register({ required: true })}
                                            className="form_type"
                                            name="check"
                                            value="1"
                                            type="radio"
                                            id="hate"
                                        />{" "}
                                        <span>점검중</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-location">
                                <label for="">
                                    <p className="form-label">위도</p>
                                </label>
                                <input
                                    className="input-text"
                                    placeholder="위도"
                                />
                                <label for="">
                                    <p className="form-label2">경도</p>
                                </label>
                                <input
                                    className="input-text"
                                    placeholder="경도"
                                />
                            </div>
                            {/* form-location end */}
                            <div className="map-area">
                                <div>
                                    <div className="map_div" id="map_div"></div>
                                </div>
                            </div>
                            <div className="btn-area">
                                <input
                                    type="submit"
                                    value="수정하기"
                                    className="change-btn"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminBollard;
