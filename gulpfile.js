var gulp       = require('gulp'),
    gutil      = require('gutil'),
    coffee     = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('coffee', function() {
  gulp.src('./*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./build'))
});

gulp.task('coffee-sourcemaps', function() {
  gulp.src('./*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'))
})

gulp.task('default', ['coffee-sourcemaps'])
gulp.task('dev', ['coffee-sourcemaps']);
gulp.task('production', ['coffee']);
