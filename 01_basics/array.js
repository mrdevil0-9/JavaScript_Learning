//Array
const myArr = [0,1,2,3,4,5]
const myHeors = ["laal","singh"]

const myArr2 = new Array(5,6,7,8,9,10)
console.log(myArr[1]);

//Array methods 

// myArr.push(7)
// myArr.push(6)

// myArr.unshift(9)
// myArr.shift()

// const newArr= myArr.join()
// console.log(newArr);
//  console.log(myArr);

//slice , splice

const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("b",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2);
console.log("d",myArr);