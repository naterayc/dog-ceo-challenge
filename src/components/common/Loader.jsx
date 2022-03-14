import React from 'react';
import Spin from '../../assets/img/spin-load.gif'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={Spin} alt='searching' />
        </div>
    )
}

export default Loader;