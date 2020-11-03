import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, fetchHomes } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => { // what state to listen and pass down as prop
	const {searchHomes, getHomes} = state;
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
		onFetchHomes: () => dispatch(fetchHomes())
	}
}

class App extends Component {
	
	componentDidMount() {
		const { onFetchHomes } = this.props;
		onFetchHomes();
	}

	render() {
		const { searchField, onSearchChange, property, isPending } = this.props;

		const filterPropertyType = property.filter(home => {
			return home['house_type'].toLowerCase().includes(searchField.toLowerCase());
			// if property type (lower case) == searchField (lowercase)
			// then filter it
		});

		// console.log(filterPropertyType);
		
		// if property empty show loader else display cards
		console.info('---------------- RENDER ----------------');
		return (isPending) ? 
		<Loader/> : 
		(
			<React.Fragment>
					<Header />
		 			<SearchBox searchChange={ onSearchChange }/>
		 			<Scroll>
		 				<ErrorBoundary>
		 					<CardList property={ filterPropertyType }/>
		 				</ErrorBoundary>
		 			</Scroll>
			</React.Fragment>
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
