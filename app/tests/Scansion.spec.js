'use strict';

// react
import React from 'react';

// testing utils
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import Header from '../components/Header';
import Scansion from '../components/Scansion';
import TextInput from '../components/TextInput';
import TextOutput from '../components/TextOutput';
import Sidebar from '../components/ScansionSidebar';

describe('<Scansions />', () => {

	const scansionWrapper = shallow(<Scansion />);

	it('should be named "Scansion"', () => {
		expect(scansionWrapper.name()).to.equal('Scansion');
	})

	it('should render one <Header /> component', () => {
		expect(scansionWrapper.find(Header)).to.have.length(1);
	});

	it('should render one <Sidebar /> component', () => {
		expect(scansionWrapper.find(Sidebar)).to.have.length(1);
	});

	it('should render one <TextInput /> component', () => {
		expect(scansionWrapper.find(TextInput)).to.have.length(1);
	});

	it('should render one <TextOutput /> component', () => {
		expect(scansionWrapper.find(TextOutput)).to.have.length(1);
	})

	it('should render 4 children components', () => {
		expect(scansionWrapper.children()).to.have.length(4);
	})

});