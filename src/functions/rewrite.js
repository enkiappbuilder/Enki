const fs = require('fs')
const path = require('path')

//comment format 1 (comments are in this format: {/*text1*/)

//-------Example-------//
// BEFORE --- <Text> {/*textBox1*/} Hello, my name is Bob! {/*textBox1*/}</Text>
// AFTER --- <Text> {/*textBox1*/} Bye, see you later! {/*textBox1*/} </Text>

export function updateText(fileName, location, replacementText) {
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

// comment format 2 (comments are in this format: /*image1*/) AND you would like a string to be the replacement text.

//-------Example-------//
// BEFORE --- const image = require( /*image1*/ "../this/is/my/path" /*image1*/)
// AFTER --- const image = require( /*image1*/ "../new/path" /*image1*/)


function updateFormat2(fileName, location, replacementText) {
  let tempRegex = "(?<= /\\*" + location + "\\*/)(.*)(?=/\\*" + location + "\\*/)"
  let regex = new RegExp(tempRegex)

  fs.readFile(path.join(__dirname, fileName), 'utf8', function (err, data) {
    if (err) throw err
    content = data
    content = content.replace(regex, ` "${replacementText}" `)
    fs.writeFile(path.join(__dirname, fileName), content, 'utf8', function (err) {
      if (err) throw err
      console.log('FILE SAVED')
    })
  })
}

