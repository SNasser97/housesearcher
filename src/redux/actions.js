import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_HOMES_PENDING,
	REQUEST_HOMES_SUCCESS,
	REQUEST_HOMES_FAILED 
} from "./constants";

export const setSearchField = (text) => ({ // return obj
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const fetchHomes = () => (dispatch) => {
	dispatch({ type: REQUEST_HOMES_PENDING });
	fetch("https://api.jsonbin.io/b/5e66463103d6af389870144e/2")
		.then(response => response.json())
		.then(data => 
			dispatch({
				type: REQUEST_HOMES_SUCCESS, 
				payload: data
			})
		)
		.catch(error => 
			dispatch({
				type:REQUEST_HOMES_FAILED, 
				payload: error
			})
		);
}  
// export const getHomes 