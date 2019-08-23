import { KEYWORD_CHANGED, SEARCH_REQUESTED } from '../actions/types';
import data from '../data.json';

//Read data_json and find items that have a keyword matching action.keyword

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
            data.forEach((item) => {
                if (item.title.toLowerCase().includes(state.keyword.toLowerCase())) {
                    results.push(item);
                } else if (item.keywords.toLowerCase().includes(state.keyword.toLowerCase())) {
                    results.push(item);
                }
            })
            return { ...state, results: results };
        default:
            return state;
    }
}
