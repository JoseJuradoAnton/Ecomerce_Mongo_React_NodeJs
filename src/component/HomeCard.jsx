import React from 'react'

const homeCard = ({ name, image, category, price }) => {
    console.log(homeCard)
    return (
        <div className='bg-gray-300 shadow-md p-2 rounded min-w-[150px] '>
            {name && <>
                <div className='w-60 min-h-[150px]'>
                    <img src={image} className='h-full w-full' />
                </div>
                <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name} </h3>
                <p className='text-slate-500 text-center'>{category}</p>
                <p className='text-center font-bold'> <span className='text-red-600'>S/.</span><span>{price}</span></p>
            </>}
        </div>
    )
}

export default homeCard