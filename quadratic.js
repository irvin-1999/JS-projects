const boxes = [1, 2, 3, 4, 5]

function logAllPairsOfArray(item) {
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item.length; j++) {
            console.log(item[i], item[j])
        }
    }
}

logAllPairsOfArray(boxes)