import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/signin">Login</NavLink>
        </nav>
    );
};

export default Nav;