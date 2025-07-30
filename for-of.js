const numbers = [23, 432, 123, 5, 34, 245, 2, 31, 3, 532]

for (const number of numbers) {
    // console.log(number);
    
}

// log the word 
const names = 'amar sunar bangla re'
const words = names.split(' ')
// console.log(words);

for (const char of words) {
    // console.log(nam);    
    // console.log(char);
}

//count vowel

const text = 'Programming is fun for coding';

const vowel = 'aeiouAEIOU';
let count = 0;
for (const char of text) {
    if (vowel.includes(char)) {
      count++
  }

}
// console.log('vowel:',count);

const abdullah = 'Abdullah';
let reversed = '';
for (const char of abdullah) {
    // console.log(char);
    reversed = char + reversed
    console.log(reversed);    
    
}
console.log(reversed);
