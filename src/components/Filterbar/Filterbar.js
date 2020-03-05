import React, { Component } from "react";

import classes from './Filterbar.css';

class Filterbar extends Component {
    state ={
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

    render() {
        return (
            <div className={classes.FilterBar}>
                FilterBar
            </div>
        );
    }
}

export default Filterbar;
