const fs = require('fs')
const path = require('path')

//comment format 1 (comments are in this format: {/*text1*/)

//-------Example-------//
// BEFORE --- <Text> {/*textBox1*/} Hello, my name is Bob! {/*textBox1*/}</Text>
// AFTER --- <Text> {/*textBox1*/} Bye, see you later! {/*textBox1*/} </Text>

//example of calling this function below
//updateText('../../copyOfProject/screens/Gallery.js', 'text2', 'wooo!!')
async function asyncForEach(array, callback){
  for (let i = 0; i< array.length; ++i){
    await callback(array[i], i, array)
  }
}

export function updateText(fileName, state) {


fs.readFile(path.join(__dirname, fileName), 'utf8',async function (err, data) {
  if (err) throw err
  let content = data

  Object.keys(state)
  await asyncForEach(Object.keys(state), async key =>{
    let location = key
    let replacementText = state[key]
  let tempRegex = "(?<={/\\*" + location + "\\*/})(.*)(?={/\\*" + location + "\\*/})"

  let regex = new RegExp(tempRegex)
  
  let bracketTempRegex = "(?<= /\\*" + location + "\\*/)(.*)(?=/\\*" + location + "\\*/)"
  let bracketRegex = new RegExp(bracketTempRegex)
  // content = data
  console.log('replacementText:', replacementText);
  
  content = await content.replace(regex, replacementText)
  content = await content.replace(bracketRegex, ` "${replacementText}" `)
  console.log(content)
  })
    
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

function updateImageName(fileName, location, replacementText) {
  let tempRegex = "(?<= /\\*" + location + "\\*/)(.*)(?=/\\*" + location + "\\*/)"
  let regex = new RegExp(tempRegex)

  console.log('file name!', fileName)

  fs.readFile(path.join(path.join('../../copyOfProject/', fileName), 'utf8', function (err, data) {
    if (err) throw err
    let content = data
    content = content.replace(regex, ` "${replacementText}" `)


    fs.writeFile(path.join('../../copyOfProject/', fileName), content, 'utf8', function (err) {
      if (err) throw err
      console.log('FILE SAVED')
    })
  }))

}

