import React from 'react';


const Loader = () => {
	return (
		<div className="loader">
			<div className="loader__spinner">
			  <div className="loader__spinner loader__spinner--rect1"></div>
			  <div className="loader__spinner loader__spinner--rect2"></div>
			  <div className="loader__spinner loader__spinner--rect3"></div>
			  <div className="loader__spinner loader__spinner--rect4"></div>
			  <div className="loader__spinner loader__spinner--rect5"></div>
			</div>
		</div>
	);
}




export default Loader;