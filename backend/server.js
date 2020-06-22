const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

/* Express setup */
const PORT = process.env.PORT ||4000
const app = express() 
app.use(cors())
app.use(bodyParser.json())




/* Routes */



app.listen(PORT, console.log(`Listening on ${PORT}...`))