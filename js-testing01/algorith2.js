const arr1 = [2, 5, 6, 1, 3];

//recursive function real use
// [2,5,1,6,3]
// [2,1,5,6,3]
// [1,2,5,6,3]
// [1,2,5,3,6] ..

let i = 0;
let j = 1;

const isSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true;
}
let output = []
const sortArray = array => {
    if (isSort(array)) {
        output = array
       // console.log(array);
        return array
    } else if (array[i] < array[j]) {
        i++;
        j++;
        sortArray(array)
    } else {
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j = 1;
        sortArray(array)
    }
    return output
}
console.log(sortArray(arr1));

//console.log(output);