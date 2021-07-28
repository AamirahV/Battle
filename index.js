const express = require('express')
const app = express()
const port = 3000
const Points = require("./src/points.js")
const points = new Points()
let Player1, Player2, p1P, p2P


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/name', (req, res) => {
    Player1 = req.body.player1
    Player2 = req.body.player2
    res.render('name.ejs', {
        player1: Player1,
        player2: Player2,
    })  
}) 

app.get('/name', (req, res) => {
    res.render('name.ejs', {
        player1: Player1,
        player2: Player2,
    })  
})

app.post('/battle', (req, res) => {
    res.render('battle.ejs', {
        player1: Player1,
        player2: Player2,
        points1: points.getScore(),
        points2: points.getScore()
    })  
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})