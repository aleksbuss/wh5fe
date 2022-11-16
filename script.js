// task1
//   console.log(laptopsThird)
 
// let num = function(a, b) {
//     if(a > b) {
//         return a
//     } else {
//         return b
//     }
// }
// console.log(num(17, 6));

// let a = 17
// let b = 18
// if(a > b) {
//     console.log(a);

// } else {
//     console.log(b);
// }

//task2


let arr = []
let numbers = +prompt("Введите число")
const choose = (numb) => {
    for (let i = 0 ; i <= numb; i++) {
            arr.push(i)
    }
    return arr
}
console.log(choose(numbers));