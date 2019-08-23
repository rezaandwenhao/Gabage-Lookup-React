import { KEYWORD_CHANGED, SEARCH_REQUESTED } from './types';

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