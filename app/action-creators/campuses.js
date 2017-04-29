import {
	CREATE_CAMPUS,
	UPDATE_CAMPUS,
	DELETE_CAMPUS,
	SET_CAMPUSES
} from '../constants';
import axios from 'axios';

export const createC = campus => ({type: CREATE_CAMPUS, campus});
export const updateC = campus => ({type: UPDATE_CAMPUS, campus});
export const destroyC = campus => ({type: DELETE_CAMPUS, campus});
export const setC = campuses => ({type: SET_CAMPUSES, campuses});
// export const setC = campuses => {
// 	console.log('setting all campuses\n');
// 	return {type: SET_CAMPUSES, campuses};
// };

export const createCampus = campus => dispatch => {
	axios.post('/api/campuses', campus)
		.then(res => dispatch(createC(res.data)))
		.catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
	axios.put(`/api/campuses/:${id}`, campus)
		.then(res => dispatch(updateC(res.data)))
		.catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};

export const destroyCampus = id => dispatch => {
	dispatch(destroyC(id));
	axios.delete(`/api/campuses/${id}`)
		.catch(err => console.error(`Destroying campus: ${id} unsuccessful`, err));
};

export const fetchAllCampuses = () => dispatch => {
		axios.get('/api/campuses')
			.then(res => dispatch(setC(res.data)))
			.catch(err => console.error('Retrieving campuses unsuccessful', err));
};




