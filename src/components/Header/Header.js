import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <div>
            <nav className=''>
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/friends'>Friends</Link>
        </nav>
        <p>Common header</p>
        </div>
    );
};

export default Header;