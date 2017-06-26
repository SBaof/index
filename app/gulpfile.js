var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['cp', 'sass'], function() {
	browserSync({
		server: {
			baseDir: '..'
		},
		port: 3333
	});
});

gulp.task('cp', function() {
	gulp.src(['*.html', 'js/*.js', 'assets/*'], { base: '.' })
		.pipe(gulp.dest('..'));
});

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}

gulp.task('sass', function() {
	gulp.src('styles/main.scss')
		.pipe(sass()).on('error', handleError)
		.pipe(prefix())
		.pipe(gulp.dest('../styles'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('rcp', ['cp'], function() {
	browserSync.reload();
});

gulp.task('watch', function() {
	gulp.watch(['**/*.html'], ['rcp']);
	gulp.watch(['styles/*.scss'], ['sass']);
  	gulp.watch(['js/*.js'], ['rcp']);
});

gulp.task('default', ['browser-sync', 'watch']);
