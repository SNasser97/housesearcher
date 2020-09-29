import React from 'react';


// children
/*
	<Parent component>
		<Child component props={object} />
	</Parent component>
*/

// scroll uses children to render children of it's children
const Scroll = (props) => {
	// console.log(props);
	// return props.children;
	return (
		<div className='scroll'>
			{props.children}
		</div>
	);
}

export default Scroll;