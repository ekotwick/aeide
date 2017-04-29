import {
	CREATE_STUDENT,
	UPDATE_STUDENT,
	DELETE_STUDENT,
	SET_STUDENTS
} from '../constants';
import axios from 'axios';

export const createS = student => ({type: CREATE_STUDENT, student});
export const updateS = student => ({type: UPDATE_STUDENT, student});
export const destroyS = student => ({type: DELETE_STUDENT, student});
export const setS = students => ({type: SET_STUDENTS, students});

export const createStudent = (student, campus) => dispatch => {
	axios.post('/api/students', {student, campus})
		.then(res => dispatch(createS(res.data)))
		.catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
	axios.put(`/api/students/:${id}`, student)
		.then(res => dispatch(updateS(res.data)))
		.catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};

export const destroyStudent = id => dispatch => {
	dispatch(destroyS(id));
	axios.delete(`/api/students/${id}`)
		.catch(err => console.error(`Destroying student: ${id} unsuccessful`, err));
};

export const fetchAllStudents = () => dispatch => {
		axios.get('/api/students')
			.then(res => dispatch(setS(res.data)))
			.catch(err => console.error('Retrieving students unsuccessful', err));
};