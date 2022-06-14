const path = require('path');
const express = require('express');
const app = express();
app.set ("view engine","ejs");
app.set ("views", __dirname + "/views");

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)); 

app.listen(2020, () => console.log('Abriendo el servidor http://localhost:2020.com'));

app.get('/', (req,res) => {
     res.sendFile(path.resolve(__dirname, '/views/home.html'));
}) 
app.get('/curso', (req,res) => res.send('Bienvenido al curso de NodeJS'));

app.get('/login', (req,res)=>{
    res.sendFile(__dirname , '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname , '/views/register.html');
});

