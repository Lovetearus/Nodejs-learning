let arr = []
let len = arr.push(undefined, 1, "1")
let arrNew = [, 1, "1"]
for (let i = 0; i < len; i++) {

    console.log(arr[i] === arrNew[i])
}
console.log(arrNew === arr)