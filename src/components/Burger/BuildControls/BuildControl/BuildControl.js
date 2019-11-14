import React from "react";
import classes from './BuildControl.css'
import PropTypes from 'prop-types';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            onClick={props.removed}
            className={classes.Less}
            disabled={props.disabled}>
            Less
        </button>
        <button onClick={props.added} className={classes.More}>More</button>
    </div>
);

buildControl.propTypes = {
    label: PropTypes.string.isRequired,
    added: PropTypes.func.isRequired,
    removed: PropTypes.func.isRequired
};

export default buildControl;
