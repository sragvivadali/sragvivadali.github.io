import React, { useEffect } from 'react'
import { images } from './../../portfolio'
import './Photo.css'

const Photos = () => {
  return (
    <section className='section photos center' id='photos'>
      <h2 className='section__title'>Photography</h2>
      <div className='grid'>
        {images.imageLinks.map((image, index) => (
          <div className='grid-item' key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className='photo-btn'>
        {images.url && (
          <a href={images.url} target='_blank'>
            <span type='button' className='btn btn--outline'>
              see more
            </span>
          </a>
        )}
      </div>
    </section>
  )
}

export default Photos
