/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);




	function timeElapse(d1) {//di作为一个变量传进来
//如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
		var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
		var dateEnd = new Date();//获取当前时间
		var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
		var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
		var leave1=dateDiff%(24*3600*1000) //计算天数后剩余的毫秒数
		var hours=Math.floor(leave1/(3600*1000))//计算出小时数
//计算相差分钟数
		var leave2=leave1%(3600*1000) //计算小时数后剩余的毫秒数
		var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
//计算相差秒数
		var leave3=leave2%(60*1000) //计算分钟数后剩余的毫秒数
		var seconds=Math.round(leave3/1000)
		console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
		console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
			,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");



	var result = "第 <span class=\"digit\">" + dayDiff + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
	$("#clock").html(result);
}
