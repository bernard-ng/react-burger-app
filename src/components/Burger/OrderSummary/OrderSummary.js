import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(i => (
            <li key={i}>
                <span style={{textTransform: 'capitalize'}}>
                    {i}: {props.ingredients[i]}
                </span>
            </li>
        ));

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout ?</p>
        </Fragment>
    )
};

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default orderSummary;
