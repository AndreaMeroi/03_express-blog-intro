const express = require('express')
const router = express.Router()



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


/* CRUD OPERATIONS ON ENTITY POSTS
- sostituisco app.get con router.get
-elimino la parte di URI /API/POSTS,perchè andrà utilizzata solo nel file server.js, altrimenti verrà identificata come una ripetizione)
*/

router.get('/', (req, res) => {
    res.send('<h1>Ciambellone</h1><img src="http://localhost:3002/imgs/ciambellone.jpeg" alt= "welcome to the panetteria">')
})

// Routes Group 

//INDEX

router.get('/', (req, res) => {

    res.json(posts)
})

//SHOW

router.get('/:id', (req, res) => {
    res.send('Visulaizza il post con ID:' + req.params.id)
})

//STORE

router.post('/', (req, res) => {
    res.send('Aggiungi nuovo post')
})
//UPDATE

router.put('/:id', (req, res) => {
    res.send('modifica completamente il post con ID:' + req.params.id)
})

//MODIFY

router.patch('/:id', (req, res) => {
    res.send('modifica parzialmente il post con ID:' + req.params.id)
})

//DESTROY

router.delete('/:id', (req, res) => {
    res.send('cancella il post con ID:' + req.params.id)

})



module.exports = router