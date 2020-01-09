import React, {Fragment} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
    return (
        <Fragment>
            <Layout>
                <BurgerBuilder/>
            </Layout>
        </Fragment>
    );
}

export default App;
