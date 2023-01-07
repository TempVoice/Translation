/* eslint-disable global-require */
const mongoose = require('mongoose')

mongoose.connect(process.env.dbstring, {
	authMechanism: 'DEFAULT',
	dbName: process.env.dbName,
	auth: {
		username: process.env.dbuser,
		password: process.env.dbpwd,
	},
})

module.exports = {
	Languages: require('./language'),
}
