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
      height: "335px", // 지도의 높이
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
    <div className="in_content">
      <div className="in_title_box">
        <h2 className="in_page_title">충전소 이용 내역</h2>
        <p className="in_page_exp">
          현재까지의 충전소 이용 내역을 확인 하실 수 있습니다.
        </p>
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
            <div className="facility_info">
              주변시설 정보 들어갈 정보가 어떤 것이 있는지 모르겠습니다!
            </div>
          </div>
        </div>
        <div className="right_box">
          <div className="chargeInfo_box">
            <div className="charge_title">
              <h1 className="charge_name">충전소 이름이 들어갈 자리입니다.</h1>
              <div className="reservation-btn-box">
                <button className="draw-border">예약하기</button>
              </div>
              <div className="report_btn">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="notify_btn"
                />
              </div>
            </div>
            <div className="charge_address">
              <h2 className="address">충전소 상세 주소 칸입니다.</h2>
            </div>
            {/* <div className="charge_sub_info">
                            <div className="reservation">
                                예약현황이 들어갈 자리인데 어떻게 해야하나요?
                            </div>
                        </div> */}
          </div>
          <div className="review_box">
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
  );
}

// function Middle() {
//     useEffect(() => {
//         const map = new Tmapv2.Map("map_div", {
//             center: new Tmapv2.LatLng(35.89584, 128.622362),
//             // 지도가 생성될 div
//             width: "100%", // 지도의 넓이
//             height: "630px", // 지도의 높이
//             zoom: 15,
//         });
//         var marker = new Tmapv2.Marker({
//             position: new Tmapv2.LatLng(35.89584, 128.622362), //Marker의 중심좌표 설정.
//             map: map, //Marker가 표시될 Map 설정..
//             offset: new Tmapv2.Point(12, 38), // 마커 아이콘의 오프셋 설정(생략시 Point(폭/2, 높이)로 설정)
//             icon:
//                 "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png", //마커 아이콘 설정.(생략시 기본이미지 적용)
//             iconSize: new Tmapv2.Size(24, 38), //마커 아이콘 사이즈 (생략시 이미지의 크기 적용)
//         });
//     }, []);
//     return (
//         <div>
//             <div className="map">
//                 <div className="map_div" id="map_div"></div>
//             </div>
//             <div className=""></div>
//             <div className="mainTable">
//                 <div>1</div>
//                 <div>2</div>
//             </div>
//         </div>
//     );
// }

export default Inquiry;
