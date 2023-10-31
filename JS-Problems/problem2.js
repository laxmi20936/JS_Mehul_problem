// Problem: find the missing number

const arr =[3,0,1]

const missingNumber = (arr) => {
    const sortArr = arr.sort((a,b)=> a-b)
    for(let i =0 ;i< sortArr.length; i++ ){
        if(!sortArr.includes(arr[i]+1)){
            return sortArr[i]+1
        } 
    }


}

const missingNum= missingNumber(arr)
console.log(missingNum)