import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Onyourmind from './components/Onyourmind'
import ScrollPost from './components/ScrollPost'
import Sponser from './components/Sponser'
import FriendList from './components/FriendList'

const App = () => {
  return (
    <>
      <Header/>
      <div className='  bg-gray-200  dark:bg-gray-700 fixed top-[10vh] left-0 w-full h-[90vh] py-5'>
            <div className=" container justify-between mx-auto flex gap-10">
               <div className=' hidden lg:block flex-[0.6]'>
                <Profile/>
               </div>
               <div className=' flex-1 h-[90vh] overflow-auto pb-10 '>
                <Onyourmind/>
                <ScrollPost/>
                <ScrollPost/>
                <ScrollPost/>
                
               </div>
               <div className=' hidden lg:block flex-[0.6]'>
                <Sponser/>
                <FriendList/>
               </div>
            </div>
      </div>
    </>
  )
}

export default App