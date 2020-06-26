/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    for(let v = 0;  v < nums.length; v++){  //Loop array 
        
        if(nums[v] === val){  // v is equal val ? 
            nums.splice(v,1);  //remove value inside arr at specif index
            v--;         // jump back index
        } 
  
    }
    return nums.length; // How much is long?
};

//Input
//nums = [3,2,2,3]
//val = 3

//Output
// [2,2]
