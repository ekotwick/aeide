'use strict';

var Sequelize = require('sequelize');
var db = require('../index.js');

const Student = db.define('student',{

	firstname: {
		type: Sequelize.STRING,
		allowNull: false,
		// validate: {
		// 	is: /^[A-Za-z]+$/i
		// }
	},

	middlename: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: true,
		// validate: {
		// 	is: /^[A-Za-z]+$/i
		// },
		set: function(val){
			this.setDataValue('middlename', val.split(' '));
		}
	},

	lastname: {
		type: Sequelize.STRING,
		allowNull: false,
		// validate: {
		// 	is: /^[A-Za-z]+$/i
		// }
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	}

},{
	getterMethods: {
		fullname: function(){
			if (this.middlename.length) {
				return `${this.firstname} ${this.middlename.join(' ')} ${this.lastname}`;
			}
			return `${this.firstname} ${this.lastname}`;
		}
	},
	instanceMethods: {
		nameWithInitials: function(){
			let mName = '';
			if (this.middlename.length) {
				mName = this.middlename.map(name => `${name[0]}.`).join(' ');
				return `${this.firstname} ${mName} ${this.lastname}`;
			} else {
				return `${this.firstname} ${this.lastname}`;
			}
			
		}
	}
});

module.exports = Student;