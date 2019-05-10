const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
  return res.send('hello world from server.js')
})

// get all products
app.get('/products', async (req, res) => {
  const { data } =  await axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
  res.json(data)
})

// get individual product using URL param
app.get('/products/:id', async (req, res) => {
  const id = req.params.id
  const { data } =  await axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')

  console.log(typeof data)
  const item = data.find(item => item._id === id)
  res.json(item)
})

module.exports = app