import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import styles from './gulp/compileStyles.mjs';
import {copy, copyImages, copySvg} from './gulp/copyAssets.mjs';
import js from './gulp/compileScripts.mjs';
import {svgo, sprite, createWebp, optimizeImages} from './gulp/optimizeImages.mjs';
import pug from './gulp/compilePug.mjs';

const server = browserSync.create();
const streamStyles = () => styles().pipe(server.stream());

const clean = () => del('build');

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/pug/**/*.pug', gulp.series(pug, refresh));
  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series(streamStyles));
  gulp.watch('source/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(copySvg, sprite, pug, refresh));
  gulp.watch('source/img/**/*.{png,jpg,webp,gif}', gulp.series(copyImages, pug, refresh));

  gulp.watch('source/favicon/**', gulp.series(copy, refresh));
  gulp.watch('source/video/**', gulp.series(copy, refresh));
  gulp.watch('source/downloads/**', gulp.series(copy, refresh));
  gulp.watch('source/*.php', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const baseSeries = gulp.series(
  clean,
  svgo,
  copy,
  styles,
  sprite,
  js,
  pug,
);

const build = gulp.series(baseSeries);
const start = gulp.series(baseSeries, syncServer);

export {optimizeImages as imagemin, createWebp as webp, build, start};
