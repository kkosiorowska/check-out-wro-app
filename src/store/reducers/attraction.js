import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    attractions: [],
    loading: false
};

const fetchAttractionsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchAttractionsSuccess = ( state, action ) => {
    return updateObject( state, {
        attractions: action.attractions,
        loading: false
    } );
};

const fetchAttractionsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ATTRACTIONS_START: return fetchAttractionsStart( state, action );
        case actionTypes.FETCH_ATTRACTIONS_SUCCESS: return fetchAttractionsSuccess( state, action );
        case actionTypes.FETCH_ATTRACTIONS_FAIL: return fetchAttractionsFail( state, action );
        default: return state;
    }
};

export default reducer;