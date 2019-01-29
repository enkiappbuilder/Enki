const fs = require('fs')
const path = require('path')

//comment format 1 (for comments in this format: {/*text1*/)

//-------Example-------//

// BEFORE --- <Text> {/*textBox1*/} Hello, my name is Bob! {/*textBox1*/}</Text>
// AFTER --- <Text> {/*textBox1*/} Bye, see you later! {/*textBox1*/} </Text>

//example of calling this function below
//updateText('../../copyOfProject/screens/Gallery.js', 'text2', 'wooo!!')

export function updateText(fileName, location, replacementText) {
  let tempRegex = "(?<={/\\*" + location + "\\*/})(.*)(?={/\\*" + location + "\\*/})"
  let regex = new RegExp(tempRegex)
  fs.readFile(path.join(__dirname, fileName), 'utf8', function (err, data) {
    if (err) throw err
    let content = data
    content = content.replace(regex, replacementText)
    fs.writeFile(path.join(__dirname, fileName), content, 'utf8', function (err) {
      if (err) throw err
      console.log('FILE SAVED')
    })
  })
}


