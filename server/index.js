const express = require('express');
const {PORT} = require('./config/config')
const cors = require('cors');
const db = require('./config/mongoose')
const router = require('./routes');
const { auth } = require('./midlewarse/auth');
const cookieParser = require('cookie-parser');

const app = express();


app.use(cors({credentials: true})); 
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(auth());
app.use(router);

db().then(() => {
    console.log('Connected to database!');
    app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));
})

