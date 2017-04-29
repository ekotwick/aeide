import React, { Component } from 'react';
import store from '../store';
import StudentAdd from '../components/studentAdd';

export default class StudentAddLocal extends Component {

	constructor(props) {

		super(props);

		this.state = {
			firstname: '',
			middlename: '',
			lastname: '',
			email: '',
			campus: ''
		};

		this.setFirstname = this.setFirstname.bind(this);
		this.setMiddlename = this.setMiddlename.bind(this);
		this.setLastName = this.setLastName.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setCampus = this.setCampus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	setFirstname(firstname) {
		this.setState({firstname});
	}

	setMiddlename(middlename) {
		this.setState({middlename});
	}

	setLastName(lastname) {
		this.setState({lastname});
	}

	setEmail(email) {
		this.setState({email});
	}

	setCampus(campus) {
		this.setState({campus});
	}

	handleSubmit(evt) {
		evt.preventDefault();

		let student = (({firstname, middlename, lastname, email}) => 
			({firstname, middlename, lastname, email}))(this.state);
		let campus = (({campus}) => ({campus}))(this.state);

		this.props.submitNewStudent(student, campus);
	}

	render() {

		const campuses = this.props.campuses;

		return (
			<StudentAdd 
				setFirstname={this.setFirstname}
				setMiddlename={this.setMiddlename}
				setLastName={this.setLastName}
				setEmail={this.setEmail}
				campuses={campuses}
				setCampus={this.setCampus}
				campusId={this.state.campus}
				handleSubmit={this.handleSubmit} />
		);
	}

}