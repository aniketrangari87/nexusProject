const mongoose = require('mongoose')


// config 
require("dotenv").config();

const dbConnnect = () =>{

    mongoose.connect("mongodb://127.0.0.1:27017/nexusUser",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Database Connection Established Successfully "))
    .catch((err)=>{
        console.error(err);
        console.log("Issue in Connection With database");

        process.exit(1);
    })
}

module.exports = dbConnnect


