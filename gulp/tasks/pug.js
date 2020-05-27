module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('src/pug/pages/*.pug')
      .pipe($.gp.pug({
        pretty: true // disables html compressing
      }))
      .pipe($.gulp.dest('build'))
      .on('end',$.browserSync.reload);
  })
}