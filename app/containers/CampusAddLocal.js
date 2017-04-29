import React, { Component } from 'react';
import store from '../store';
import CampusAdd from '../components/campusAdd';

export default class CampusAddLocal extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			image: '',
		};

		this.setName = this.setName.bind(this);
		this.setImageUrl = this.setImageUrl.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	setName(name) {
		this.setState({name});
	}

	setImageUrl(image) {
		this.setState({image});
	}

	handleSubmit(evt) {
		console.log(this.state);
		// evt.preventdefault();
		this.props.submitNewCampus(this.state);
	}

	render() {

		return (
			<CampusAdd 
				inputValues={this.state}
				setName={this.setName}
				setImageUrl={this.setImageUrl}
				handleSubmit={this.handleSubmit} />
		);
	}

}