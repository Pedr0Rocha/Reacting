'use strict';

/* Dependecies */
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

/* Source and destination folders */
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

/* Compiling the scss files from scss source folder to css destination folder */
gulp.task('compile_scss', function() {
	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST))
});

/* Tasks to watch for changes */
gulp.task('watch_scss', function() {
	gulp.watch(SCSS_SRC, ['compile_scss']);
});

gulp.task('default', ['watch_scss']);