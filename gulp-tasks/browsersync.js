// packages
const browsersync = require("browser-sync").create();
const localhost = "masstraffic";

// BrowserSync
function init(done) {
  browsersync.init({
    files: [
        "./dist/css/**/*",
        "./dist/js/**/*"
    ],
    proxy: localhost,
    open: true
  });
  done();
}

// BrowserSync Reload
function reload(done) {
  browsersync.reload();
  done();
}

// exports
module.exports = {
  init: init,
  reload: reload
};
