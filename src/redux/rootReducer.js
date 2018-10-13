import { combineReducers } from 'redux';
import robotsReducer from './robots';
import searchReducer from './search';

const rootReducer = combineReducers({
	robots: robotsReducer,
	search: searchReducer
});

export default rootReducer;