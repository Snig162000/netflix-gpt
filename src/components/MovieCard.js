import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(posterPath === 'N/A') return null;
  return (
    <div className='md:w-48 w-36 pr-4'>
        <img 
        alt='Movie Card'
        src={posterPath}
        />
    </div>
  )
}

export default MovieCard;