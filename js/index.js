$(function(){
	$('#index_page').fullpage({
		anchors:['page1','page2','page3','page4','page5','page6'],
		menu:'#main_ul'
	});
});

/*轮播图相关代码*/
/*必须页面内的所有元素加载完之后才能执行window.onload内的操作*/
window.onload = function() {
	var turn_left = $(".page1 .button_left a");
	var turn_right = $(".page1 .button_right a");
	//总的容器长度
	var lunbo_width = $(".page1 .lunbo");
	var length = parseInt(lunbo_width.css("width"));
	//获取第一张轮播图的总宽
	var lunbo_first = $(".page1 .lunbo .img_topic1");
	var length_width = parseInt(lunbo_first.css("width"));
	turn_left.onclick = function (){
		pre_img();
	}
	turn_right.onclick = function (){
		next_img();
	}
	
	function pre_img(){
		var new_Left = parseInt(lunbo_first.css("margin-left"));
		if(new_Left === 2*length_width ){
			new_left = length - length_width;
		}else{
			new_Left = new_Left + length_width;
		}
		new_Left = new_Left + "px";
		lunbo_first.css("margin-left",new_left);
	}
	function next_img(){
		var new_Left = parseInt(lunbo_first.css("margin-left"));
		if(new_Left === 4*length_width ){
			new_left = 0;
		}else{
			new_Left = new_Left - length_width;
		}
		new_Left = new_Left + "px";
		lunbo_first.css("margin-left",new_left);
	}
	
	
}
