import React from "react";

import classes from './EmptyResult.css';
import imgUnhappy from '../../assets/images/unhappy.png';

const emptyResult = (props) => (
    <div className={classes.EmptyResult}>
        <img src={imgUnhappy} alt="imgUnhappy"/>
        <p>No results.</p>
    </div>  
)

export default emptyResult;