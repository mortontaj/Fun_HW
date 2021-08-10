/* File contains MAXOFTWO, MAXOFTHREE, and HOWMANYARGUMENTS 
Answer(s) to question(s): 1, 2, 5*/

var input = require('prompt-sync')()
maxOfTwoNumbers = (x,y) => {return Math.max(x, y)}
maxOfThreeNumbers = (x, y, z) => {return(Math.max(x, y, z))}

var no1 = input("first number? ")
var no2 = input("Second number? ")
var no3 = input("third number? ")

console.log(maxOfTwoNumbers(no1, no2))
console.log(maxOfThreeNumbers(no1, no2, no3))

howManyArguments = (list) => {return list.length}
var compile = []
var continuous = 'Go!'
while (continuous == 'Go!'){
    var something = input("Type something: ")
    if (something == '')
        {continuous = 'Stop!'}
    else
        {compile.push(something)}}

howManyArguments = (list) => {return list.length}
console.log(howManyArguments(compile))
