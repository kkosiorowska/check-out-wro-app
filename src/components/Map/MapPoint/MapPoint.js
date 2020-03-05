import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet'
import propTypes from 'prop-types';

import classes from './MapPoint.css';

const mapPoint = (props) => {
    let attachedClasses = null;
    switch (props.type) {
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
        iconUrl: process.env.REACT_APP_URL + '/images/categories/logo-' + props.type.toLowerCase() +'.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const initMarker = (ref) => {
        if (ref) {
            if (ref.props.id === props.attractionId) ref.leafletElement.openPopup();
            else ref.leafletElement.closePopup();
        }
    };

    return (
        <Marker
            attractionId={props.attractionId}
            ref={initMarker}
            id={props.id}
            onClick={() => props.clicked(props.id)}
            icon={iconCategory}
            position={[props.geoCoordinate.latitude, props.geoCoordinate.longitude]}>
            <Popup>
                <header className={attachedClasses.join(' ')}>{props.name}</header>
                <br/>
                {props.shortDescription}
            </Popup>
        </Marker>
    );

};

mapPoint.propTypes ={
    type: propTypes.string.isRequired
};

export default mapPoint;
