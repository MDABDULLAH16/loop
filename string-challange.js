// Name reversed / sentence reversed;

const names = "abdullah is good boy";
let nameReversed = '';
for (const char of names) {
    nameReversed = char + nameReversed;
}
// console.log(nameReversed);


// word reversed; not sentence;

const sentences = 'I love coding';
const arrayOfSentence = sentences.split(" ")
console.log(arrayOfSentence);

let sentence =[]

    for (const word of arrayOfSentence) {
        let reversedWord = '';
        for (const char of word) {
            reversedWord = char + reversedWord;
        }
        sentence.push(reversedWord)
    }


const finalSentence = sentence.join(' ')
    console.log(finalSentence);
    




