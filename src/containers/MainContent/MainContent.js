import React, { Component } from 'react';

import Map from '../../components/Map/Map';
import AttractionsList from '../../components/AttractionsList/AttractionsList';

export class MainContent extends Component {
    render () {
        return (
            <div>
                <AttractionsList />
                <Map/>
            </div>
        );
    }
}

export default MainContent;
