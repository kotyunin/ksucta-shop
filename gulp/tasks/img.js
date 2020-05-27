module.exports = () => {
  $.gulp.task('img:dev', () => {
    return $.gulp.src('src/static/images/*.{png,jpg,gif}')
    .pipe($.gulp.dest('build/static/img/'));
  })
  $.gulp.task('img:build', () => {
    return $.gulp.src('src/static/images/*.{png,jpg,gif}')
    .pipe($.gp.tinypng('mWVcSzxKrwF3Q0LNC2RK3C1LGksLqrdD'))
    .pipe($.gulp.dest('build/static/img/'));
  })
}