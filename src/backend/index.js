const {ipcMain} = require('electron');
// var path = require('path');

ipcMain.on('tobackend', (e, arg)=> {
    console.log(arg)
    e.reply('tobackend', 'pong')
})
