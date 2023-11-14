function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        sum += arr[i];
    }
    return sum;
}

function getLength (arr){
     return arr.length;

}

function getMean(arr){
    return getSum(arr)/getLength(arr);


}

function getMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
    
     if(arr[i] < min){
        min = arr[i];
        
     }

    }
    return min;
}

function getMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

function getRange(arr){
    return getMax(arr)-getMin(arr);
}

function getEvens(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}

function getOdds(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            result.push(arr[i]);
        }
    }
    return result;
}






//console.log("Hello World")

const numbers = [1, 3, 5, 8];

//console.log(`You have given ${getLength(numbers)} numbers.`);
//console.log(`The sum of your numbers is ${getSum(numbers)}.`);
//console.log(`The mean of your numbers is ${getMean(numbers)}.`);
//console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
//console.log(`The largest of your numbers is ${getMax(numbers)}.`);
//console.log(`The range of your numbers is ${getRange(numbers)}.`);
//console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);