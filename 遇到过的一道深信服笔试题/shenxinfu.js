var arr = [
            [1,1,0,1,0],
            [0,1,1,0,0],
            [0,0,1,1,0],
            [1,1,1,0,1],
            [0,1,0,0,1]
        ]
var newArr = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
function B(i,j){
    console.log(arr)
    console.log("------------------------")
    newArr[i][j] = 1
    A(i,j)
}
function A(i,j){
    // if(arr[i][j]){
        if(j > 0 && arr[i][j-1] == 1){
            arr[i][j-1] = 0
            newArr[i][j-1] = 1
            A(i,j-1)
            console.log(newArr + "左边")
        }
        if(j < 4 && arr[i][j+1] == 1){
            arr[i][j+1] = 0
            newArr[i][j+1] = 1
            A(i,j+1)
            console.log(newArr + "右边")
        }
        if(i < 4 && arr[i+1][j] == 1){
            arr[i+1][j] = 0
            newArr[i+1][j] = 1
            A(i+1,j)
            console.log(newArr + "下边")
        }
        if(i > 0 && arr[i-1][j] == 1){
            arr[i-1][j] = 0
            newArr[i-1][j] = 1
            A(i-1,j)
            console.log(newArr + "上边")
        }
    // }
}
console.log("----------start---------")
B(3,2)//调用入口，指定一个随机的点
console.log("-------responed---------")
console.log(newArr)//输出新数组，新数组包含了所有能连接起来的所有的1