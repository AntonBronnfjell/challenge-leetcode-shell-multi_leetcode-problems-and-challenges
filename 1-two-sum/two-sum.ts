function twoSum(nums: number[], target: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        nums.forEach((num, n)=>{
            if (i != n && nums[i] + nums[n] == target && result.length === 0) {
                result.push(i, n);
            }
        });
    }
    return result;
};