import React, {Fragment} from 'react'
import classes from './Modal.css'
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log("[Modal] update");
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        transition: 'all .3s linear'
                    }}
                    className={classes.Modal}
                >
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;
