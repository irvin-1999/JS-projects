// class newArray {
//     constructor() {
//         this.length = 0;
//         this.data = {}
//     }
//     get(index) {
//         return this.data[index]
//     }
//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length
//     }

//     pop() {
//         const lastItem = this.data[this.length - 1]
//         delete this.data[this.length - 1]
//         return lastItem
//     }
// }

// const err = new newArray()
// err.push('Boitumelo')
// err.push('Iven')
// err.push('Moshitwa')
// err.pop()
// console.log(err)

//reverse a string
const a = 'My Name Is Boitumelo'
function reverseString(str) {
    //validation
    if (!str || typeof str !== "string") {
        return 'Ohh Boy... Put a sentance'
    }
    const finalStr = [];
    const inputData = str.length - 1;
    for (let i = inputData; i >= 0; i--) {
        finalStr.push(str[i]);
    }
    return finalStr.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('')
}

console.log(reverse2(a))