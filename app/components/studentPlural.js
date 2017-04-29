import React from 'react';

export default function studentPlural(props){

	const students = props.students;
	console.log('student\n', props);

	return (
		<div className='container'>
			<ul>
			{
				students && students.map(student => (
					<li key={student.id}>
						<span>{student}</span>
					</li>
				))
			}
			</ul>
		</div>
	);
}