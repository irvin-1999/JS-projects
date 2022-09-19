const nemo = ['Nemo']
const everyOne = ['tate', 'koko', 'papa', 'mama', 'Nemo', 'tumelo', 'rori', 'kgotli', 'sesi']
//const large = new Array(150).fill('Nemo')

function findNemo(array) {

    for (let i = 0; i < array.length; i++) {
        console.log('Looking 4 Nemo')
        if (array[i] === 'Nemo') {
            console.log('found NEMO!')
            break;
        }
    }

}

findNemo(everyOne)

// const boxes = [1, 2, 3, 4, 5, 6]

// function logFirstTwo(boxes) {
//     console.log(boxes[0])
//     console.log(boxes[1])
// }
// logFirstTwo(boxes)

// function funChallenge(input) {
//     let a = 10;
//     a = 50 + 3;
//     for (let i = 0; i < input.length; i++) {
//         funChallenge();
//         let stranger = true;
//         a++;
//     }
//     return a;
// }

// console.log(funChallenge(a))