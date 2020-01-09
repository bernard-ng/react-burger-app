import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/UI/Button/Button'

class OrderSummary extends React.Component {

    /*componentDidUpdate() {
        console.log('[OrderSummary] will update');
    }*/

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(i => (
                <li key={i}>
                <span style={{textTransform: 'capitalize'}}>
                    {i}: {this.props.ingredients[i]}
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
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        )
    }
}

OrderSummary.propTypes = {
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.object.isRequired,
    purchaseCanceled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;
