import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Resolve1.scss";
import "./css/inquiry.scss";
import { Link } from "react-router-dom";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

const { Tmapv2 } = window;



function Inquiry() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    $("document").ready(function () {
      var area0 = [
        "시/도 선택",
        "서울특별시",
        "인천광역시",
        "대전광역시",
        "광주광역시",
        "대구광역시",
        "울산광역시",
        "부산광역시",
        "경기도",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주도",
      ];
      var area1 = [
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구",
      ];
      var area2 = [
        "계양구",
        "남구",
        "남동구",
        "동구",
        "부평구",
        "서구",
        "연수구",
        "중구",
        "강화군",
        "옹진군",
      ];
      var area3 = ["대덕구", "동구", "서구", "유성구", "중구"];
      var area4 = ["광산구", "남구", "동구", "북구", "서구"];
      var area5 = [
        "남구",
        "달서구",
        "동구",
        "북구",
        "서구",
        "수성구",
        "중구",
        "달성군",
      ];
      var area6 = ["남구", "동구", "북구", "중구", "울주군"];
      var area7 = [
        "강서구",
        "금정구",
        "남구",
        "동구",
        "동래구",
        "부산진구",
        "북구",
        "사상구",
        "사하구",
        "서구",
        "수영구",
        "연제구",
        "영도구",
        "중구",
        "해운대구",
        "기장군",
      ];
      var area8 = [
        "고양시",
        "과천시",
        "광명시",
        "광주시",
        "구리시",
        "군포시",
        "김포시",
        "남양주시",
        "동두천시",
        "부천시",
        "성남시",
        "수원시",
        "시흥시",
        "안산시",
        "안성시",
        "안양시",
        "양주시",
        "오산시",
        "용인시",
        "의왕시",
        "의정부시",
        "이천시",
        "파주시",
        "평택시",
        "포천시",
        "하남시",
        "화성시",
        "가평군",
        "양평군",
        "여주군",
        "연천군",
      ];
      var area9 = [
        "강릉시",
        "동해시",
        "삼척시",
        "속초시",
        "원주시",
        "춘천시",
        "태백시",
        "고성군",
        "양구군",
        "양양군",
        "영월군",
        "인제군",
        "정선군",
        "철원군",
        "평창군",
        "홍천군",
        "화천군",
        "횡성군",
      ];
      var area10 = [
        "제천시",
        "청주시",
        "충주시",
        "괴산군",
        "단양군",
        "보은군",
        "영동군",
        "옥천군",
        "음성군",
        "증평군",
        "진천군",
        "청원군",
      ];
      var area11 = [
        "계룡시",
        "공주시",
        "논산시",
        "보령시",
        "서산시",
        "아산시",
        "천안시",
        "금산군",
        "당진군",
        "부여군",
        "서천군",
        "연기군",
        "예산군",
        "청양군",
        "태안군",
        "홍성군",
      ];
      var area12 = [
        "군산시",
        "김제시",
        "남원시",
        "익산시",
        "전주시",
        "정읍시",
        "고창군",
        "무주군",
        "부안군",
        "순창군",
        "완주군",
        "임실군",
        "장수군",
        "진안군",
      ];
      var area13 = [
        "광양시",
        "나주시",
        "목포시",
        "순천시",
        "여수시",
        "강진군",
        "고흥군",
        "곡성군",
        "구례군",
        "담양군",
        "무안군",
        "보성군",
        "신안군",
        "영광군",
        "영암군",
        "완도군",
        "장성군",
        "장흥군",
        "진도군",
        "함평군",
        "해남군",
        "화순군",
      ];
      var area14 = [
        "경산시",
        "경주시",
        "구미시",
        "김천시",
        "문경시",
        "상주시",
        "안동시",
        "영주시",
        "영천시",
        "포항시",
        "고령군",
        "군위군",
        "봉화군",
        "성주군",
        "영덕군",
        "영양군",
        "예천군",
        "울릉군",
        "울진군",
        "의성군",
        "청도군",
        "청송군",
        "칠곡군",
      ];
      var area15 = [
        "거제시",
        "김해시",
        "마산시",
        "밀양시",
        "사천시",
        "양산시",
        "진주시",
        "진해시",
        "창원시",
        "통영시",
        "거창군",
        "고성군",
        "남해군",
        "산청군",
        "의령군",
        "창녕군",
        "하동군",
        "함안군",
        "함양군",
        "합천군",
      ];
      var area16 = ["서귀포시", "제주시", "남제주군", "북제주군"];

      // 시/도 선택 박스 초기화
      $("select[name^=sido]").each(function () {
        console.log($(this));
        let selsido = $(this);
        $.each(eval(area0), function () {
          selsido.append("<option value='" + this + "'>" + this + "</option>");
        });
        selsido.next().append("<option value=''>구/군 선택</option>");
      });
      // 시/도 선택시 구/군 설정

      $("select[name^=sido]").change(function () {
        var area =
          "area" + $("option", $(this)).index($("option:selected", $(this))); // 선택지역의 구군 Array
        var $gugun = $(this).next(); // 선택영역 군구 객체
        $("option", $gugun).remove(); // 구군 초기화

        if (area == "area0") $gugun.append("<option value=''>구/군 선택</option>");
        else {
          $.each(eval(area), function () {
            $gugun.append("<option value='" + this + "'>" + this + "</option>");
          });
        }

        // 시/도 선택 박스 초기화
        $("select[name^=sido]").each(function () {
          console.log($(this));
          let selsido = $(this);
          $.each(eval(area0), function () {
            selsido.append("<option value='" + this + "'>" + this + "</option>");
          });
          selsido.next().append("<option value=''>구/군 선택</option>");
        });
        // 시/도 선택시 구/군 설정

<<<<<<< Updated upstream
        $("select[name^=sido]").change(function () {
          var area =
            "area" + $("option", $(this)).index($("option:selected", $(this))); // 선택지역의 구군 Array
          var $gugun = $(this).next(); // 선택영역 군구 객체
          $("option", $gugun).remove(); // 구군 초기화

          if (area == "area0")
            $gugun.append("<option value=''>구/군 선택</option>");
          else {
            $.each(eval(area), function () {
              $gugun.append("<option value='" + this + "'>" + this + "</option>");
            });
          }
        });
      });
    });
    var map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(35.89584, 128.622362),
