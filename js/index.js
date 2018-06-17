$(document).ready(function () {
	initTitle();
})
$(window).resize(function() {
	$('.change_page_button').css('width',$('.change_page_button').css('height'));
});
function initTitle() {
	$('.change_page_button').css('width',$('.change_page_button').css('height'));
	var title_right_time = getNowFormatDate();
	$('#title_show_time').text(title_right_time);
	setInterval(function () {
		var title_right_time = getNowFormatDate();
		$('#title_show_time').text(title_right_time);
	}, 1000)
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strSeconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    show_day =['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + strSeconds+" "+show_day[date.getDay()];
    return currentdate;
}