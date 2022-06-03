/* eslint-disable global-require */
const mongoose = require('mongoose')

mongoose.connect(process.env.dbstring)

module.exports = {
	Languages: require('./language'),
}
