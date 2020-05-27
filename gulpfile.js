'use strict';

const gulp = require('gulp'),
			gp = require('gulp-load-plugins')();
			
gulp.task('pug', () => {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(gp.pug({
			pretty: true // disables html compressing
		}))
		.pipe(gulp.dest('build'));
})

gulp.task('scss', () => {
	return gulp.src('src/static/scss/main.scss')
		.pipe(gp.sourcemaps.init())
		.pipe(gp.sass({}))
		.on("error", gp.notify.onError({
			title: 'Style'
		}))
		.pipe(gp.csso()) // Minimizing the code, removes duplicate styles
		.pipe(gp.sourcemaps.write())
		.pipe(gulp.dest('build/css'));
})

gulp.task('watch', () => {
	gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
	gulp.watch('src/static/**/*.scss', gulp.series('scss'));
})

gulp.task('default', gulp.series(
	gulp.parallel('pug', 'scss'),
	'watch'
))