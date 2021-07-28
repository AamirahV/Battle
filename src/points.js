class Points {
    constructor() {
        this.points = 100
    }

    getScore() {
        return this.points
    }

    updateScore(value){
        this.points -= value;
        return this.points;
    }
}

module.exports = Points;

