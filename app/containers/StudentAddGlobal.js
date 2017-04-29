import { connect } from 'react-redux';
import StudentAddLocal from './StudentAddLocal';
import { createStudent } from '../action-creators/students';

const mapState = state => {
	return {
		campuses: state.campusReducer.listedCampuses
	};
};

const mapDispatch = dispatch => {
	return {
		submitNewStudent (student, campus) {
			dispatch(createStudent(student, campus));
		}
	};
};

export default connect(mapState, mapDispatch)(StudentAddLocal);