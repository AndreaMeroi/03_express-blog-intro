// import posts from Data

const posts = require('../data/postsList')

// index
const index = (req, res) => {

    res.json(posts)
}
// show
const show = (req, res) => {
    res.send('Visulaizza il post con ID:' + req.params.id)
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
    res.send('cancella il post con ID:' + req.params.id)

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}