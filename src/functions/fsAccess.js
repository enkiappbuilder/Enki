const fs = require('fs-extra')
const file = 'package.json'

fs.access(file, fs.constants.F_OK, (err)=> {
  console.log('err:', err);
  console.log(`fsCopy ${err ? 'doesnt exist': 'exists'} `)
})