
const apiCall = (url) => {
	return fetch(url).then(resp => resp.json());
}

export default apiCall;