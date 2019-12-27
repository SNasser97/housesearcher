import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
	constructor() {
		super();
		this.state = {
			property: [],
			searchField:''
		}
	}
	componentDidMount() {
		const apiURL = "https://api.myjson.com/bins/jyoes";
		// this is hosted on a temp server so URL changes frequently
		fetch(apiURL) // api call
		.then(resp => resp.json()) // convert to json
		.then(homes => {
			this.setState({ property: homes })
		});
	}

	onSearchChange = (event) => { // custom function
		// setState for searchField to whatever we type in SearchBox
		// for changing the state DON'T DO this.state.obj = ""
		this.setState({ searchField:event.target.value }) 
	}

	render() {
		const { property, searchField} = this.state;
		const filterPropertyType = property.filter(home => {
			return home["house_type"].toLowerCase().includes(searchField.toLowerCase());
			// if property type (lower case) == searchField (lowercase)
			// then filter it
		});

		// console.log(filterPropertyType);
		
		// if property empty show loader else display cards
		return (property.length === 0) ? 
		<Loader/> : 
		(
			<React.Fragment>
		 			<h1 className="main-heading tc">Home Searcher</h1>
		 			<SearchBox searchChange={ this.onSearchChange }/>
		 			<Scroll>
		 				<ErrorBoundary>
		 					<CardList property={ filterPropertyType }/>
		 				</ErrorBoundary>
		 			</Scroll>
			</React.Fragment>
		);
	}
}

export default App;

// const App = () => {
// 	return (
// 		<React.Fragment>
// 			<h1 className="tc">Home Searcher</h1>
// 			<SearchBox />
// 			<CardList property={ property }/>
// 		</React.Fragment>
// 	);
// }



// props, passed down from parent to child, reads it
// (1/2) state, change/dynamic, description of app, an obj which 
// (2/2) describes application

// Our state would be prop in cardlist and the prop we search for
// Props - what we get from state
// Parent component gives state to child component (recieve as prop)