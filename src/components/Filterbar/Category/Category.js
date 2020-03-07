import React  from 'react';

import classes from './Category.css';

const category = (props) => {
    return (
        <div className={ props.isSelected ? [classes.Category, classes.CategorySelected].join(' ') : classes.Category} onClick={ () => props.clicked(props.type) }>
            <img  src={process.env.REACT_APP_URL + '/images/categories/logo-' + props.type.toLowerCase() +'.png'} alt={'logo-' + props.type}></img>
        </div>
    );
};

export default category;




