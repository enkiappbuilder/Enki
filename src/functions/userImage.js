const fs = require('fs-extra')
const userImage = (path) => {
  if(path){
    const userImg = fs.readFileSync(`copyOfProject/${path}`, { encoding: "base64" });
    // console.log('userImg:', userImg);
    return `data:image/jpg;base64,${userImg}`
  }
  return null
}

export default userImage