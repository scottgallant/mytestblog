// Gulp
var gulp = require('gulp');
// Sass compiler
var sass = require('gulp-sass');

// Styles compiling
gulp.task('styles', function() {
    gulp.src(['sass/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../static/css/'));
});

// Default task
gulp.task('default', function() {
 	gulp.watch('sass/*.scss',['styles']);
});
