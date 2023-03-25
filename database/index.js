/* eslint-disable global-require */
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_STRING, {
	authMechanism: 'DEFAULT',
	dbName: process.env.DB_NAME,
	auth: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	},
})

module.exports = {
	Languages: require('./language'),
}
