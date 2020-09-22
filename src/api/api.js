import { 
	REQUEST_HOMES_PENDING,
	REQUEST_HOMES_SUCCESS,
	REQUEST_HOMES_FAILED 
} from "../redux/constants";

 const apiCall = (url) => dispatch => {
	dispatch({
		type: REQUEST_HOMES_PENDING
	});
 	fetch(url)
 		.then(resp=> resp.json())
	 	.then(data => {
			dispatch({
	 			type: REQUEST_HOMES_SUCCESS,
	 			payload:data
	 		});
	 	}).catch(error => {
			dispatch({
	 			type: REQUEST_HOMES_FAILED,
	 			payload:error
	 		});
	 	});
	
}

export default apiCall;