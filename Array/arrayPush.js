let arr = []
let len = arr.push(undefined, 1, "1")
let arrNew = [, 1, "1"]
for (let i = 0; i < len; i++) {

    console.log(arr[i] === arrNew[i])
}
console.log(arrNew === arr)
let vegetables = ["tomato", "potato", "parsnip"]
let moreVeg = ["celery", "beetroot"]
Array.prototype.push.apply(vegetables, moreVeg)
console.log(vegetables)

let obj = {
    length: 0,
    addElements: function(el) {
        [].push.call(this, el)
    }
}
obj.addElements({ x: 1 })
obj.addElements({})
console.log(obj)