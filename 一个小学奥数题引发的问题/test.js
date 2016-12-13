var arr = [];
var num = 0
for (var i=0;i<150;i++){
	arr[i] = 1;
}
function A(array,number){
	for (var j=1;j<151;j++){
		if(j % number == 0){
			if (array[j-1]) {
				array[j-1] = 0
			}else {
				array[j-1] = 1
			}
		}
	}
	return array
}
arr = A(arr,3)
arr = A(arr,5)
for(var k=0;k<150;k++){
	if (arr[k] == 1) {
		num += 1
	}
}
console.log("----------")
console.log("answer:" + num)