var gulp = require("gulp");
var browserSync = require("browser-sync")
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var path = require("path");

// Serve site using browser-sync.
gulp.task("serve", function(){
	browserSync.init({
		server: "public",
		files: "public"
	});
	gulp.watch("./icons/**/*.svg", ['svg-watch']);
	gulp.watch("public").on('change', browserSync.reload);
});

// Trigger browsersync reload after the svgs have been compiled.
gulp.task("svg-watch", ['svgstore'], function(done) {
	browserSync.reload();
	done();
});

gulp.task("svgstore", function(){
	return gulp
		.src("icons/*.svg")
		.pipe(svgmin(function (file){
			var prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [{
					cleanupIDs: {
						prefix: prefix +'-',
						minify: true
					}
				}]
			}
		}))
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(gulp.dest("public/"));
});

