import {
	CREATE_STUDENT,
	UPDATE_STUDENT,
	DELETE_STUDENT,
	SET_STUDENTS
} from '../constants';

const hardCodedStudents = [
	{
		firstname: 'Hulk',
		middlename: '',
		lastname: 'Hogan',
		email: 'hh@w.com'
	},
	{
		firstname: 'Stone',
		middlename: 'Cold Steve',
		lastname: 'Austin',
		email: 'scsa@w.com'
	},
	{
		firstname: 'Macho',
		middlename: 'Man Randy',
		lastname: 'Savage',
		email: 'mmrs@w.com'
	},
	{
		firstname: 'Ric',
		middlename: '',
		lastname: 'Flair',
		email: 'rf@w.com'
	},
	{
		firstname: 'The',
		middlename: 'Ultimate',
		lastname: 'Warrior',
		email: 'tuw@w.com'
	}
];

const initialState = {
	selectedStudent: {},
	listedStudents: hardCodedStudents
};

export default function (state=initialState, action) {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case CREATE_STUDENT:
			newState.selectedStudent // =;
			newState.listedStudents = newState.listedStudents.concat(action.student)
			break;

		case UPDATE_STUDENT:
			newState.selectedStudent // =;
			break;

		case DELETE_STUDENT: 
			newState.selectedStudent // =;
			newState.listedStudents // =;
			break;

		case SET_STUDENTS: 
			newState.selectedStudent // =;
			newState.listedStudents = newState.listedStudents.concat(action.students);
			break;

		default: 
			return newState;

	}

	return newState;

}

