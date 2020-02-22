import React from 'react';

import classes from './Attraction.css';

const attraction = (props) => (
    <div className={classes.Attraction}>
        <img
            src={props.imagePath}
            alt={props.name}/>
        <header style={{fontWeight: 'bold', color: '#5a6371'}}> {props.name}</header>
        <p className={classes.DesktopOnly} style={{fontSize: 'small'}}>{props.shortDescription}</p>
        <p style={{fontWeight: '100', fontSize: ' x-small', color: 'grey'}}>{props.address}</p>
    </div>
);

export default attraction;
