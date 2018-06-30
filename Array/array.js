let arr = [1, 2, 3, 4, , 5]
arr.length = 7
let index = arr[4]
let exist = index === undefined
const begin = -10
const end = 10
for (let i = begin; i < end; i++) {
    for (let j = begin; j < end; j++) {

        let brr = arr.slice(i, j)
        if (brr.length > 0) console.log(`[${arr}].slice(${i},${j}):"[${brr}]"`)
    }
}