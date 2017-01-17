var arr = [4,12,45,85,79,45,12,36,12,56,45,12]
// var arr = ['a','b','c','d','a','b','f','a','b']
function mast(arr){
	var array = [];
	var arra  = [];
	for (var i = 0; i < arr.length; i++) {
		array[i] = arr[i];
	}
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr[j] = null
			}
		}
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			arra[i] = 1;
		}else {
			arra[i] = 0;
		}
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			for (var j = 0; j < array.length; j++) {
				if (i != j) {
					if (arr[i] == array[j]) {
						arra[i]++
					}	
				}
			}	
		}
	}
	var index = 0;
	var num_max = array[0]
	for (var i = 1; i < arra.length - 1; i++) {
		if (arra[i]) {
			if (arra[index] < arra[i]) {
				index = i
			}else if(arra[index] == arra[i]){
				if(array[index] < array[i]){
					index = i
				}else {
					index = j
				}
			}
		}
	}
	// console.log(arra)
	// console.log(arr)
	// console.log(array)
	// console.log(array[index])
	return array[index];
}

var more = mast(arr)
console.log(more)