import Vath from "../assets/Vath.png";
import {AiOutlineUserAdd,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai"; 
import {MdOutlineLocationOn,MdWork} from "react-icons/md";

const Profile = ({}: Props) => {
  return (
    <div className=' dark:bg-gray-800 p-5 rounded-lg bg-white'>
            <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                            <img src={Vath} alt=""
                            className='w-10 h-10 rounded-full object-cover' />
                             <div className=' ml-5'>
                                <h1 className=' dark:text-gray-200'>Vath Goodboi</h1>
                                <p>2500 friends</p>
                             </div>
                    </div>
                   <AiOutlineUserAdd className=' text-lg'/>
            </div>
            <hr className=' mt-5' />

            <div className='flex items-center mt-2'>
               <MdOutlineLocationOn className=' text-lg'/>
                <p className=' ml-5'>Cambodia</p>
            </div>

            <div className='flex items-center mt-2'>
                <MdWork className=' text-lg '/>
                <p className=' ml-5'>Some Degree</p>
            </div>
            <hr className=' mt-5' />
            <div className="flex justify-between items-center mt-2 ">
                <p>Who viewed your profile ?</p>
                <p className=' font-bold'>143 viewer</p>
            </div>

            <div className="flex justify-between items-center mt-2 ">
                <p>Impress from others</p>
                <p className=' font-bold'>123 viewer</p>

            </div>
            <hr className=' mt-5' />
                <p className='mt-2'>Social Media</p>
                <div className='flex items-center mt-2'>
                      <AiOutlineTwitter className='text-lg'/>
                      <p className='ml-5 font-semibold'>Twitter</p>
                </div>
                <div className='flex items-center mt-2'>
                       <AiFillLinkedin className='text-lg '/>
                       <p className='ml-5 font-semibold'>Linedin</p>
                </div>
              
    </div>
  )
}

export default Profile