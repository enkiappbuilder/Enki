const fs = require('fs')
const path = require('path')
where = '//Text1'


async function doIt(where, newThing, ){

 await fs.readFile(path.join(__dirname, 'change.js'), 'utf8',function(err,data){
    if(err) throw err
    console.log('data:', data);
    console.log('typeof data:', typeof data);
    content = data
    let idx = content.indexOf(where + 'Start')
    
    let endIdx = content.indexOf(where + 'End')

    const firstHalf = content.slice(0, idx + where.length+5)
    const secondHalf = content.slice(endIdx)
    const thingToAdd = '<Text>Potato Cart</Text>'
    newContentRed = firstHalf +'\n' + thingToAdd + '\n' + secondHalf
  
    fs.writeFile(path.join(__dirname, 'change.js'), newContentRed, 'utf8', function(err){
      if(err) throw err
      console.log('FILE SAVED')
    })
  })
  magic = 'alghalgkhalgj'
  magic = 'now i am this'
  console.log('magic:', magic);
  // console.log('newContent:', newContent);
}

doIt(where)