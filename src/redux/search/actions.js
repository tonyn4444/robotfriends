import { SET_SEARCH_FIELD } from './types';

export const setSearchField = searchTerm => ({ 
	type: SET_SEARCH_FIELD,
	payload: searchTerm
});
