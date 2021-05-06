// import React, { useEffect, useState } from "react";
// const { Tmapv2 } = window;
// import $ from "jquery";

// function Test1() {
//   useEffect(() => {
//     const map = new Tmapv2.Map("map_div", {
//       center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841), // 지도 초기 좌표
//       width: "100%", // map의 width 설정
//       height: "400px", // map의 height 설정
//     });
//     //마커의 옵션을 설정해주는 함수입니다.
//     function addMarker(lonlatoption) {
//       // 마커 생성
//       var marker = new Tmapv2.Marker({
//         position: new Tmapv2.LatLng(
//           lonlatoption.lonlat.latitude(),
//           lonlatoption.lonlat.longitude()
//         ), //Marker의 중심좌표 설정.
//         map: map, //Marker가 표시될 Map 설정..
//         title: lonlatoption.title, //마우스 위치시 출력할 타이틀
//       });
//     }

//     //특정 장소를 검색하는 함수입니다.
//     function searchPOI() {
//       var center = map.getCenter(); //map의 중심 좌표 값을 받아 옵니다.
//       var optionObj = {
//         reqCoordType: "WGS84GEO", //요청 좌표계 옵셥 설정입니다.
//         resCoordType: "WGS84GEO", //응답 좌표계 옵셥 설정입니다.
//         centerLon: 126.925356, //POI검색시 중앙좌표의 경도입니다.
//         centerLat: 37.554034, //POI검색시 중앙좌표의 위도입니다.
//       };
//       var params = {
//         onComplete: onComplete,
//         onProgress: onProgress,
//         onError: onError,
//       };
//       var tData = new Tmapv2.extension.TData();
//       tData.getPOIDataFromSearchJson(
//         encodeURIComponent("호프집"),
//         optionObj,
//         params
//       ); //encodeURIComponent함수로 해당 파라메터 값을 처리합니다.
//     }

//     //POI검색
//     function onComplete() {
//       console.log(this._responseData); //json로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.

//       if (this._responseData.searchPoiInfo.pois.poi != "") {
//         $(this._responseData.searchPoiInfo.pois.poi).each(function () {
//           //결과를 each문으로 돌려 마커를 등록합니다.
//           //response 데이터중 원하는 값을 find 함수로 찾습니다.
//           var name = this.name;
//           var id = this.id;
//           var lon = this.frontLon;
//           var lat = this.frontLat;
//           var lonlatoption = {
//             title: name, //마커 라벨 text 설정
//             lonlat: new Tmapv2.LatLng(lat, lon), //마커 라벨 좌표 설정
//           };
//           addMarker(lonlatoption); //마커를 추가하는 함수입니다.
//         });
//       } else {
//         alert("검색결과가 없습니다.");
//       }
//       map.setCenter(new Tmapv2.LatLng(37.554034, 126.925356));
//       map.setZoom(14);
//     }

//     //데이터 로드중 실행하는 함수입니다.
//     function onProgress() {}

//     //데이터 로드 중 에러가 발생시 실행하는 함수입니다.
//     function onError() {
//       alert("onError");
//     }
//   }, []);
//   return (
//     <div>
//       <div id="map_div"></div>
//       <button onClick="searchPOI()">POI검색 실행</button>
//     </div>
//   );
// }
// export default Test1;
