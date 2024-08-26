import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";

import "./Chef.css";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

const items = ["일간", "주간", "월간"];
const periodMapping = { 일간: "d", 주간: "w", 월간: "m" };

export default function ChefList() {
  const [, setSearchParams] = useSearchParams();
  const [selectedPeriod] = useState("d");
  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const [, setRankings] = useState([]);
  const [period, setPeriod] = useState();

  const fetchRankings = useCallback(async () => {
    const periodParam = periodMapping[selectedPeriod] || "d";
    axios
      .get(`/api/recipes/view?period=${periodParam}`)
      .then((response) => setRankings(response.data))
      .catch((error) => defaultErrorHandler(error));
  }, [selectedPeriod]);

  // 서버에서 페이지네이션 데이터 가져오기
  const fetchMore = async (page) => {
    try {
      const response = await axios.get(`/api/members`, {
        params: { period: selectedPeriod, page, size: 8 },
      });
      setThrottleInterval(0);
      return response.data;
    } catch (error) {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
      return { content: [], pagination: {} }; // 오류 시 빈 데이터 반환
    }
  };

  // useInfiniteScroll 훅 사용
  const { ref, content } = useInfiniteScroll(throttle(fetchMore), (error) => {
    setThrottleInterval(3000);
    defaultErrorHandler(error);
  });

  const handlePeriodChange = (newPeriod) => {
    if (period !== newPeriod) {
      setPeriod(newPeriod);
      setSearchParams({ period: periodMapping[newPeriod] });
    }
  };

  useEffect(() => {
    // 초기 데이터 가져오기
    fetchRankings();
  }, [fetchRankings]);

  return (
    <div className="chef_wrap">
      <div className="chef_inner_container">
        <ul className="chef_inner_category">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handlePeriodChange(periodMapping[item])}
              className={`border px-6 py-2 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:font-bold hover:shadow-lg ${selectedPeriod === periodMapping[item] ? "font-bold" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="chef_banner_wrap">
          {content.length > 0 ? (
            content
              .filter((member) => member.role === "ROLE_CHEF")
              .map((member, index) => (
                <div key={index} className="chef_container">
                  <p className="chef_num">
                    <b>{index + 1}</b>
                  </p>
                  <Link to={`/events/${member.id}`}>
                    <div className="chef_imageUrl">
                      <img
                        className="rounded-full size-28"
                        src={member.profileImage}
                        alt="member_profileImage"
                      />
                    </div>
                  </Link>
                  <div className="flex justify-center py-2 text-base font-bold">
                    <p>{member.nickname}</p>
                  </div>
                </div>
              ))
          ) : (
            <div>No members found.</div>
          )}
          <div aria-label="scroll-trigger" ref={ref} />
        </div>
      </div>
    </div>
  );
}
