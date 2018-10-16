import {
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL,
	REQUEST_ROBOTS_PENDING
} from './types';

const initialState = {
	robots: [],
	robotsPending: false,
	error: ''
};

function robotsReducer(state = initialState, action) {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { robotsPending: action.payload });
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, robotsPending: false });
		case REQUEST_ROBOTS_FAIL:
			return Object.assign({}, state, { robotsPending: false, error: action.payload });
		default: 
			return state;
	}
}

export default robotsReducer;
