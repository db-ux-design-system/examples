const fs = require("fs-extra");
fs.moveSync("dist/browser", "../build/angular-example", { overwrite: true });
