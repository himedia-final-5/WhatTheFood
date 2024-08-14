import { useEffect } from "react";

import SubMenu from "../SubMenu";
const { kakao } = window;

function BrandList() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5718407, 126.9872086), // 초기 중심 위치
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    // 고정된 위치 마킹 (예: 서울역)
    const fixedPosition = new kakao.maps.LatLng(37.5718407, 126.9872086);
    const fixedMarker = new kakao.maps.Marker({
      position: fixedPosition,
      title: "고정 위치", // 마커 제목
    });
    fixedMarker.setMap(kakaoMap);

    // 사용자의 현재 위치를 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          //   const userLat = position.coords.latitude;
          //   const userLng = position.coords.longitude;

          // 현재 위치를 마킹
          const userPosition = new kakao.maps.LatLng(37.4718407, 126.8872086);
          const userMarker = new kakao.maps.Marker({
            position: userPosition,
            title: "현재 위치", // 마커 제목
          });
          userMarker.setMap(kakaoMap);

          // 지도 중심을 고정된 위치로 설정 (원하는 대로 조정 가능)
          kakaoMap.setCenter(fixedPosition);
        },
        (error) => {
          console.error("현재 위치를 가져오는 데 실패했습니다.", error);
        },
      );
    } else {
      alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
  }, []);

  return (
    <div className="mapPage">
      <SubMenu />
      <div
        className="customer"
        style={{ flex: "4", width: "800px", height: "600px" }}
      >
        <div
          id="map"
          style={{ width: "100%", height: "100%", margin: "20px" }}
        ></div>
      </div>
    </div>
  );
}

export default BrandList;
