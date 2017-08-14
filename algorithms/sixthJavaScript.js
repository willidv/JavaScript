function Slots(coins) {
    var chance = Math.floor(Math.random() * (100 - 1) + 1);
    while (coins > 0) {
        if (chance < 2) {
            coins = coins + Math.floor(Math.random() * (100 - 50) + 50);
            if (coins > 3000) {
                // console.log(coins);
                console.log("Jackpot");
                break;
            }
        }
        else {
            coins = coins - 1;

        }
        if (coins < 1) {
            console.log("you lose");
            break;
        }
        console.log(coins);
    }

}
Slots(100);