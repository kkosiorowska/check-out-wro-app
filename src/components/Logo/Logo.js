import React from 'react';

import cityLogo from '../../assets/images/city-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={cityLogo} alt="City"/>
    </div>
);

export default logo;
