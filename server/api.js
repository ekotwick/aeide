'use strict'
const api = require('express').Router();
// const db = require('../db');

api.use('/students', require('./students'));
api.use('/campuses', require('./campuses'));

module.exports = api;