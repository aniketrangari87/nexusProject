const express = require("express")
const bcrypt  = require("bcrypt")
const collection  = require("./config")
const mongoose = require("mongoose")



const app = express()
//convert data into json form 
app.use(express.json())

app.use(express.urlencoded({extended : false}))

// static file 


// register user 
app.post("/signup" ,async (req, res )=>{

   
    const data = {
        name : req.body.username ,
        password : req.body.password
    }

     // user validation
     const existUser = await collection.findOne({ name : data.name})

     if(existUser){
        res.send("User already exist Please  choose different username ")
     }else{
        // hash the password using bcrypt
        const setRound  = 10 ;
        const hashedPassword = await bcrypt.hash(data.password , setRound)

        data.password = hashedPassword;
        const userData = await collection.insertMany(data);
        console.log(userData);
     }

    return;

})
// loginuser 
app.post("/login" ,async(req,res)=>{
    

        const checkUser = await collection.findOne({name : req.body.username});
        if(!checkUser){
            res.send("user cannot found  ")
            return;
        }
     

        // compare password with hashed password 
        const isPasswordMatch = await bcrypt.compare(req.body.password , checkUser.password)
        if(isPasswordMatch){
            res.render("home")
        }else{
            res.send("Wrong password credentials ")
        }
return;
    
})





const port = 5000 ; 

app.listen(port , ()=>{
    console.log(`Server i started at ${port}`)
})