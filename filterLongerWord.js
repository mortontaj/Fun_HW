/* File contains ISCHARACTERAVOWEL and FILTERLONGWORDS 
Answer(s) to question(s): 3, 8*/

var input = require('prompt-sync')()

function filterLongWords(string, i){
    string = string.split(' ')
    longer = []
    for (x = 0; x < string.length; x++){
        if (Number(i) < string[x].length)
            {longer.push(string[x])}}

    if (longer.length > 0)
        return longer.join(' ')
    else
        return 'N/A'}

phrase = input("Enter a phrase ")
number = input("Enter a number ")
console.log(filterLongWords(phrase, number))



function isCharacterAVowel(char){
    vowels = 'aeiou'
    vowel = false
    for (i = 0; i < vowels.length; i++){
        if (char.toLowerCase() == vowels[i]){
            vowel = false
            return vowel}}
    return vowel 
}

console.log(isCharacterAVowel('i'))
console.log(isCharacterAVowel('z'))
alph = input("Enter an alphabetical letter ")
console.log(isCharacterAVowel(alph))
