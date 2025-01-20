const express = require ("express");
const app = express();
const mongoose = require ("mongoose");

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Welcome to my MongoAPI");
});

app.post ("/blogpost", (req,res) => {
    res.send("This is a post request");
});

mongoose.connect("mongodb+srv://Istebrek:123456admin@istesapi.yoxj0.mongodb.net/Products-API?retryWrites=true&w=majority&appName=IstesAPI")
.then(() => {
    console.log("Connected to Mongo");
    
    app.listen(PORT, () =>{
        console.log("Listening to " + PORT);
    });
});



















