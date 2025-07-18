const fs = require("fs-extra");
fs.moveSync("dist/browser", "../build/angular18-example", { overwrite: true });
