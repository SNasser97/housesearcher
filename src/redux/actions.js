import {
	CHANGE_SEARCH_FIELD,
	REQUEST_HOMES_FAILED,
	REQUEST_HOMES_PENDING,
	REQUEST_HOMES_SUCCESS
} from './constants';

import apiCall from '../api/api';

export const setSearchField = (text) => ({ // return obj
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const fetchHomes = (dispatch) => {
	dispatch({ type: REQUEST_HOMES_PENDING });
	apiCall('https://api.jsonbin.io/b/5e66463103d6af389870144e/3')
		.then(data => {
			dispatch({
				type: REQUEST_HOMES_SUCCESS,
				payload: data,
			});
		})
		.catch(e => {
			dispatch({
				type: REQUEST_HOMES_FAILED,
				error: e
			});
		});
}
// export const getHomes