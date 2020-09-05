const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs')

require('./helpers/helpers');

app.set('view engine','hbs');

app.use(express.static(__dirname +'/public'));

hbs.registerPartials(__dirname+'/views/partials');

app.get('/', (req, res) => {
  res.render('index',{ nombre: 'VICtor perez mOya'});
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/users',(req, res) =>{
    res.send('Listado de usuarios');
})

app.use((req,res,next) => {
    res.status(404).send("Error 404");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})