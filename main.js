function duplicates(nums) {
    const copia = [];
    const repetidos = [];
    let cant_repetidos = 0;
    nums.forEach(num => {
        if (copia.includes(num) && !repetidos.includes(num)) {
            ++cant_repetidos;
            repetidos.push(num)
        } else {
            copia.push(num);
        }
    });

    return cant_repetidos;
}

const nums = [1, 2, 2, 3, 4, 4, 4, 5];
const nums2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 0, 0]
const nums3 = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 0]
console.log(duplicates(nums));  // 2
console.log(duplicates(nums2)); // 10
console.log(duplicates(nums3)); // 5
