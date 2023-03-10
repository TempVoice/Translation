# How to add a new language to TempVoice?
Download a translation.json file, replace the text and send it back to @EXCORDO#1614 on the [Discord server](https://tempvoice.xyz/redirect/support).

# How to translate the language.json file?
Only edit the blue part:
```json
"example_text" : "This is an example! Following language has been added to TempVoice:{val1}. Take a look at the official [Website](www.tempvoice.xyz).",
```

# What should I do with placeholders?
`{val1}`, `{val2}` are placeholders and will be replaced with channel names, numbers and other information.

# What should I do with hyperlinks?
`[Text](url-link)` is a clickable text for an url. Its important that the brackets `[ ]( )` stay together. The text inside of an `[ ]` bracket should be translated.

# What else do I have to consider?
- Try to not translate keywords like "dashboard", "interface", "creator channel" & "placeholder"
- Do not change the structure of the file
- Wse a suitable software to edit the file! (VS Code, Nodepad++)
