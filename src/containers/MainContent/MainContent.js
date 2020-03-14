import React, { Component } from 'react';
import { connect } from 'react-redux';
 import { createStore, combineReducers, applyMiddleware } from 'redux';

import Map from '../../components/Map/Map';
import AttractionsList from '../../components/Attractions/AttractionsList/AttractionsList';
import AttractionDetails from "../../components/Attractions/AttractionDetails/AttractionDetails";
import Filterbar from '../../components/Filterbar/Filterbar';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class MainContent extends Component {
    state = {
        attractionId: "",
        isSelected: false,
    };

    constructor (props) {
        super(props);
        this.props.onFetchAttractions();
    }

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

    getAttractionsByCategory = type => {
        const queryParams = '?orderBy="type"&equalTo="'+ type +'"';
        axios.get( '/attractions.json' + queryParams)
            .then( response => {
                const fetchedAttractions = [];
                for ( let key in response.data ) {
                    fetchedAttractions.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                this.setState( { attractions: fetchedAttractions } );
            } )
            .catch( error => {
                console.log(error);
            } );
    };

    getAttractionsByDistrict = district => {
        const queryParams = '?orderBy="district"&equalTo="'+ district +'"';
        axios.get( '/attractions.json' + queryParams)
            .then( response => {
                const fetchedAttractions = [];
                for ( let key in response.data ) {
                    fetchedAttractions.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                this.setState( { attractions: fetchedAttractions } );
            } )
            .catch( error => {
                console.log(error);
            } );
    };

    getAttractionsByCategoryAndDistrict = (typeCategory, dis) => {
        axios.get( '/attractions.json' )
            .then( response => {
                this.setState( { attractions: response.data.filter(({ district, type }) => district === dis && type === typeCategory) } );
            } )
            .catch( error => {
                console.log(error);
            } );
    };

    render () {
        let attr = <Spinner />;
        if(!this.props.loading){
             attr = this.state.isSelected
            ? <AttractionDetails
                attractionId={this.state.attractionId}
                clicked={this.backToAttractionsListHandler}
                attractions={this.props.attractions}/>
            : <AttractionsList
                attractions={this.props.attractions}
                attractionSelected={this.attractionSelectedHandler}/>;
        }
        return (
            <div>
                <Filterbar
                    getAllAttractions={this.props.onFetchAttractions}
                    getAttractionsByCategory={this.getAttractionsByCategory}
                    getAttractionsByDistrict={this.getAttractionsByDistrict}
                    getAttractionsByCategoryAndDistrict={this.getAttractionsByCategoryAndDistrict}
                />
                {attr}
                <Map
                    attractionId={this.state.attractionId}
                    attractions={this.props.attractions}
                    attractionSelected={this.attractionSelectedHandler}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        attractions: state.attractions,
        loading: state.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAttractions: () => dispatch( actions.fetchAttractions() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
