const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defObj) {
        const keys = Object.keys(defObj);
        let chancesToWin = 0;
        keys.forEach(key => {
            if (this[key] > defObj[key]) chancesToWin++;
        });
        return [chancesToWin, keys.length];
    },
    improveArmy() {
        const keys = Object.keys(this) ;
        keys.forEach(key => {
            if (typeof this[key] !== 'function') this[key] += 5;
        });
    },
    attack(defObj) {
        const [ourArmyChances, maximumChances] = this.checkChancesToWin(defObj);
        const chanceSuccessfulAttack = ourArmyChances / maximumChances * 100;
        if (chanceSuccessfulAttack < 70) {
            console.log(`Наши шансы равны ${chanceSuccessfulAttack}%. Необходимо укрепление!`)
            this.improveArmy();
            this.attack(defObj)
        } else {
            console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
        }

    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender);
