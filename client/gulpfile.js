const gulp = require('gulp');
const useref = require('gulp-useref');  
const gulpIf = require('gulp-if'); 
const cssnano = require('gulp-cssnano');


//CONCATENATING AND MINIFYING JS AND CSSS
//Setting up useref task
gulp.task('useref', function(){
  return gulp.src('public/*.html')
		.pipe(useref())
		//gulpif makes sure we only minify js or css files each 
		.pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

