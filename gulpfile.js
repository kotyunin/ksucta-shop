const gulp = require('gulp'),
			pug = require('gulp-pug');
			
gulp.task('pug', () => {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(pug({
			pretty: true // disables html compressing
		}))
		.pipe(gulp.dest('build'));
})