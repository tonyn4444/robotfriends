const initialState = {
	robotSearch: ''
};

function searchReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'SET_ROBOT_SEARCH':
			return {...state, robotSearch: action.payload};
		default:
			return state;
	}
}

export default searchReducer;
