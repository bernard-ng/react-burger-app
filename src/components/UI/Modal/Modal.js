import React, {Fragment} from 'react'
import classes from './Modal.css'
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                transition: 'all .3s linear'
            }}
            className={classes.Modal}
        >
            {props.children}
        </div>
    </Fragment>
);

export default modal;
