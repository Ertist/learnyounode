var sum = function () {
	var pSum = 0
	var arr = process.argv
	for(let i = 2; i < arr.length; i += 1){
		pSum += Number(arr[i])
	}
	return pSum
}
console.log(sum())




// 官方答案
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)
