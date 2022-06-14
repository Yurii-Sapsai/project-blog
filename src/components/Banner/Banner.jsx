import React from 'react';
import './Banner.sass';

import Bravery from '../../images/Bravery.png';

function Banner() {
  return (
    <div className='banner'>
            <img src={Bravery} alt="Bravery" />
            <h1>TO BE UKRAINE</h1>
    </div>
  )
}

export default Banner;