function mean(nums){
    if (nums.length === 0){
        return 0;
    }
  let total = 0;
  for (let i = 0; i < nums.length; i++){
    total += nums[i];
  }  
  let avg = total / nums.length;
  return avg;
};

function mode(nums){
    let object = {};
    for (let i = 0; i < nums.length; i++){
        if(object[nums[i]]){
            object[nums[i]] += 1;
        } else {
            object[nums[i]] = 1;
        }
    }

    let greatestFreq = 0;
    let mode;
    for(let prop in object){
        if (object[prop] > greatestFreq){
            greatestFreq = object[prop];
            mode = prop;
        }
    }
    return parseInt(mode);
};

function median(nums) {
    nums.sort((a,b) => (a - b));

    let middle = Math.floor(nums.length / 2);
    let median;

    if (nums.lenth % 2 === 0){
        median = (nums[middle] + nums[middle - 1]) / 2;
    } else {
        median = nums[middle]
    }
    return median

};

module.exports = {
    mean,
    median,
    mode,
}