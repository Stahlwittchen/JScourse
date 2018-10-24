var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/styles/styles.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('src/public/stylesheet'))


});
gulp.task('sass:watch', function () {
    gulp.watch('src/styles/**.scss', ['sass']);
});
