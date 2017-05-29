'use strict';

// react
import React from 'react';

// testing utils
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import Scansion from '../components/Scansion';
import TextInput from '../components/TextInput';
import TextOutput from '../components/TextOutput';
import Header from '../components/ScansionHeader';
import Sidebar from '../components/ScansionSidebar';

describe('<Scansions />', () => {

	const scansionComponent = shallow(<Scansion />);

	it('should be named "Scansion"', () => {
		const ScansionWrapper = () => <Scansion />;
		const scansionComponentWrapper = shallow(<ScansionWrapper />);
		expect(scansionComponentWrapper.name()).to.equal('Scansion');
	})

	it('should render one <Header /> component', () => {
		expect(scansionComponent.find(Header)).to.have.length(1);
	});

	it('should render one <Sidebar /> component', () => {
		expect(scansionComponent.find(Sidebar)).to.have.length(1);
	});

	it('should render one <TextInput /> component', () => {
		expect(scansionComponent.find(TextInput)).to.have.length(1);
	});

	it('should render one <TextOutput /> component', () => {
		expect(scansionComponent.find(TextOutput)).to.have.length(1);
	});

});