const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get('/', (req, res) => {
    res.send('Pagina Floristeria')
})

app.post('/register', (req, res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let id = req.body.id;
    let email = req.body.email;
    let password = req.body.password;

    res.send(`Registro exitoso`);
})

app.post('/login', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    res.send(`inicio de sesion exitoso`);
})

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})