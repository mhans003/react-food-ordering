import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
//Import image file
import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>HeaderName</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="table with food" />
            </div>
        </Fragment>
    );
};

export default Header;