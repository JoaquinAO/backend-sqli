const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Settings
app.use(express.json())
app.use(cors())
app.set('port', 5000)

// Routes
app.use(require('./routes/index'))
app.use(require('./routes/user'))


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})