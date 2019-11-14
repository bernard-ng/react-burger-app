import React, {Fragment} from 'react';

const layout = (props) => {
    return (
        <Fragment>
            <div>
                Toolbar, sidebrawer, backdrop
            </div>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default layout;
