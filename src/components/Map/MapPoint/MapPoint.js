import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet'
import propTypes from 'prop-types';

import classes from './MapPoint.css';

class MapPoint extends Component {
    render () {
        let attachedClasses = null;
        switch (this.props.type) {
            case ('Landscape'):
                attachedClasses = [classes.Header, classes.Landscape];
                break;
            case ('Architecture'):
                attachedClasses = [classes.Header, classes.Architecture];
                break;
            case ('Gastronomy'):
                attachedClasses = [classes.Header, classes.Gastronomy];
                break;
            case ('Other'):
                attachedClasses = [classes.Header, classes.Other];
                break;
            case ('Nature'):
                attachedClasses = [classes.Header, classes.Nature];
                break;
            case ('Monument'):
                attachedClasses = [classes.Header, classes.Monument];
                break;
            default:
                attachedClasses = [classes.Header, ' '];
        }

        let iconCategory = new Leaflet.Icon({
            iconUrl: process.env.REACT_APP_URL + '/images/categories/logo-' + this.props.type.toLowerCase() +'.png',
            iconSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        return (
            <Marker
                icon={iconCategory}
                position={[this.props.geoCoordinate.latitude, this.props.geoCoordinate.longitude]}>
                <Popup>
                    <header className={attachedClasses.join(' ')}>{this.props.name}</header>
                    <br/>
                    {this.props.shortDescription}
                </Popup>
            </Marker>
        );
    }
}

MapPoint.propTypes ={
    type: propTypes.string.isRequired
};

export default MapPoint;
