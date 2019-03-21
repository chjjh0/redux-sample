import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';


class Counter extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    login() {
        console.log('로그인')
        sessionStorage.setItem('loginID', 'chjjh0');
        this.props.handleLogin();
    }

    logout() {
        console.log('로그아웃')
        if (sessionStorage.getItem('loginID')) {
            sessionStorage.removeItem('loginID');
        }
        this.props.handleLogout();
    }

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return(
            <div className='test' style={style}>
                <Value number={this.props.number} login={this.props.login} />
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                    onCheckLogin={this.login}
                    onLogout={this.logout}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color,
        login: state.checkLogin.login
    };
};

const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))},
        handleLogin: () => { dispatch(actions.login())},
        handleLogout: () => { dispatch(actions.logout())}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
