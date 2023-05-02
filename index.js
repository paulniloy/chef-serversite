const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const chefdetails = require("./chef.json")
const specificres = require("./recipies.json")

app.use(cors());

app.get('/', (req, res) => {
  res.send('server World!')
})
app.get('/chef', (req, res) => {
  res.send(chefdetails)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const specific = chefdetails.find(details => details.id === id)
  res.send(specific)
})
app.get('/recipies', (req, res) => {
  res.send(specificres)
})
app.get('/recipies/:id', (req, res) => {
  const id = req.params.id;
  const found = specificres.filter(chef=>chef.category_id == id);
  res.send(found)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})