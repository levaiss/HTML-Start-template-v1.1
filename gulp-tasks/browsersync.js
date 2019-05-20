// packages
const browsersync = require("browser-sync").create();
const localhost = "localhost";

// BrowserSync
function init(done) {
  browsersync.init({
    host: localhost,
    proxy: localhost,
    port: 8080,
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
