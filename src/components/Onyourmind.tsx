import Vath from "../assets/Vath.png";
import { BsImageFill } from "react-icons/bs";
import {FaVideo} from "react-icons/fa";
import {IoMdAttach} from "react-icons/io";

const Onyourmind = () => {
  return (
    <div className="  dark:bg-gray-800 p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between">
        <img src={Vath} alt="" className="w-8 h-8 rounded-full object-cover" />
        <input
          type="text"
          placeholder="Search on Social"
          className=" ml-5 px-5 w-full h-8 rounded-full  "
        />
      </div>
      <hr className="mt-5 text-gray-200" />
      <div className="flex items-center justify-between">
        <div className="flex items-center mt-3  dark:hover:bg-gray-50 p-2 rounded-lg">
          <BsImageFill className=" text-md" />
          <p className="ml-2">Image</p>
        </div>
        <div className="flex items-center mt-3  dark:hover:bg-gray-50 p-2 rounded-lg">
          <FaVideo className=" text-md" />
          <p className="ml-2">Video</p>
        </div>
        <div className="flex items-center mt-3  dark:hover:bg-gray-50 p-2 rounded-lg">
          <IoMdAttach className=" text-md" />
          <p className="ml-2">Attachment</p>
        </div>
        <div className="flex items-center mt-3  dark:hover:bg-gray-50 p-2 rounded-lg">
           <button className=" rounded-lg  px-5 py-1">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Onyourmind;
