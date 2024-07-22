import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BACKGROUND_IMG } from '../utils/constants'

const GPTSearch = () => {
    
  return (
    <div>
        <div className='fixed -z-20'>
        <img className='h-screen object-cover lg:h-full' src={NETFLIX_BACKGROUND_IMG} />
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch