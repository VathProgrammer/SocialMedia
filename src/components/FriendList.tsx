import React from 'react'
import Vath from "../assets/Vath.png";
type Props = {}

const FriendList = (props: Props) => {
  return (
    <div className='mt-5 dark:bg-gray-800 p-5 rounded-lg bg-white'>
            <h2>Friend List</h2>
            <div className=' mt-2'>
                <div className="flex  items-center cursor-pointer px-1 py-2 rounded-lg">
                    <div className=" relative">
                        <img src={Vath} alt=""
                             className=' h-10 w-10 rounded-full object-cover'
                        />
                        <div className=' bg-green-500 rounded-full h-3 w-3 absolute bottom-0 right-0'></div>
                        </div>
                        <div className=' ml-5'>
                            <p className=' dark:text-gray-200 text-gray-800 font-bold'>Vath Goodboi</p>
                            <p>110 mutual friends</p>
                        </div> 
                </div>
            </div>
        </div>
    )
    }

export default FriendList;