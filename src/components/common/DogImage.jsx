import React from 'react';

const DogImage = ({ breedData }) => {
    return (
        <>
            <div className='container-dogs'>
                {breedData.map((breedImg, index) => {
                    return (
                        <div id={index} key={index} className='dog-image'>
                            <img src={breedImg} alt='dog' />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DogImage;
