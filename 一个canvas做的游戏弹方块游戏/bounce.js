var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var clientWidth = 400
var clientHeight= 650
canvas.width = clientWidth  //整个浏览器可用宽度都是canvas的画布
canvas.height= clientHeight //整个浏览器的可用高度 都是canvas的画布高度
var t
var sec = 0
var second = new Date().getSeconds() //初始时记录一个时间
var count = 0 //记录反弹次数
var cou = 0  //被写的数据

var boot = { width:100,height:15,x: (clientWidth-100)/2,y: clientHeight-20} //滑动块
var ball = {x:Math.round(Math.random() * 380) + 10,y:Math.round(Math.random() * 180) + 20,r: 5,vx:Math.round(Math.random() * 1) + 4,vy:Math.round(Math.random() * 1) + 4}
start()
function start(){
	
	init()
	
}
function init(){
	ctx.clearRect(0,0,400,650);
	drawBg()
	drawRect()
	drawBall()
	changeBall()
	drawTime()
	var seconds = new Date().getSeconds() //每次循环的时候记录时间
	if(second != seconds){
		second = seconds
		sec += 1
		console.log(sec)
	}
	
	// console.log(ball.vx+"  :  " +ball.vy)
	t = setTimeout(init,30)
}
function drawBall(){  //绘画小球
	// ctx.clearRect(0,0,400,650);
	ctx.fillStyle = "#ff0000"
	ctx.beginPath()
	ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI)
	ctx.fill()
}
function drawRect(){  //绘画挡板
	
	var gtd = ctx.createLinearGradient(0,clientHeight-5,0,clientHeight-20)
	gtd.addColorStop(0,"#111111")
	gtd.addColorStop(1,"#00ffff")
	ctx.fillStyle = gtd
	// ctx.lineCap="round";
	ctx.fillRect(boot.x,boot.y,boot.width,boot.height)
}
function drawBg(){
	var gtd = ctx.createLinearGradient(0,0,0,clientHeight)
	gtd.addColorStop(0,"#0066ff")
	gtd.addColorStop(1,"#eeeeee")
	ctx.fillStyle = gtd
	ctx.fillRect(0,0,400,650)
}
function drawText(){
	ctx.font="20px Georgia";
	ctx.strokeText("一共坚持了：" + sec +" 秒",(clientWidth-160)/2,(clientHeight-80)/2);
	ctx.strokeText("反弹了：" + count +" 次",(clientWidth-120)/2,(clientHeight-30)/2);
	ctx.strokeText("游戏结束",(clientWidth-80)/2,(clientHeight+25)/2);
}
function drawTime(){
	ctx.font="20px Georgia";
	ctx.strokeText("时间：" + sec ,20,40);
	ctx.strokeText("次数：" + count ,20,80);
}
function changeBall(){
	if(ball.x>400-10 || ball.x<10){
		if (ball.vx>0 && ball.vx<20) {
			ball.vx += Math.round(Math.random() * 0.5) + 0.5
		}/*else if(ball.vx<0 && ball.vx <20){
			ball.vx -= 1
		}*/
		count += 1
		ball.vx = - ball.vx
	}
	if(ball.y<10){
		if (ball.vy>0 && ball.vy<20) {
			ball.vy += 1
		}/*else if(ball.vy<0 && ball.vy <20){
			ball.vy -= 1
		}*/
		count += 1
		ball.vy = - ball.vy
	}
	if(ball.y > 620 && ball.y <650){
		if(ball.x>boot.x && ball.x < boot.x + 100){
			count += 1
			ball.vy += 1
			ball.vy = - ball.vy
		}
	}
	if (ball.y > 700) {
		drawText()
		clearTimeout(ti)
		console.log("失败")
	}
	ball.x = ball.x + ball.vx	
	ball.y = ball.y + ball.vy
}
canvas.onmousedown = function(event){

}
canvas.onmouseup = function(event){

}
canvas.onmousemove = function(event){
	if (event.x> 50 && event.x<350) {
		boot.x = event.x - 50
		
	}
	// console.log("鼠标正在移动x:" + event.x + "y:" + event.y)
}
canvas.addEventListener('touchmove', function(event){
	boot.x = event.touches[0].pageX - 50
	console.log(boot.x)
},false); 