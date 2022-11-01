import React from 'react'
import './card.css'

/**
 * Imports all images from the images directory.
 *
 * @returns {array} - An array of objects containing a reference to an image and its path.
 */
function importImages() {
  const reqJpgs = require.context('../images', true, /\.jpg$/)
  const jpgs = reqJpgs
    .keys()
    .map((path) => ({ path, file: reqJpgs(path).default }))

  return jpgs
}

/**
 * Creates an array of cards from all images in the image directory.
 *
 * @param {function} clickHandler - Callback function to execute when a card is clicked.
 *
 * @returns {array} - An array of Card components.
 */
function createCards(clickHandler) {
  const images = importImages()
  let cards = []
  let i = 0

  images.forEach((image) => {
    cards.push(
      <Card
        key={i}
        id={i++}
        src={image.file}
        // alt={image.path.slice(2, -4).replace(/_/g, ' ')}
        clickHandler={clickHandler}
      />
    )
  })

  return cards
}

/**
 * Component that displays an image with a click handler.
 *
 * @param {object} props - Props to pass to the component.
 * @param {number} props.id - A unique identifier for the card.
 * @param {string} props.src - Path to the image that will be displayed.
 * @param {alt} props.alt - Alt text for the displayed image.
 * @param {clickHandler} props.clickHandler - Callback function to execute when the card is clicked.
 */

function Card(props) {
  const { id, src, alt, clickHandler } = props

  return (
    <div className='card'>
      <img
        id={`image${id}`}
        className='image'
        src={src}
        alt={alt}
        onClick={() => clickHandler(id)}
      />
    </div>
  )
}

export default createCards
