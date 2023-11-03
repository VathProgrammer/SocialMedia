import Vath from "../assets/Vath.png";
import {IoPersonRemoveOutline,IoOptionsSharp} from "react-icons/io5"; 
import Preety from "../assets/PreetyGirl.jpg";
import {AiOutlineLike} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {PiShareFat} from "react-icons/pi"


const ScrollPost = ({}: Props) => {
   
  return (
    <div className=' mt-5 dark:bg-gray-800 p-5 rounded-lg bg-white '>
            <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                  <img src={Vath} alt="" className="w-10 h-10 rounded-full object-cover" />
                   <div className=" relative">
                   <h1 className=' dark:text-gray-200 ml-5 top-0 hover:underline'>Vath Goodboi</h1>
                   <p className=" ml-5 ">2days ago</p>
                   </div>
                  </div>
                 <div className='flex'>
                 <IoOptionsSharp className=' text-xl me-5'/>
                 <IoPersonRemoveOutline className=' text-xl'/>
                 </div>
            </div>
             
        <div className=' mt-3 '>
            <p className=' clear-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis tempore harum non sapiente excepturi numquam et provident optio at.</p>
        </div>
        <div className=' mt-5'>
            <img src={Preety} alt=""
                 className=' w-full h-[25rem] object-cover rounded-md'
            />
        </div>
        <hr className="mt-5 text-gray-50" />

         <div className="mt-3 flex justify-between items-center">
             <div className="flex items-center">
                <AiOutlineLike className=' text-2xl me-3 '/>
                 <p>Like</p>
             </div>
             <div className="flex items-center">
                <FaRegComment className=' text-2xl me-3'/>
                <p>Comment</p>
             </div>
             <div className="flex items-center">
                 <PiShareFat  className=' text-2xl me-3'/>
                 <p>Share</p>
             </div>    
         </div>
    </div>
  )
}

export default ScrollPost