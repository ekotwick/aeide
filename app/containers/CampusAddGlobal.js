import { connect } from 'react-redux';
import CampusAddLocal from './CampusAddLocal';
import { createCampus } from '../action-creators/campuses';

const mapState = null;

const mapDispatch = dispatch => {
	return {
		submitNewCampus (campus) {
			dispatch(createCampus(campus));
		}
	};
};

export default connect(mapState, mapDispatch)(CampusAddLocal);