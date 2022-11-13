const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv/config')
const app = express()

const mongoDb = 'mongodb+srv://itztejas:Tmnrsc@25@cluster0.2sgueuu.mongodb.net/search?retryWrites=true&w=majority';

app.use(cors());
app.options('*', cors())
app.use(express.json());

const {Company} = require('./model/company')

app.get('/',async (req,res) =>{
    const search = req.params.key
    let data = await Company.find()
    res.send(data)
})


app.get('/search',async (req,res) =>{
    let data     
    const {search} = req.query
    if(search){
        data = await Company.find({
            "$or":[
                {companyName:{$regex:search,$options:'i'}},
                {description:{$regex:search,$options:'i'}},
                {primaryText:{$regex:search,$options:'i'}},
                {headline:{$regex:search,$options:'i'}},
            ]
        })        
    }else{
        data = await Company.find()
    }
    res.send(data)
})



// console.log('process.env.CONNECTION_STRING',process.env.CONNECTION_STRING);
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'search'
})
.then(()=>{
    console.log('Database is ready');
})
.catch((error)=>{
    console.log('error in db',error);
})



app.listen(5000,()=>{
    console.log('Server is listening on http://localhost:5000');
})