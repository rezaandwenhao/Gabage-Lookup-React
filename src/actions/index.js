import { KEYWORD_CHANGED, SEARCH_REQUESTED, FAVOURITE_TOGGLED } from './types';

export const keywordChanged = (text) => {
	return {
		type: KEYWORD_CHANGED,
		payload: text,
	};
};

export const searchRequested = (text) => {
	return {
		type: SEARCH_REQUESTED,
		payload: text,
	};
};

export const toggleFavorite = (item) => {
    return {
        type: FAVOURITE_TOGGLED,
        payload: item,
    };
};