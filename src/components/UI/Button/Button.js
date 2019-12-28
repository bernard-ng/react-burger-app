import React from 'react'
import classes from './Button.css'

const button = (props) => {
    const assignedClasses = [
        classes.Button,
        classes[props.btnType]
    ].join(" ");

    return (
        <button onClick={props.clicked} className={assignedClasses}>
            {props.children}
        </button>
    );
};

export default button;
