import React from 'react';
import { connect } from 'react-redux'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/Home';
import Root from './components/Root';
import { fetchAllCampuses } from './action-creators/campuses';
import { fetchAllStudents } from './action-creators/students';
import CampusPlural from './containers/CampusPlural';
import campusSingle from './components/campusSingle';
import studentPlural from './components/studentPlural';
import studentSingle from './components/studentSingle';
import StudentAddGlobal from './containers/StudentAddGlobal';
import CampusAddGlobal from './containers/CampusAddGlobal';
// import { StudentAddGlobal } from './containers/StudentAddGlobal';

const Routes = ({fetchInitialData}) => (
	<Router history={hashHistory}>
		<Route path='/' component={ Root } onEnter={fetchInitialData}>
			<IndexRoute component={ Home }/>
			<Route path='students' component={ studentPlural } />
			<Route path='students/add' component={ StudentAddGlobal } />
			<Route path='students/:id' component={ studentSingle } />
			<Route path='campuses' component={ CampusPlural } />
			<Route path="campuses/add" component={ CampusAddGlobal } />
			<Route path='campuses/:id' componen={ campusSingle } />
		</Route>
	</Router>
);

const mapState = null;

const mapDispatch = dispatch => ({
	fetchInitialData: () => {
		dispatch(fetchAllCampuses());
		dispatch(fetchAllStudents());
	}
});

export default connect(mapState, mapDispatch)(Routes);
