function find_max(nums){
    let max_nums = Number.NEGATIVE_INFINITY;
    for (let num of nums){
        if (num > max_nums){
            max_nums = num;
        }
    }
    return max_nums;
}

let result = find_max([3,5,7,2,5]);
console.log(result);

