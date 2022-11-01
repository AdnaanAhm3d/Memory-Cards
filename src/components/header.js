import React, { useState } from 'react'
import { ReactComponent as InfoIcon } from '../icons/info-icon.svg'
import ScoreCard from './scorecard'
import { ReactComponent as CatFace } from '../catmain/Asset 5.svg'
import Image from '../catmain/eyehole.png'

import './header.css'

function Header(props) {
  const { score, highScore } = props
  const [info, setInfo] = useState(false)

  return (
    <div id='header'>
      <div className='wrapper'>
        <div className='icon-class'>
          <InfoIcon className='icon' />
          <span className='icon-text'>
            Click on the images to increase the score <br />
            Clicking on an image more than once will reset the score
          </span>
        </div>
      </div>
      {/* <div className='info-section'>
        <InfoIcon className='info-icon' />
        <p className='info-text'>
          Click on the images to increase the score <br />
          Clicking on an image more than once will reset the score
        </p>
      </div> */}
    </div>
  )
}

export default Header
