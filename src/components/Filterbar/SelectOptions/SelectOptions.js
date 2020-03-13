import React from 'react';

import classes from './SelectOptions.css';
import Input from "../../UI/Input/Input";

const selectOptions = (props) => {
    let categories = {
        options: props.categories.map(row => (
            {value: row.name, displayValue: row.name}
        ))
    };
    categories.options.unshift({value: "", displayValue: "All"});
    let districts = {
        options: props.districts.map(row => (
            {value: row.name, displayValue: row.name}
        ))
    };
    districts.options.unshift({value: "", displayValue: "All"});

    return (
        <div className={classes.SelectOptions}>
            <div className={classes.InputContainer}>
                <Input
                    elementType="select"
                    elementConfig={categories}
                    changed={(event) => props.changedCategory(event.target.value)}
                />
            </div>
            <div className={classes.InputContainer}>
                <Input
                    elementType="select"
                    elementConfig={districts}
                    changed={(event) => props.changedDistrict(event.target.value)}
                />
            </div>
        </div>
    );
};

export default selectOptions;
