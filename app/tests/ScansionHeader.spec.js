'use strict';

// react
import React from 'react';

// testing utils
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import Header from '../components/ScansionHeader';

describe('<Header />', () => {

	const wrapper = shallow(<Header />);

	it('should have title "AEIDE" in Greek', () => {
		expect(wrapper.find('h1').render().text()).to.equal('\u03B1\u03B5\u03B9\u03B4\u03B5');
	});

	it('should have subtitle: "AN APP FOR HOMERIC POETRY"', () => {
		expect(wrapper.find('h2').render().text()).to.equal('AN APP FOR HOMERIC POETRY');
	});
})