// 'use strict';

// // react
// import React from 'react';

// // testing utils
// import { spy } from 'sinon';
// import { expect } from 'chai';
// import { shallow, mount } from 'enzyme';

// // component
// import Sidebar from '../components/ScansionSidebar';

// describe('<Sidebar />', () => {

// 	const wrapper = shallow(<Sidebar />);
// 	const buttonSet = wrapper.find('ul').children().find('FlatButton');
// 	const buttonLabels = buttonSet.map(n => n.find('FlatButton').node.props.label);

// 	it('should render an unordered list...', () => {
// 		expect(wrapper.find('ul')).to.have.length(1);
// 	});

// 	it('...of five list items...', () => {
// 		expect(wrapper.find('ul').children()).to.have.length(5);
// 	});

// 	it('...each of which is a button...', () => {
// 		expect(buttonSet).to.have.length(5);
// 	});

// 	it('...whose labels are: "Sample", "Writing Guide", "Scansion Guide", "Show Syllables", and "Show Lengths"', () => {
// 		expect(buttonLabels).to.eql([ 'Sample', 'Writing Guide', 'Scansion Guide', 'Show Syllables', 'Show Lengths' ]);
// 	});

// });