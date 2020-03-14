import React, { Component } from "react";
import { connect } from 'react-redux';

import classes from './Filterbar.css';
import Category from './Category/Category';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import SelectOptions from './SelectOptions/SelectOptions';
import * as actions from '../../store/actions/index';
import category from "./Category/Category";

class Filterbar extends Component {

    categorySelectedHandler = type => {
        if(type === 'All') {
            this.props.onSelectAllCategories();
            if(this.props.isSelectedDistrict) this.props.getAttractionsByDistrict(this.props.selectedDistrict);
            else this.props.getAllAttractions();

        } else {
            this.props.onSelectCategory(type);
            if(this.props.isSelectedDistrict) this.props.getAttractionsByCategoryAndDistrict(type, this.props.selectedDistrict);
            else this.props.getAttractionsByCategory(type);
        }
    };

    allCategoriesHandler = () => {
        if(this.props.isSelectedCategory) {
            this.props.onSelectAllCategories();
            if(this.props.isSelectedDistrict) this.props.getAttractionsByDistrict(this.props.selectedDistrict);
            else this.props.getAllAttractions();
        }
    };

    districtSelectedHandler = district => {
        if(district === 'All') {
            this.props.onSelectAllDistricts();
            if(this.props.isSelectedCategory) this.props.getAttractionsByCategory(this.props.selectedCategory);
            else this.props.getAllAttractions();

        } else {
            this.props.onSelectDistrict(district)
            if(this.props.isSelectedCategory) this.props.getAttractionsByCategoryAndDistrict(this.props.selectedCategory, district);
            else this.props.getAttractionsByDistrict(district);
        }
    };

    render() {
        let categories = this.props.categories.map(row => (
            <Category key={row.id}
                      type={row.name}
                      clicked={this.categorySelectedHandler}
                      isSelected={((row.name === this.props.selectedCategory) ||  !this.props.isSelectedCategory) ? true : false}
            />
        ));
        let districts = {
            options: this.props.districts.map(row => (
                {value: row.name, displayValue: row.name}
            ))
        };
        districts.options.unshift({value: "All", displayValue: "All"});

        return (
            <div className={classes.FilterBar}>
                <div  className={classes.DesktopOnly}>
                    <div className={classes.Btn}>
                        <Button
                            clicked={this.allCategoriesHandler}
                            btnType={this.props.isSelectedCategory ? "Danger" : "Success"}>All
                        </Button>
                    </div>
                    <div className={classes.CategoryContainer}>
                        {categories}
                    </div>
                    <div className={classes.DistrictsContainer}>
                        <Input
                            elementType="select"
                            elementConfig={districts}
                            changed={(event) => this.districtSelectedHandler(event.target.value)}
                        />
                    </div>
                </div>
                <SelectOptions
                    districts={this.props.districts}
                    categories={this.props.categories}
                    changedCategory={this.categorySelectedHandler}
                    changedDistrict={this.districtSelectedHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.filterbar)
    return {
        categories: state.filterbar.categories,
        districts: state.filterbar.districts,
        selectedCategory: state.filterbar.selectedCategory,
        isSelectedCategory: state.filterbar.isSelectedCategory,
        selectedDistrict: state.filterbar.selectedDistrict,
        isSelectedDistrict: state.filterbar.isSelectedDistrict
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory: (category) => dispatch( actions.selectCategory(category) ),
        onSelectAllCategories: () => dispatch( actions.selectAllCategories() ),
        onSelectDistrict: (district) => dispatch( actions.selectDistrict(district) ),
        onSelectAllDistricts: () => dispatch( actions.selectAllDistricts() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);