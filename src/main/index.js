
import { app, BrowserWindow, ipcMain, dialog } from 'electron'
const fs = require('fs-extra')
import * as path from 'path'
import { format as formatUrl } from 'url'
const ProgressBar = require('electron-progressbar')
const { updateText } = require('../functions/rewrite')

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {

  const window = new BrowserWindow({ height: 800, width: 1024, webPreferences: { webSecurity: false } })

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
async function createProject(event) {
  const directory = dialog.showSaveDialog(mainWindow)

  if (directory) {

    event.sender.send('copying')

    const pathToCopyOfProject = path.join(__dirname, '../../', 'copyOfProject')

    const progressBar = new ProgressBar({
      text: 'Please wait while Enki writes your app!',
      detail: 'Copying...'
    });

    progressBar
      .on('completed', function () {
        event.sender.send('copy-done')
        console.info(`completed...`);
        progressBar.detail = 'Your App is ready. Exiting...';
      })
      .on('aborted', function () {
        console.info(`aborted...`);
      });

    await fs.mkdir(directory, err => {
      if (err) return console.log(err)
    })

    await fs.copy(pathToCopyOfProject, directory,
      function (err) {
        if (err) {
          console.error(err)
          progressBar.setCompleted()
        } else {
          console.log('success!')
          progressBar.setCompleted()
        }
      })
  }
}

//dialog window for uploading image to project

ipcMain.on('uploadPhoto', (event, commentName) => uploadNewPhoto(event, commentName))

ipcMain.on('show-progressbar', showProgressbar)
ipcMain.on('set-progressbar-completed', setProgressbarCompleted)
ipcMain.on('copyExists', (event) => event.sender.send('copy-done'))

// Progress bar renders while files are being copied.
function showProgressbar(event) {
  event.sender.send('copying')
  const progressBar = new ProgressBar({
    text: 'Please wait while Enki writes your app!',
    detail: 'Copying...'
  });

  progressBar
    .on('completed', function () {
      event.sender.send('copy-done')
      console.info(`completed...`);
      progressBar.detail = 'Your App is ready. Exiting...';
    })
    .on('aborted', function () {
      console.info(`aborted...`);
    });

  // launch the task...
  fs.copy(path.join(__dirname, '../../template/mobiletemp'), './copyOfProject/', function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log('success!')
      progressBar.setCompleted()
    }
  })
}

function setProgressbarCompleted() {
  if (progressBar) {
    progressBar.setCompleted();
  }
}
//function that allows us to upload a photo and save it in the copyOfProject assets folder, it will then replace the path in the desired mobile copyOfProject file so the new image is displayed.
//example of calling this function
//--- uploadNewPhoto('screens/Gallery.js', 'text1')

export function uploadNewPhoto(event, commentName) {

  const pathToImage = dialog.showOpenDialog(mainWindow)

  if (pathToImage) {
    const nameOfFile = pathToImage[0].slice(pathToImage[0].lastIndexOf('/') + 1)
    const mobileTempAssets = `assets/images/${commentName}.jpg`

    // copying image to assets folder
    fs.copyFile(pathToImage[0], path.join(__dirname, `../../copyOfProject/assets/images/${commentName}.jpg`),
      function (err) {
        if (err) {
          console.error(err)
        } else {
          console.log('commentName:', commentName);
          console.log('success!')
        }
      })

    event.sender.send('photo-response', `${mobileTempAssets}`, commentName)

  }


}

