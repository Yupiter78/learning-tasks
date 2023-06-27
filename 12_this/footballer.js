const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() {
        console.log(`${this.fullName} now with the ball and starts the attack!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} scored! Wow!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} going to be replaced. Out on the field ${newPlayer}`);
    }
}

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack()
score.call(footballer, 'Yessss!');
substitute.apply(footballer, ['Paulo Dibala'])