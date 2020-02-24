import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import classes from './Map.css';
import MapPoint from './MapPoint/MapPoint';

const map = (props) => {
    let markers = props.attractions.map(row => (
        <MapPoint
            key={row.name}
            type={row.type}
            name={row.name}
            shortDescription={row.shortDescription}
            geoCoordinate={row.geoCoordinate}/>
    ));
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
                easeLinearity={0.35}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                {markers}
            </LeafletMap>
        </div>
    );
};

export default map;
