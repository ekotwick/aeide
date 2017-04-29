import React from 'react';
import { connect } from 'react-redux';
import studentPlural from '../components/studentPlural';

const mapState = state => ({
	students: state.studentReducer.listedStudents
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(studentPlural);