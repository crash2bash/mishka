'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});
 
gulp.task("watch", function() {
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass'))
});
 
gulp.task('csso', function () {
    return gulp.src('css/style.css')
        .pipe(csso())
        .pipe(gulp.dest('./css/min-style'));
});
