import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './AttractionItem.css';

class AttractionItem extends Component {
    render () {
        let attraction  = null;
        let insideAttraction = (
                <div>
                    <img
                        src={this.props.imagePath}
                        alt={this.props.name}/>
                    <header style={{fontWeight: 'bold', color: '#5a6371'}}> {this.props.name}</header>
                    <p className={classes.DesktopOnly} style={{fontSize: 'small'}}>{this.props.shortDescription}</p>
                    <p style={{fontWeight: '100', fontSize: ' x-small', color: 'grey'}}>{this.props.address}</p>
                </div>
        );

        switch (this.props.type) {
            case ('Landscape'):
                attraction = <div className={[classes.AttractionItem, classes.Landscape].join(' ')} onClick={() => this.props.clicked(this.props.id)}>{insideAttraction}</div>;
                break;
            case ('Architecture'):
                attraction = <div className={[classes.AttractionItem, classes.Architecture].join(' ')} onClick={() => this.props.clicked(this.props.id)}>{insideAttraction}</div>;
                break;
            case ('Gastronomy'):
                attraction = <div className={[classes.AttractionItem, classes.Gastronomy].join(' ')} onClick={() => this.props.clicked(this.props.id)}>{insideAttraction}</div>;
                break;
            case ('Other'):
                attraction = <div className={[classes.AttractionItem, classes.Other].join(' ')} onClick={() => this.props.clicked(this.props.id)}>{insideAttraction}</div>;
                break;
            case ('Nature'):
                attraction = <div className={[classes.AttractionItem, classes.Nature].join(' ')} onClick={() => this.props.clicked(this.props.id)}>{insideAttraction}</div>;
                break;
            case ('Monument'):
                attraction = <div className={[classes.AttractionItem, classes.Monument].join(' ')} onClick={() => this.props.clicked(this.props.id)}>{insideAttraction}</div>;
                break;
            default:
                attraction = null;
        }
        return attraction;
    }
}

AttractionItem.propTypes ={
    type: propTypes.string.isRequired
};

export default AttractionItem;
