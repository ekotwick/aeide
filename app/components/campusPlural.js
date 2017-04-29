import React from 'react';

export default function campusPlural(props){

	const campuses = props.campuses;
	console.log('campus\n', props);

	return (
		<div className='container'>
		{
			campuses && campuses.map(campus => (
				<div key={campus.id} className="col-lg.4 campusPlural">
					<img src={campus.image} className="img-responsive"/>
					<h2>{campus.name}</h2>
				</div>
			))
		}
		</div>
	);
}
