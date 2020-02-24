import React, { Component } from 'react';

import Map from '../../components/Map/Map';
import AttractionsList from '../../components/AttractionsList/AttractionsList';

export class MainContent extends Component {
    state = {
        attractions: [
            {
                type: "Landscape",
                imagePath: "https://2.bp.blogspot.com/-xogZXTP4G0E/XLNSvIh8xvI/AAAAAAACHAE/uDKmis_QM5E_zE9HYtI74Q7XV1kvhZubwCKgBGAs/s1600/IMG_20190302_145018-01.jpeg",
                name: "Kolorowe podwórko",
                shortDescription: "Lokalna kronika mieszkańców Nadodrza. Szare podwórka zastały zamienione na kolorowe murale.",
                address: "Franklina Delano Roosevelta 14-16",
                geoCoordinate: {
                    latitude: 51.123241,
                    longitude: 17.042847
                }
            },
            {
                type: "Architecture",
                imagePath: "https://www.park-m.pl/images/news/czerwiec2017/Wroc%C5%82aw_Dunikowskiego_1.jpg",
                name: "Bulwar Xawerego Dunikowskiego",
                shortDescription: "Odnowiony bulwar przy nabrzeżu Odry. Miejsce do spacerowania i odpoczywania z pięknym widokiem na Odrę.",
                address: "bulwar Xawerego Dunikowskiego",
                geoCoordinate: {
                    latitude: 51.112277,
                    longitude: 17.044107
                }
            },
            {
                type: "Gastronomy",
                imagePath: "https://lh4.googleusercontent.com/proxy/ICMftI9284ph2gWSWA8FM-Yy6YBqiBXFxWo-u78zVgermPjDXJT3Ysn6p8ZGllaZUEQ2xIYgiBABNJHchFOTlM8kcEjwtFdWMq4_tH9bXAQEz7ToYe3yLd4j0Vb3jJw",
                name: "Szyciokawiarnia Nr 1 - Dresówka.pl",
                shortDescription: "W kawiarnii możesz skorzystać z dostępnych na miejscu maszyn i wykrojów by uszyć swoje wymarzone kreacje pod okiem pomocnej załogi.",
                address: "Wyszyńskiego 39",
                geoCoordinate: {
                    latitude: 51.115706,
                    longitude: 17.051459
                }
            }
        ]
    };

    render () {
        return (
            <div>
                <AttractionsList
                    attractions={this.state.attractions}/>
                <Map
                    attractions={this.state.attractions}/>
            </div>
        );
    }
}

export default MainContent;
