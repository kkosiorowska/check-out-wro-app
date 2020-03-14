import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const fetchAttractionsSuccess = (attractions) => {
    return {
        type: actionTypes.FETCH_ATTRACTIONS_SUCCESS,
        attractions: attractions
    };
};

export const fetchAttractionsFail = (error) => {
    return {
        type: actionTypes.FETCH_ATTRACTIONS_FAIL,
        error: error
    };
};

export const fetchAttractionsStart = () => {
    return {
        type: actionTypes.FETCH_ATTRACTIONS_START
    };
};

export const fetchAttractions = () => {
    return dispatch => {
        dispatch(fetchAttractionsStart());
        axios.get( '/attractions.json')
            .then( response => {
                dispatch(fetchAttractionsSuccess(response.data));
            } )
            .catch( error => {
                dispatch(fetchAttractionsFail(error));
            } );
    };
};