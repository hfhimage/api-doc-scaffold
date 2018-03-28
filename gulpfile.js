var gulp = require('gulp');
var swagger = require('gulp-swagger');
var rsync = require('gulp-rsync');

gulp.task('build-and-deploy', function() {
  gulp.src('api.yaml')
    .pipe(swagger('api.json'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['build-and-deploy']);
