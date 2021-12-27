/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let newary=[]
    Array.from(nums).forEach((a)=>{
        a%2==0?newary.push(a*2):newary.push(a*3)
    })
    return newary
}