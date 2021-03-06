const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function (cb) {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    
    gulp.watch('./app/index.html', function(cd) {
        browserSync.reload();
        cd();
    });

    function styles() {
        console.log('css change detected')
        return gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([cssImport, mixins, hexrgba, cssvars, nested, autoprefixer]))
            .pipe(gulp.dest('./app/temp/styles'))
    }

    function renewCSS() {
        return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
    }

    gulp.watch('./app/assets/styles/**/*.css', gulp.series(styles, renewCSS),
        function(cd) { 
            console.log('detected css')
        cd(); } 
    );

    cb();
});
