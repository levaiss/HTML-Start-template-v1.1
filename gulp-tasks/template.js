// packages
const gulp = require("gulp");

// CSS task
function templateBuild() {
    return gulp
        .src("./src/pages/*.php")
        .pipe(gulp.dest("./dist/"));
}

// exports
module.exports = {
    build: templateBuild
};
