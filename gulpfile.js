// gulp
var gulp =  require('gulp');

// plugins
var gutil = require('gulp-util'),
    connect = require('gulp-connect');

var htmlSources = ['app/*.html'];
var cssSources = ['app/css/*.css'];
var jsSources = ['app/js/*.js'];

// Reload html
gulp.task('html', function(){
    gulp.src(htmlSources)
    .pipe(connect.reload());
});

// Reload css
gulp.task('css', function(){
    gulp.src(cssSources)
    .pipe(connect.reload());
});

// Reload js
gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(connect.reload());
});


// Run watch continuously in the background to monitor
// changes in source files
gulp.task('watch', function(){
    gulp.watch(htmlSources,['html']);
    gulp.watch(cssSources,['css']);
    gulp.watch(jsSources,['js']);
});

// Create a server 
gulp.task('connect', function(){
    connect.server({
    root: 'app/',
    port: 8088,
    livereload: true
  });
});

// Default task when gulp called with no arguments
gulp.task('default', ['html', 'css', 'js', 'connect', 'watch']);
