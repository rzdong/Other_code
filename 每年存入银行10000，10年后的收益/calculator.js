function A(n){
	if(n == 1){
		var a = 10000 + 10000 * 0.04
		// console.log(a)
		return a
		
	}else{
		var b =  10000 * n + (10000 + A(n-1)) * 0.04;
		// console.log(b)
		return b
		
	}
}
console.log(A(2))
