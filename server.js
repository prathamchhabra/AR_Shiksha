const express = require('express')
const path = require('path')

const app = express()


app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(3456, () => {
    console.log("Server started on http://localhost:3456")
  })