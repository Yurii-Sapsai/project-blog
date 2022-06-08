import React from 'react'
import './HomePage.sass'


import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main'



function HomePage() {
  return (
    <div className='homePage'>
   
        <Banner/>
        <Main/>
      
    </div>
  )
}

export default HomePage