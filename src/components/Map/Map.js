import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import classes from './Map.css';

const map = (props) => {
    return (
        <div className={classes.Map}>
            <LeafletMap
                center={[51.11, 17.03]}
                zoom={14}
                maxZoom={20}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35} >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
            </LeafletMap>
        </div>
    );
};

export default map;
