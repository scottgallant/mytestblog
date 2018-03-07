// Gulp
var gulp = require('gulp');
// Sass compiler
var sass = require('gulp-sass');
// File concatenation
var concat = require('gulp-concat');

// Styles compiling
gulp.task('styles', function() {
    gulp.src(['src/sass/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

// Scripts compiling
gulp.task('scripts', function() {
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
    	'node_modules/popper.js/dist/umd/popper.js',
    	'node_modules/bootstrap/dist/js/bootstrap.js',
    	'src/js/*.js'
    	])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('static/js/'));
});

// Build task
gulp.task('build', ['styles', 'scripts']);

// Default task
gulp.task('default', ['styles', 'scripts'], function() {
 	gulp.watch('src/sass/*.scss',['styles']);
 	gulp.watch('src/js/*.js',['scripts']);
});
