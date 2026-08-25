function missingMultiple(nums: number[], k: number): number {
    const filteredValues: number[] = [];
    nums.forEach((num: number) => {
        if (num % k == 0) {
            filteredValues.push(num);
        }
    });

    //filteredValues.sort((a, b) => a - b);

    let i = 1;
    let value = k;
    do {
        value = k * i;
        i++
    } while (filteredValues.includes(value));

    return value;
};
    