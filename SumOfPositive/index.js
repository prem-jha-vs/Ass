function sumPositiveNumbers(array) {
    let sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }

    return sum;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [-1, -2, 3, 4, 5];
let array3 = [-1,-2,-3];

let result = sumPositiveNumbers(array3);
if(result){
console.log("Sum of all positive numbers is: ", result);
}else{
    console.log("No positive number found");
}