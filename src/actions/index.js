import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}

export function login() {
    return {
        type: types.LOGIN
    };
}

export function logout() {
    return {
        type: types.LOGOUT
    };
}
