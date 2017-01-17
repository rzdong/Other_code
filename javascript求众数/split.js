/*
*不带参数时的Split字符串分割方法
*
*/
var str = "hello world!"
function Split(str){
	var str_ing = []
	for (var i = 0; i < str.length; i++) {
		str_ing[i] = str[i]
	}
	return str_ing
}
var a = Split(str)
console.log(a)

/*
*带参数的split字符串分割方法
*单字符分割
*/
var strr = 'hello world! ren zhendong'
function split(str,modle){
	var str__ing = []
	var index;
	var d =''
	var count = 0
	for (var i = 0; i < str.length; i++) {
		if (str[i] == modle) {
			str__ing[count] = d
			count++
			d = ''
			continue;
		}
		d = d + str[i]
		if (i == str.length-1) {
			str__ing[count] = d
		}
	}
	return str__ing
}
var b = split(strr, ' ')
console.log(b)