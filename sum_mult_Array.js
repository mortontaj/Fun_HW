/* File contains SUMARRAY and MUlTIPLYARRAY 
Answer(s) to question(s): 4*/


var input = require('prompt-sync')()

function sumArray(list){ 
    add = 0
    for (i = list.length - 1; i >= 0; i--)
        {add += Number(list[i])}
    return add}    


function multiplyArray(list){
    mult = 1
    for (i = 0; i < list.length; i++)
        {mult *= Number(list[i])}
    return mult}


var array = []
var num = 1
while (num != 0)
    {var num = Number(input('What number to append? '))
    {array.push(num)}
    if (num == 0)
        array.pop()}

console.log(array)
console.log(multiplyArray(array) + " is the product of " + array + "!" )
console.log(sumArray(array) + " is the sum of " + array + "!")
