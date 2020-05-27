module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('src/static/**/*.scss', $.gulp.series('scss'));
    $.gulp.watch('src/static/scritps/main.js', $.gulp.series('scripts'));
    $.gulp.watch('src/static/images/*', $.gulp.series('img:dev'));
  })
}