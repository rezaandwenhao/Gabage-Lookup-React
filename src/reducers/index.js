import { combineReducers } from 'redux';
import searchSec_reducer from './searchSec_reducer';

const rootReducer = combineReducers({
    searchReducer: searchSec_reducer
});

export default rootReducer;