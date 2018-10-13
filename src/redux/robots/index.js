const initialState = {
	robots: []
};

function robotsReducer(state = initialState, action) {
	switch(action.type) {
		case 'SET_ROBOTS':
			return {...state, robots: action.payload };
		default: 
			return state;
	}
}

export default robotsReducer;
