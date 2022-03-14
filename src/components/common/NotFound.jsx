import React from 'react';
import NotFoundImg from '../../assets/img/not-found.png';

const NotFound = () => {
    return(
        <div className='not-found'>
            <h3>Lo sentimos, no pudimos encontrar lo que buscabas</h3>
            <h4>Intenta nuevamente</h4>
            <img src={NotFoundImg} alt='not found'/>
        </div>
    )
}

export default NotFound;
