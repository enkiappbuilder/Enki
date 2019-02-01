const fs = require('fs-extra')

const path = require('path')

const copy = (location) => fs.copy(path.join(__dirname, location), './copyOfProject/', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('success!')
  }
})
// '../../template/mobiletemp'
export default copy
