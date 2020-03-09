import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_HOMES_PENDING,
	REQUEST_HOMES_SUCCESS,
	REQUEST_HOMES_FAILED 
} from "./constants";

const initialStateSearch = {
	searchField:"",
}

// takes state and the action that occured e.g. on input change
export const searchHomes = (state=initialStateSearch, action={}) => { // default param arg vals
	// conditional to check action based on state
	switch(action.type) { // type CHANGE_SEARCH_FIELD
		case CHANGE_SEARCH_FIELD:
	// assign to new obj the state, then add searchField obj with our input from action
	// same as below { ...state, { searchField:action.payload } }; 
			return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;   // default initialState
	}
}

const initialStateHomes = {
	property:[],
	isPending: false,
	error:""
}

export const getHomes = (state=initialStateHomes, action={}) => {
	switch(action.type) {
		case REQUEST_HOMES_PENDING:
			return Object.assign({}, state, {isPending: true});
		case REQUEST_HOMES_SUCCESS:
			return Object.assign({}, state, 
			{
	 	  		property: action.payload, 
			 	isPending: false
			});
		case REQUEST_HOMES_FAILED:
			return Object.assign({}, state, 
			{
				error: action.payload,
				isPending: false
			});
		default:
			return state;
	}
} 