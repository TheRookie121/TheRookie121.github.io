/**
 * Created by Brandon on 9/6/2016.
 */
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require("vinyl-buffer");
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

//Run task
gulp.task('run', function(){
   var bundler = browserify({entries: './src/js/script.es6', debug: true})
       .transform(babelify, {presets: ['es2015']})
       .bundle();

    //Bundle file
    return bundler
        .pipe(source('script.js')) //new script file
        .pipe(buffer()) //
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});

//Add watch task (will execture run task on save)
gulp.task('watch', function(){
   gulp.watch('./src/**/*.*', ['run']);
});


gulp.task('default', ['watch', 'run']);