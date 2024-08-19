import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Brand.css";
import { axios, defaultErrorHandler } from "utils";
import { useInfiniteScroll, usePromiseThrottle } from "hooks";

export default function BrandList() {
  const navigate = useNavigate();

  const [throttleInterval, setThrottleInterval] = useState(0);
  const throttle = usePromiseThrottle(throttleInterval);
  const { ref, content } = useInfiniteScroll(
    throttle(async (page) => {
      /** @type {{data: PageResponse<User>}} */
      const response = await axios.get(`/api/members`, {
        params: { page, size: 8 },
      });
      setThrottleInterval(0);
      return response.data;
    }),
    (error) => {
      setThrottleInterval(3000);
      defaultErrorHandler(error);
    },
  );

  return (
    <div>
      <div>
        <div>
          <ul className="relative flex justify-end right-28 top-10 border-b ml-96 mr-44 pb-10">
            <li className="border  px-6 py-2 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:font-bold hover:shadow-lg ">
              일간
            </li>
            <li className="border  px-6 py-2 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:font-bold hover:shadow-lg">
              주간
            </li>
            <li className="border  px-6 py-2 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:font-bold hover:shadow-lg">
              월간
            </li>
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
              <div>No events found.</div>
            )}
            <div aria-label="scroll-trigger" ref={ref} />
          </div>
        </div>
      </div>
    </div>
  );
}
