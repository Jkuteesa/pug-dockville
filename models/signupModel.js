const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
    manager:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require:true,
    },
    password:{
        type: String,
        require: true,
    },
    

})
signupSchema.plugin(passportLocalMongoose, {usernameField:"email"});
module.exports = mongoose.model("Signup", signupSchema);