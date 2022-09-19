//given 2 arrays,create a function that lets a user know(true/false)
//whether these two arrays contains any common items

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']

// function containsItem(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(containsItem(array1, array2))

//more efficient code than nested loops O(a*b)==> to O(a+b)

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'm']

function containsItem1(arr1, arr2) {
    //loop through 1st array & create object where properties===items in the array
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    //return map
    //loop through 2nd array & check if item in 2nd array exist on created object

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}

console.log(containsItem1(array1, array2))