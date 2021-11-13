const {ipcMain} = require('electron');


ipcMain.on('tobackend', (e, arg)=> {
    console.log(arg)
    e.reply('tobackend', 'pong')
})