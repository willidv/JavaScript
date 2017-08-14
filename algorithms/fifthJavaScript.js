function Fancy(sym, arr){
    for (i = 0; i < arr.length; i ++){
        console.log(i + sym + " " + arr[i]);
    }
}
Fancy( "->", [ "James", "Jill", "Jane", "Jack" ]);