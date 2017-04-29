import { combineReducers } from 'redux';
import campusReducer from './campus-reducer';
import studentReducer from './student-reducer';

export default combineReducers({ campusReducer, studentReducer });
