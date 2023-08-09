const mongoose = require("mongoose");

const TiresSchema = new mongoose.Schema({
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
    contact:{
        type: String,
        required: true,
    },
    carmodel:{
        type: String,
        required: true
    },
    tiremake:{
        type: String,
        required: true,
    },
    tiresize:{
        type: String,
        required: true,
        
    },
    amount:{
        type: Number,
        enum: [20000, 10000, 15000]
    },
    carTireServices:{
        type: String,
        required: true,
    },
    amountt:{
        type: Number,
        enum:[500, 5000,5000]
    },
    

})

module.exports = mongoose.model("Tires",TiresSchema);