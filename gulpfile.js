var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', function() {
  console.log('Gulp started');
});
// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
//
// // or...
//
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });
