const express = require("express");
require('dotenv').config(); //for loading the environment
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const passport = require('passport')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts',require('./routes/api/posts'));

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI,
    {useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false},(err)=>{
        if(err){
            return    console.log(`Unable to connect to the database!!! with the error ${err}`)
        }
        return console.log(`Successfully connected to the database!!`)

    })

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
  });

app.listen(PORT, () => {
console.log(`Server up and running on port ${PORT}`);
});