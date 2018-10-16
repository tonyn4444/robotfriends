import {
	SET_ROBOTS,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL,
	REQUEST_ROBOTS_PENDING
} from './types';

export const fetchRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING, payload: true });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }));
}
