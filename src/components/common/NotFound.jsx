import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/img/not-found.png';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h3>Lo sentimos, no pudimos encontrar lo que buscabas</h3>
            <Link to='/'>Volver</Link>
            <img src={NotFoundImg} alt='not found' />
        </div>
    )
}

export default NotFound;
