require('dotenv').config()
const { Languages } = require('../../db')

let arr = ['./language_ru.json'];

for (let i = 0; i < arr.length; i++) {
	const TransFile = require(arr[i]);
	const { lang, discord_lang } = TransFile[0]

	Object.entries(TransFile[1]).forEach(async ([name, text]) => {
		let LangItem = await Languages.findOne({ name, lang })

		if (LangItem === null) LangItem = new Languages()

		LangItem.overwrite({
			lang, name, text, discord_lang
		})

		console.log(`Adding => ${lang} : ${name}`)
		await LangItem.save()
		console.log(`Added! ${lang} : ${name}`)
	})
}
