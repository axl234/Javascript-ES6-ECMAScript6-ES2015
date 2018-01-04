 import gulp from 'gulp';
 import gulpif from 'gulp-if';//为功能执行添加条件判断，跟程序语言中的if是相同语义。可以利用条件判断，可以编写类似profile的打包逻辑。
 import concat from 'gulp-concat';
 import webpack from 'webpack'; //打包
 import gulpWebapck from 'webpack-stream';
 import named from 'vinyl-named';//该插件保证webpack生成的文件名能够和原文件对上
 import livereload from 'gulp-livereload';//热更新
 import plumber from 'gulp-plumber';
 import rename from 'gulp-rename';
 import uglify from 'gulp-uglify';
 import { log, colors } from 'gulp-util';
 import args from './util/args';
 gulp.task('scripts', ()=>{
     return gulp.src(['app/js/index.js'])
     .pipe(plumber({
         errorHandle: function(){

         }
     }))
     .pipe(named())
     .pipe(gulpWebapck({
         module:{
             loaders:[{
                 test: /\.js$/,
                 loader: 'babel'
             }]
         }
     }), null, (err, stats)=>{
         log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
             chunks: false
         }));
     })
     .pipe(gulp.dest('server/public/js'))
     .pipe(rename({
        basename: 'cp',
        extname: '.min.js' 
     }))
     .pipe(uglify({
         compress: {properties: false},
         output: {'quote_keys': true}
     }))
     .pipe(gulp.dest('server/public/js'))
     .pipe(gulpif(args.watch, livereload()))
 });
