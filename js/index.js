$(function(){
	$('#index_page').fullpage({
		anchors:['page1','page2','page3','page4','page5','page6'],
		menu:'#main_ul',
		afterLoad:function(anchorLink,index){
			var arrive = ".title" + index;
			//如果页面是第一个页面，则hr的颜色为白色
			if(index == 1){
				$(arrive).css("width","80px");
				$(arrive).css("background-color","#fff");
				$(".logo1").css("display","none");
				$(".logo2").css("display","");
			}
		},
		onLeave:function(index,nextIndex,direction){
			if(index == 6 && nextIndex == 7){
				return;
			}
			if(nextIndex == 1){
				$(".title1").css("width","80px");
				$(".title1").css("background-color","#fff");
			}
			var leave = ".title" + index;
			var arrive = ".title" + nextIndex;
			if(index == 1 && nextIndex ==2){
				//第一个页面到第二个页面之间样式的变换
				//导航栏下的hr
				$(leave).css("width","0px");
				$(leave).css("background-color","#fff");
				
				$(arrive).css("width","80px");
				$(arrive).css("background-color","#E3120B");
				//导航栏文字的颜色变化
				$(".main_box .main_left li a").css("color","#000");
				//通过隐藏logo来实现颜色的变化
				$(".logo2").css("display","none");
				$(".logo1").css("display","");
				//三根hr的颜色
				$(".main_side hr").css("background-color","#000")
			}else if(index == 2 && nextIndex ==1){
				$(leave).css("width","0px");
				$(leave).css("background-color","#E3120B");
				
				$(arrive).css("width","80px");
				$(arrive).css("background-color","#fff");
				
				$(".main_box .main_left li a").css("color","#fff");
				
				$(".logo1").css("display","none");
				$(".logo2").css("display","");
				
				$(".main_side hr").css("background-color","#fff")
			}else {
				$(leave).css("width", "0px");
				$(arrive).css("width", "82px");
				
				$(".main_box .main_left li a").css("color","#000");
				
				$(".logo2").css("display","none");
				
				$(".main_side hr").css("background-color","#000")
			}
		}
	});
});

/*第一张页面轮播图*/
/*必须页面内的所有元素加载完之后才能执行window.onload内的操作*/
window.onload = function() {
	var length = parseInt($("#lunbo").css("margin-left"));
	console.log(length);
	var turn_left = $(".button_left a");
	var turn_right = $(".button_right a");
	var first_length = parseInt($(".img_topic1").css("width"));
	var new_left = length - first_length + "px";
	console.log(new_left);
	
	function left(){
		var new_left = length - first_length + "px";
		$("#lunbo").css("margin-left",new_left);
	}
	console.log(left());
	function right(){
		var new_left = length + first_length + "px";
		$("#lunbo").css("margin-left",new_left);
	}
}
