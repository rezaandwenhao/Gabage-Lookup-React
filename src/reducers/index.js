import { combineReducers } from 'redux';
import searchSec_reducer from './searchSec_reducer';
import favoriteSec_reducer from './favoriteSec_reducer';

const rootReducer = combineReducers({
    searchReducer: searchSec_reducer,
    favReducer: favoriteSec_reducer
});

export default rootReducer;