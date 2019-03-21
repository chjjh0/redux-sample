import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';
import checkLogin from './checkLogin';


const reducers = combineReducers({
    counter, ui, checkLogin
});

export default reducers;
