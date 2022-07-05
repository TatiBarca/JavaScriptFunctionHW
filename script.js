// 1)
function multiplyFive(x) {
    return x * 5;
}
console.log(multiplyFive(7));

 // 2)
let divideByTwo = (y) => y / 2;

console.log(divideByTwo(8));

// 3)
function adds(name) {
    return `Hey its Java${name}cript!`;
}

console.log(adds('S'));


// 4)
let arr = [3, 6, 9];

function map(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callBackArr(arr[i]));
    }
    return newArr;
};

function callBackArr(x) {
    return x * 2;
}
console.log(arr);
console.log(map(arr, callBackArr));

//5.1
let money = [200, 400, 500];
let salary = money.reduce((total, money) => total + money, 0);
console.log(salary)


//5.2
let family = [
    { name: 'aaa', budget: 200 },
    { name: 'aaa', budget: 300 },
    { name: 'aaa', budget: 500 },
    { name: 'aaa', budget: 200 }
];

let salary2 = family.reduce((total, family) => total + family.budget, 0);

console.log(salary2);

