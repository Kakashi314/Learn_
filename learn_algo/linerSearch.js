let Arr = [1, 4, 2, 50, 40, 60, 10, 8, 7];
function linear_search(arr, finding_) {
    let l = arr.length;
    for (let i = 0; i <= l - 1; i++) {
        if (arr[i] == finding_) {
           return i;
        } 
    }return -1;
}
console.log(linear_search(Arr, 11));