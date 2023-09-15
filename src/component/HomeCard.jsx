import React from 'react'

const homeCard = ({name,image,categy,price}) => {
    return (
        <div>
            <div className=''>
                <img src={image} className='w-40' />
            </div>
        </div>
    )
}

export default homeCard