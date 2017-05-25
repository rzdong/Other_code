var a= {}
Object.defineProperty(a,"b",{

	set:function(newValue){
		console.log("赋值操作,b新值是"+ newValue)
	},

	get:function(){
		console.log("调用了get函数")
		return 2 
	}
})
a.b = 15 //设置b的值时，set发生了调用

console.log(a.b)    //取b值  这个 “b” 赋值 或者 取值的时候会分别触发 set 和 get 对应的函数
