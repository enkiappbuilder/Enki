const fs = require('fs-extra')

const path = require('path')

const copy = () => fs.copy(path.join(__dirname, '../renderer/mobiletemp'), '/Users/milleniumfalcon/Documents/FullStack/CapStone/electron-webpack-quick-start/src/renderer/mynewdir', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('success!')
  }
})

export default copy
