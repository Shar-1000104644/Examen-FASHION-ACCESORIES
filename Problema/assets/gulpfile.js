var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpJade = require('gulp-jade');

gulp.task('saludar', function(){
	console.log('Hola, ya me pongo a trabajar.');
});

gulp.task('compilar_sass', function(){
	return gulp.src('./sass/main.scss')
    	.pipe(gulpSass())
    	.pipe(gulp.dest('./css'));
});

gulp.task('compilar_jade', function(){
	return gulp.src('./jade/*.jade')
    	.pipe(gulpJade())
    	.pipe(gulp.dest('./public'));
});

gulp.task('vigilar_sass', function(){
	return gulp.watch('./sass/main.scss', ['compilar_sass']);
});

gulp.task('vigilar_jade', function(){
	return gulp.watch('./jade/*.jade', ['compilar_jade']);
});

gulp.task('default', ['compilar_jade','compilar_sass']);





