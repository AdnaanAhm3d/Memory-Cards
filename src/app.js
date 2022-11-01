import React, { useContext, useEffect, useState } from 'react'

import CardGrid from './components/cardGrid'
import Header from './components/header'
import Catvg from './components/catvg'
import './app.css'
// import './card.css'
import { DefaultContext } from './Context/DefaultContext'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const { border, setBorder } = useContext(DefaultContext)
  // const [border, setBorder] = useState(false)

  const borderFunc = () => {}

  function handleClick(id) {
    setBorder(true)
    if (clickedCards.includes(id)) {
      if (score > highScore) {
        setHighScore(score)
      }
      setScore(0)
      setClickedCards([])
      // setBorder(true)
    } else {
      setClickedCards([...clickedCards, id])
      setScore(score + 1)
      // setBorder(true)
    }
  }

  return (
    <div id='app'>
      {/* <Catvg /> */}
      <Header />
      {/* <p class='rules'>Click on the images to increase your score.</p>
      <p class='rules'>
        Clicking an image more than once will reset your score!
      </p> */}
      <CardGrid
        className='border'
        clickHandler={handleClick}
        score={score}
        highScore={highScore}
      />
    </div>
  )
}

export default App
