$(document).ready(function(){
	var num = 0;
	var seconds = 10;
	$(".J_click").click(function(){
		num++;
		$("span",this).text(num);
		if(num == 1){
			$(".J_text").text("你只有十秒钟时间，加油哦")
			var set = setInterval(function(){
				seconds--;
				console.log(seconds);
				if( seconds == 0 ){
					clearInterval(set);
					$(".J_click").removeClass("btn-success");
					$(".J_click").addClass("btn-danger");
					$(".J_click").html('时间到了，你总共贡献了' + $("span",".J_click").text() + "分");
					$(".J_click").unbind();
				}
			},1000);
		}
	});
	
});