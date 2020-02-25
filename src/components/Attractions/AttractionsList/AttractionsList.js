import React, { Component } from 'react';

import classes from './AttractionsList.css';
import Attraction from './Attraction/Attraction';

export class AttractionsList extends Component {
    render () {
        let attractions = this.props.attractions.map(row => (
            <Attraction
                clicked={this.props.attractionSelected}
                key={row.id}
                id={row.id}
                type={row.type}
                imagePath={row.imagePath}
                name={row.name}
                shortDescription={row.shortDescription}
                address={row.address}
            />
        ));
        return (
            <div className={classes.AttractionsList}>
                {attractions}
            </div>
        );
    }
}

export default AttractionsList;