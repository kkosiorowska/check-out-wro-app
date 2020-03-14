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
                    getAttractionsByCategory={this.props.onFetchAttractionsByCategory}
                    getAttractionsByDistrict={this.props.onfetchAttractionsByDistrict}
                    getAttractionsByCategoryAndDistrict={this.props.onfetchAttractionsByCategoryAndDistrict}
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
        attractions: state.attraction.attractions,
        loading: state.attraction.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAttractions: () => dispatch( actions.fetchAttractions() ),
        onFetchAttractionsByCategory: (type) => dispatch( actions.fetchAttractionsByCategory(type) ),
        onfetchAttractionsByDistrict: (district) => dispatch( actions.fetchAttractionsByDistrict(district) ),
        onfetchAttractionsByCategoryAndDistrict: (typeCategory, dis) => dispatch( actions.fetchAttractionsByCategoryAndDistrict(typeCategory, dis) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
