const express = require('express')
const app = express()
const port = 8080
const host= '0.0.0.0';

app.get('/', (req, res) => {
  res.send('hi i am new docker images.please dont get confusion !')
})

app.listen(port, () => {
  console.log(`Running on http://${host}:${port}`)
})