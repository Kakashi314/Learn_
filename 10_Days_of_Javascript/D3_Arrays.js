/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=>{return a-b})
    let nums1=[]
    for(let i=0;i<nums.length;i++){
        if(nums[nums.length-1]>nums[i]){
            nums1.push(nums[i]);
        }
    }
    nums1.sort((a,b)=>{return a-b});
    return nums1[nums1.length-1]
}