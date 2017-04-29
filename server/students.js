'use strict';
const students = require('express').Router();
const Student = require('../db/models').Student;
const Campus = require('../db/models').Campus;

// utility function to field errenous queries
const errors = function(str, code) {
	const err = new Error(str);
	err.status = code;
	throw err;
};
// custome error messages for errenous queries; pairs with utility function above
const invalidId = 'Invalid student id';
const noStudents = 'No students found';

students.param('id', (req, res, next, id) => {
	if (id.match(/\D/g)) errors(invalidId, 500);
	Student.findById({
		where: {
			id: id,
		},
		include: [ Campus ]
	})
		.then(foundStudent => {
			if (!foundStudent) errors(noStudents, 404);
			req.student = foundStudent;
			next();
		})
		.catch(next);

});

students.get('/', (req, res, next) => {
	Student.findAll({
		include: [ Campus ]
	})
		.then(foundStudents => {
			if (!foundStudents) errors(noStudents, 404);
			else res.json(foundStudents);
		})
		.catch(next);
});

students.post('/', (req, res, next) => {
	const campusId = parseInt(req.body.campus.campus);

	const student = Student.create(req.body.student);
	const campus = Campus.findById(campusId);

	Promise.all([student, campus])
		.then(([createdStudent, foundCampus]) => {
			return createdStudent.setCampus(foundCampus);
		})
		.then(updated => res.status(201).json(updated))
		.catch(next);
});

students.get('/:id', (req, res, next) => {
	res.json(req.student);
});

students.put('/:id', (req, res, next) => {
	req.student.update(req.body)
		.then(updated => res.json(updated))
		.catch(next);
});

students.delete('/:id', (req, res, next) => {
	req.student.destroy()
		.then(() => res.status(204))
		.catch(next);
});

module.exports = students; 