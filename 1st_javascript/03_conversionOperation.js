let score = "33"  //string

console.log(typeof score)  //string

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber) // Number
console.log(scoreInNumber) // 33

// "33" => 33
// "33abc" => type->number, value->NaN(not in number)
//true => 1; false=>0

let isloggedIN = "Sudhanshu"
let booleanisloggedIN = Boolean(isloggedIN)
console.log(typeof booleanisloggedIN) //boolean
console.log(booleanisloggedIN)//true

// 1=>true , 0=>false
// "" => false
// "Sudhanshu" => true

let someNumber = false;

let strinSomenumber = String(someNumber)
console.log(typeof strinSomenumber) //String
console.log(strinSomenumber) // "220"
