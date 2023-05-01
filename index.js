const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('server World!')
})
app.get('/helllo', (req, res) => {
  res.send('server dear hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})