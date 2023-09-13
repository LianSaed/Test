const nums = [6, 11, 15, 3];
const target = 9;

const arr = [];

nums.map((value, index, array) => {
    let complementary = target - value;
    if (array.indexOf(complementary) >= 0) {
        arr.push(index);
    }
})

/*Assuming that each input would have exactly one solution, the task ends here.
  There is no need to check and eliminate other possible solutions */

console.log(arr)