import { CHANGE_SEARCH_FIELD } from "./constants";
import apiCall from "../api/api";

export const setSearchField = (text) => ({ // return obj
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const fetchHomes = () => (dispatch) => {
	dispatch(apiCall("https://api.jsonbin.io/b/5e66463103d6af389870144e/2"));
}  
// export const getHomes 