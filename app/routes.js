import React from 'react';
import { connect } from 'react-redux'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import Root from './components/Root';
import Scansion from './components/Scansion';

// import { StudentAddGlobal } from './containers/StudentAddGlobal';

const Routes = () => (
	<Router history={hashHistory}>
		<Route path='/' component={ Root } >
			<IndexRoute component={ Home } />
			<Route path='scansion' component={ Scansion } />
		</Route>
	</Router>
);

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Routes);
