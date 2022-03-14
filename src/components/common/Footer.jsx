import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <span> Naterayc - {year} </span>
        </footer>
    )
};

export default Footer;
