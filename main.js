const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 1280, height: 760 });
    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = undefined;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDLHNDQUFzQztBQUN0QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQ3pCLDBDQUEwQztBQUMxQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO0FBRTdDLDhFQUE4RTtBQUM5RSwyRUFBMkU7QUFDM0UsSUFBSSxVQUE4QyxDQUFDO0FBRW5EO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFFM0Qsc0NBQXNDO0lBQ3RDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLGFBQWEsQ0FBQyxDQUFDO0lBRXJELHFCQUFxQjtJQUNyQixVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRDLHFDQUFxQztJQUNyQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNwQixpRUFBaUU7UUFDakUsbUVBQW1FO1FBQ25FLG9EQUFvRDtRQUNwRCxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUVELHdEQUF3RDtBQUN4RCx5REFBeUQ7QUFDekQsc0RBQXNEO0FBQ3RELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRTlCLG9DQUFvQztBQUNwQyxHQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO0lBQ3hCLDJEQUEyRDtJQUMzRCw4REFBOEQ7SUFDOUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ2YsZ0VBQWdFO0lBQ2hFLDREQUE0RDtJQUM1RCxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QixZQUFZLEVBQUUsQ0FBQztJQUNuQixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCw0RUFBNEU7QUFDNUUsdUVBQXVFIn0=