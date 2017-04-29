import React from 'react';
import { Link } from 'react-router';

const Home = () => (
	<div className='home'>
		<div className='banner text-center'>
			<h1>HOME PAGE</h1>
		</div>
		<div className='container'>
			<div className='row'>
				<div className='col-lg-6'>
					<h3 className='text-center'>STUDENTS</h3>
				</div>
				<div className='col-lg-6'>
					<Link to='campuses'>
						<h3 className='text-center'>CAMPUSES</h3>
					</Link>		
				</div>
			</div>
		</div>
	</div>
);

export default Home;