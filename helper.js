function convertAndValidate(nums){
    let result = [];

    for(let i = 0; i < nums.length; i++){
        let valToNumber = Number(nums[i])

        if (Number.isNaN(valToNumber)){
            return new Error(`The value '${nums[i]}' at index ${i} is not a valid number`);
        }
        result.push(valToNumber);
    }
    return result;

}