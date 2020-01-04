import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/UI/Button/Button'

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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    )
};

orderSummary.propTypes = {
    price: PropTypes.string.isRequired,
    ingredients: PropTypes.object.isRequired,
    purchaseCanceled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired
};

export default orderSummary;
