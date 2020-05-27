module.exports = () => {
  $.gulp.task('scss', () => {
    return $.gulp.src('src/static/scss/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({}))
      .on("error", $.gp.notify.onError({
        title: 'Style'
      }))
      .pipe($.gp.csso()) // Minimizing the code, removes duplicate styles
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('build/css'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  })
}