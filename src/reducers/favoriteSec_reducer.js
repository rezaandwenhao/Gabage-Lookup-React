import { FAVOURITE_TOGGLED } from '../actions/types';
import data from '../data.json';
import produce from "immer";

const favorites = [];
data.forEach((item) => {
    if (window.localStorage.getItem(item.title) != null) {
        favorites.push(item);
    }
})

const INITIAL_STATE = {
    favoriate_results: favorites
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FAVOURITE_TOGGLED:
            let title = action.payload.title;
            if (window.localStorage.getItem(title) == null) {
                window.localStorage.setItem(title, "");
            } else {
                window.localStorage.removeItem(title);
            }
            // let newMap = new Map(state.favoriate_results);
            // newMap.set(title, !newMap.get(title));
            return produce(state, newState => {
                if (newState.favoriate_results.filter(function (item) {
                    return item.title === action.payload.title;
                }).length > 0) {
                    newState.favoriate_results = newState.favoriate_results.filter((item) => item.title !== action.payload.title);
                } else {
                    newState.favoriate_results.push(action.payload);
                }
            })
        //return { ...state, favorite_results: newMap };
        default:
            return state;
    }
}