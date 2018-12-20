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
				
				case 3:
				$(".page3 .page3_button").removeClass("page3_button_animation");
				
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
				
				case 3:
				$(".page3 .page3_button").addClass("page3_button_animation");
				
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
	var page4_left = $(".page4_bottom .page4_button1");
	var page4_right = $(".page4_bottom .page4_button2");
	var page4_first = parseInt($(".page4_center_L1").css("width"));
	
	page4_right.click(function(){
		this4_left();
	})
	page4_left.click(function(){
		this4_right()
	})
	function this4_left(){
		var new4_left = parseInt($(".page4_center_cotainer").css("margin-left"));
		if( new4_left == 0){
			new4_left = new4_left - page4_first;
		}
		new4_left_px = new4_left + "px";
		$(".page4_center_cotainer").css("margin-left",new4_left_px);
	}
	function this4_right(){
		var new4_left = parseInt($(".page4_center_cotainer").css("margin-left"));
		if( new4_left == -page4_first){
			new4_left = new4_left + page4_first;
		}
		new4_left_px = new4_left + "px";
		$(".page4_center_cotainer").css("margin-left",new4_left_px);
	}
	
	/*第三张页面js相关*/
	var page3_left = $(".page3_button .page3_button1");
	var page3_right = $(".page3_button .page3_button2");
	var width3 = parseInt($(".page3_lb_ul .page3_ul li").css("width"));
	
	page3_left.click(function(){
		left3();
	})
	page3_right.click(function(){
		right3();
	})
	function left3(){
		var new1_left= parseInt($(".page3_lb_ul .page3_ul").css("margin-left"));
		if(new1_left == -3*width3){
			return width3;
		}
			new1_left = new1_left - width3;
		new1_left_px = new1_left + "px";
		$(".page3_lb_ul .page3_ul").css("margin-left",new1_left_px);
		vary_css();
	}
	function right3(){
		var new1_left= parseInt($(".page3_lb_ul .page3_ul").css("margin-left"));
		if(new1_left == width3){
			return -3*width3;
		}
			new1_left = new1_left + width3;
		new1_left_px = new1_left + "px";
		$(".page3_lb_ul .page3_ul").css("margin-left",new1_left_px);
		vary_css();
	}
	
	function vary_css(){
		var Nindex = parseInt($(".page3_lb_ul .page3_ul").css("margin-left"));
		var Tindex = parseInt($(".page3_lb_ul .page3_ul li").css("width"));
		var t = Nindex / Tindex;
		if(t == 1){
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("top","40%");
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("left","54%");
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("font-size","1.8rem");
			$(".page3_lb_ul .page3_ul .page3_li1 p").css("left","10%");
			$(".page3_lb_ul .page3_ul .page3_li1 p").css("opacity","1");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li2 p").css("opacity","0");
		}else if(t == 0){
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("left","30%");
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li1 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("top","40%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("left","54%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("font-size","1.8rem");
			$(".page3_lb_ul .page3_ul .page3_li2 p").css("left","10%");
			$(".page3_lb_ul .page3_ul .page3_li2 p").css("opacity","1");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li3 p").css("opacity","0");
			$(".page3 .page3_img").attr("src","img/page32.jpg")
		}else if(t == -1){
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("left","30%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li2 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("top","40%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("left","54%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("font-size","1.8rem");
			$(".page3_lb_ul .page3_ul .page3_li3 p").css("left","10%");
			$(".page3_lb_ul .page3_ul .page3_li3 p").css("opacity","1");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li4 p").css("opacity","0");
			$(".page3 .page3_img").attr("src","img/page33.jpg")
		}else if( t == -2){
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("left","30%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li3 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("top","40%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("left","54%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("font-size","1.8rem");
			$(".page3_lb_ul .page3_ul .page3_li4 p").css("left","10%");
			$(".page3_lb_ul .page3_ul .page3_li4 p").css("opacity","1");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li5 p").css("opacity","0");
			$(".page3 .page3_img").attr("src","img/page34.jpg")
		}else if( t == -3){
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("top","40%");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("left","54%");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("font-size","1.8rem");
			$(".page3_lb_ul .page3_ul .page3_li5 p").css("left","10%");
			$(".page3_lb_ul .page3_ul .page3_li5 p").css("opacity","1");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("left","30%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li4 p").css("opacity","0");
			$(".page3 .page3_img").attr("src","img/page34.jpg")
		}else{
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li1 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li1 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li2 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li2 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li3 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li3 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li4 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li4 p").css("opacity","0");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("top","50%");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("left","70%");
			$(".page3_lb_ul .page3_ul .page3_li5 h4").css("font-size","2rem");
			$(".page3_lb_ul .page3_ul .page3_li5 p").css("opacity","0");
			$(".page3 .page3_img").attr("src","img/page31.jpg")
		}
	}
}
