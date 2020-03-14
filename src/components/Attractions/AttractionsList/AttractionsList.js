import React from 'react';

import classes from './AttractionsList.css';
import AttractionItem from './AttractionItem/AttractionItem';
import EmptyResult from '../../EmptyResult/EmptyResult';
import Spinner from '../../UI/Spinner/Spinner';

const attractionsList = (props) => {
    let attractions = <Spinner />;
    if(!props.loading) {
        attractions = props.attractions.length
            ? props.attractions.map(row => (
                    <AttractionItem
                        clicked={props.attractionSelected}
                        key={row.id}
                        id={row.id}
                        type={row.type}
                        imagePath={row.imagePath}
                        name={row.name}
                        shortDescription={row.shortDescription}
                        address={row.address}
                    />
                ))
            : <EmptyResult />;
    }
    return (
        <div className={classes.AttractionsList}>
            <div className={classes.AttractionsListContainer}>
                {attractions}
            </div>
        </div>
    );
}

export default attractionsList;
