import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./css/inquiry.scss";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Tmapv2 } = window;

function Inquiry() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
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
        <div class="char-search">
          <div class="form-group col2">
            <label>지역선택</label>
            <select id="entrprsArea" name="entrprsArea" class="select" onchange="fnSidoSelect()">
              <option value="">시도 선택</option>
              <option value="11">서울</option>
              <option value="26">부산</option>
              <option value="27">대구</option>
              <option value="28">인천</option>
              <option value="29">광주</option>
              <option value="30">대전</option>
              <option value="31">울산</option>
              <option value="36">세종</option>
              <option value="41">경기도</option>
              <option value="42">강원도</option>
              <option value="43">충청북도</option>
              <option value="44">충청남도</option>
              <option value="45">전라북도</option>
              <option value="46">전라남도</option>
              <option value="47">경상북도</option>
              <option value="48">경상남도</option>
              <option value="50">제주특별자치도</option>
            </select>
            <select name="searchGugun" class="select" id="searchGugun"><option value="11">구군 선택</option><option value="종로구">종로구</option><option value="중구">중구</option><option value="용산구">용산구</option><option value="성동구">성동구</option><option value="광진구">광진구</option><option value="동대문구">동대문구</option><option value="중랑구">중랑구</option><option value="성북구">성북구</option><option value="강북구">강북구</option><option value="도봉구">도봉구</option><option value="노원구">노원구</option><option value="은평구">은평구</option><option value="서대문구">서대문구</option><option value="마포구">마포구</option><option value="양천구">양천구</option><option value="강서구">강서구</option><option value="구로구">구로구</option><option value="금천구">금천구</option><option value="영등포구">영등포구</option><option value="동작구">동작구</option><option value="관악구">관악구</option><option value="서초구">서초구</option><option value="강남구">강남구</option><option value="송파구">송파구</option><option value="강동구">강동구</option><option value="26">구군 선택</option><option value="중구">중구</option><option value="서구">서구</option><option value="동구">동구</option><option value="영도구">영도구</option><option value="부산진구">부산진구</option><option value="동래구">동래구</option><option value="남구">남구</option><option value="북구">북구</option><option value="해운대구">해운대구</option><option value="사하구">사하구</option><option value="금정구">금정구</option><option value="강서구">강서구</option><option value="연제구">연제구</option><option value="수영구">수영구</option><option value="사상구">사상구</option><option value="기장군">기장군</option></select>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="insert" name="searchKeyword" placeholder="충전소" type="text" />
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
                  <li><p className="info-p">도로명 주소</p><span>경상북도 칠곡군 지천면 금송로 60 입구 야외 주차장</span></li>
                  <li><p className="info-p">이용가능시간</p><span>24시간 이용가능</span></li>
                  <li><p className="info-p">연락처</p><span>1522-2573</span></li>
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
