/* File contains REVERSESTRING and FINDLONGESTWORD 
Answer(s) to question(s): 6, 7*/

var input = require('prompt-sync')()
var phrase = input('Enter phrase for reversal: ')

function reverseString(string){
    reverse = ''
    for (let i = string.length - 1; i > -1; i--)
        {reverse += string[i]}
    return reverse}


console.log(phrase)
console.log(reverseString(phrase))

function findLongestWord(string){
    string = string.split(' ')
    longestWord = string[0]
    longWords = [string[0]]
    for (let i = 1; i < string.length; i++){
        if (longestWord.length < string[i].length){
            longWords = []
            longestWord = string[i]
            longWords.push(longestWord)}
        else if (longestWord.length == string[i].length){
            longWords.push(string[i])}
        else 
            {continue}}
    
    return longWords.join('').length / longWords.length}    

var x = input("Write a phrase ")
console.log(findLongestWord(x))
console.log(x.split(' '))