let thisObj = Object.keys(this)
console.log(thisObj)
let x = 111
let xModul = {
    x: 1,
    getX: function() {
        return x
    }
}
console.log(xModul.getX())
let xNew = xModul.getX
console.log(xNew())
let xNews = xModul.getX.bind(xModul, 1, 2, 3)
console.log(xNews())