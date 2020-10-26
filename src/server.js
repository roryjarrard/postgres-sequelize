const express = require('express')
const cors = require('cors')

// set up server instance
const app = express()
app.use(express.json())
app.use(cors())

// create default route
app.get('*', (req, res) => {
  res.status(404).send({message: 'unknown route'})
})

module.exports = app
