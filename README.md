# How to add a new language to TempVoice?

Download a translation.json file, replace the text and send it back to @excordo on the [Discord server](https://tempvoice.xyz/redirect/support) or make a pull request.

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

- Do not use any internet translators without proofreading it twice!
- Do not change the structure of the file!
- Use a suitable software to edit the file! (VS Code, Nodepad++)
