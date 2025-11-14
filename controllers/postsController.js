// import posts from Data

const posts = require('../data/postsList')

// index
const index = (req, res) => {

    // res.send ('show a filtered list of pizzas')
    console.log(req.query.tag);

    // variabile filtered_posts che se non ci sono filtri attivi è uguale a posts stesso (uso let perchè dovrà poter essere modificata)
    let filtered_posts = posts

    if (req.query.tag) {
        filtered_posts = posts.filter(post => post.tags.includes(req.query.tag))
    }

    console.log(filtered_posts);

    res.json(filtered_posts)

}
// show
const show = (req, res) => {
    const { id } = req.params

    console.log(id);

    const post = posts.find(item => item.ID === parseInt(id))
    console.log(post);

    if (!post) {

        //concateno status(404) per modificare il codice i postman che altrimenti continuerebbe a proporre 200 OK

        res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    res.json(post)
}

// store
const store = (req, res) => {
    res.send('Aggiungi nuovo post')
}

// Update
const update = (req, res) => {
    res.send('modifica completamente il post con ID:' + req.params.id)
}

// modfy
const modify = (req, res) => {
    res.send('modifica parzialmente il post con ID:' + req.params.id)
}

//destroy
const destroy = (req, res) => {
    const { id } = req.params

    console.log(id);

    const post = posts.find(item => item.ID === parseInt(id))
    console.log(post);

    if (!post) {

        //concateno status(404) per modificare il codice i postman che altrimenti continuerebbe a proporre 200 OK

        res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    /* utilizzo splice per RIMUOVERE la pizza selezionata (splice ha bisogno di 2 elementi: (INDEX selezionata dall'INDEX OF e
   la QUANTITà INDICATA dopo la virgola CON 1 perchè deve eliminare SOLO 1 elemento)*/

    posts.splice(posts.indexOf(post), 1)
    console.log(posts);
    //se dovessi ripetere la richiesta di eliminare una pizza che già è stata eliminata sendStatus204 chiude la richesta
    res.sendStatus(204)

}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}