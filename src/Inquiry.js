import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Resolve1.scss";
import "./css/inquiry.scss";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

const { Tmapv2 } = window;

function Inquiry() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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

      if (area == "area0")
        $gugun.append("<option value=''>구/군 선택</option>");
      else {
        $.each(eval(area), function () {
          $gugun.append("<option value='" + this + "'>" + this + "</option>");
        });
      }
    });
  });

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
          <div class="form-group col2">
            <label>지역선택</label>
            <select name="sido1" id="sido1"></select>
            <select name="gugun1" id="gugun1"></select>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
