var fs = require('fs')
var data = ''
fs.readFile('C:/Users/Zhendong Ren/Desktop/js/index.txt',function(err,data){
	if ( err ) {
		return console.error(err)
	}
	datas = data.toString()
	var array = datas.split(/\s+/)
	for(var i=0;i<array.length;i++){
		if(array[i].match(/[^a-zA-Z-]/)){
			array[i] = array[i].replace(/[^a-zA-Z-]+/g,'')//替换掉不是英文的字符为空
			// var arr = array[i].split('').pop()
		}
		if(array[i].match(/[12345678]/)){
			array.splice(i,1)
		}
	}
	for(var i=0;i<array.length;i++){//打印不符合条件的数据
		if(array[i].match(/[^a-zA-Z-]/)){
			console.log(array[i]+' ' +i)
			// console.log(i)
		}
	}
	console.log('总共有：'+array.length+'个单词')
	//到这里已经整理出了502个单词
	//存在module和array里面了
	var module = array
	var count_letter =[]

	for(var i=0;i<array.length-1;i++){ //循环完整数组
		for(var j=i+1;j<array.length;j++){
			if(array[i] == array[j]){
				// console.log(array[i] + " : "+array[j])
				module.splice(j,1)   //在复制的数组中减去后面重复的。最后得到不重复单词的数组module
				count_letter.push(array[i]) //这里将重复的值放入新数组，做记录	
			}
		}
	}
	//整理出用到的单词，存在module数组中
	//整理出了出了本身之外重复的单词，存在count_letter数组
	
	console.log('抽出重复单词：'+count_letter.length +'个')//260 总共260个单词
	console.log('原始词汇量有：'+module.length+'个')//242
	var count = []
	for(var k=0;k<module.length;k++){
		count[k] = 1
	}
	for(var q=0;q<module.length;q++){//取出一个单词
		for(var w=0;w<count_letter.length;w++){
			if (module[q] == count_letter[w]) {
				count[q] =  count[q] + 1
			}
		}
	}
	// console.log(count)
	for(var i=0;i<module.length;i++){
		if(module[i] != ''){
			console.log(i+1 + ':' + module[i] + '的出现次数为：' + count[i]+',出现频率为：' + count[i]/242)
		}
	}
})
