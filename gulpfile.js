const gulp = require('gulp'),
			gp = require('gulp-load-plugins')();
			
gulp.task('pug', () => {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(gp.pug({
			pretty: true // disables html compressing
		}))
		.pipe(gulp.dest('build'));
})