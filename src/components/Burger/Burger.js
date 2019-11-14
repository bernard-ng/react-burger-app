import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from 'prop-types'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient =>
            [...Array(props.ingredients[ingredient])]
                .map((_, i) => <BurgerIngredient key={ingredient + i} type={ingredient}/>)
        )
        .reduce((a, b) => a.concat(b));

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding Ingredients !</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default burger;
