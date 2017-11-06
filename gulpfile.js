var gulp = require('gulp');

gulp.task('copyForFirebase',()=> {
    gulp.src(['dist/**/*']).pipe(gulp.dest('firebase-build'));
})
