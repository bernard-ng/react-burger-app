import React, {Fragment} from 'react'
import Modal from "../../components/UI/Modal/Modal";

export default (WrappedComponent, axios) => {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.props = props;

            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: false});
                return request;
            });

            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({error})
            });
        }

        state = {
            error: false
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        render() {
            return (
                <Fragment>
                    <Modal show={this.state.error} modalClosed={() => this.setState({error: false})}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}
