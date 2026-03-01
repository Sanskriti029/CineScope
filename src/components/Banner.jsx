import React from 'react'

function Banner({ movieObj }) {
  if (!movieObj) {
    return null; // Don't render until movieObj is loaded
  }

  return (

    
    <div 
      className='h-[80vh] bg-cover bg-center flex items-end' 
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movieObj.backdrop_path}')`,
      }}
    > 
      <div className='text-white text-xl bg-gray-900/60 w-full text-center p-2'>
        {movieObj.title || movieObj.original_title}
      </div>
    </div>
  )
}

export default Banner