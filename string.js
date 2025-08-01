const country = "bangladesh";
const cut = country.slice(3, 8);
console.log(cut);

const sentences = "i am the poor boy";
console.log(sentences.split(" "));

const first = "md";
const last = "abdullah";

console.log(first.concat(" ").concat(last));

const friends = ["rohim", "karim", "salam", "kalam"];
console.log(friends.join(""));
console.log(friends.join(","));
console.log(friends.join("-"));

const checkIncludes = "Bangladesh";

console.log(checkIncludes.includes("d"));
