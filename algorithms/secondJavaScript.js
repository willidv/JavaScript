var Bday =364;
while( Bday > 0){
    if (Bday > 60){
        console.log("its "+ Bday + " days until my birthday, how sad")
    }
    if (Bday <60 && Bday > 30){
        console.log("Its " + Bday + "days until my birthday, still so far")
    }
    if (Bday<30 && Bday > 5){
        console.log( "its " + Bday + " days until my birthday, so close")
    }
    if (Bday< 5 && Bday > 1){
        console.log( "its " + Bday + " days until my birthday, so close")
    }
    if (Bday == 1){
        console.log("its " + Bday + " day until my birthday!")
    }
Bday --;
}
if (Bday == 0) {
        console.log("ITS MY BIRTHDAY!!!")

}