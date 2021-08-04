var input = require('prompt-sync')()
var many = input('Of numbers within range 0 and 100, how many numbers in the array? ')

array = [];
for (i = 0; i < many; i++)
{
    array.push(Math.floor(Math.random(0, 1)*100))
} 

var num = input('What number do you want to find? ')

found = false;
counter = 0
for (let i = 0; i < array.length; i++) {
    if (num == array[i]) {
        counter++
        if (counter == 1)
            console.log(num + ' is found in postions: ')
        process.stdout.write((i + 1) + ', ');
        found = true;
  }
}
if (!found)
    {
    console.log('Number not found');
    }
else
    {
        console.log('and the number' + num + ' was found ' + counter + ' times!')
    }
