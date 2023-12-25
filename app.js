const fs = require('fs-extra');
const path = require("path");


function createFolder(folderName) {
  const folderPath = path.join("hakunamatata", 'GameClient', folderName);
  console.log(folderPath)

  // Check if the folder already exists
  // if (!fs.existsSync(folderPath)) {
  //   // Create the folder if it doesn't exist
  //   fs.mkdirSync(folderPath, { recursive: true });
  //   console.log(`Folder '${folderName}' created at '${folderPath}'`);
  // } else {
  //   console.log(`Folder '${folderName}' already exists at '${folderPath}'`);
  // }
}


createFolder("timon_pumba.json")