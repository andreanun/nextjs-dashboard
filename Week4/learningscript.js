//This is from the summer btw 

//Print to the console.log()
console.log('I finally did it! :D')

/*
This is an example of a 
multi-line comment
*/

//Variables

/*var is a global variable. meaning, the scope exist for the whole file
//let is not global by default, only in the scope that it was created in
const is a a constant variable meaning the value cannot be changed
*/

var x = 5
let y = 10
const z = 15

console.log(y)

//Data Tyes
//Int, Floats
//Strings
//Boolean

//Strings

let firstName = "Cam"
let message = "Ain't loving these quotation marks"

console.log(firstName + " " + message)
console.log(firstName[0])

//Boolean

let classOver = false
console.log(classOver)

//Conditional Statements

// if (classOver) {
//     let isValid = true
// }
// console.log(isValid)


if (firstName === "Cam") {  //=== makes sure the value and objects type are the same
    //do something
} else {
    //do something else
}

//Collectiosns

//Arrays []

let arr = ['red','blue','green']    //arrays in js are mutable
console.log(arr)

console.log(arr.length)

//Objects {}

//objects have key value pairs. you specifiy a property by name of the key 

let user = {name: "Cam", id: 1102101, signedIn: true}
console.log(user.signedIn)

//Loops

// for (let i = 0; i < 3 ; i++) {
//     //do something that many times
// }  
//but in javascript, we can also 
//  arr.forEach(index) => {
//      console.log(index)
//   })

//Functions

function name(params) { //variable referencing a function

}

let name = (params) => { //function as an object

}
