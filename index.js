const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

app.on("ready", function() {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "./HTML/mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );

  //quit app when closed
  mainWindow.on("closed", function() {
    app.quit();
  });

  //build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemp);
  Menu.setApplicationMenu(mainMenu);
});

//create menu template

const mainMenuTemp = [
  {
    label: "File",
    submenu: [
    //   {
    //     label: "Add Item",
    //     click() {
    //       creatAddWindow();
    //     }
    //   },
    //   {
    //     label: "Clear Items"
    //   },
      {
        label: "Quit",
        accelerator: (process.platform = "ctrl+Q"),
        click() {
          app.quit();
        }
      }
    ]
  }
];





// Add developer tools

if (process.env.NODE_ENV != 'production') {
  mainMenuTemp.push({
      label: 'Developer Tools',
      submenu: [
          {
              label: 'Toggler Developer',
              accelerator: process.platform == 'darwin' ? 'Command + I' : 'CTRL + I',
              click(item, focusedWindow) {
                  focusedWindow.toggleDevTools();
              }
          },
          {
              label: 'Reload'
          }
      ]
  })
}

