import React from 'react'

function Card({poster_path , name}) {
  return (
    <div  className="h-[300px] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 cursor-pointer flex flex-col  items-center" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${poster_path}')` }}>

      <div className= 'text-white text-xl bg-gray-900/60 w-full text-center p-2 mt-auto'>
        {name}
      </div>
    </div>

  )
}

export default Card