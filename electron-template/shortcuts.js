const electron = require('electron')
const app = electron.app
const dialog = electron.dialog
const globalShortcut = electron.globalShortcut

app.on('ready', function () {
  // globalShortcut.register('CommandOrControl+Alt+L', function () {
  //   mainWindow.setPosition(300, 300)
  // })
})

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})
