function countAandB(input) {
    return input.filter((char) => char == 'a' || char == 'b').length;
}

function toNumber(input) {
    return input.map(char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 âaâ letters and 1 âbâ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]