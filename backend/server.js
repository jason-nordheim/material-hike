const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

/* Express setup */
const PORT = process.env.PORT ||4000
const app = express() 
app.use(cors())
app.use(bodyParser.json())


app.get('/users', (request, response) => {
    response.json({
        "message": "you created a user"
    })
})


/* Routes */



app.listen(PORT, console.log(`Listening on ${PORT}...`))