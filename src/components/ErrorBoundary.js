import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// lifeCycle method, similar to try catch
	componentDidCatch(error,info) {
		this.setState({hasError:true});
	}

	render() {
		const { hasError } = this.state;
		if(hasError) {
			return <h1 className='tc error-msg'>Oops..Something went wrong.</h1>
		}
		// otherwise render ErrorBoundries children
		return this.props.children;
	}
}

export default ErrorBoundary;