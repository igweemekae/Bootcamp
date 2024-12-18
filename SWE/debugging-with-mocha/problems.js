function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddIndicesArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddIndicesArr.push(i);
        }
    }
    return oddIndicesArr;
}


function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddIndicesArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddIndicesArr.push(i);
        }
    }
    return oddIndicesArr.reverse();
}


function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newNumbers = [];
    
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] ** 2;
        newNumbers.push(arr[i]);
    }
    return newNumbers;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newNumbers = [];
    
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] ** n;
        newNumbers.push(arr[i]);
    }
    return newNumbers;
}


function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let oddIndicesArr = [];
    const chunk1 = arr.slice(0, arr.length / 2);
    for (let i = 0; i < chunk1.length; i++) {
        
        oddIndicesArr.push(i);
    }
    return oddIndicesArr;
}


function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let oddIndicesArr = [];
    const chunk2 = arr.slice(arr.length / 2, arr.length);
    for (let i = arr.length / 2; i < chunk2.length; i++) {
        oddIndicesArr.push(i);
    }
    return oddIndicesArr;
}


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}