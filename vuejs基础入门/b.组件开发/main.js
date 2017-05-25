var app
window.onload = function (){
	//注册一个组件
	Vue.component('first-component', {
		template: '\
		<li>\
			<span>序号：{{i}} , 描述：{{value.text}}</span>\
			<button v-on:click="deleteobject">X</button>\
		</li>\
		',
		props: ['value','i'],
		methods: {
			deleteobject: function(){
				var vThis = this
				this.$emit('deleteobject', vThis.i)
			}
		}
	})

	//开启一个vuejs应用
	app = new Vue({
		el: '#app',
		data: {
			message: [
				{ text: "我是一段描述" },
				{ text: "我是二段描述" },
				{ text: "我是三段描述" }
			],
			text_message: ''
		},
		methods: {
			addOne: function(){
				var obj = {}
				obj.text = this.text_message
				this.message.push(obj)
				this.text_message = ''
			},
			subThisObject: function(index){
				console.log(1)
				this.message.splice(index,1)
			}
		}
	})
}