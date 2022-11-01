import React, { useContext, useEffect } from 'react'
import DefaultContextProvider from '../Context/DefaultContext'
import { DefaultContext } from '../Context/DefaultContext'
import { ReactComponent as CatFace } from '../catmain/Asset 5.svg'
import { ReactComponent as CatEye1 } from '../catmain/cateye.svg'
import { ReactComponent as CatEye2 } from '../catmain/cateye.svg'
import Image from '../catmain/eyehole.png'
import createCards from './card'

import './cardGrid.css'

//  @param {object} props - Props to pass to the component.
//  @param {number} props.score - The player's current score.
//  @param {number} props.highScore - The highest score the player has achieved.

function CardGrid(props) {
  const { score, highScore } = props
  const { clickHandler } = props
  const { state, setState, border, setBorder } = useContext(DefaultContext)
  let cards = createCards(clickHandler)

  /* Fisher-Yates shuffle */
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = cards[i]
    cards[i] = cards[j]
    cards[j] = temp
  }
  // useEffect(() => {
  //   if (border) {
  //     setInterval(() => {
  //       setBorder(false)
  //     }, 1000)
  //   }
  // })
  const newFunc = () => {
    {
      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        const anchor = document.getElementById('cat')
        const rekt = anchor.getBoundingClientRect()
        const anchorX = rekt.left + rekt.width / 2
        const anchorY = rekt.top + rekt.height / 2
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
        // console.log(angleDeg)
        // const eyes = document.querySelectorAll('.eyes')
        // console.log(eyes)
        const eye1 = document.querySelector('.eye1')
        const eye2 = document.querySelector('.eye2')

        eye1.style.transform = `rotate(${90 + angleDeg}deg)`
        eye2.style.transform = `rotate(${90 + angleDeg}deg)`

        // console.log(eye)
        // eyes.forEach((eye) => {
        //   eye.style.transform = `rotate(${90 + angleDeg}deg)`
        //   // eye.style.border = 'red'
        //   // console.log(`hello`)
        // })
      })
    }
  }

  // const eyes = document.querySelectorAll('eyes')
  // console.log(eyes)
  function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = (rad * 180) / Math.PI
    return deg
  }

  newFunc()

  return (
    <>
      <div className='main-div' id='main-id'>
        {/* <Image /> */}
        <div
          className={`${
            border === true && score == '0' ? 'border' : ''
          } : cardGrid`}
        >
          {cards}
          <h3 className='header-1'>Memory Cards</h3>
          <h3 className='absoluter score'> Score : {score}</h3>
          <h3 className='absoluter high-score'> High Score : {highScore}</h3>
          <div className='cat' id='cat'>
            <CatFace className='Catface' />
            <div className='eyes'>
              <img src={Image} alt='hello' className='eye1 eye' />
              <img src={Image} alt='hello' className='eye2 eye' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardGrid
