//htmlmin插件的参数对象
var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}

//获取gulp对象
var gulp = require("gulp");

//导入插件
//var htmlmin = require("gulp-htmlmin"); //html压缩和优化的插件
var uglify = require("gulp-uglify"); //js压缩插件
//var rename = require("gulp-rename"); //重命名插件
var babel = require('gulp-babel'); //es6转es5
var minifyCss = require('gulp-minify-css'); //css压缩插件

//压缩css的插件
gulp.task("cssTask", function(){
	gulp.src("css/dafeiji.css")
		.pipe( minifyCss(obj) ) //使用插件htmlmin
		.pipe( gulp.dest("css_ys") );
})

//压缩js的插件
gulp.task("jsTask1", function(){
	gulp.src("js/common.js")
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})
gulp.task("jsTask2", function(){
	gulp.src("js/ajax.js")
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})
gulp.task("jsTask3", function(){
	gulp.src("js/gameEngine.js")
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})
gulp.task("jsTask4", function(){
	gulp.src("js/myPlane.js")
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})


//压缩js的插件 (es6转es5)
gulp.task("jsTask5", function(){
	gulp.src("js/bullet.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet2.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})
gulp.task("jsTask6", function(){
	gulp.src("js/enemy.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet2.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})
gulp.task("jsTask7", function(){
	gulp.src("js/Father.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe( uglify() ) //使用插件uglify
//		.pipe( rename("bullet2.min.js") ) //使用插件rename
		.pipe( gulp.dest("js_ys") );
})


//默认任务
gulp.task("default", ["cssTask","jsTask1","jsTask2","jsTask3","jsTask4","jsTask5","jsTask6","jsTask7"]);




