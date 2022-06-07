import React from 'react'
import './HomePage.sass'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main'



function HomePage() {
  return (
    <div className='homePage'>
        <Header/>
        <Banner/>
        <Main/>
      
    </div>
  )
}

export default HomePage