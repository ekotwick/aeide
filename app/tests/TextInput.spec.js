'use strict';

// react
import React from 'react';

// testing utils
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import TextInput from '../components/TextInput';

describe('<TextInput />', () => {

	const wrapper = shallow(<TextInput />);
	const textArea = wrapper.find('textarea');

	it('should render one textarea html node...', () => {
		expect(textArea).to.have.length(1);
	});

	it('...which should have a placeholder value of "Enter transliterated Greek here"', () => {
		expect(textArea.node.props.placeholder).to.equal('Enter transliterated Greek here');
	});

});