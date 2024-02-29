const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
//import routes

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//users
const usersRoute = require('./routes/NewUsers');
app.use('/users', usersRoute);

//routes
app.get('/', (req,res) =>{
    res.send('home')
})

//listen the serv
app.listen(3000);


//connect to db 

mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser : true},
()=>{
    console.log('Connected to db')
})

const RegisterRoute = require('./routes/Register');
app.use('/register',RegisterRoute)