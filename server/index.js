const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive')
const cors = require('cors')
require('dotenv').config()



const app = express()
app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

app.get('/api/houses', controller.readHouses)
app.post('/api/houses', controller.createHouse)
app.delete('/api/houses/:id', controller.deleteHouse )

app.listen(3001, ()=> {console.log('Server is running on port 3001')})