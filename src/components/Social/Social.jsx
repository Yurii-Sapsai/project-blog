import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

import './Social.sass'

function Social() {
    return (
        <div className='social'>
            FOLLOW US
            <div className="icons">
                <p><FacebookIcon /></p>
                <p><InstagramIcon /></p>
                <p> <TwitterIcon /></p>
                <p><PinterestIcon /></p>
            </div>
        </div>
    )
}

export default Social