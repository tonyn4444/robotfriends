import { SET_SEARCH_FIELD } from './types';

const initialState = {
	searchField: ''
};

function searchReducer(state = initialState, action = {}) {
	switch (action.type) {
		case SET_SEARCH_FIELD:
			return {...state, searchField: action.payload};
		default:
			return state;
	}
}

export default searchReducer;
