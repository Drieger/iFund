var path    = require('path');
var gulp    = require('gulp');
var clean   = require('gulp-clean');
var webpack = require('webpack-stream');
var config  = require('../config');


var directories = {
  src: config.CLIENT_BUILD_SRC,
  dst: config.CLIENT_BUILD_DST,
};

var assets = {
  root_dst: config.CLIENT_ASSETS_DST,
  root_src: config.CLIENT_ASSETS_SRC,
  js_dst  : path.join(config.CLIENT_ASSETS_DST, 'js'),
  img_dst : path.join(config.CLIENT_ASSETS_DST, 'img'),
  css_dst : path.join(config.CLIENT_ASSETS_DST, 'css'),
};

var js_src = [
  path.join(assets.root_src, 'AdminLTE/dist/js', 'app.min.js'),
];
var img_src = [];
var css_src = [
  path.join(assets.root_src, 'AdminLTE/bootstrap/css', 'bootstrap.min.css'),
  path.join(assets.root_src, 'AdminLTE/dist/css', 'AdminLTE.min.css'),
  path.join(assets.root_src, 'AdminLTE/dist/css/skins', 'skin-blue.min.css'),
  // Font awesome and fonts
  path.join(assets.root_src, 'font-awesome/css', 'font-awesome.min.css'),
  path.join(assets.root_src, 'font-awesome/fonts', '*'),

];


gulp.task('clean-dist', function() {
  return gulp.src(directories.dst)
  .pipe(clean())
});

gulp.task('clean-assets', function() {
  return gulp.src(assets.root_dst)
  .pipe(clean())
});

gulp.task('copy-js', ['clean-assets'], function() {
  gulp.src(js_src, {base: assets.root_src}).pipe(gulp.dest(assets.js_dst));
});

gulp.task('copy-css', ['clean-assets'], function() {
  gulp.src(css_src, {base: assets.root_src}).pipe(gulp.dest(assets.css_dst));
});

gulp.task('build', ['clean-assets', 'copy-js', 'copy-css'], function() {
});
