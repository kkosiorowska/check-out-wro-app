import React, { Component } from 'react';

import classes from './AttractionsList.css';
import AttractionItem from './AttractionItem/AttractionItem';
import EmptyResult from '../../EmptyResult/EmptyResult';

export class AttractionsList extends Component {
    render () {
        let attractions = this.props.attractions.length
        ? this.props.attractions.map(row => (
                <AttractionItem
                    clicked={this.props.attractionSelected}
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
        return (
            <div className={classes.AttractionsList}>
                <div className={classes.AttractionsListContainer}>
                    {attractions}
                </div>
            </div>
        );
    }
}

export default AttractionsList;
