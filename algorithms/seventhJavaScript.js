function numbersOnly(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
numbersOnly([3, 6, "y", 8, "z", true, 10]);
