const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        
    },
    lname:{
        type: String,
    },
    gender:{
        type:String,
        required:true,
    },
    nin:{
        type:String,
        required:true,
    },
    contact:{
        type: String,
        required: true,
    },
    battery:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true,
    },
    
    amount:{
        type: Number,
        enum: [2000, 3000, 5000, 1000]
    },
    time:{
        type:"String",
        require:true,
    },

})

module.exports = mongoose.model("Client",ClientSchema);