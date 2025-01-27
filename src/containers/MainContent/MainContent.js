import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/Map/Map';
import AttractionsList from '../../components/Attractions/AttractionsList/AttractionsList';
import AttractionDetails from "../../components/Attractions/AttractionDetails/AttractionDetails";
import Filterbar from '../../components/Filterbar/Filterbar';
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
        this.setState({
            attractionId: index,
            isSelected: true
        });

    };

    backToAttractionsListHandler = () => {
        this.setState({
            attractionId: "",
            isSelected: false
        });
    };

    render () {
        let attr = this.state.isSelected
            ? <AttractionDetails
                attractionId={this.state.attractionId}
                clicked={this.backToAttractionsListHandler}
                attractions={this.props.attractions}/>
            : <AttractionsList
                loading={this.props.loading}
                attractions={this.props.attractions}
                attractionSelected={this.attractionSelectedHandler}/>;
        return (
            <div>
                <Filterbar
                    backToAttractionsListHandler={this.backToAttractionsListHandler}
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
