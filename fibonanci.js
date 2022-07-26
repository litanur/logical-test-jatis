// initialization
let x = 2, y = 3, n = 5
let arrAll = []
let sumOdd = 0, sumEven = 0

// push all numbers to array
for(let i = 0; i < n; i++) {
    if (i == 0) {
        arrAll.push(x)
    } else if (i == 1) {
        arrAll.push(y)
    } else {
        arrAll.push(arrAll[i-1]+arrAll[i-2])
    }
}

// get all odd numbers
let arrOdd = arrAll.filter((n) => n % 2 == 1)
arrOdd.forEach(item => {
    sumOdd += item;
});

// get all even numbers
let arrEven = arrAll.filter((n) => n % 2 == 0)
arrEven.forEach(item => {
    sumEven += item;
});

// display all input and result
console.log(`Input          : ${arrAll}`)
console.log(`Array Odd      : ${arrOdd}`)
console.log(`Sum Array Odd  : ${sumOdd}`)
console.log(`Array Even     : ${arrEven}`)
console.log(`Sum Array Even : ${sumEven}`)