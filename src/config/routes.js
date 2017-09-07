import React from 'react';
import {Route} from 'react-router';

import requireAuth from '../containers/HOC/authenticate';
import App from "../components/app";
import Signin from '../containers/Auth/signin';
import Timeline from '../containers/Timeline';

export default (
	<Route path="/" component={App}>
		<Route path="signin" component={Signin}/>
		<Route path="timeline" component={requireAuth(Timeline)}/>
	</Route>
);