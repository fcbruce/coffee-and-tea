const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const webpack = require('webpack');
const spawn = require('child_process').spawn;

function run(fileName, options, callback) {
  const cp = spawn('node', [fileName], Object.assign({
    stdio: 'inherit',
  }, options));
  cp.on('error', (err) => { callback(err); });
  cp.on('exit', () => { callback(); });
}

gulp.task('clean', () => {
  return del([
    'lib/**/*',
    'dist/**/*'
  ])
});

gulp.task('babel', ['clean'], () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({ 'presets': ['es2015', 'react'] }))
    .pipe(gulp.dest('lib'));
});

gulp.task('webpack', ['babel'], () => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    gutil.log(stats.toString({ color: true }));
  });
});

gulp.task('build', ['webpack']);

gulp.task('run', (done) => {
  run('./lib/app.js', {env: {NODE_ENV: 'production' }}, done);
});
