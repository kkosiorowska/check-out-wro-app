import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    selectedCategory: "",
    isSelectedCategory: false,
    selectedDistrict: "",
    isSelectedDistrict: false,
    categories: [
        {
            id: "0",
            name: "Landscape"
        },
        {
            id: "1",
            name: "Architecture"
        },
        {
            id: "2",
            name: "Gastronomy"
        },
        {
            id: "3",
            name: "Other"
        },
        {
            id: "4",
            name: "Nature"
        } ,
        {
            id: "5",
            name: "Monument"
        }
    ],
    districts: [
        {
            id: "0",
            name: "Stare Miasto"
        },
        {
            id: "1",
            name: "Śródmieście"
        },
        {
            id: "2",
            name: "Psie Pole"
        },
        {
            id: "3",
            name: "Krzyki"
        },
        {
            id: "4",
            name: "Fabryczna"
        }
    ]
};

const selectCategory = ( state, action ) => {
    return updateObject( state, {
        selectedCategory: action.selectedCategory,
        isSelectedCategory: true
    } );
};

const selectAllCategories = ( state, action ) => {
    return updateObject( state, {
        selectCategory: "",
        isSelectedCategory: false
    } );
};

const selectDistrict = ( state, action ) => {
    return updateObject( state, {
        selectedDistrict: action.selectedDistrict,
        isSelectedDistrict: true
    } );
};

const selectAllDistricts = ( state, action ) => {
    return updateObject( state, {
        selectedDistrict: "",
        isSelectedDistrict: false
    } );
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SELECT_CATEGORY: return selectCategory( state, action );
        case actionTypes.SELECT_ALL_CATEGORIES: return selectAllCategories( state, action );
        case actionTypes.SELECT_DISTRICT: return selectDistrict( state, action );
        case actionTypes.SELECT_ALL_DISTRICTS: return selectAllDistricts( state, action );
        default: return state;
    }
};

export default reducer;