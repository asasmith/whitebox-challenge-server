const app = require('./app')
const port = process.env.PORT || 1111;

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})