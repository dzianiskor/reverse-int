module.exports = function reverse (n) {
    let arr = n.toString().split('').reverse()
    return parseInt(arr.join(''))
}
