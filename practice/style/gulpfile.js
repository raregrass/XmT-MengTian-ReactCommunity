const gulp = require("gulp");
const sass = require("gulp-sass");
const sourceMaps = require("gulp-sourcemaps");

gulp.task("sass", ()=> {
    gulp.src("sass/**/*.scss")
        .pipe(sourceMaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("./css/"));
});

gulp.task("watch", ()=> {
    gulp.watch("sass/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "watch"]);