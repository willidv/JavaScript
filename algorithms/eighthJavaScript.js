function Names(sym, arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(i + sym + " " + arr[i].first_name + " " + arr[i].last_name);
    }
}
Names("->", [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
]);