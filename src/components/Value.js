import React, { Component, PropTypes } from 'react';

const propTypes = {
    number: PropTypes.number,
    login: PropTypes.login
};

const defaultProps = {
    number: -1,
    login: false
};

class Value extends Component {

    render() {
        return(
            <div>
                <h1>NUmber: {this.props.number}</h1>
                <h1>Login: {this.props.login}</h1>
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
