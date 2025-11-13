const express = require('express')
const router = express.Router()

const postsController = require('../controllers/postsController')



/* CRUD OPERATIONS ON ENTITY POSTS
- sostituisco app.get con router.get
-elimino la parte di URI /API/POSTS,perchè andrà utilizzata solo nel file server.js, altrimenti verrà identificata come una ripetizione)
*/


// Routes Group 

//INDEX

router.get('/', postsController.index)

//SHOW

router.get('/:id', postsController.show)

//STORE

router.post('/', postsController.store)
//UPDATE

router.put('/:id', postsController.update)

//MODIFY

router.patch('/:id', postsController.modify)

//DESTROY

router.delete('/:id', postsController.destroy)



module.exports = router