var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var jimp = require('gulp-jimp-resize');
var imagemin = require('gulp-imagemin');
var pump = require('pump');

gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/minified'))
        .pipe(livereload());
});
gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

gulp.task('images', () =>
    gulp.src('src/images/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);
gulp.task('images', () =>
    gulp.src('src/images/resized/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/resized'))
);
gulp.task('resize', function () {
    return gulp.src(
            './src/images/*.{png,jpg,bmp}'
        )
        .pipe(jimp({
            sizes: [{
                "suffix": "md",
                "width": 1280
            }]
        }))
        .pipe(gulp.dest('./src/images/resized/'));
});

gulp.task('compile', ['sass'], function () {
    livereload.listen();
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['compress']);
    gulp.watch('./src/images/*.png', ['images'], ['resize']);
})