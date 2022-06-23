function binary_search(arr, num) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.ceil((l + r) / 2);
        if (arr[mid] == num) {
            return mid;
        }
        if (arr[mid] < num) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    } return -1;
}
let Arr = [1, 5, 7, 10, 15, 20, 21, 25, 27, 30]
console.log(binary_search(Arr, 15));