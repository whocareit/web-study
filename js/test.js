var root = document.getElementsByClassName('top-menu2')[0]

var arr1 = new Array('卖家中心','联系客服','网站导航')

for(var i = 0; i < arr1.length ; i++ ){
	var li = document.createElement('li')
	var  a = document.createElement('a')
	li.appendChild(a)
	a.textContent = arr1[i]
	root.appendChild(li)
}
var arr2 = new Array('商品分类','收藏夹','购物车','我的淘宝')

for(var j = 0 ; j < arr2.length ; j++){
	var li_1 = document.createElement('li')
	var  a_1 = document.createElement('a')
	li_1.appendChild(a_1)
	a_1.textContent = arr2[j]
	root.insertBefore(li_1,root.childNodes[0])
}

var search = document.getElementsByClassName('search-panel-bottom')[0]

var arr_3 = new Array('时尚女鞋','短裤','半身裙','男士外套','墙纸','行车记录仪','新款男鞋','耳机','时尚女包','沙发')

for(var t = 0; t < arr_3.length; t++){
	var li_3 = document.createElement('li')
	var  a_3 = document.createElement('a')
	li_3.appendChild(a_3)
	a_3.textContent = arr_3[t]
	search.appendChild(li_3);
}

var nav = document.getElementsByClassName('topic-left')[0]

var arr_4 = ['天猫','聚划算','天猫超市']

for(var s = 0; s < arr_4.length; s++){
	li_4 = document.createElement('li')
	a_4 = document.createElement('a')
	a_4.textContent = arr_4[s]
	li_4.appendChild(a_4)
	nav.appendChild(li_4)
}

var body = document.getElementsByClassName('main-left-l-ul')[0]  //找到根节点

for(var m = 0; m < 13; m++ ){  //循环语句生成13个li
	bli = document.createElement('li')//创建li
	var arry = ['男装','女装','童装']//创建一个数组，为li中的a值做准备
	for(var f = 0; f < arry.length; f++){ //每个li中的a
	    var	ba = document.createElement('a') //创建一个a
		ba.textContent = arry[f] //将数组中的文本给a
		var text = document.createTextNode(' / ')//创建一个文本节点
		bli.appendChild(ba) //将a放在li之后
		if( f < 2){
		bli.appendChild(text)//把文本节点放在a的后面，此时的文本节点和a是同级
		}
	}
	body.appendChild(bli)//将li放在根节点之后
}



var app = document.getElementsByClassName('main-right-app-ul')[0]

var nodestyle = new Array('./img/a.webp','./img/b.webp','./img/c.webp','./img/d.webp','./img/e.webp','./img/f.webp','./img/g.webp','./img/h.webp','./img/i.webp','./img/j.webp')

for(z = 0; z < nodestyle.length; z++){
	var zli = document.createElement('li')
	var zimg = document.createElement('img')
	zimg.src = nodestyle[z]
	zli.appendChild(zimg)
	app.appendChild(zli)
}
