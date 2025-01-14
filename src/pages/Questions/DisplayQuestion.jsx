import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'


const DisplayQuestion = () => {
  return (
    <div>
      <Navbar />

      <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
          <QuestionDetails />
          <RightSidebar />
        </div>
      </div>


    </div>

  )
}

export default DisplayQuestion