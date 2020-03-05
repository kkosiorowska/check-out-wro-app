import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Map from '../../components/Map/Map';
import AttractionsList from '../../components/Attractions/AttractionsList/AttractionsList';
import AttractionDetails from "../../components/Attractions/AttractionDetails/AttractionDetails";
import Filterbar from '../../components/Filterbar/Filterbar';

class MainContent extends Component {
    state = {
        attractionId: "",
        isSelected: false,
        attractions: [
            {
                id: "0",
                type: "Landscape",
                district: "Stare Miasto",
                imagePath: "https://2.bp.blogspot.com/-xogZXTP4G0E/XLNSvIh8xvI/AAAAAAACHAE/uDKmis_QM5E_zE9HYtI74Q7XV1kvhZubwCKgBGAs/s1600/IMG_20190302_145018-01.jpeg",
                name: "Kolorowe podwórko",
                shortDescription: "Lokalna kronika mieszkańców Nadodrza. Szare podwórka zastały zamienione na kolorowe murale.",
                description: "Kolorowe ryby, błękit oceanów i rajski ogród oraz psy, dinozaury i portrety na ścianie starej kamienicy. Podwórko przy ulicy Roosevelta ozdobili artyści, których wspierali mieszkańcy domów i uczynili z niego atrakcję turystyczną. Oryginalnym miejscem zachwycił się nawet Wim Wenders, światowej sławy reżyser filmowy. Najpierw trzeba wejść w bramę od ulicy Roosevelta, w środkowej jej części, by stanąć przed nadzwyczajnym dziełem artystów i mieszkańców.",
                address: "Franklina Delano Roosevelta 14-16",
                geoCoordinate: {
                    latitude: 51.123241,
                    longitude: 17.042847
                }
            },
            {
                id: "1",
                type: "Architecture",
                district: "Krzyki",
                imagePath: "https://www.park-m.pl/images/news/czerwiec2017/Wroc%C5%82aw_Dunikowskiego_1.jpg",
                name: "Bulwar Xawerego Dunikowskiego",
                shortDescription: "Odnowiony bulwar przy nabrzeżu Odry. Miejsce do spacerowania i odpoczywania z pięknym widokiem na Odrę.",
                description: "Kolorowe ryby, błękit oceanów i rajski ogród oraz psy, dinozaury i portrety na ścianie starej kamienicy. Podwórko przy ulicy Roosevelta ozdobili artyści, których wspierali mieszkańcy domów i uczynili z niego atrakcję turystyczną. Oryginalnym miejscem zachwycił się nawet Wim Wenders, światowej sławy reżyser filmowy. Najpierw trzeba wejść w bramę od ulicy Roosevelta, w środkowej jej części, by stanąć przed nadzwyczajnym dziełem artystów i mieszkańców.",
                address: "bulwar Xawerego Dunikowskiego",
                geoCoordinate: {
                    latitude: 51.112277,
                    longitude: 17.044107
                }
            },
            {
                id: "2",
                type: "Gastronomy",
                district: "Fabryczna",
                imagePath: "https://lh4.googleusercontent.com/proxy/ICMftI9284ph2gWSWA8FM-Yy6YBqiBXFxWo-u78zVgermPjDXJT3Ysn6p8ZGllaZUEQ2xIYgiBABNJHchFOTlM8kcEjwtFdWMq4_tH9bXAQEz7ToYe3yLd4j0Vb3jJw",
                name: "Szyciokawiarnia Nr 1 - Dresówka.pl",
                shortDescription: "W kawiarnii możesz skorzystać z dostępnych na miejscu maszyn i wykrojów by uszyć swoje wymarzone kreacje pod okiem pomocnej załogi.",
                description: "Kolorowe ryby, błękit oceanów i rajski ogród oraz psy, dinozaury i portrety na ścianie starej kamienicy. Podwórko przy ulicy Roosevelta ozdobili artyści, których wspierali mieszkańcy domów i uczynili z niego atrakcję turystyczną. Oryginalnym miejscem zachwycił się nawet Wim Wenders, światowej sławy reżyser filmowy. Najpierw trzeba wejść w bramę od ulicy Roosevelta, w środkowej jej części, by stanąć przed nadzwyczajnym dziełem artystów i mieszkańców.",
                address: "Wyszyńskiego 39",
                geoCoordinate: {
                    latitude: 51.115706,
                    longitude: 17.051459
                }
            }
        ]
    };

    attractionSelectedHandler = (index) => {
        // console.log("idx " + index);
        this.setState({
            attractionId: index,
            isSelected: true
        });

    };

    backToAttractionsListHandler = () => {
        this.switchComponentHandler();
        this.setState({attractionId: ""});
    };

    switchComponentHandler = () => {
        this.setState( prevState => {
            return {isSelected: !prevState.isSelected}
        })
    };

    render () {
        let attr = this.state.isSelected
            ? <AttractionDetails
                attractionId={this.state.attractionId}
                clicked={this.backToAttractionsListHandler}
                attractions={this.state.attractions}/>
            : <AttractionsList
                attractions={this.state.attractions}
                attractionSelected={this.attractionSelectedHandler}/>;
        return (
            <div>
                <Filterbar />
                {attr}
                <Map
                    attractionId={this.state.attractionId}
                    attractions={this.state.attractions}
                    attractionSelected={this.attractionSelectedHandler}/>
            </div>
        );
    }
}

export default MainContent;
