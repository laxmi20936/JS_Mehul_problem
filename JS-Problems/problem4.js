// Problem:1
// const arr1 = [2,3]
// const arr2 = [1,4]
// console.log(10)      1+2+3+4

// Problem2:
// input:[1,2,44]
// output: "[1,2,44]"          ==> convert array into String with brackets
// if we use join() and toString() method we with not get brackets


// Problem1:
const addArray=(...args) => {
   const arr = args.flat()
   const sum = arr.reduce((acc,element)=>{
        const data = acc + element
        return data
   },0)

   return sum

}
const a=[1,2,3]
const b=[1,2,8]
const c=[1,2,10]

const addAllArray = addArray(a,b,c)
console.log(addAllArray)


// Problem2:
const abc = {
    a:"peter"
}

const abcd = [1,2,3,4]
console.log(typeof JSON.stringify(abcd))