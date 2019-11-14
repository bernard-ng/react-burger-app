import React, {Fragment} from 'react';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Fragment>
            <div>
                Toolbar, sidebrawer, backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    );
};

export default layout;
