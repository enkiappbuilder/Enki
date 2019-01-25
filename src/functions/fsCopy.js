const fs = require('fs-extra')

const path = require('path')

const copy = () => fs.copy(path.join(__dirname, '../../template/mobiletemp'), './copyOfProject/', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('success!')
  }
})

export default copy
