module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('src/static/**/*.scss', $.gulp.series('scss'));
  })
}