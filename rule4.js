function printAllNumbersThenAllPairsSum(numbers) {
    console.log('These are the Numbers');
    numbers.forEach(number => {
        console.log(number)
    });

    console.log(' and These are their Sums');
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber)
        })
    })
}

printAllNumbersThenAllPairsSum([1, 2, 3, 4])