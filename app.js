const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  return res.send('hello world from server.js')
})

// api call to get products
const getData = () => axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')

// get all products
app.get('/products', async (req, res) => {
  try {
    const { data } = await getData()
    res.json(data)
  } catch (err) {
    console.error(err.response.status)
  }
})

// get individual product using URL param
app.get('/products/:id', async (req, res) => {
  const id = req.params.id
  try {
    const { data } = await getData()
    const item = data.find(item => item._id === id)
    res.json(item)
  } catch (err) {
    console.error(err.response.status)
  }
})

module.exports = app