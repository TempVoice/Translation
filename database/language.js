const { Schema, model } = require('mongoose')

const languageSchema = new Schema(
	{
		name: { type: String, index: true },
		lang: { type: String, index: true, default: 'en' },
		text: { type: String, default: 'Missing Text' },
		discord_lang: { type: String, default: 'en-US' },
	},
	{ id: false, timestamps: { createdAt: true, updatedAt: true } }
)

const Languages = model('language', languageSchema)

module.exports = Languages
