const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const chefdetails = require("./chef.json")

app.use(cors());

app.get('/', (req, res) => {
  res.send('server World!')
})
app.get('/chef', (req, res) => {
  res.send(chefdetails)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})