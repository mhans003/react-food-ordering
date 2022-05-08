import React, { Fragment } from 'react';
//Import image file
import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>HeaderName</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="table with food" />
            </div>
        </Fragment>
    );
};

export default Header;