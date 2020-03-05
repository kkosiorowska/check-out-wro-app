import React from 'react';

import classes from './AttractionDetails.css';
import Button from '../../UI/Button/Button';
import leftArrow from "../../../assets/images/left-arrow .png";

const attractionDetails = (props) => {
    const attraction = props.attractions.find(({ id }) => id === props.attractionId);
        return (
            <div className={classes.AttractionDetails}>
                <div className={classes.ImageContainer}>
                    <Button
                        clicked={props.clicked}
                        btnType="Back">
                        <img src={leftArrow} alt="LeftArrow"/>
                    </Button>
                    <img src={attraction.imagePath} alt="imageAttraction"/>
                </div>
                <div className={classes.DetailsContainer}>
                    <p><strong>Name:</strong> {attraction.name} </p>
                    <hr/>
                    <p><strong>Category:</strong> {attraction.type} </p>
                    <p><strong>District:</strong> {attraction.district} </p>
                    <p><strong>Address:</strong> {attraction.address} </p>
                    <hr/>
                    <p><strong>Description:</strong> {attraction.description} </p>
                </div>
            </div>
        );
};

export default attractionDetails;
