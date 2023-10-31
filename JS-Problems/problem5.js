// Problem: find the difference between 2 array

// findDifference([1,2,3], [2,4,6]);
// Output: [[1,3],[4,6]]

// findDifference([1,2,3,3], [1,1,2,2]);
 // Output: [[3],[]]

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.


const findDifference = (a,b)=> {
    const answer1=[]
    const answer2=[]
    for(let ele of a){
        if(!b.includes(ele)){
            if(!answer1.includes(ele)){
                answer1.push(ele)
            }
        }
        
    }

    for(let ele of b){
        if(!a.includes(ele)){
            if(!answer2.includes(ele)){
                answer2.push(ele)
            }
        }
        
    }

    return [answer1,answer2]

}
const diff = findDifference([1,2,3,3], [1,1,2,2])
console.log(diff)