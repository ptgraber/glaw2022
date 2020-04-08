"use strict";

//Load Gulp Plugins
const gulp = require('./node_modules/gulp');
const sass = require('./node_modules/gulp-sass');
const sourcemaps = require('./node_modules/gulp-sourcemaps');
const sync = require('./node_modules/browser-sync').create();

//Others
const destin = './web/themes/contrib/nexus/assets/css/';

//Compiler
sass.compiler = require('node-sass');

//The Exports
exports.watchFiles = watchFiles;
exports.css = css;

//Watch Files
function watchFiles() {
  gulp.watch('./web/themes/contrib/nexus/sass/**/*.scss', css);
}

//Compile CSS
  function css() {
    return gulp
    .src('./web/themes/contrib/nexus/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destin))
}


 //The Build Tasks
const build = gulp.parallel(watchFiles,css);
gulp.task('default', build);
gulp.task(build);


