class Charactors {
    constructor(name, power, speedLike) {
        this.name = name;
        this.power = power;
        this.speedLike = speedLike
    }
    sing() {
        return `we are the teen titaans, LETS GOOO!`
    }

    helpPeolple() {
        return `I'm ${this.name}, I like to help People and to stop villians`
    }
}

class StarFire extends Charactors {
    constructor(name, power, speedLike, secPow, XtraPow) {
        super(name, power, speedLike)
        this.secPow = secPow;
        this.XtraPow = XtraPow
    }
    intro() {
        return `I'm ${this.name} a titan i'll acttack with ${this.power},${this.secPow},${this.XtraPow} and run like ${this.speedLike}`
    }
}

class villian extends Charactors {
    constructor(name, power, speedLike, XtraPow,) {
        super(name, power, speedLike)
        this.XtraPow = XtraPow
    }
    whoIm() {
        return `im ${this.name} the most powerful villian because i posses ${this.power},${this.XtraPow} and run faster like ${this.speedLike}`
    }
}

const player1 = new StarFire('Starfire', 'greenFire', 'leopard', 'fly', null)
const opp1 = new villian('hellBoy', 'red-fire', 'lightning', 'melt')



console.log(player1.helpPeolple())
console.log(opp1.whoIm())