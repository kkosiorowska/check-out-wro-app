import React, { Component } from "react";

import classes from './Filterbar.css';
import Category from './Category/Category';
import Button from "../UI/Button/Button";

class Filterbar extends Component {
    state = {
        categorySelected: "",
        isSelectedCategory: false,
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

    categorySelectedHandler = type => {
        this.setState({
            categorySelected: type,
            isSelectedCategory: true
        });
    };

    allCategoriesHandler = () => {
        if(this.state.isSelectedCategory) this.setState({isSelectedCategory: false});
    };

    render() {
        let categories = this.state.categories.map(row => (
            <Category key={row.id}
                      type={row.name}
                      clicked={this.categorySelectedHandler}
                      isSelected={((row.name === this.state.categorySelected) ||  !this.state.isSelectedCategory) ? true : false}
            />
        ));

        return (
            <div className={classes.FilterBar}>
                <div className={classes.Btn}>
                    <Button
                        clicked={this.allCategoriesHandler}
                        btnType={this.state.isSelectedCategory ? "Danger" : "Success"}>All
                    </Button>
                </div>
                <div className={classes.CategoryContainer}>
                    {categories}
                </div>
            </div>
        );
    }
}

export default Filterbar;
