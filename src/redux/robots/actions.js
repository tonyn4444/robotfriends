export const fetchRobots = () => (dispatch, getState) => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => dispatch({ type: 'SET_ROBOTS', payload: users }));
}
