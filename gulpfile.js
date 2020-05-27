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
		.pipe(gp.sass({}))
		.pipe(gp.csso()) // Minimizing the code, removes duplicate styles
		.pipe(gulp.dest('build/css'));
})