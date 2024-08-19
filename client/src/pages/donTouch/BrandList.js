import { useEffect, useState } from "react";
import { UserFeatureContainer } from "components/util";
import { toast } from "react-toastify";
import { axios } from "utils";

const { kakao } = window;

function BrandList() {
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
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    // 고정 위치에 마커 추가
    const centerPosition = new kakao.maps.LatLng(37.5718407, 126.9872086);
    new kakao.maps.Marker({
      position: centerPosition,
      map: kakaoMap,
    });

    const imageSrc = "/images/userPin.png"; // 이미지 파일 경로로 변경
    const imageSize = new kakao.maps.Size(35, 35); // 이미지 크기
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
    <UserFeatureContainer>
      <div className="mapPage" style={{ width: "100%" }}>
        <div
          className="customer"
          style={{ flex: "4", width: "800px", height: "600px" }}
        >
          <div
            id="map"
            style={{ width: "100%", height: "100%", margin: "20px" }}
          ></div>
        </div>
        <input
          type="text"
          className="adminSearch"
          value={word}
          onChange={(e) => {
            setWord(e.currentTarget.value);
          }}
        />
        {/* <button
          onClick={() => {
            onSearch();
          }}
          style={{ fontSize: "25px" }}
        >
          위치 검색
        </button> */}
      </div>
    </UserFeatureContainer>
  );
}

export default BrandList;
