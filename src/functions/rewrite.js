const fs = require("fs");
const path = require("path");

//comment format 1 (comments are in this format: {/*text1*/)

//-------Example-------//
// BEFORE --- <Text> {/*textBox1*/} Hello, my name is Bob! {/*textBox1*/}</Text>
// AFTER --- <Text> {/*textBox1*/} Bye, see you later! {/*textBox1*/} </Text>

//example of calling this function below
//updateText('../../copyOfProject/screens/Gallery.js', 'text2', 'wooo!!')

//unsure if asyncForEach is necessary but we want to wait for each change in our loop
async function asyncForEach(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    await callback(array[i], i, array);
  }
}

export function updateText(fileName, state) {
  fs.readFile(path.join(__dirname, fileName), "utf8", async function (
    err,
    data
  ) {
    if (err) throw err;
    let content = data;
    await asyncForEach(Object.keys(state).filter(key=> state[key] !== ''), async key => {
      let location = key;
      let replacementText = state[key];
      let tempRegex =
        "(?<=/\\*" + location + "\\*/)(.*)(?=/\\*" + location + "\\*/)";

      let regex = new RegExp(tempRegex);
      let bracketTempRegex =
        "(?<={/\\*" + location + "\\*/})(.*)(?={/\\*" + location + "\\*/})";

      let bracketRegex = new RegExp(bracketTempRegex);

      content = await content.replace(regex, ` "${replacementText}" `);
      content = await content.replace(bracketRegex,replacementText);
    });

    fs.writeFile(path.join(__dirname, fileName), content, "utf8", function (
      err
    ) {
      if (err) throw err;
      console.log("FILE SAVED");
    });
  });
}

