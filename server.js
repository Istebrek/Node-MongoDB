require("dotenv").config();
const express = require ("express");
const app = express();
const mongoose = require ("mongoose");

const PORT = 3000;

const Product = require("./models/productModel"); //ett punkt visar att det finns mer i pathen före det man nämner. 
app.use(express.json());





app.get("/", (req,res) => {
    res.send("Welcome to my MongoAPI");
});

app.post ("/blogpost", (req,res) => {
    res.send("This is a post request");
});

app.put("/api/product/:id", async (req, res) => { //detta är update metoden, delete liknar den
    try {
        const {id} = req.params;
        const product = await Product.findbyIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(400).json({message:"Product does not exist"});
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500);
    }
})


app.get("/api/product/:id", async (req, res) => { //detta är read metoden för ett id. istället för :id i endpointen kan man lägga in id:et för produkten från databasen i webbaddressen. så: http://localhost:3000/api/product/678e50eaa600744a2572df91
    try {
        const {id} = req.params;
        const product = await Product.findByID(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
    }
})

app.get("/api/products", async (req, res) => { //detta är som read metoden. för att visa alla produkter. detta är read all. ska även ha en readby id från databasen.
    try {
        const products = await Product.find({}); //efter find är måsvingarna tomma vilket säger åt servern att hämta och visa allt
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});



app.post("/api/product", async (req, res) => { //som en create metod
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }

    // console.log(req.body);
    // res.send(req.body);
});











mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to Mongo");
    
    app.listen(PORT, () =>{
        console.log("Listening to " + PORT);
    });
});



















