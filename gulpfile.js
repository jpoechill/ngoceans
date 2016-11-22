// Gulp build, workflow
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var ngAnnotate = require('gulp-ng-annotate');

// DEVELOPMENT TASKS
// -----------------

// Set up browser-sync
var bs = require('browser-sync').create(); // create a browser sync instance.
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "dev"
        }
    });
});

// Sass
gulp.task('sass', function () {
  return gulp.src('dev/scss/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat('styles.main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dev/css/'))
    .pipe(bs.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

gulp.task('delete:mainjs', function() {
  return del.sync(['dev/js/main.min.js']);
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dev/js/'));
});

// Useref
gulp.task('useref', function(){
  return gulp.src('dev/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dev/123'));
});


// Watching
gulp.task('watch', function () {
    gulp.watch("dev/scss/*.scss", ['sass']);
    gulp.watch("dev/*.html").on('change', bs.reload);
    gulp.watch("dev/views/*.html").on('change', bs.reload);
    gulp.watch("dev/js/**/*.html").on('change', bs.reload);
    gulp.watch("dev/js/**/*.js").on('change', bs.reload);
    gulp.watch("dev/js/*.js").on('change', bs.reload);
});

// PRODUCTION TASKS
// ----------------

// Optimize images
gulp.task('images', function() {
  return gulp.src('dev/img/**/*.+(png|jpg|jpeg|gif|ico|svg)')
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Useref
gulp.task('useref:dist', function(){
  return gulp.src('dev/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', ngAnnotate()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Browser sync
var bsDist = require('browser-sync').create();
gulp.task('browser-sync:dist', function() {
  bsDist.init({
    server: {
      baseDir: "dist"
    }
  });
});

// Move service worker
gulp.task('move-sw', function() {
    gulp.src('dev/sw.js')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/'));
});

// Move templates
gulp.task('move-templates:dist', function() {
    gulp.src('dev/views/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/views'));
});

// Move data
gulp.task('move-data:dist', function() {
    gulp.src('dev/data/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/data'));
});

// Move fonts
gulp.task('move-fonts:dist', function() {
    gulp.src('dev/fonts/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/fonts'));
});

// Build Sequences
// ---------------

// Defaults
gulp.task('default', function (callback) {
  runSequence(['sass', 'browser-sync', 'watch'],
    callback
  );
});

// Serve

// Development
gulp.task('serve', function (callback) {
  runSequence('delete:mainjs', ['sass',
    // 'scripts',
    'browser-sync', 'watch'], callback);
});

// Dist
gulp.task('serve:dist', function(callback) {
    runSequence('clean:dist',
        'useref:dist',
        ['move-templates:dist', 'move-fonts:dist', 'move-data:dist','images'],
        'browser-sync:dist',
        callback
    );
});
