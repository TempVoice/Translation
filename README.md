# How to add a new language to TempVoice?
Download a language.json file, replace the text and send it back to @EXCORDO on the [official Discord server](https://discord.gg/4tKxZC82HA).

# How to translate the language.json file?
Only edit the blue part:
```json
"example_text" : "This is an example! Following language has been added to TempVoice:{val1}. Take a look at the official [Website](www.tempvoice.xyz).",
```

# What should I do with placeholders?
`{val1}`, `{val2}` are placeholders and will be replaced with channel names, numbers and other information.

# What should I do with hyperlinks?
`[Text](url-link)` is a clickable text for an url. Its important that the brackets `[ ]( )` stay together. The text inside of an `[ ]` bracket should be translated.
