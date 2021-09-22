//imports
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')

//view engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'))

//body parser = use in forms
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// database
connection.authenticate().then(() =>{
    console.log('connected with db')
}).catch((error) => {
    console.log(error)
})

app.use('/', categoriesController)
app.use('/', articlesController)

//main route
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('server running!')
})