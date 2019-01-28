const fs = require('fs')
const path = require('path')

export default function updateText(fileName, location, replacementText) {
  let tempRegex = "(?<={/\\*" + location + "\\*/})(.*)(?={/\\*" + location + "\\*/})"
  let regex = new RegExp(tempRegex)

  fs.readFile(path.join(__dirname, fileName), 'utf8', function (err, data) {
    if (err) throw err
    content = data
    content = content.replace(regex, replacementText)
    fs.writeFile(path.join(__dirname, fileName), content, 'utf8', function (err) {
      if (err) throw err
      console.log('FILE SAVED')
    })
  })
}

