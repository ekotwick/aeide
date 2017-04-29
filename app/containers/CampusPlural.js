import React from 'react';
import { connect } from 'react-redux';
import campusPlural from '../components/campusPlural';

const mapState = state => ({
	campuses: state.campusReducer.listedCampuses
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(campusPlural);