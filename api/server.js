const express =require('express');
const app=express();
const bodyParser =require('body-parser');
const PORT=4000;
const cors=require('cors');

const mongoos = require('mongoose');
const config = require('./db.js');
const businessRoute = require('./business.route');


mongoos.Promise = global.Promise;
mongoos.connect(config.DB,{useNewUrlParser: true})
    .then(
     ()=> {console.log('Database is connected')},
    err=>{console.log('Cannot connect to database' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/business',businessRoute);

app.listen(PORT,function(){
    console.log('Server is running on port: ',PORT);
});