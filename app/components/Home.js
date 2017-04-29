import React from 'react';
import { Link } from 'react-router';

const Home = () => (
	<div className='home'>
		<h1> AEIDE </h1>
		<h2> Type Homer verse </h2>
		<h3> The app parses the metric elements and scans the lines for you</h3>
		<h3>
			<Link to='/scansion/' >Try it</Link>
		</h3>
	</div>
);

export default Home;