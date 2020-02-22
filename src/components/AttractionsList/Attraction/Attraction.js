import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './Attraction.css';

class Attraction extends Component {
    render () {
        let attachedClasses  = null;
        switch (this.props.type) {
            case ('Landscape'):
                attachedClasses = [classes.Attraction, classes.Landscape];
                break;
            case ('Architecture'):
                attachedClasses = [classes.Attraction, classes.Architecture];
                break;
            case ('Gastronomy'):
                attachedClasses = [classes.Attraction, classes.Gastronomy];
                break;
            case ('Other'):
                attachedClasses = [classes.Attraction, classes.Other];
                break;
            case ('Nature'):
                attachedClasses = [classes.Attraction, classes.Nature];
                break;
            case ('Monument'):
                attachedClasses = [classes.Attraction, classes.Monument];
                break;
            default:
                attachedClasses = [classes.Attraction]
        }
        return (
            <div className={attachedClasses.join(' ')}>
                <img
                    src={this.props.imagePath}
                    alt={this.props.name}/>
                <header style={{fontWeight: 'bold', color: '#5a6371'}}> {this.props.name}</header>
                <p className={classes.DesktopOnly} style={{fontSize: 'small'}}>{this.props.shortDescription}</p>
                <p style={{fontWeight: '100', fontSize: ' x-small', color: 'grey'}}>{this.props.address}</p>
            </div>
        );
    }
}

Attraction.propTypes ={
    type: propTypes.string.isRequired
};

export default Attraction;
