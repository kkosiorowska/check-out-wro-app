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

export const fetchAttractionsByCategory = (type) => {
    return dispatch => {
        dispatch(fetchAttractionsStart());
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
                dispatch(fetchAttractionsSuccess(fetchedAttractions));
            } )
            .catch( error => {
                dispatch(fetchAttractionsFail(error));
            } );
    };
};

export const fetchAttractionsByDistrict = (district) => {
    return dispatch => {
        dispatch(fetchAttractionsStart());
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
                dispatch(fetchAttractionsSuccess(fetchedAttractions));
            } )
            .catch( error => {
                dispatch(fetchAttractionsFail(error));
            } );
    };
};

export const fetchAttractionsByCategoryAndDistrict = (typeCategory, dis) => {
    return dispatch => {
        dispatch(fetchAttractionsStart());
        axios.get( '/attractions.json')
            .then( response => {
                const fetchedAttractions = response.data.filter(({ district, type }) => district === dis && type === typeCategory);
                dispatch(fetchAttractionsSuccess(fetchedAttractions));
            } )
            .catch( error => {
                dispatch(fetchAttractionsFail(error));
            } );
    };
};