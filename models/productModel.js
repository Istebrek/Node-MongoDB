const mongoose = require ("mongoose");
const { type } = require("os");
const { stringify } = require("querystring");
const productSchema = mongoose.Schema( //schema är en blueprint på hur något ska se ut, tex att alla ska ha en bild produkt osv.
    {
        name: {
            type: String,
            required: true
        }, 
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }        
    }
) 

const Product = mongoose.model("Product", productSchema);

module.exports = Product;