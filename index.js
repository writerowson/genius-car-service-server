const express = require('express');
const cors = require('cors')
require('dotenv').config()
const port = proccess.env.PORT || 5000
const app = express()

// middlware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('running genius server')
})

// to llisten 5000 port in browser
app.listen(port, () => {
    console.log('listening to the port', port);
})