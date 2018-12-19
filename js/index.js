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
				
				$(".page1 #lunbo .img_topic h4").addClass(".img_topic_h4_animation");
				$(".page1 #lunbo .img_topic_p1").addClass(".img_topic_p1_animation");
				$(".page1 #lunbo .img_topic hr").addClass(".img_topic_hr_animation");
				$(".page1 #lunbo .img_topic_p2").addClass(".img_topic_p2_animation");
				$(".page1 #lunbo .more_border").addClass(".img_topic_more_border_animation");
			}else {
				$(leave).css("width", "0px");
				$(arrive).css("width", "82px");
				
				$(".main_box .main_left li a").css("color","#000");
				
				$(".logo2").css("display","none");
				
				$(".main_side hr").css("background-color","#000")
			}
			switch(index){
				case 2:
				$(".page2 .page2_right_h4").removeClass("page2_right_h4_animation");
				$(".page2 .page2_right_p").removeClass("page2_right_p_animation");
				$(".page2 .page2_right_more").removeClass("page2_right_more_animation");
				break;
				
				case 5:
				$(".page5_ul_li1").removeClass("page5_ul_li1_animation");
				$(".page5_ul_li2").removeClass("page5_ul_li2_animation");
				$(".page5_ul_li3").removeClass("page5_ul_li3_animation");
				$(".page5_ul_li4").removeClass("page5_ul_li4_animation");
				$(".page5_ul_li5").removeClass("page5_ul_li5_animation");
				$(".page5_ul_li6").removeClass("page5_ul_li6_animation");
				$(".page5_ul_li7").removeClass("page5_ul_li7_animation");
				$(".page5_ul_li8").removeClass("page5_ul_li8_animation");
				break;
				
				case 6:
				$(".page6 .page6_header h3").removeClass("page6_header_h3_animation");
				$(".page6 .page6_header hr").removeClass("page6_header_hr_animation");
				$(".page6 .page6_header h4").removeClass("page6_header_h4_animation");
				$(".page6 .page6_bottom h5").removeClass("page6_bottom_h5_animation");
				$(".page6 .page6_bottom h6").removeClass("page6_bottom_h6_animation");
				$(".page6 .page6_bottom hr").removeClass("page6_bottom_hr_animation");
				$(".page6 .page6_bottom h4").removeClass("page6_bottom_h4_animation");
				$(".page6 .page6_bottom p").removeClass("page6_bottom_p_animation");
				break;
			}
			switch(nextIndex){
				case 2:
				$(".page2 .page2_right_h4").addClass("page2_right_h4_animation");
				$(".page2 .page2_right_p").addClass("page2_right_p_animation");
				$(".page2 .page2_right_more").addClass("page2_right_more_animation");
				break;
				
				case 5:
				$(".page5_ul_li1").addClass("page5_ul_li1_animation");
				$(".page5_ul_li2").addClass("page5_ul_li2_animation");
				$(".page5_ul_li3").addClass("page5_ul_li3_animation");
				$(".page5_ul_li4").addClass("page5_ul_li4_animation");
				$(".page5_ul_li5").addClass("page5_ul_li5_animation");
				$(".page5_ul_li6").addClass("page5_ul_li6_animation");
				$(".page5_ul_li7").addClass("page5_ul_li7_animation");
				$(".page5_ul_li8").addClass("page5_ul_li8_animation");
				break;
				
				case 6:
				$(".page6 .page6_header h3").addClass("page6_header_h3_animation");
				$(".page6 .page6_header hr").addClass("page6_header_hr_animation");
				$(".page6 .page6_header h4").addClass("page6_header_h4_animation");
				$(".page6 .page6_bottom h5").addClass("page6_bottom_h5_animation");
				$(".page6 .page6_bottom h6").addClass("page6_bottom_h6_animation");
				$(".page6 .page6_bottom hr").addClass("page6_bottom_hr_animation");
				$(".page6 .page6_bottom h4").addClass("page6_bottom_h4_animation");
				$(".page6 .page6_bottom p").addClass("page6_bottom_p_animation");
				break;
			}
		}
	});
});


