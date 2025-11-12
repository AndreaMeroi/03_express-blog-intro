const express = require('express')
const app = express()
const port = 3002

//set static folder
app.use(express.static('public'))

//activate server listener

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);

})



const posts = [
    {
        ID: 1,
        titolo: 'ciambellone',
        contenuto: 'la ricetta del ciambellone',
        img: 'imgs/ciambellone.jpeg',
        tags: ['ciambellone', "torta", "dolce", "zucchero"]

    }, {
        ID: 2,
        titolo: 'cracker_barbabietola',
        contenuto: 'la ricetta del cracker_barbabietola',
        img: 'imgs/cracker_barbabietola.jpeg',
        tags: ['cracker_barbabietola', "torta", "dolce", "zucchero"]
    }, {
        ID: 3,
        titolo: 'pane_fritto_dolce',
        contenuto: 'la ricetta del pane_fritto_dolce',
        img: 'imgs/pane_fritto_dolce.jpeg',
        tags: ['pane_fritto_dolce', "torta", "dolce", "zucchero"]
    }, {
        ID: 4,
        titolo: 'pasta_barbabietola',
        contenuto: 'la ricetta del pasta_barbabietola',
        img: 'imgs/pasta_barbabietola.jpeg',
        tags: ['pasta_barbabietola', "torta", "dolce", "zucchero"]
    }, {
        ID: 5,
        titolo: 'torta_paesana',
        contenuto: 'la ricetta del torta_paesana',
        img: 'imgs/torta_paesana.jpeg',
        tags: ['torta_paesana', "torta", "dolce", "zucchero"]
    }

]


//routes 

app.get('/', (req, res) => {
    res.send('<h1>Ciambellone</h1><img src="http://localhost:3002/imgs/ciambellone.jpeg" alt= "welcome to the panetteria">')
})


//INDEX

app.get('/api/bacheca', (req, res) => {

    res.json('Lista dei posts')
})

//SHOW

app.get('/api/bacheca/:id', (req, res) => {
    res.send('Visulaizza il post con ID:' + req.params.id)
})

//STORE

app.post('/api/bacheca', (req, res) => {
    res.send('Aggiungi nuovo post')
})
//UPDATE

app.put('/api/bacheca/:id', (req, res) => {
    res.send('modifica completamente il post con ID:' + req.params.id)
})

//MODIFY

app.patch('/api/bacheca/:id', (req, res) => {
    res.send('modifica parzialmente il post con ID:' + req.params.id)
})

//DESTROY

app.delete('/api/bacheca/:id', (req, res) => {
    res.send('cancella il post con ID:' + req.params.id)

})