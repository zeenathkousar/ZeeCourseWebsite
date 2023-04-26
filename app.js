require('dotenv').config();
const express = require('express');
const path=require('path');

const Join=require('./models/join');
const Review=require('./models/review')


const app = express();
const PORT=process.env.PORT || 3000;

const mongoose = require('mongoose');

// const { StringDecoder } = require('string_decoder');
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/ZeeCourse');
//    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

mongoose.set('strictQuery',false);
const connectDB = async () =>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch(error){
        console.log(error);
        process.exit(1);
    }
}




app.use('/static',express.static('static'));
app.use(express.urlencoded())
// app.use(bodyparser.urlencoded({
//     extended: true
// }));
// app.use(bodyparser.json());

  


app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res) => {
    const params={}
    res.status(200).render('home.pug',params)
});

app.get('/about', (req, res) => {
    const params={}
    res.status(200).render('about.pug',params)
});

app.get('/courseslist', (req, res) => {
    const params={}
    res.status(200).render('courseslist.pug',params)
});



app.get('/joincourse', (req, res) => {
    const params={}
    res.status(200).render('joincourse.pug',params)
});

app.post('/joincourse', (req, res) => {
    var myData= new Join(req.body);
    myData.save().then(()=>{
        res.status(200).send("Item was saved to database")
    }).catch(()=>{
        res.status(404).send("Item was not saved to the database");
    })
});

app.get('/review', (req, res) => {
    const params={}
    res.status(200).render('review.pug',params)
});

app.post('/review', (req, res) => {
    var myReview= new Review(req.body);
    myReview.save().then(()=>{
        res.status(200).send("review got saved to the database")
    }).catch(()=>{
        res.status(404).send("review was not saved to the database");
    })
});



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    })
    
});