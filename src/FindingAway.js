import React, { useState, useEffect } from "react";
// import Inquiry from "./Inquiry";
import "./css/FindingAway.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Tmapv2 } = window;

function FindingAWay() {
  useEffect(() => {
    var map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(35.89584, 128.622362),
      // 지도가 생성될 div
      width: "800px", // 지도의 넓이
      height: "600px", // 지도의 높이
      zoom: 17,
    });
    var marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(35.89584, 128.622362), //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      offset: new Tmapv2.Point(12, 38), // 마커 아이콘의 오프셋 설정(생략시 Point(폭/2, 높이)로 설정)
      icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png", //마커 아이콘 설정.(생략시 기본이미지 적용)
      iconSize: new Tmapv2.Size(24, 38), //마커 아이콘 사이즈 (생략시 이미지의 크기 적용)
    });
  }, []);

  return (
    <div>
      {/* {console.log("a1 = " + a1, "a2 = " + a2)} */}
      <div className="end"></div>
      <div className="faw-content">
        <div className="faw-title">
          <p className="title-input">길찾기</p>
          <br />
          <p className="title-p">
            현재 위치로부터 원하는 충전소까지의 길을 찾을 수 있습니다.
          </p>
        </div>
        <div className="faw-box">
          <div className="map-content-box">
            <div>
              <div className="map">
                <div className="map_div" id="map_div"></div>
              </div>
            </div>
          </div>
          <div className="faw-input-box">
            <div className="city-select-box">
              <div className="first">
                {/* <p className="city-p">city</p> */}
                <select className="city">
                  <option value="1">대구광역시</option>
                </select>
              </div>
              <div className="second">
                {/* <p className="dong-p">dong</p> */}
                <select className="gu">
                  <option value="1">중구</option>
                  <option value="2">남구</option>
                  <option value="3">서구</option>
                  <option value="4">북구</option>
                  <option value="5">동구</option>
                  <option value="6">수성구</option>
                  <option value="7">달서구</option>
                  <option value="8">달성군</option>
                </select>
              </div>
              <div className="fawbtn-box">
                <button className="select-btn" type="submit">
                  <FontAwesomeIcon icon={faSearch} className="faw-search_btn" />
                </button>
              </div>
            </div>
            <div className="select-list">
              <div className="list-box">
                <div className="list-arr">목록1</div>
                <div className="list-arr">목록2</div>
                <div className="list-arr">목록3</div>
                <div className="list-arr">목록4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindingAWay;
