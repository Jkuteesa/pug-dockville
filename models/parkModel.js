const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        
    },
    lname:{
        type: String,
    },
    nin:{
        type:String,
        required:true,
    },
    contact:{
        type: String,
        required: true,
    },
    cartype:{
        type: String,
        required: true,
    },
    carmodel:{
        type: String,
        required: true
    },
    nplate:{
        type: String,
        required: true,
    },
    period:{
        type: String,
        required: true,
        enum: ['Day','Night','Less']
    },
    amount:{
        type: Number,
        enum: [2000, 3000, 5000, 1000]
    },
    date:{
        type: String,
        required: true,
    },
    timein:{
        type: String,
    },
    timeout:{
        type: String,
    },

})

module.exports = mongoose.model("Parking",ParkingSchema);