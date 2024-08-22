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
    <div id="mapBody">
      <div className="mapPage">
        <br></br>
        <br></br>
        <p style={{ fontSize: "200%" }}>오프라인 매장 안내</p>
        <br></br>
        <p style={{ fontSize: "120%" }}>
          제휴 브랜드 제품 및 주방용품들을 취급하는 오프라인 매장에서 더욱
          가깝게 만나보세요!
        </p>
        <br></br>
        <div className="mapContainer" id="mapContainer">
          <div className="customer">
            <div className="mapSearchInput">
              <input
                type="text"
                placeholder="내 위치 검색"
                style={{ border: "1px solid grey", width: "100%" }}
                value={word}
                onChange={(e) => {
                  setWord(e.currentTarget.value);
                }}
              />
              <p id="searchEx">
                {" "}
                *검색 예시 <br />
                "(서울시) (노원구) 중계동"
                <br />
                "(서울시) (노원구) 솔샘로 1길"{" "}
              </p>
              <br></br>
            </div>
            <div
              id="map"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid black",
              }}
            ></div>
          </div>

          <div className="mapSearch">
            <br></br>
            <div className="mapFixed">
              <p>[종로 (본점)]</p>
              <p>서울특별시 종로구 인사동길 12</p>
              <p>서울특별시 종로구 인사동 43</p>
              <br />
              <p className="bmw">
                지하철
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    &nbsp;
                    <img
                      src="/images/subway1.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    &nbsp; 1호선 종로3가,
                  </div>
                  &nbsp;
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/subway3.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    &nbsp; 3호선 종로3가,
                  </div>
                  &nbsp;
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/subway5.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    &nbsp; 5호선 종로3가
                  </div>
                </div>
              </p>
              <br></br>
              <p className="bmw">
                버스 : 종로2가에서 하차
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <img
                        src="/images/busblue.png"
                        style={{ width: "25px;", height: "25px" }}
                      />
                      101, 140, 273, 370, 720
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        src="/images/busgreen.png"
                        style={{ width: "25px;", height: "25px" }}
                      />
                      7212, 8101
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/busred.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    9301, 7101, 1101, 1102
                  </div>
                </div>
              </p>
              <br></br>
              <br></br>
              <p>[구로]</p>
              <p>서울특별시 구로구 경인로 557</p>
              <p>서울특별시 구로구 구로동 606-4</p>
              <br />
              <p className="bmw">
                지하철 <br />
                <div style={{ display: "flex" }}>
                  &nbsp;
                  <img
                    src="/images/subway1.png"
                    style={{ width: "25px;", height: "25px" }}
                  />
                  &nbsp;1호선 구로역(3번 출구)
                </div>
              </p>
              <br></br>
              <p className="bmw">
                버스 : 구로공구상가 또는 구로역(구로기계공구상가)에서 하차
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/busblue.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    571, 654
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/busgreen.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    5630, 6411, 6516, 6613, 구로09, 양천04
                  </div>
                </div>
              </p>
              <br></br>
              <br></br>
              <p>[노원]</p>
              <p>서울특별시 노원구 상계로5길 32</p>
              <p>서울특별시 노원구 상계동 357-2</p>
              <br />
              <p className="bmw">
                지하철
                <br />
                <div style={{ display: "flex" }}>
                  &nbsp;
                  <img
                    src="/images/subway4.png"
                    style={{ width: "25px;", height: "25px" }}
                  />
                  &nbsp;&nbsp; 4호선 노원역(9번 출구)
                </div>
              </p>
              <br></br>
              <p className="bmw">
                버스 : 지하철 4호선 노원역 9번출구에서 하차
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <img
                        src="/images/busblue.png"
                        style={{ width: "25px;", height: "25px" }}
                      />
                      102, N13, N61, 서울09출근
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        src="/images/busgreen.png"
                        style={{ width: "25px;", height: "25px" }}
                      />
                      1129, 8112, 노원02, 노원08
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/busred.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    1100
                  </div>
                </div>
              </p>
              <br></br>
              <br></br>
              <p>[신촌]</p>
              <p>서울특별시 서대문구 연세로 8-1</p>
              <p>서울특별시 서대문구 창천동 18-29</p>
              <br />
              <p className="bmw">
                지하철
                <br />
                <div style={{ display: "flex" }}>
                  &nbsp;
                  <img
                    src="/images/subway2.png"
                    style={{ width: "25px;", height: "25px" }}
                  />
                  &nbsp;&nbsp; 2호선 신촌역(2번 출구 또는 3번 출구)
                </div>
              </p>
              <br></br>
              <p className="bmw">
                버스 : 연세로 문학의거리 또는 연세로 스타광장에서 하차
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/busblue.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    171, 172, 173, 472, 674, 700
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      src="/images/busgreen.png"
                      style={{ width: "25px;", height: "25px" }}
                    />
                    7720, 7727, 7728, 7737, 7024, 75
                  </div>
                </div>
              </p>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}

export default SearchingStore;
