'use strict';

var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var postcssCustomMedia = require('postcss-custom-media');
var postcssClean       = require('postcss-clean');
var babel         = require('gulp-babel');
var concat        = require('gulp-concat')
var minify        = require('gulp-minify');
var webpack       = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
// to import node module normalize in sass file
var postcssEasyImport = require('postcss-easy-import');

var paths = {
  scss: 'assets/src/css/scss/**/*.scss',
  twig: ['templates/*.twig', 'templates/**/*.twig'],
  php:  '**/**/*.php',
  js:   'assets/src/js/**/*.js'
};


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  var postCSSplugins = [
      postcssEasyImport(),
      autoprefixer(),
      postcssClean(),
    ];
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postCSSplugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/dist/css/"))
    .pipe(browserSync.stream());
});

// ES6 compatibility with Babel & auto-inject into browsers
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/dist/js"))
    .pipe(browserSync.stream());
});

// Static server + watching scss/php files
gulp.task('serve', ['sass', 'scripts'], function() {
  browserSync.init({
    injectChanges: true,
    proxy: "helvetia.local"
  });

  gulp.watch(paths.scss,['sass']).on('change', browserSync.reload);
  gulp.watch(paths.js,['scripts']).on('change', browserSync.reload);
  gulp.watch(paths.php).on('change', browserSync.reload);
  gulp.watch(paths.twig).on('change', browserSync.reload);
});



gulp.task('default', ['sass', 'scripts', 'serve']);
