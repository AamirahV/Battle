const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/name', (req, res) => {
    res.render('name.ejs', {
        player1: req.body.player1,
        player2: req.body.player2
    })  
}) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})