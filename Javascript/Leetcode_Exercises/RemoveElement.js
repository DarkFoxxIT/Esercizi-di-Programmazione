/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    for(let v = 0;  v < nums.length; v++){ 
        
        if(nums[v] === val){
            nums.splice(v,1);
            v--;
        }
  
    }
    return nums.length;
};

//Input
//nums = [3,2,2,3]
//val = 3

//Output
// [2,2]
