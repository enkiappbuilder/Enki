
import { app, BrowserWindow, ipcMain, dialog } from 'electron'
const fs = require('fs-extra')
import * as path from 'path'
import { format as formatUrl } from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {
  const window = new BrowserWindow()

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }))
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})

//dialog window for saving project to computer

ipcMain.on('exportProject', createProject)

// Create new project function
async function createProject() {
  const directory = dialog.showSaveDialog(mainWindow)
  const pathToCopyOfProject = path.join(__dirname, '../../', 'copyOfProject')

  await fs.mkdir(directory, err => {
    if (err) return console.log(err)
  })

  await fs.copy(pathToCopyOfProject, directory,
    function (err) {
      if (err) {
        console.error(err)
      } else {
        console.log('success!')
      }
    })
}

//dialog window for uploading image to project

ipcMain.on('uploadPhoto', uploadNewPhoto)

//helper function to rewrite image path
const { updateImageName } = require('../functions/rewrite')

//upload photo helper function

function uploadNewPhoto(fileName, location) {
  const pathToImage = dialog.showOpenDialog(mainWindow)
  const nameOfFile = pathToImage[0].slice(pathToImage[0].lastIndexOf('/') + 1)
  const mobileTempAssets = `../../copyOfProject/assets/images/${nameOfFile}`

  // copying image to assets folder
  fs.copyFile(pathToImage[0], path.join(__dirname, mobileTempAssets),
    function (err) {
      console.log('inside of copy')
      if (err) {
        console.error(err)
      } else {
        console.log('success!')
      }
    })

  //updating image path in appropriate file in the template

  // updateImageName(fileName, location, mobileTempAssets)
  updateImageName('/screens/Gallery.js', 'test', mobileTempAssets)


}

