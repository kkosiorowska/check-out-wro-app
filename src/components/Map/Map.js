import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import classes from './Map.css';
import MapPoint from './MapPoint/MapPoint';

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
                <MapPoint
                type={"Other"}
                name={"name"}
                shortDescription={"shortDescription"}
                width={51.11}
                length={17.03}
                />
            </LeafletMap>
        </div>
    );
};

export default map;
