import React, { Component } from 'react';

import MainPage from '../components/MainPage';

import { setSearchField, fetchHomes } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => { // what state to listen and pass down as prop
	const { searchHomes, getHomes } = state;
	return {
		searchField: searchHomes.searchField,
		property: getHomes.property,
		isPending: getHomes.isPending,
		error: getHomes.error
	}
}
const mapDispatchToProps = (dispatch) => { // what props to listen for and what action to take and dispatch/send
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onFetchHomes: () => fetchHomes(dispatch)
	}
}

class App extends Component {
	render() {
		// this.props in this case referring to the redux store/state of each reducer.
		return (
			<MainPage {...this.props} />
		);
	}
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect accepts 2 params what state to listen for, what action to take

// props, passed down from pasrent to child, reads it
// (1/2) state, change/dynamic, description of app, an obj which 
// (2/2) describes application

// Our state would be prop in cardlist and the prop we search for
// Props - what we get from state
// Parent component gives state to child component (recieve as prop)
