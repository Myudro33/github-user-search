import axios from "axios";
import React, { useEffect, useState } from "react";
import iconLocation from "../assets/icon-location.svg";
import iconCompany from "../assets/icon-company.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconWebsite from "../assets/icon-website.svg";

const Info = ({ user, theme }) => {
  const [data, setdata] = useState();
  const [month, setmonth] = useState("");
  const [day, setday] = useState();
  const [year, setyear] = useState();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      if (response.status === 200) {
        const slicedData = response.data?.created_at.slice(0, 10);
        const slicedMonth = slicedData?.slice(5, 7);
        setyear(slicedData.slice(0, 4));
        setday(slicedData.slice(slicedData.length - 2, slicedData.length));
        if (slicedMonth < 10) {
          const slice = slicedMonth.slice(1);
          setmonth(months[slice - 1]);
        } else {
          setmonth([month[slicedMonth - 1]]);
        }
        setdata(response.data);
      }
    };
    getUser();
  }, [user]);
  return (
    <div
      className={`w-full md:h-96 xs:h-[25rem]  flex flex-col md:p-6 xs:p-2 md:items-end ${
        theme ? "info-lightColor" : "info-darkColor"
      } rounded-lg mt-5 shadow-md`}
    >
      <div className="w-full h-28 flex p-4 justify-between">
        <img
          className="w-20 h-full rounded-full"
          src={data?.avatar_url}
          alt="userImg"
        />
        <div className="h-full md:w-56">
          <h1
            className={`md:text-2xl font-semibold w-full max-w-fit mt-1 overflow-hidden ${
              theme ? "" : "text-white"
            }`}
          >
            {data?.name}
          </h1>
          <p
            className={`text-[#0079ff] ${
              theme ? "hover:text-black" : "hover:text-white"
            } cursor-pointer`}
          >{`@${data?.login}`}</p>
        </div>
        <div className="h-full md:w-56 xs:w-1/3">
          <p
            className={`mt-2 md:text-base xs:text-xs ${theme ? "text-[#4b6a9b]" : "text-white"}`}
          >{`Joined At ${day} ${month} ${year}`}</p>
        </div>
      </div>
      <p
        className={`md:w-5/6 xs:w-full md:p-0 xs:p-1 h-14 overflow-hidden xs:text-xs md:text-sm ${
          theme ? "text-[#4b6a9b]" : "text-white"
        }`}
      >
        {data?.bio !== null ? data?.bio : "User bio is empty"}
      </p>
      <div
        className={`h-20 md:w-5/6 xs:w-full  flex rounded-lg md:justify-between xs:justify-around p-2 ${
          theme ? "light-color" : "dark-color"
        }`}
      >
        <span
          className={`w-1/5 text-center  ${
            theme ? "text-[#4b6a9b]" : "text-white"
          }`}
        >
          <p className={`md:text-base xs:text-sm`}>Repos</p>
          <h1 className="text-2xl mt-2">{data?.public_repos}</h1>
        </span>
        <span
          className={`w-1/5 text-center  ${
            theme ? "text-[#4b6a9b]" : "text-white"
          }`}
        >
          <p className={`md:text-base xs:text-sm`}>Followers</p>
          <h1 className="text-2xl mt-2">{data?.followers}</h1>
        </span>
        <span
          className={`w-1/5 text-center  ${
            theme ? "text-[#4b6a9b]" : "text-white"
          }`}
        >
          <p className={`md:text-base xs:text-sm`}>Following</p>
          <h1 className="text-2xl mt-2">{data?.following}</h1>
        </span>
      </div>
      <div
        className={`md:w-5/6 xs:w-full h-20 md:mt-2 xs:mt-5 p-2 flex justify-between ${
          theme ? "text-[#4b6a9b]" : "text-white"
        }`}
      >
        <div className="w-2/5 h-full flex flex-col justify-between">
          <span className="h-2/5 flex items-center overflow-hidden">
            <img src={iconLocation} alt="" />
            <p className="ml-3 md:text-base xs:text-xs">
              {data?.location !== null ? data?.location : "Not Specified"}
            </p>
          </span>
          <span className="h-2/5 flex items-center overflow-hidden">
            <img src={iconWebsite} alt="" />
            <a
              rel="noreferrer"
              target={"_blank"}
              className="underline ml-2 md:text-base xs:text-xs"
              href={data?.html_url}
            >
              Full Profile
            </a>
          </span>
        </div>
        <div className="w-2/5 h-full flex flex-col justify-between">
          <span className="h-2/5 flex items-center overflow-hidden">
            <img src={iconTwitter} alt="" />
            <a
              rel="noreferrer"
              target={"_blank"}
              className="ml-2 md:text-base xs:text-xs"
              href={`https://twitter.com/${
                data?.twitter_username !== null ? data?.twitter_username : ""
              }`}
            >
              {data?.twitter_username !== null
                ? data?.twitter_username
                : "Not Specified"}
            </a>
          </span>
          <span className="h-2/5 flex items-center overflow-hidden">
            <img src={iconCompany} alt="" />
            <p className="ml-2 md:text-base xs:text-xs">
              {data?.company !== null ? data?.company : "Not Specified"}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
