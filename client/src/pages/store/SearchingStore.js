import { useEffect, useState } from "react";
import "./SearchingStore.css";

const { kakao } = window;

function SearchingStore() {
  const [map, setMap] = useState(null);
  const [word, setWord] = useState("");

  useEffect(() => {
    // 카카오맵 API 스크립트가 로드된 후 실행될 수 있도록 보장
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      initializeMap();
    } else {
      console.error("오류다 이것아.");
    }
  }, [word]);

  const initializeMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5718407, 126.9872086),
      level: 9,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    // 고정 위치에 마커 추가
    const centerPosition1 = new kakao.maps.LatLng(37.5718407, 126.9872086);
    const centerPosition2 = new kakao.maps.LatLng(37.65717, 127.0628);
    const centerPosition3 = new kakao.maps.LatLng(37.50365, 126.8797);
    const centerPosition4 = new kakao.maps.LatLng(37.55625, 126.9372);
    // const centerPosition5 = new kakao.maps.LatLng(37.49998, 127.029);
    // new kakao.maps.Marker({
    //   position: centerPosition,
    //   map: kakaoMap,
    // });

    // 커스텀 마커의 HTML 내용
    const markerContent1 = `
  <div style="
    position: relative; 
    width: 70px; 
    padding: 10px; 
    background: #f9f9f9; /* 말풍선 배경색 */
    border: 2px solid grey; /* 말풍선 테두리 색상 */
    border-radius: 8px; /* 말풍선 모서리 둥글게 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    color: #000000; /* 텍스트 색상 */
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display: flex; 
    align-items: center; 
    justify-content: center;
  ">
    <div>종로<br>(본점)</div>
    <div style="
      position: absolute; 
      bottom: -15px; /* 삼각형의 위치 조정 */
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 15px solid #ffffff; /* 삼각형 색상 */
      border-top-width: 13px; /* 삼각형의 색상과 경계선 두께를 맞추기 위해 조정 */
      border-bottom: 2px solid black; /* 삼각형 테두리 색상 */
    "></div>
  </div>
`;

    const markerContent2 = `
<div style="
  position: relative; 
  width: 70px; 
  padding: 10px; 
  background: #f9f9f9; /* 말풍선 배경색 */
  border: 2px solid grey; /* 말풍선 테두리 색상 */
  border-radius: 8px; /* 말풍선 모서리 둥글게 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  color: #000000; /* 텍스트 색상 */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: flex; 
  align-items: center; 
  justify-content: center;
">
  <div>노원</div>
  <div style="
    position: absolute; 
    bottom: -15px; /* 삼각형의 위치 조정 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #ffffff; /* 삼각형 색상 */
    border-top-width: 13px; /* 삼각형의 색상과 경계선 두께를 맞추기 위해 조정 */
    border-bottom: 2px solid black; /* 삼각형 테두리 색상 */
  "></div>
</div>
`;

    const markerContent3 = `
<div style="
  position: relative; 
  width: 70px; 
  padding: 10px; 
  background: #f9f9f9; /* 말풍선 배경색 */
  border: 2px solid grey; /* 말풍선 테두리 색상 */
  border-radius: 8px; /* 말풍선 모서리 둥글게 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  color: #000000; /* 텍스트 색상 */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: flex; 
  align-items: center; 
  justify-content: center;
">
  <div>구로</div>
  <div style="
    position: absolute; 
    bottom: -15px; /* 삼각형의 위치 조정 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #ffffff; /* 삼각형 색상 */
    border-top-width: 13px; /* 삼각형의 색상과 경계선 두께를 맞추기 위해 조정 */
    border-bottom: 2px solid black; /* 삼각형 테두리 색상 */
  "></div>
</div>
`;

    const markerContent4 = `
<div style="
  position: relative; 
  width: 70px; 
  padding: 10px; 
  background: #f9f9f9; /* 말풍선 배경색 */
  border: 2px solid grey; /* 말풍선 테두리 색상 */
  border-radius: 8px; /* 말풍선 모서리 둥글게 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  color: #000000; /* 텍스트 색상 */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: flex; 
  align-items: center; 
  justify-content: center;
">
  <div>신촌</div>
  <div style="
    position: absolute; 
    bottom: -15px; /* 삼각형의 위치 조정 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #ffffff; /* 삼각형 색상 */
    border-top-width: 13px; /* 삼각형의 색상과 경계선 두께를 맞추기 위해 조정 */
    border-bottom: 2px solid black; /* 삼각형 테두리 색상 */
  "></div>
</div>
`;

    //     const markerContent5 = `
    // <div style="
    //   position: relative;
    //   width: 70px;
    //   padding: 10px;
    //   background: #f9f9f9; /* 말풍선 배경색 */
    //   border: 2px solid grey; /* 말풍선 테두리 색상 */
    //   border-radius: 8px; /* 말풍선 모서리 둥글게 */
    //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    //   color: #000000; /* 텍스트 색상 */
    //   font-size: 16px;
    //   font-weight: bold;
    //   text-align: center;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    // ">
    //   <div>5</div>
    //   <div style="
    //     position: absolute;
    //     bottom: -15px; /* 삼각형의 위치 조정 */
    //     left: 50%;
    //     transform: translateX(-50%);
    //     width: 0;
    //     height: 0;
    //     border-left: 15px solid transparent;
    //     border-right: 15px solid transparent;
    //     border-top: 15px solid #ffffff; /* 삼각형 색상 */
    //     border-top-width: 13px; /* 삼각형의 색상과 경계선 두께를 맞추기 위해 조정 */
    //     border-bottom: 2px solid black; /* 삼각형 테두리 색상 */
    //   "></div>
    // </div>
    // `;

    // 커스텀 마커의 이미지 URL을 만드는 함수
    function createCustomMarker1() {
      const overlay = new kakao.maps.CustomOverlay({
        content: markerContent1,
        position: centerPosition1,
        yAnchor: 1, // 마커의 위치를 설정
      });
      overlay.setMap(kakaoMap);
    }

    function createCustomMarker2() {
      const overlay = new kakao.maps.CustomOverlay({
        content: markerContent2,
        position: centerPosition2,
        yAnchor: 2, // 마커의 위치를 설정
      });
      overlay.setMap(kakaoMap);
    }

    function createCustomMarker3() {
      const overlay = new kakao.maps.CustomOverlay({
        content: markerContent3,
        position: centerPosition3,
        yAnchor: 3, // 마커의 위치를 설정
      });
      overlay.setMap(kakaoMap);
    }

    function createCustomMarker4() {
      const overlay = new kakao.maps.CustomOverlay({
        content: markerContent4,
        position: centerPosition4,
        yAnchor: 4, // 마커의 위치를 설정
      });
      overlay.setMap(kakaoMap);
    }

    // function createCustomMarker5() {
    //   const overlay = new kakao.maps.CustomOverlay({
    //     content: markerContent5,
    //     position: centerPosition5,
    //     yAnchor: 5, // 마커의 위치를 설정
    //   });
    //   overlay.setMap(kakaoMap);
    // }

    // 커스텀 마커 생성
    createCustomMarker1();
    createCustomMarker2();
    createCustomMarker3();
    createCustomMarker4();
    // createCustomMarker5();

    const imageSrc = "/images/userPin.png"; // 이미지 파일 경로로 변경
    const imageSize = new kakao.maps.Size(50, 50); // 이미지 크기
    const imageOption = { offset: new kakao.maps.Point(12, 35) }; // 핀 위치 조정

    const customMarkerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    // 추가 위치에 핀 추가
    const locations = [word];

    const geocoder = new kakao.maps.services.Geocoder();

    locations.forEach((address) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const position = new kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new kakao.maps.Marker({
            position: position,
            image: customMarkerImage,
          });
          marker.setMap(kakaoMap);
        }
      });
    });
  };

  // function onSearch(){

  // }

  return (
    <div className="mapPage">
      <br></br>
      <br></br>
      <p style={{ fontSize: "30px" }}>오프라인 매장 안내</p>
      <p>
        제휴 브랜드 제품 및 주방용품들을 취급하는 오프라인 매장에서 더욱 가깝게
        만나보세요!
      </p>
      <br></br>
      <div className="mapContainer">
        <div className="customer">
          <div id="map" style={{ width: "90%", height: "100%" }}></div>
        </div>

        <div className="mapSearch">
          <br></br>
          <div className="mapFixed">
            <p>서울특별시 종로구 인사동길 12</p>
            <p>서울특별시 종로구 인사동 43</p>
            <p className="bmw">
              지하철 : 1호선 종로3가(1번 출구), 3호선 종로3가, 5호선
              종로3가(5번출구)
            </p>
            <p className="bmw">버스 : 종로2가 또는 종로3가에서 하차</p>
            <br></br>
            <p>서울특별시 구로구 경인로 557</p>
            <p>서울특별시 구로구 구로동 606-4</p>
            <p className="bmw">지하철 : 1호선 구로역(3번 출구)</p>
            <p className="bmw">
              버스 : 구로공구상가 또는 구로역(구로기계공구상가)에서 하차
            </p>
            <br></br>
            <p>서울특별시 노원구 상계로5길 32</p>
            <p>서울특별시 노원구 상계동 357-2</p>
            <p className="bmw">지하철 : 4호선 노원역(9번 출구)</p>
            <p className="bmw">버스 : 지하철 4호선 노원역 9번출구에서 하차</p>
            <br></br>
            <p>서울특별시 서대문구 연세로 8-1</p>
            <p>서울특별시 서대문구 창천동 18-29</p>
            <p className="bmw">지하철 : 2호선 신촌역(2번 출구 또는 3번 출구)</p>
            <p className="bmw">
              버스 : 연세로 문학의거리 또는 연세로 스타광장에서 하차
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="mapSearchInput">
            <input
              type="text"
              placeholder="내 위치 검색"
              style={{ border: "1px solid grey", width: "400px" }}
              value={word}
              onChange={(e) => {
                setWord(e.currentTarget.value);
              }}
            />
            <p id="searchEx">
              {" "}
              *검색 예시 <br />
              "(서울시) 성북구 동소문동"
              <br />
              "(서울시) 성북구 동소문로 1길"{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchingStore;
