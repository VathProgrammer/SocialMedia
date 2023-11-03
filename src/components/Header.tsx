import React, { useEffect, useState } from "react";
import { BsSearch, BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { AiFillMessage, AiFillQuestionCircle } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";


const Header = () => {
    
  const image_pro =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg";

  const [currentThem, setCurrentTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    }
  }, []);
  const DisplayTheme = (theme: string) => {
    if (theme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    }
  };
  return (
    <div className=" bg-white dark:bg-gray-800 fixed left-0 top-0  w-full">
      <div className=" container mx-auto h-[10vh] flex  justify-between">
        <div className="flex items-center">
          <h1 className=" text-md font-bold lg:text-2xl text-cyan-400">
            MySocial
          </h1>
          <div className=" flex items-center">
            <input
              type="text"
              placeholder="Search .."
              className=" bg-gray-200  ml-5  px-4 rounded-md  hidden py-1  md:block"
            />
            <BsSearch className=" ml-5 md:-ml-7" />
          </div>
        </div>
        <ul className=" flex items-center">
          <li className="ml-2 md:ml-5">
            {currentThem === "dark" ? (
              <BsFillSunFill
                className=" cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200
                                    "
                onClick={() => DisplayTheme("light")}
              />
            ) : (
              <BsMoonFill
                className=" cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200
                                    "
                onClick={() => DisplayTheme("dark")}
              />
            )}
          </li>
          <li className="ml-2 md:ml-5">
            <AiFillMessage className=" cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200" />
          </li>
          <li className="ml-2 md:ml-5">
            <AiFillQuestionCircle className=" cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200" />
          </li>
          <li className="ml-2 md:ml-5">
            <IoIosNotifications className=" cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200" />
          </li>
          <div className=" w-10 h-10 ml-5 ">
            <img
              src={image_pro}
              alt=""
              className=" w-full h-[100%] object-cover rounded-full "
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
