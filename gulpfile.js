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

// Styles compiling
gulp.task('scripts', function() {
    gulp.src([
    	'bower_components/jquery/dist/jquery.js',
    	'bower_components/tether/dist/js/tether.js',
    	'bower_components/bootstrap/dist/js/bootstrap.js',
    	'src/js/*.js'
    	])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('static/js/'));
});

// Default task
gulp.task('default', ['styles', 'scripts'], function() {
 	gulp.watch('src/sass/*.scss',['styles']);
 	gulp.watch('src/js/*.js',['scripts']);
});
