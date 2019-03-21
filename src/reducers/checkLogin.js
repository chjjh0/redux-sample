import * as types from '../actions/ActionTypes';

const initialState = {
    login: '로그인 전입니다'
};

export default function login(state = initialState, action) {
    /* ... */
    switch(action.type) {
        case types.LOGIN:
            return {
                ...state,
                login: state.login = sessionStorage.getItem('loginID') ?
                `${sessionStorage.getItem('loginID')} 님 환영합니다!!!!` : state
            };
        case types.LOGOUT:
            return {
                ...state,
                login: state.login = '로그아웃했습니다'
            }
        default:
            return state;
    }
}
