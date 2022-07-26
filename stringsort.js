// initialization
let input = "testing"
let unique = [...new Set(input)].sort()

// display input and result
console.log(`Input : ${input}`)
for(let i = 0; i < unique.length; i++) {
    console.log(`Letter ${unique[i]} : ${charCount(input, unique[i])}`)
}

// get count for every letter
function charCount(input, letter) {
    let count = 0;
    for (let position = 0; position < input.length; position++) {
        if (input.charAt(position) == letter) {
            count += 1;
        }
    }
    return count;
}   
