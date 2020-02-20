import React from 'react';

import classes from './SideDrawer.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <hr/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;
