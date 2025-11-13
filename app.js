const express = require('express')
const app = express()
const port = 3002
const postsRouter = require('./routes/posts')

//set static folder
app.use(express.static('public'))

//activate server listener

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);

})

// Routes Group 

app.use('/api/posts', postsRouter)

