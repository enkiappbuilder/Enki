
import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { format as formatUrl, } from 'url'

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
//dialog window for saving a file

const fs = require('fs-extra')
const path = require('path')

const copy = (filePath) => fs.copy(path.join(__dirname, filePath), '../../testFolder', function (err) {

  console.log('inside of copy and paste')
  if (err) {
    console.error(err)
  } else {
    console.log('success!')
  }
})

// ipcMain.on('exportProject', async (event, path) => {
//   const { dialog } = require('electron')
//   // await dialog.showSaveDialog((whereToSave) => {
//   //   console.log('where to save', whereToSave)
//   //   await copy(whereToSave)
//   // });

// })



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


