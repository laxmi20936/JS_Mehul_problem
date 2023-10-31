// Problem: Running Sum of 1D Array
// Input: nums = [1, 2, 3, 4] 
// Output: [1, 3, 6, 10] 
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const sumArray = (arr) => {
    let sum =0;
    result=[]
    for(let i =0; i < arr.length; i++){
        sum = sum + arr[i]
        result.push(sum)
    }
    return result

}

const sum = sumArray([1,2,3,4,-2])
console.log(sum);
