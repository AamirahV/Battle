class Points {
    constructor() {
        this.points = 100
        this.score = 100
    }


    getScore() {
        return this.score
        
    }
    getPoints() {
        return this.points
    }

    updateScore(){
        if (this.score >= 10) {
        this.attackScore();
        return this.score + ' Player 2 has been hit;'
        }
        return 'Winner'
    }
    updatePoints(){
        if (this.points >= 10) {
        this.attackPoints();
        return this.points + ' Player 1 has been hit;'; 
        }
        return 'LOSER'
    }

    attackScore() {
        this.score -= 10; 
    }

    attackPoints() {
            this.points -= 10;
    }
}

module.exports = Points;

let points = new Points()
console.log(points.getScore()) //p1 //100
console.log(points.updateScore())  //p2 90
console.log(points.updateScore())  //p1 90 but its 80
console.log(points.getScore())  //p2 90 but its 80
console.log(points.getScore())