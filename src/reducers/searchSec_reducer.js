import { KEYWORD_CHANGED, SEARCH_REQUESTED } from '../actions/types';
import data from '../data.json';

const INITIAL_STATE = {
    keyword: '',
    results: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case KEYWORD_CHANGED:
            return { ...state, keyword: action.payload };
        case SEARCH_REQUESTED:
            let results = [];
            let keyword = state.keyword.toLowerCase();
            results = data.filter((item) => 
                item.title.toLowerCase().includes(keyword) 
                || item.keywords.toLowerCase().includes(keyword))
            return { ...state, results: results };
        default:
            return state;
    }
}
