//Brute force

var twoSum = function(nums, target) {    
for(let n = 0; n < nums.length; n++){
  for(let nm = n + 1; nm < nums.length; nm++){
    if(nums[n] + nums[nm] === target){
      return [n, nm]
    }
  }
}
};
