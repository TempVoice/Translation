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

/**
 * Params = [
 *  member
 *  server
 *  chanel
 * ]
 *
 * TextPlaceholder = Der Member {val1} hat in dem Server {val2} den Channel {val3} erstellt.
 */
languageSchema.static({
	async getText(name, serverdb, icon, parms) {
		let emoji
		let text
		lang = serverdb.lang

        switch (serverdb.color) {
            case '18af92':
                emoji = ['', '<:TempVoice_Success_Green:950434120738148422>', '<:TempVoice_Error_Green:950434120729763961>', '<:TempVoice_Trust_Green:950434120767524894>', '<:TempVoice_Help_Green:950434120822054922>', '<:TempVoice_List_Green:951205543853318245>', '<:TempVoice_Premium:932755043235561513>']
                break;
            case '7789e1':
                emoji = ['', '<:TempVoice_Success_Blue:950433575453474868>', '<:TempVoice_Error_Blue:950433575835148308>', '<:TempVoice_Trust_Blue:950433575830966282>', '<:TempVoice_Help_Blue:951205704046358608>', '<:TempVoice_List_Blue:951205704214138940>', '<:TempVoice_Premium:932755043235561513>']
                break;
            case 'a77fdb':
                emoji = ['', '<:TempVoice_Success_Purple:950484912417427456>', '<:TempVoice_Error_Purple:950484912144777277>', '<:TempVoice_Trust_Purple:950484912610365481>', '<:TempVoice_Help_Purple:951206011170070548> ', '<:TempVoice_List_Purple:951206011358810112>', '<:TempVoice_Premium:932755043235561513>']
                break;
            case 'd77620':
                emoji = ['', '<:TempVoice_Success_Orange:950434327810940948>', '<:TempVoice_Error_Orange:950434327706083388>', '<:TempVoice_Trust_Orange:950434327756406844>', '<:TempVoice_Help_Orange:951206629393698826>', '<:TempVoice_List_Orange:951206629469220874>', '<:TempVoice_Premium:932755043235561513>']
                break;
            case 'e1b70e':
                emoji = ['', '<:TempVoice_Success_Yellow:950484945095229450>', '<:TempVoice_Error_Yellow:950484944713580575>', '<:TempVoice_Trust_Yellow:950484945187536906>', '<:TempVoice_Help_Yellow:951205869712986192>', '<:TempVoice_List_Yellow:951205869893337188>', '<:TempVoice_Premium:932755043235561513>']
                break;
        }

		let item = await this.findOne({ name, lang })
		text = item.text

		for (const i in parms) {
			const val = parms[i]
			const temp = text.split(`{val${parseInt(i) + 1}}`)
			text = temp.join(val)
		}

		return `${emoji[icon]} ${text}`
	},
})

const Languages = model('language', languageSchema)

module.exports = Languages
