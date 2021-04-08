import React, { useEffect } from "react";
import "./css/inquiry.scss";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Tmapv2 } = window;

function Inquiry() {
  useEffect(() => {
    var map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(35.89584, 128.622362),
      // 지도가 생성될 div
      width: "555px", // 지도의 넓이
      height: "400px", // 지도의 높이
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
    <>
      <div className="end"></div>
      <div className="contentsInquiry">
        <div className="banner">
          <p className="banner-title">충전소 조회</p>
          <br></br>
          <p className="subtitle">전국 전기차 충전소 위치 및 관련 정보들을 손쉽게 확인 하실 수 있습니다.</p>
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
            <div className="facility_box">
              <div className="facility_info">주변 시설 정보</div>
            </div>
          </div>
          <div className="right_box">
            <div className="chargeInfo_box">
              <div className="charge_title">
                <h1 className="charge_name">[대영채비] 영진전문대학 글로벌캠퍼스</h1>
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
                  <li><p>도로명 주소</p><span>경상북도 칠곡군 지천면 금송로 60 입구 야외 주차장</span></li>
                  <li><p>이용가능시간</p><span>24시간 이용가능</span></li>
                  <li><p>연락처</p><span>1522-2573</span></li>
                </ul>
              </div>
              <div className="now">
                <p className="now-title">충전기 정보<button className="rsvt-btn">예약</button></p>
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
                      <td className="re_input">다가갔더니 불 붙어서 터졋어요</td>
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
