import * as actionTypes from './actionsTypes'

export const selectCategory = (category) => {
    return {
        type: actionTypes.SELECT_CATEGORY,
        selectedCategory: category
    };
};

export const selectAllCategories = () => {
    return {
        type: actionTypes.SELECT_ALL_CATEGORIES
    };
};

export const selectDistrict= (district) => {
    return {
        type: actionTypes.SELECT_DISTRICT,
        selectedDistrict: district
    };
};

export const selectAllDistricts = () => {
    return {
        type: actionTypes.SELECT_ALL_DISTRICTS
    };
};
