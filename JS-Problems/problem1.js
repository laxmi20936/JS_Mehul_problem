// Problem: In an array , find the element that appears only once.

// Input: num = [1,2,2]   ==> output: 1
// Input: num = [1,2,4,1,2]   ==> output: 4
// Input: num = [1]   ==> output: 1

// Concept: Array. index
// const a = [1,2,3,4,1]
// console.log(a.indexOf(1))
// console.log(a.lastIndexOf(1))


function notDuplicate(data){
    // 0 === data.indexOf(1)
   for(let i=0; i < data.length; i++){
     if(data.indexOf(data[i]) == data.lastIndexOf(data[i])){
        return data[i]
     }
    
   }

}
const arr = [11,2,2,5]
const nD= notDuplicate(arr)
console.log(nD)
