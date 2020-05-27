module.exports = () => {
  $.gulp.task('scripts:libs', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('build/js'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  })
  $.gulp.task('scripts', () => {
    return $.gulp.src(['src/static/scripts/main.js'])
      .pipe($.gulp.dest('build/js'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  })
}