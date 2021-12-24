import {combineReducers} from 'redux';

import {HomeReducer} from '../screen/home/redux/HomeReducer';

export const allReducer = combineReducers({
  HomeReducer,
});
