import React from 'react'

const CardFeature = ({ name, price, image, category }) => {
  return (
    <div className='w-full min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col'>
      <div className='h-28 flex flex-col justify-center items-center'>
        <img src={image} className='h-full' />
      </div>
      <h3 className='fornt-bold text-slate-600 capitalize text-lg my-4'>{name}</h3>
      <p className='text-slate-500'>{category}</p>
      <p className='font-bold'><span className='font-bold text-red-500'>S/.</span> {price} </p>
      <button className='bg-yellow-500 py-1 my-2 mt-2 rounded'>Add Cart</button>
    </div>
  )
}

export default CardFeature