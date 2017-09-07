import React from 'react';
import Header from '../containers/Layouts/header';
import PageTransition from 'react-router-page-transition';
const App = (props) =>{
	return(
		<div>
			<Header/>
			{props.children}
		</div>

	);
}
export default App;