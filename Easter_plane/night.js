var canvas = document.getElementById('canvas')
var p      = document.getElementById('p')
 
var userAgentInfo = navigator.userAgent;  
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");    
var flag = true;    
for (var v = 0; v < Agents.length; v++) {    
    if (userAgentInfo.indexOf(Agents[v]) > 0) { 
    	flag = false; break; //如果检测到是手机，就会返回false
    }    
}
if(!flag){
	p.innerHTML = "您的设备不是电脑，无法操作"
}
var clientWidth = 400
var clientHeight= 600
canvas.width = clientWidth
canvas.height= clientHeight
var ctx = canvas.getContext('2d')
var array = [] //这是敌人的集群 敌人的半径5，颜色白
var oneself = {x:clientWidth/2,y:clientHeight,r:20} //这是我自己的飞机 宽40，高25，,颜色红
var bullet = [] //这是子弹的集群 默认宽度2px 高度6px
var state = true
var score = 0
var profi = "↑→↓←"
var count_profi = 0
start()
function start(){ 
	init()
}
var count_enemy_v = 0
var count_bulle_v = 0


function init(){
	test_self()
	test()
	if(count_enemy_v == 8){
		enemy() //产生敌人添加到敌人数组
		count_enemy_v = 0	
	}else{
		count_enemy_v++
	}
	if(count_bulle_v == 9){
		bulle() //产生子弹添加到子弹数组
		count_bulle_v = 0	
	}else{
		count_bulle_v++
	}
	count_profi += 1
	
	change()

	draw()
	
	var t = setTimeout("init()",30)
}

function test_self(){
	for(var i = 0;i<array.length;i++){
		if((array[i].x - oneself.x) * (array[i].x - oneself.x) + (array[i].y - oneself.y) * (array[i].y - oneself.y) < (array[0].r + oneself.r)*(array[0].r + oneself.r)){
			console.log("游戏结束了")
			draw_text()
			clearTimeout(t)
			// state = false   //停止延迟绘画	
		}
	}
}
function draw_profi(){
	if (profi) {
		ctx.fillStyle = "#000000";
		ctx.font="30px Verdana";
		ctx.fillText("键盘：" + profi +" 控制飞行",200-5*30,285);
	}
}
function draw_text(){
	ctx.font="30px Verdana";
	ctx.fillText("game over!",110,285);
	ctx.font="20px 仿宋";
	ctx.fillText("刷新可重玩",200-2.5*20,325);
}
function test(){
	for (var m=0;m<array.length;m++){   //遍历每个敌人
		// console.log(array[m].y + "----------")
		for (var n=0;n<bullet.length;n++){   //对于每个敌人，遍历每科子弹

			// if(array[m].y == 'wu' || array[m].x == 'wu'){
			// 	continue;
			// }else{
			if((bullet[n].y - array[m].y)*(bullet[n].y - array[m].y) + (bullet[n].x - array[m].x)*(bullet[n].x - array[m].x) < 225){
				array.splice(m,1)
				bullet.splice(n,1)
				score = score + 10
				console.log("消灭了一个敌人！")
				break;
			}

			
		}
	}
}

function bulle(){  //产生子弹
	var _x = oneself.x - 1
	var _y = oneself.y - oneself.r - 6
	var _v = 4
	var obje = {x:_x,y:_y,v:_v}
	bullet.push(obje)
}

function enemy(){  //产生敌人

	var _x = Math.round(Math.random() * clientWidth)
	var _y = -15
	var _v = Math.round(Math.random() * 3) + 1
	var ff1 = Math.round(Math.random() * 255).toString(16);
	var ff2 = Math.round(Math.random() * 255).toString(16);
	var ff3 = Math.round(Math.random() * 255).toString(16);
	if(ff1.length == 1) ff1 = ff1 +1;
	if(ff2.length == 1) ff2 = ff2 +1;
	if(ff3.length == 1) ff3 = ff3 +1;
	var colorff = '#' + ff1 + ff2 + ff3;
	var obj = {x:_x,y:_y,r:15,v:_v,color: colorff}
	array.push(obj)
}

function change(){ 
	for (var i=0;i<array.length;i++){   //改变敌人的位置
		if(array[i].y < clientHeight + 15){
			array[i].y = array[i].y + array[i].v
		}else {
			array.splice(i,1)
		}
	}
	for (var j=0;j<bullet.length;j++){   //改变子弹的位置
		if(bullet[j].y > 0){
			bullet[j].y = bullet[j].y - bullet[j].v
		}else {
			bullet.splice(j,1)
		}
	}
	
	console.log("敌人：" + array.length)
	console.log("子弹：" + bullet.length)
} 

function draw(){ //绘画
	ctx.clearRect(0,0,clientWidth,clientHeight)

	ctx.beginPath();     //绘画背景
	ctx.fillStyle = "#00dddd";
	ctx.fillRect(0,0,clientWidth,clientHeight);

	for (var i=0;i<array.length;i++){   //绘画敌人
		ctx.fillStyle = array[i].color
		ctx.beginPath();
		ctx.arc(array[i].x,array[i].y,array[i].r,0,2*Math.PI)
		ctx.fill();
	}

	ctx.beginPath();   //绘画自己
	ctx.fillStyle = '#ff00ff'
	ctx.arc(oneself.x,oneself.y,oneself.r,0,2*Math.PI)
	ctx.fill();

	for(var k=0;k<bullet.length;k++){  //绘画子弹
		ctx.beginPath();
		ctx.fillStyle = "#000000";
		ctx.fillRect(bullet[k].x,bullet[k].y,2,6);
	}
	ctx.fillStyle = "#000000";
	ctx.font="20px Verdana";   //绘画分数
	ctx.fillText("分数：" + score ,10,50);

	if(count_profi < 80){
		draw_profi()
	}else {
		profi = null
	}
	
}

document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0]; 
	if(e && e.keyCode==39){ // 按 Esc 
		console.log("右")
		oneself.x = oneself.x + 10
	}
	if(e && e.keyCode==40){ // 按 Esc 
		console.log("下")
		oneself.y = oneself.y + 10
	}
	if(e && e.keyCode==37){ // 按 Esc 
		console.log("左")
		oneself.x = oneself.x - 10
	}
	if(e && e.keyCode==38){ // 按 Esc 
		console.log("上")
		oneself.y = oneself.y - 10
	} 
}