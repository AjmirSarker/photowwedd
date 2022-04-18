import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center'>
            <h1>Arafat Sarker</h1>
            <p>Copyright © {year} Arafat Sarker</p>
            <p>All rights reserved</p>
            <span><i class="fab fa-instagram"></i><i class="fab fa-discord"></i><i class="fab fa-twitter"></i><i
                class="fab fa-youtube"></i></span>
        </footer>
    );
};

export default Footer;