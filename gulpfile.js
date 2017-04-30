var gulp = require('gulp');
var textlint = require('gulp-textlint');
var argv = require('yargs').argv;

/**
 * Lints the articles by using several textlint rules
 */
gulp.task('textlint', function() {
  return gulp.src('./articles/**/*.md')
    .pipe(textlint(
      { formatterName: "stylish" }
    ));
});

gulp.task('watch', function() {
  var src = argv.t;
  if (src) {
    gulp.watch(src, ['textlint']);
  }
});