=======
function Inquiry(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const a1 = props.a1;
  const a2 = props.a2;
  const marker = props.marker;
  let lat = 0;
  let lng = 0;
  var map;
  var markerInfo;
  //출발지,도착지 마커
  var marker_s, marker_e, marker_p, markers, marker_a;
  //경로그림정보
  var drawInfoArr = [];
  var drawInfoArr2 = [];

  var chktraffic = [];
  var resultdrawArr = [];
  var resultMarkerArr = [];

  useEffect(() => {
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(a1, a2),
>>>>>>> Stashed changes
      // 지도가 생성될 div
      width: "555px", // 지도의 넓이
      height: "400px", // 지도의 높이
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
        lat = mk.stat_lat;
        lng = mk.stat_lng;
        console.log(lat, lng);
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
            (resultData[0].properties.totalDistance / 1000).toFixed(1) +
            "km,";
          var tTime =
            " 총 시간 : " +
            (resultData[0].properties.totalTime / 60).toFixed(0) +
            "분,";
          var tFare =
            " 총 요금 : " + resultData[0].properties.totalFare + "원,";

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
                  markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
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
                  markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
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

                for (var y = tInfo[x].startIndex; y <= tInfo[x].endIndex; y++) {
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

                for (var y = tInfo[x].startIndex; y <= tInfo[x].endIndex; y++) {
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

  const [pass, setPass] = useState(0);
  const [resorve, setResove] = useState("");

  function passModal() {
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
                  <li
                    className="typeBtn"
                    onClick={() => {
                      setResove(2);
                    }}
                  >
                    2
                  </li>
                  <li
                    className="typeBtn"
                    onClick={() => {
                      setResove(3);
                    }}
                  >
                    3
                  </li>
                  <li
                    className="typeBtn"
                    onClick={() => {
                      setResove(4);
                    }}
                  >
                    4
                  </li>
                  <li
                    className="typeBtn"
                    onClick={() => {
                      setResove(5);
                    }}
                  >
                    5
                  </li>
                </ul>
              </div>
              <div className="searchTable">
                <p>예약현황목록</p>
                <p>현재 예약된 시간대를 제외하고 입력해주시기 바랍니다.</p>
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
                          alert("예약이 완료되었습니다.");
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
      <div className="FlocationData">
        <div className="inner">
          <div className="btnHome">
            <i class="fas fa-home"></i>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <div className="navMenu">
                  COMMUNITY
                  <div className="navInnerMenu">
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
                <ul className="navList">
                  <Link to="/introduction">
                    <li>
                      <a>INTRODUCTION</a>
                    </li>
                  </Link>
                  <Link to="/map">
                    <li>
                      <a>MAP</a>
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
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <a>
                  <div className="navMenu">
                    FREE BOARD
                    <div className="navInnersMenu">
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </a>
                <ul className="navList">
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
      <div className="end"></div>
      <div className="contentsInquiry">
        <div className="banner">
          <p className="banner-title">충전소 조회</p>
          <br></br>
          <p className="subtitle">
            전국 전기차 충전소 위치 및 관련 정보들을 손쉽게 확인 하실 수
            있습니다.
          </p>
        </div>
        <div class="char-search">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div class="ft_area">
              <div class="ft_select_wrap">
                <div class="ft_select">
                  <select id="selectLevel">
                    <option value="0" selected="selected">
                      교통최적+추천
                    </option>
                    <option value="1">교통최적+무료우선</option>
                    <option value="2">교통최적+최소시간</option>
                    <option value="3">교통최적+초보</option>
                    <option value="4">교통최적+고속도로우선</option>
                    <option value="10">최단거리+유/무료</option>
                    <option value="12">이륜차도로우선</option>
                    <option value="19">교통최적+어린이보호구역 회피</option>
                  </select>
                  <select id="year">
                    <option value="N" selected="selected">
                      교통정보 표출 옵션
                    </option>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                  <button id="btn_select">길 찾기</button>
                </div>
              </div>
              <div class="map_act_btn_wrap clear_box"></div>
              <div class="clear"></div>
            </div>
            <div className="facility_box">
              <div className="facility_info">주변 시설 정보</div>
            </div>
          </div>
          <div className="right_box">
            <div className="chargeInfo_box">
              <div className="charge_title">
                <h1 className="charge_name">
                  [대영채비] 영진전문대학 글로벌캠퍼스
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
                    <span>
                      경상북도 칠곡군 지천면 금송로 60 입구 야외 주차장
                    </span>
                  </li>
                  <li>
                    <p className="info-p">이용가능시간</p>
                    <span>24시간 이용가능</span>
                  </li>
                  <li>
                    <p className="info-p">연락처</p>
                    <span>1522-2573</span>
                  </li>
                  <li>
                    <p className="info-p">경로안내</p>
                    <div class="map_act_btn_wrap clear_box"></div>
                    <p id="result"></p>
                  </li>
                </ul>
              </div>
              <div className="now">
                <p className="now-title">
                  충전기 정보
                  <button
                    className="rsvt-btn"
                    type="button"
                    onClick={() => {
                      setPass(!pass);
                    }}
                  >
                    예약
                  </button>
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
                  </tbody>
                </table>
              </div>
            </div>
            <div className="review_box">
              <p className="review-title">충전소 리뷰</p>
              <div className="review_list">
                <table className="review_table">
                  <tbody className="review_tbody">
                    <tr className="re_tr">
                      <td className="re_input">전기에 감전됏서요</td>
                      <td className="re_td_date">2021-03-26</td>
                      <td className="re_td_id">피카츄</td>
                    </tr>
                    <tr className="re_tr">
                      <td className="re_input">
                        다가갔더니 불 붙어서 터졋어요
                      </td>
                      <td className="re_td_date">2021-03-26</td>
                      <td className="re_td_id">파이리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="review_input">
                <input
                  className="review_text"
                  type="text"
                  placeholder="리뷰를 입력해주세요."
                />
                <button className="create">입력</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inquiry;