/*第一张页面轮播图*/
/*必须页面内的所有元素加载完之后才能执行window.onload内的操作*/
window.onload = function() {
	var turn_left = $(".button_left a");
	var turn_right = $(".button_right a");
	var first_length = parseInt($(".img_topic1").css("width"));
	
	$(".page1 #lunbo .img_topic h4").addClass("img_topic_h4_animation");
	$(".page1 #lunbo .img_topic_p1").addClass("img_topic_p1_animation");
	$(".page1 #lunbo .img_topic hr").addClass("img_topic_hr_animation");
	$(".page1 #lunbo .img_topic_p2").addClass("img_topic_p2_animation");
	$(".page1 #lunbo .more_border").addClass("img_topic_more_border_animation");
	/*自动轮播*/
	var timer = setInterval(function(){
		left();
	},2500);
	
    turn_left.click(function (){
		left();
		clearInterval(timer);
	});
	
	turn_right.click(function(){
		right();
		clearInterval(timer);
	});
	
	function left(){
		$(".page1 #lunbo .img_topic h4").removeClass("img_topic_h4_animation");
		$(".page1 #lunbo .img_topic_p1").removeClass("img_topic_p1_animation");
		$(".page1 #lunbo .img_topic hr").removeClass("img_topic_hr_animation");
		$(".page1 #lunbo .img_topic_p2").removeClass("img_topic_p2_animation");
		$(".page1 #lunbo .more_border").removeClass("img_topic_more_border_animation");
		var new_left = parseInt($("#lunbo").css("margin-left"));
		if(new_left === -3*first_length){
			new_left = 0;
		}else{
			new_left = new_left - first_length;
		}
		var new_left_px = new_left + "px";
		$("#lunbo").css("margin-left",new_left_px);
		$(".page1 #lunbo .img_topic h4").addClass("img_topic_h4_animation");
		$(".page1 #lunbo .img_topic_p1").addClass("img_topic_p1_animation");
		$(".page1 #lunbo .img_topic hr").addClass("img_topic_hr_animation");
		$(".page1 #lunbo .img_topic_p2").addClass("img_topic_p2_animation");
		$(".page1 #lunbo .more_border").addClass("img_topic_more_border_animation");
	}
	function right(){
		$(".page1 #lunbo .img_topic h4").removeClass("img_topic_h4_animation");
		$(".page1 #lunbo .img_topic_p1").removeClass("img_topic_p1_animation");
		$(".page1 #lunbo .img_topic hr").removeClass("img_topic_hr_animation");
		$(".page1 #lunbo .img_topic_p2").removeClass("img_topic_p2_animation");
		$(".page1 #lunbo .more_border").removeClass("img_topic_more_border_animation");
		var new_left = parseInt($("#lunbo").css("margin-left"));
		if(new_left == 0){
			new_left = -3*first_length;
		}else{
			new_left = new_left + first_length;
		}
		var new_left_px = new_left + "px";
		$("#lunbo").css("margin-left",new_left_px);
		$(".page1 #lunbo .img_topic h4").addClass("img_topic_h4_animation");
		$(".page1 #lunbo .img_topic_p1").addClass("img_topic_p1_animation");
		$(".page1 #lunbo .img_topic hr").addClass("img_topic_hr_animation");
		$(".page1 #lunbo .img_topic_p2").addClass("img_topic_p2_animation");
		$(".page1 #lunbo .more_border").addClass("img_topic_more_border_animation");
	}
	
	//侧栏出现部分
	var side_open = $(".main_side");
	var side_close = $(".side_close");
	side_open.click(function(){
		$(".side_box").css("width","300px");
		$(".side_close").css("width","50px");
		$(".item_li a").addClass("itme_li_a_animation");
	})
	side_close.click(function(){
		$(".side_box").css("width","0");
		$(".side_close").css("width","0");
		$(".item_li a").removeClass("itme_li_a_animation");
	})
	
	/*page4点击事件*/
	var page4_left = $(".page3_button .page4_button1");
	var page4_right = $(".page3_button .page4_button2");
	var page4_first = parseInt($(".page4_center_L1","width"));
	var new4_left = parseInt($(".page4_center_cotainer","margin-left"));
	console.log(page4_first);
	console.log(new4_left);
	
	page4_left.click(function(){
		this4_left();
	})
	function this4_left(){
		var new4_left = parseInt($(".page4_center_cotainer","margin-left"));
		if( new4_left == 0){
			new4_left = new4_left - page4_first;
		}
		new4_left_px = new4_left + "px";
		$(".page4_center_cotainer").css("margin-left",new4_left_px);
	}
}
